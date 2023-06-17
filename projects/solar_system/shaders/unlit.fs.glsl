precision mediump float;

uniform sampler2D uTexture;
uniform float uAlpha;

varying vec2 vTexcoords;

void main(void) {
    vec3 finalColor = texture2D(uTexture, vTexcoords).rgb;

    gl_FragColor = vec4(finalColor, uAlpha);
}

// EOF 00100001-10

