'use strict'

var gl;

var appInput = new Input();
var time = new Time();
var camera = new OrbitCamera(appInput);
var lookingAt = 0;

var planets = {
    sun: null,
    mercury: null,
    venus: null,
    earth: null,
    earthClouds: null,
    moon: null,
    mars: null,
    jupiter: null,
    saturn: null,
    neptune: null,
    uranus: null
}

var skybox = {
    negx: null,
    negy: null,
    negz: null,
    posx: null,
    posy: null,
    posz: null,
}

var positions = {
    sun: new Vector4(0, 0, 0, 1),
    mercury: new Vector4(6, 0, 0, 1),
    venus: new Vector4(9, 0, 0, 1),
    earth: new Vector4(12, 0, 0, 1),
    earthClouds: new Vector4(12, 0, 0, 1),
    moon: new Vector4(1, 0, 0, 1),
    mars: new Vector4(15, 0, 0, 1),
    jupiter: new Vector4(18, 0, 0, 1),
    saturn: new Vector4(21, 0, 0, 1),
    neptune: new Vector4(24, 0, 0, 1),
    uranus: new Vector4(27, 0, 0, 1)
}

var projectionMatrix = new Matrix4();
var lightPosition = new Vector3(0, 0, 0);

var geometryList = [];

// the shader that will be used by each piece of geometry (they could each use their own shader but in this case it will be the same)
var phongShaderProgram;
var unlitShaderProgram;
var skyboxShaderProgram;

// auto start the app when the html page is ready
window.onload = window['initializeAndStartRendering'];

// we need to asynchronously fetch files from the "server" (your local hard drive)
var loadedAssets = {
    phongTextVS: null, phongTextFS: null, 
    unlitTextFS: null, unlitTextVS: null, 
    skyboxTextFS: null, skyboxTextVS: null,
    sphereJSON: null
};

var textures = {
    sun: null,
    mercury: null,
    venus: null,
    earth: null,
    earthClouds: null,
    moon: null,
    mars: null,
    jupiter: null,
    saturn: null,
    neptune: null,
    uranus: null,
    skyboxnx: null,
    skyboxny: null,
    skyboxnz: null,
    skyboxpx: null,
    skyboxpy: null,
    skyboxpz: null,
}

// -------------------------------------------------------------------------
function initializeAndStartRendering() {
    initGL();
    loadAssets(function() {
        createShaders(loadedAssets);
        createScene();

        updateAndRender();
    });
}

// -------------------------------------------------------------------------
function initGL(canvas) {
    var canvas = document.getElementById("webgl-canvas");

    try {
        gl = canvas.getContext("webgl");
        gl.canvasWidth = canvas.width;
        gl.canvasHeight = canvas.height;

        gl.enable(gl.DEPTH_TEST);
    } catch (e) {}

    if (!gl) {
        alert("Could not initialise WebGL, sorry :-(");
    }
}

// -------------------------------------------------------------------------
function loadAssets(onLoadedCB) {
    var filePromises = [
        fetch('./shaders/phong.vs.glsl').then((response) => { return response.text(); }),
        fetch('./shaders/phong.pointlit.fs.glsl').then((response) => { return response.text(); }),
        fetch('./shaders/unlit.vs.glsl').then((response) => { return response.text(); }),
        fetch('./shaders/unlit.fs.glsl').then((response) => { return response.text(); }),
        fetch('./data/sphere.json').then((response) => { return response.json(); }),
        loadImage('./data/textures/sun.jpg'),
        loadImage('./data/textures/mercury.jpg'),
        loadImage('./data/textures/venusAt.jpg'),
        loadImage('./data/textures/earth.jpg'),
        loadImage('./data/textures/moon.png'),
        loadImage('./data/textures/mars.jpg'),
        loadImage('./data/textures/jupiter.jpg'),
        loadImage('./data/textures/saturn.jpg'),
        loadImage('./data/textures/uranus.jpg'),
        loadImage('./data/textures/neptune.jpg'),
        loadImage('./data/textures/skybox/negx.png'),
        loadImage('./data/textures/skybox/negy.png'),
        loadImage('./data/textures/skybox/negz.png'),
        loadImage('./data/textures/skybox/posx.png'),
        loadImage('./data/textures/skybox/posy.png'),
        loadImage('./data/textures/skybox/posz.png'),
        loadImage('./data/textures/earth/clouds.jpg'),
        fetch('./shaders/skybox.vs.glsl').then((response) => { return response.text(); }),
        fetch('./shaders/skybox.fs.glsl').then((response) => { return response.text(); }),
    ];

    Promise.all(filePromises).then(function(values) {
        // Assign loaded data to our named variables
        loadedAssets.phongTextVS = values[0];
        loadedAssets.phongTextFS = values[1];
        loadedAssets.unlitTextVS = values[2];
        loadedAssets.unlitTextFS = values[3];
        loadedAssets.sphereJSON = values[4];
        textures.sun = values[5];
        textures.mercury = values[6];
        textures.venus = values[7];
        textures.earth = values[8];
        textures.moon = values[9];
        textures.mars = values[10];
        textures.jupiter = values[11];
        textures.saturn = values[12];
        textures.uranus = values[13];
        textures.neptune = values[14];
        textures.skyboxnx = values[15];
        textures.skyboxny = values[16];
        textures.skyboxnz = values[17];
        textures.skyboxpx = values[18];
        textures.skyboxpy = values[19];
        textures.skyboxpz = values[20];
        textures.earthClouds = values[21];
        textures.earthClouds = values[21];
        textures.earthClouds = values[21];
        loadedAssets.skyboxTextVS = values[22];
        loadedAssets.skyboxTextFS = values[23];
    }).catch(function(error) {
        console.error(error.message);
    }).finally(function() {
        onLoadedCB();
    });
}

// -------------------------------------------------------------------------
function createShaders(loadedAssets) {
    phongShaderProgram = createCompiledAndLinkedShaderProgram(loadedAssets.phongTextVS, loadedAssets.phongTextFS);

    phongShaderProgram.attributes = {
        vertexPositionAttribute: gl.getAttribLocation(phongShaderProgram, "aVertexPosition"),
        vertexNormalsAttribute: gl.getAttribLocation(phongShaderProgram, "aNormal"),
        vertexTexcoordsAttribute: gl.getAttribLocation(phongShaderProgram, "aTexcoords")
    };

    phongShaderProgram.uniforms = {
        worldMatrixUniform: gl.getUniformLocation(phongShaderProgram, "uWorldMatrix"),
        viewMatrixUniform: gl.getUniformLocation(phongShaderProgram, "uViewMatrix"),
        projectionMatrixUniform: gl.getUniformLocation(phongShaderProgram, "uProjectionMatrix"),
        lightPositionUniform: gl.getUniformLocation(phongShaderProgram, "uLightPosition"),
        cameraPositionUniform: gl.getUniformLocation(phongShaderProgram, "uCameraPosition"),
        textureUniform: gl.getUniformLocation(phongShaderProgram, "uTexture"),
    };

    unlitShaderProgram = createCompiledAndLinkedShaderProgram(loadedAssets.unlitTextVS, loadedAssets.unlitTextFS);

    unlitShaderProgram.attributes = {
        vertexPositionAttribute: gl.getAttribLocation(unlitShaderProgram, "aVertexPosition"),
        vertexNormalsAttribute: gl.getAttribLocation(unlitShaderProgram, "aNormal"),
        vertexTexcoordsAttribute: gl.getAttribLocation(unlitShaderProgram, "aTexcoords")
    }

    unlitShaderProgram.uniforms = {
        worldMatrixUniform: gl.getUniformLocation(unlitShaderProgram, "uWorldMatrix"),
        viewMatrixUniform: gl.getUniformLocation(unlitShaderProgram, "uViewMatrix"),
        projectionMatrixUniform: gl.getUniformLocation(unlitShaderProgram, "uProjectionMatrix"),
        textureUniform: gl.getUniformLocation(unlitShaderProgram, "uTexture"),
        alphaUniform: gl.getUniformLocation(unlitShaderProgram, "uAlpha")
    }

    skyboxShaderProgram = createCompiledAndLinkedShaderProgram(loadedAssets.skyboxTextVS, loadedAssets.skyboxTextFS);

    skyboxShaderProgram.attributes = {
        vertexPositionAttribute: gl.getAttribLocation(skyboxShaderProgram, "aVertexPosition"),
        vertexNormalsAttribute: gl.getAttribLocation(skyboxShaderProgram, "aNormal"),
        vertexTexcoordsAttribute: gl.getAttribLocation(skyboxShaderProgram, "aTexcoords")
    }

    skyboxShaderProgram.uniforms = {
        worldMatrixUniform: gl.getUniformLocation(skyboxShaderProgram, "uWorldMatrix"),
        viewMatrixUniform: gl.getUniformLocation(skyboxShaderProgram, "uViewMatrix"),
        projectionMatrixUniform: gl.getUniformLocation(skyboxShaderProgram, "uProjectionMatrix"),
        textureUniform: gl.getUniformLocation(skyboxShaderProgram, "uTexture"),
        timeUniform: gl.getUniformLocation(skyboxShaderProgram, "uTime")
    }
}

// -------------------------------------------------------------------------
function createScene() {
    createPlanets();
    createSkybox();
}

function createPlanets() {
    planets.sun = new WebGLGeometryJSON(gl, unlitShaderProgram);
    planets.sun.create(loadedAssets.sphereJSON, textures.sun, 1);
    var scale = new Matrix4().makeScale(0.03, 0.03, 0.03);
    var translation = new Matrix4().makeTranslation(0, 0, 0);
    planets.sun.worldMatrix.makeIdentity();
    planets.sun.worldMatrix.multiply(translation).multiply(scale);
    geometryList.push(planets.sun);

    planets.mercury = new WebGLGeometryJSON(gl, phongShaderProgram);
    planets.mercury.create(loadedAssets.sphereJSON, textures.mercury);
    scale = new Matrix4().makeScale(0.004, 0.004, 0.004);
    translation = new Matrix4().makeTranslation(6, 0, 0);
    planets.mercury.worldMatrix.makeIdentity();
    planets.mercury.worldMatrix.multiply(translation).multiply(scale);
    geometryList.push(planets.mercury);

    planets.venus = new WebGLGeometryJSON(gl, phongShaderProgram);
    planets.venus.create(loadedAssets.sphereJSON, textures.venus);
    scale = new Matrix4().makeScale(0.004, 0.004, 0.004);
    translation = new Matrix4().makeTranslation(9, 0, 0);
    planets.venus.worldMatrix.makeIdentity();
    planets.venus.worldMatrix.multiply(translation).multiply(scale);
    geometryList.push(planets.venus);

    planets.earth = new WebGLGeometryJSON(gl, phongShaderProgram);
    planets.earth.create(loadedAssets.sphereJSON, textures.earth);
    scale = new Matrix4().makeScale(0.005, 0.005, 0.005);
    translation = new Matrix4().makeTranslation(12, 0, 0);
    planets.earth.worldMatrix.makeIdentity();
    planets.earth.worldMatrix.multiply(translation).multiply(scale);
    geometryList.push(planets.earth)

    planets.earthClouds = new WebGLGeometryJSON(gl, unlitShaderProgram);
    planets.earthClouds.create(loadedAssets.sphereJSON, textures.earthClouds, 0.3);
    scale = new Matrix4().makeScale(0.006, 0.006, 0.006);
    translation = new Matrix4().makeTranslation(12, 0, 0);
    planets.earthClouds.worldMatrix.makeIdentity();
    planets.earthClouds.worldMatrix.multiply(translation).multiply(scale);
    geometryList.push(planets.earthClouds);
    
    planets.moon = new WebGLGeometryJSON(gl, phongShaderProgram);
    planets.moon.create(loadedAssets.sphereJSON, textures.moon);
    scale = new Matrix4().makeScale(0.002, 0.002, 0.002);
    translation = new Matrix4().makeTranslation(12.75, 0, 0);
    geometryList.push(planets.moon);

    planets.mars = new WebGLGeometryJSON(gl, phongShaderProgram);
    planets.mars.create(loadedAssets.sphereJSON, textures.mars);
    scale = new Matrix4().makeScale(0.006, 0.006, 0.006);
    translation = new Matrix4().makeTranslation(15, 0, 0);
    planets.mars.worldMatrix.makeIdentity();
    planets.mars.worldMatrix.multiply(translation).multiply(scale);
    geometryList.push(planets.mars);

    planets.jupiter = new WebGLGeometryJSON(gl, phongShaderProgram);
    planets.jupiter.create(loadedAssets.sphereJSON, textures.jupiter);
    scale = new Matrix4().makeScale(0.013, 0.013, 0.013);
    translation = new Matrix4().makeTranslation(18, 0, 0);
    planets.jupiter.worldMatrix.makeIdentity();
    planets.jupiter.worldMatrix.multiply(translation).multiply(scale);
    geometryList.push(planets.jupiter);

    planets.saturn = new WebGLGeometryJSON(gl, phongShaderProgram);
    planets.saturn.create(loadedAssets.sphereJSON, textures.saturn);
    scale = new Matrix4().makeScale(0.01, 0.01, 0.01);
    translation = new Matrix4().makeTranslation(21, 0, 0);
    planets.saturn.worldMatrix.makeIdentity();
    planets.saturn.worldMatrix.multiply(translation).multiply(scale);
    geometryList.push(planets.saturn);

    planets.uranus = new WebGLGeometryJSON(gl, phongShaderProgram);
    planets.uranus.create(loadedAssets.sphereJSON, textures.uranus);
    scale = new Matrix4().makeScale(0.01, 0.01, 0.01);
    translation = new Matrix4().makeTranslation(24, 0, 0);
    planets.uranus.worldMatrix.makeIdentity();
    planets.uranus.worldMatrix.multiply(translation).multiply(scale);
    geometryList.push(planets.uranus);

    planets.neptune = new WebGLGeometryJSON(gl, phongShaderProgram);
    planets.neptune.create(loadedAssets.sphereJSON, textures.neptune);
    scale = new Matrix4().makeScale(0.01, 0.01, 0.01);
    translation = new Matrix4().makeTranslation(27, 0, 0);
    planets.neptune.worldMatrix.makeIdentity();
    planets.neptune.worldMatrix.multiply(translation).multiply(scale);
    geometryList.push(planets.neptune);
}

function createSkybox() {
    skybox.negx = new WebGLGeometryQuad(gl);
    skybox.negx.create(textures.skyboxnx, 1);
    let scale = new Matrix4().makeScale(30, 30, 30)
    let rotation = new Matrix4().makeRotationY(-90);
    let translation = new Matrix4().makeTranslation(-30, 0, 0);
    skybox.negx.worldMatrix.makeIdentity();
    skybox.negx.worldMatrix.multiply(translation).multiply(rotation).multiply(scale);
    skybox.negx.skybox = true;
    geometryList.push(skybox.negx)

    skybox.negy = new WebGLGeometryQuad(gl);
    skybox.negy.create(textures.skyboxny, 1);
    scale = new Matrix4().makeScale(30, 30, 30)
    rotation = new Matrix4().makeRotationX(-90);
    translation = new Matrix4().makeTranslation(0, -30, 0);
    skybox.negy.worldMatrix.makeIdentity();
    skybox.negy.worldMatrix.multiply(translation).multiply(rotation).multiply(scale);
    skybox.negy.skybox = true;
    geometryList.push(skybox.negy)

    skybox.negz = new WebGLGeometryQuad(gl);
    skybox.negz.create(textures.skyboxnz, 1);
    scale = new Matrix4().makeScale(30, 30, 30)
    rotation = new Matrix4().makeRotationZ(90);
    let rotation2 = new Matrix4().makeRotationX(180)
    let rotation3 = new Matrix4().makeRotationZ(90)
    translation = new Matrix4().makeTranslation(0, 0, -30);
    skybox.negz.worldMatrix.makeIdentity();
    skybox.negz.worldMatrix.multiply(translation).multiply(rotation).multiply(rotation3).multiply(rotation2).multiply(scale);
    skybox.negz.skybox = true;
    geometryList.push(skybox.negz);

    skybox.posx = new WebGLGeometryQuad(gl);
    skybox.posx.create(textures.skyboxpx, 1);
    scale = new Matrix4().makeScale(30, 30, 30)
    rotation = new Matrix4().makeRotationY(90);
    translation = new Matrix4().makeTranslation(30, 0, 0);
    skybox.posx.worldMatrix.makeIdentity();
    skybox.posx.worldMatrix.multiply(translation).multiply(rotation).multiply(scale);
    skybox.posx.skybox = true;
    geometryList.push(skybox.posx)

    skybox.posy = new WebGLGeometryQuad(gl);
    skybox.posy.create(textures.skyboxpy, 1);
    scale = new Matrix4().makeScale(30, 30, 30)
    rotation = new Matrix4().makeRotationX(-90);
    translation = new Matrix4().makeTranslation(0, 30, 0);
    skybox.posy.worldMatrix.makeIdentity();
    skybox.posy.worldMatrix.multiply(translation).multiply(rotation).multiply(scale);
    skybox.posy.skybox = true;
    geometryList.push(skybox.posy)

    skybox.posz = new WebGLGeometryQuad(gl);
    skybox.posz.create(textures.skyboxpz, 1);
    scale = new Matrix4().makeScale(30, 30, 30)
    rotation = new Matrix4().makeRotationZ(90);
    rotation2 = new Matrix4().makeRotationZ(-90)
    translation = new Matrix4().makeTranslation(0, 0, 30);
    skybox.posz.worldMatrix.makeIdentity();
    skybox.posz.worldMatrix.multiply(translation).multiply(rotation).multiply(rotation2).multiply(scale);
    skybox.posz.skybox = true;
    geometryList.push(skybox.posz)
}


// -------------------------------------------------------------------------
function updateAndRender() {
    requestAnimationFrame(updateAndRender);

    var aspectRatio = gl.canvasWidth / gl.canvasHeight;

    time.update();
    camera.update(time.deltaTime);

    focusCamera();
    movePlanets();

    // specify what portion of the canvas we want to draw to (all of it, full width and height)
    gl.viewport(0, 0, gl.canvasWidth, gl.canvasHeight);

    // this is a new frame so let's clear out whatever happened last frame
    gl.clearColor(0, 0, 0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    gl.useProgram(phongShaderProgram);
    var uniforms = phongShaderProgram.uniforms;
    var cameraPosition = camera.getPosition();
    gl.uniform3f(uniforms.lightPositionUniform, lightPosition.x, lightPosition.y, lightPosition.z);
    gl.uniform3f(uniforms.cameraPositionUniform, cameraPosition.x, cameraPosition.y, cameraPosition.z);

    projectionMatrix.makePerspective(45, aspectRatio, 0.1, 1000);
    

    // geometryList = geometryList.sort(function(a, b) {
    //     let aPos = a.getPosition();
    //     let bPos = b.getPosition();

    //     let aDist = aPos.subtract(cameraPosition).length();
    //     let bDist = bPos.subtract(cameraPosition).length();
    //     return bDist - aDist;
    // })

    for (var i = 0; i < geometryList.length; ++i) {
        if(geometryList[i].textureAlpha == undefined) {
            gl.useProgram(phongShaderProgram)
            geometryList[i].render(camera, projectionMatrix, phongShaderProgram);
        } else if(geometryList[i].skybox == true) {
            gl.useProgram(skyboxShaderProgram)
            uniforms = skyboxShaderProgram.uniforms
            gl.uniform1f(uniforms.timeUniform, time.secondsElapsedSinceStart);
            geometryList[i].render(camera, projectionMatrix, skyboxShaderProgram);
        } else {
            gl.useProgram(unlitShaderProgram)
            geometryList[i].render(camera, projectionMatrix, unlitShaderProgram);
        }
        
    }

    // planets.mercury.render(camera, projectionMatrix, phongShaderProgram);
    // planets.venus.render(camera, projectionMatrix, phongShaderProgram);
    // planets.earth.render(camera, projectionMatrix, phongShaderProgram);
    // planets.moon.render(camera, projectionMatrix, phongShaderProgram);
    // planets.mars.render(camera, projectionMatrix, phongShaderProgram);
    // planets.jupiter.render(camera, projectionMatrix, phongShaderProgram);
    // planets.saturn.render(camera, projectionMatrix, phongShaderProgram);
    // planets.uranus.render(camera, projectionMatrix, phongShaderProgram);
    // planets.neptune.render(camera, projectionMatrix, phongShaderProgram);

    // gl.useProgram(unlitShaderProgram);
    // uniforms = unlitShaderProgram.uniforms;

    // planets.sun.render(camera, projectionMatrix, unlitShaderProgram);
    // planets.earthClouds.render(camera, projectionMatrix, unlitShaderProgram);
    // skybox.negx.render(camera, projectionMatrix, unlitShaderProgram);
    // skybox.negy.render(camera, projectionMatrix, unlitShaderProgram);
    // skybox.negz.render(camera, projectionMatrix, unlitShaderProgram);
    // skybox.posx.render(camera, projectionMatrix, unlitShaderProgram);
    // skybox.posy.render(camera, projectionMatrix, unlitShaderProgram);
    // skybox.posz.render(camera, projectionMatrix, unlitShaderProgram);

    gl.disable(gl.BLEND);
}

function focusCamera() {
    if(appInput.s) {
        lookingAt = 0;
    } else if(appInput.m) {
        lookingAt = 1;
    } else if (appInput.v) {
        lookingAt = 2;
    } else if(appInput.e) {
        lookingAt = 3;
    } else if(appInput.a) {
        lookingAt = 4;
    } else if(appInput.j) {
        lookingAt = 5;
    } else if (appInput.t) {
        lookingAt = 6;
    } else if (appInput.u) {
        lookingAt = 7;
    } else if(appInput.n) {
        lookingAt = 8;
    }

    switch(lookingAt) {
        case 0:
            camera.lookingAt = positions.sun;
            camera.minDistance = 1.5;
            camera.maxDistance = 30;
            break;
        case 1:
            camera.lookingAt = positions.mercury;
            camera.minDistance = 0;
            camera.maxDistance = 20;
            break;
        case 2:
            camera.lookingAt = positions.venus;
            camera.minDistance = 0;
            camera.maxDistance = 20;
            break;
        case 3:
            camera.lookingAt = positions.earth;
            camera.minDistance = 0;
            camera.maxDistance = 20;
            break;
        case 4:
            camera.lookingAt = positions.mars;
            camera.minDistance = 0;
            camera.maxDistance = 20;
            break;
        case 5:
            camera.lookingAt = positions.jupiter;
            camera.minDistance = 0;
            camera.maxDistance = 20;
            break;
        case 6:
            camera.lookingAt = positions.saturn;
            camera.minDistance = 0;
            camera.maxDistance = 20;
            break;
        case 7:
            camera.lookingAt = positions.uranus;
            camera.minDistance = 0;
            camera.maxDistance = 20;
            break;
        case 8:
            camera.lookingAt = positions.neptune;
            camera.minDistance = 0;
            camera.maxDistance = 20;
            break;
    }
}

function movePlanets() {
    var sunRotation = new Matrix4().makeRotationY(0.5);
    planets.sun.worldMatrix.multiply(sunRotation);

    let rotation = new Matrix4().makeRotationY(0.4)
    let axisRotation = new Matrix4().makeRotationY(time.secondsElapsedSinceStart * 200)
    positions.mercury = rotation.multiplyVector(positions.mercury)
    let translation = new Matrix4().makeTranslation(positions.mercury)
    let scale = new Matrix4().makeScale(0.004, 0.004, 0.004);
    planets.mercury.worldMatrix.makeIdentity();
    planets.mercury.worldMatrix.multiply(rotation).multiply(translation).multiply(axisRotation).multiply(scale);

    rotation = new Matrix4().makeRotationY(0.35)
    axisRotation = new Matrix4().makeRotationY(time.secondsElapsedSinceStart * 200)
    positions.venus = rotation.multiplyVector(positions.venus)
    translation = new Matrix4().makeTranslation(positions.venus)
    scale = new Matrix4().makeScale(0.004, 0.004, 0.004);
    planets.venus.worldMatrix.makeIdentity();
    planets.venus.worldMatrix.multiply(rotation).multiply(translation).multiply(axisRotation).multiply(scale);

    rotation = new Matrix4().makeRotationY(0.3)
    axisRotation = new Matrix4().makeRotationY(time.secondsElapsedSinceStart * 100)
    positions.earth = rotation.multiplyVector(positions.earth)
    let earthTranslation = new Matrix4().makeTranslation(positions.earth)
    scale = new Matrix4().makeScale(0.005, 0.005, 0.005);
    planets.earth.worldMatrix.makeIdentity();
    planets.earth.worldMatrix.multiply(rotation).multiply(earthTranslation).multiply(axisRotation).multiply(scale);

    translation = new Matrix4().makeTranslation(positions.earth)
    scale = new Matrix4().makeScale(0.006, 0.006, 0.006);
    planets.earthClouds.worldMatrix.makeIdentity().multiply(earthTranslation).multiply(scale)

    rotation = new Matrix4().makeRotationY(1)
    axisRotation = new Matrix4().makeRotationY(time.secondsElapsedSinceStart * 100)
    positions.moon = rotation.multiplyVector(positions.moon)
    translation = new Matrix4().makeTranslation(positions.moon)
    scale = new Matrix4().makeScale(0.002, 0.002, 0.002);
    planets.moon.worldMatrix.makeIdentity().multiply(earthTranslation).multiply(translation).multiply(rotation).multiply(axisRotation).multiply(scale);

    rotation = new Matrix4().makeRotationY(0.25)
    axisRotation = new Matrix4().makeRotationY(time.secondsElapsedSinceStart * 200)
    positions.mars = rotation.multiplyVector(positions.mars)
    translation = new Matrix4().makeTranslation(positions.mars)
    scale = new Matrix4().makeScale(0.006, 0.006, 0.006);
    planets.mars.worldMatrix.makeIdentity();
    planets.mars.worldMatrix.multiply(rotation).multiply(translation).multiply(axisRotation).multiply(scale);

    rotation = new Matrix4().makeRotationY(0.2)
    axisRotation = new Matrix4().makeRotationY(time.secondsElapsedSinceStart * 200)
    positions.jupiter = rotation.multiplyVector(positions.jupiter)
    translation = new Matrix4().makeTranslation(positions.jupiter)
    scale = new Matrix4().makeScale(0.013, 0.013, 0.013);
    planets.jupiter.worldMatrix.makeIdentity();
    planets.jupiter.worldMatrix.multiply(rotation).multiply(translation).multiply(axisRotation).multiply(scale);

    rotation = new Matrix4().makeRotationY(0.15)
    axisRotation = new Matrix4().makeRotationY(time.secondsElapsedSinceStart * 200)
    positions.saturn = rotation.multiplyVector(positions.saturn)
    translation = new Matrix4().makeTranslation(positions.saturn)
    scale = new Matrix4().makeScale(0.01, 0.01, 0.01);
    planets.saturn.worldMatrix.makeIdentity();
    planets.saturn.worldMatrix.multiply(rotation).multiply(translation).multiply(axisRotation).multiply(scale);

    rotation = new Matrix4().makeRotationY(0.05)
    axisRotation = new Matrix4().makeRotationY(time.secondsElapsedSinceStart * 200)
    positions.uranus = rotation.multiplyVector(positions.uranus)
    translation = new Matrix4().makeTranslation(positions.uranus)
    scale = new Matrix4().makeScale(0.01, 0.01, 0.01);
    planets.uranus.worldMatrix.makeIdentity();
    planets.uranus.worldMatrix.multiply(rotation).multiply(translation).multiply(axisRotation).multiply(scale);

    rotation = new Matrix4().makeRotationY(0.1)
    axisRotation = new Matrix4().makeRotationY(time.secondsElapsedSinceStart * 200)
    positions.neptune = rotation.multiplyVector(positions.neptune)
    translation = new Matrix4().makeTranslation(positions.neptune)
    scale = new Matrix4().makeScale(0.01, 0.01, 0.01);
    planets.neptune.worldMatrix.makeIdentity();
    planets.neptune.worldMatrix.multiply(rotation).multiply(translation).multiply(axisRotation).multiply(scale);
}

// EOF 00100001-10