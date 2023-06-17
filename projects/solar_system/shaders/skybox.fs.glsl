precision mediump float;

uniform sampler2D uTexture;
uniform float uTime;

varying vec2 vTexcoords;

float random(vec2 uv)
{
 	return fract(sin(dot(uv, vec2(1.5, 2.2561))) * 5.0 * sin(uTime * 0.03));   
}

float noise(vec2 uv)
{
 	vec2 i = floor(uv);
    vec2 f = fract(uv);
    
    float a = random(i);
    float b = random(i + vec2(1.,0.));
	float c = random(i + vec2(0., 1.));
    float d = random(i + vec2(1.));
    
    vec2 u = smoothstep(0., 1., f);
    
    return mix(a,b, u.x) + (c - a) * u.y * (1. - u.x) + (d - b) * u.x * u.y; 
                     
}


void main()
{
    vec2 uv = vTexcoords.xy;
    vec4 nVal = vec4(step(noise(uv * 25.0), 0.95));
	gl_FragColor = vec4(texture2D(uTexture, vTexcoords).rgb, nVal);
}

// EOF 00100001-10

