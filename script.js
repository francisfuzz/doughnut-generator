async function getColors(count) {
  // Fetches data from the hexbot NOOPS API
  // Details: https://noopschallenge.com/
  const endpoint = `https://api.noopschallenge.com/hexbot?count=${count}`;
  const response = await fetch(endpoint);
  return await response.json();
}

async function createDoughnut() {
  const data = await getColors(11);

  // Consistent doughnut colors...
  const doughnutInterior = "#f4900d";
  const doughnutExterior = "#ffab33";

  const svg = `
    <svg
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5" style="enable-background:new 0 0 47.5 47.5;" xml:space="preserve" version="1.1" id="svg2">
      <defs id="defs6">
        <clipPath id="clipPath16" clipPathUnits="userSpaceOnUse">
          <path id="path18" d="M 0,38 38,38 38,0 0,0 0,38 Z"/>
        </clipPath>
      </defs>
      <g transform="matrix(1.25,0,0,-1.25,0,47.5)" id="g10">
        <g id="g12">
          <g clip-path="url(#clipPath16)" id="g14">
            <g transform="translate(36.3369,13.4512)" id="g20">
              <path id="path22" style="fill:${doughnutExterior};fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c -1.046,-6.271 -7.722,-10.451 -17.245,-10.451 -9.523,0 -16.198,4.18 -17.243,10.451 -0.247,1.479 0.156,8.12 1.054,9.406 2.559,3.663 3.474,-10.365 16.189,-10.365 13.848,0 13.641,14.028 16.199,10.365 C -0.147,8.12 0.246,1.479 0,0"/>
            </g>
            <g transform="translate(19.0923,17.6309)" id="g24">
              <path id="path26" style="fill:${
                data.colors[0].value
              };fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c -3.174,0 -5.748,0.702 -5.748,1.568 0,0.866 2.574,1.567 5.748,1.567 3.173,0 5.748,-0.701 5.748,-1.567 C 5.748,0.702 3.173,0 0,0 m 0,13.375 c -9.331,0 -16.895,-4.584 -16.895,-10.24 0,-5.655 7.564,-10.239 16.895,-10.239 9.33,0 16.895,4.584 16.895,10.239 0,5.656 -7.565,10.24 -16.895,10.24"/>
            </g>
            <g transform="translate(2.7197,22.3774)" id="g28">
              <path id="path30" style="fill:${
                data.colors[0].value
              };fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c -0.653,-1.045 -0.92,-5.494 0.479,-7.577 2.134,-3.179 3.178,-1.567 4.746,-2.047 2.335,-0.714 2.508,-2.559 4.355,-3.483 2.09,-1.045 3.305,-0.741 6.27,0 4.181,1.045 6.837,-1.088 9.405,0 2.106,0.893 3.311,4.137 4.486,4.528 3.728,1.243 4.515,7.124 1.741,9.537 -0.87,-1.829 -5.137,-8.404 -7.88,-8.709 -2.745,-0.305 -10.974,-1 -14.457,0.784 C 5.661,-5.182 2.134,-2.961 1.698,-2.352 1.263,-1.742 0,0 0,0"/>
            </g>
            <g transform="translate(19.0923,23.1177)" id="g32">
              <path id="path34" style="fill:${doughnutInterior};fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c -3.752,0 -6.793,-1.228 -6.793,-2.743 0,-0.59 0.463,-1.133 1.245,-1.58 -0.126,0.13 -0.2,0.264 -0.2,0.404 0,0.866 2.574,1.567 5.748,1.567 3.173,0 5.748,-0.701 5.748,-1.567 0,-0.14 -0.074,-0.274 -0.201,-0.404 0.783,0.447 1.246,0.99 1.246,1.58 C 6.793,-1.228 3.751,0 0,0"/>
            </g>
            <g transform="translate(5.4199,18.8496)" id="g36">
              <path id="path38" style="fill:${
                data.colors[1].value
              };fill-opacity:1;fill-rule:nonzero;stroke:none" d="M 0,0 C -0.375,0 -0.737,0.203 -0.925,0.557 -1.195,1.067 -1,1.7 -0.489,1.969 l 2.308,1.22 C 2.328,3.461 2.961,3.265 3.231,2.754 3.501,2.244 3.306,1.611 2.795,1.342 L 0.487,0.122 C 0.332,0.039 0.165,0 0,0"/>
            </g>
            <g transform="translate(17.3071,11.0557)" id="g40">
              <path id="path42" style="fill:${
                data.colors[2].value
              };fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c -0.41,0 -0.799,0.242 -0.966,0.646 l -0.74,1.786 C -1.927,2.965 -1.673,3.576 -1.14,3.797 -0.606,4.017 0.004,3.765 0.225,3.23 L 0.965,1.444 C 1.186,0.911 0.933,0.3 0.399,0.079 0.269,0.025 0.133,0 0,0"/>
            </g>
            <g transform="translate(29.1514,15.2363)" id="g44">
              <path id="path46" style="fill:${
                data.colors[3].value
              };fill-opacity:1;fill-rule:nonzero;stroke:none" d="M 0,0 C -0.181,0 -0.364,0.047 -0.53,0.146 -1.027,0.438 -1.192,1.08 -0.898,1.576 L 0.233,3.492 C 0.526,3.988 1.171,4.153 1.664,3.86 2.161,3.566 2.326,2.926 2.032,2.429 L 0.9,0.514 C 0.706,0.184 0.357,0 0,0"/>
            </g>
            <g transform="translate(30.8926,23)" id="g48">
              <path id="path50" style="fill:${
                data.colors[4].value
              };fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c -0.56,0 -1.023,0.481 -1.043,1.046 -0.02,0.576 0.431,1.079 1.007,1.1 L 1.182,2.198 C 1.769,2.205 2.243,1.771 2.263,1.194 2.283,0.618 1.832,0.099 1.256,0.078 L 0.038,0 0,0 Z"/>
            </g>
            <g transform="translate(20.792,27.1235)" id="g52">
              <path id="path54" style="fill:${
                data.colors[5].value
              };fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c -0.444,0 -0.855,0.285 -0.997,0.73 -0.173,0.551 0.132,1.138 0.682,1.312 L 0.511,2.303 C 1.066,2.478 1.648,2.172 1.822,1.622 1.997,1.071 1.691,0.484 1.142,0.31 L 0.315,0.049 C 0.21,0.016 0.104,0 0,0"/>
            </g>
            <g transform="translate(14.9976,25.4258)" id="g56">
              <path id="path58" style="fill:${
                data.colors[6].value
              };fill-opacity:1;fill-rule:nonzero;stroke:none" d="M 0,0 C -0.157,0 -0.316,0.036 -0.466,0.11 L -1.25,0.502 C -1.766,0.76 -1.976,1.388 -1.718,1.904 -1.46,2.42 -0.832,2.63 -0.315,2.372 L 0.468,1.98 C 0.984,1.722 1.194,1.095 0.936,0.578 0.753,0.212 0.384,0 0,0"/>
            </g>
            <g transform="translate(24.0996,12.1465)" id="g60">
              <path id="path62" style="fill:${
                data.colors[7].value
              };fill-opacity:1;fill-rule:nonzero;stroke:none" d="M 0,0 C -0.156,0 -0.315,0.035 -0.465,0.109 L -1.249,0.5 c -0.517,0.258 -0.727,0.885 -0.47,1.401 0.257,0.518 0.884,0.727 1.402,0.47 L 0.467,1.98 C 0.983,1.723 1.193,1.096 0.937,0.579 0.754,0.212 0.384,0 0,0"/>
            </g>
            <g transform="translate(10.4263,14.4521)" id="g64">
              <path id="path66" style="fill:${
                data.colors[8].value
              };fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c -0.138,0 -0.277,0.026 -0.412,0.085 -0.53,0.227 -0.775,0.842 -0.548,1.372 l 0.392,0.914 C -0.34,2.9 0.275,3.15 0.805,2.919 1.335,2.691 1.581,2.077 1.353,1.547 L 0.961,0.633 C 0.791,0.237 0.405,0 0,0"/>
            </g>
            <g transform="translate(26.0176,24.3369)" id="g68">
              <path id="path70" style="fill:${
                data.colors[9].value
              };fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c -0.403,0 -0.787,0.234 -0.958,0.626 -0.231,0.529 0.01,1.145 0.538,1.377 L 0.276,2.308 C 0.807,2.54 1.422,2.298 1.652,1.769 1.884,1.24 1.643,0.624 1.114,0.393 L 0.418,0.088 C 0.281,0.028 0.14,0 0,0"/>
            </g>
            <g transform="translate(9.0347,24.3804)" id="g72">
              <path id="path74" style="fill:${
                data.colors[10].value
              };fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c -0.078,0 -0.157,0.009 -0.235,0.027 l -0.566,0.13 c -0.563,0.13 -0.914,0.691 -0.784,1.253 0.129,0.563 0.691,0.913 1.252,0.784 L 0.233,2.064 C 0.796,1.934 1.147,1.373 1.018,0.811 0.906,0.327 0.476,0 0,0"/>
            </g>
          </g>
        </g>
      </g>
    </svg>
    `;

  return (document.getElementById("doughnut").innerHTML = svg);
}

window.onload = function() {
  // Loads the initial doughnut.
  createDoughnut();

  // Binds the the onclick listener.
  document.getElementById("doughnut").addEventListener("click", function() {
    return createDoughnut();
  });
};