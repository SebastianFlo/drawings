
import { createFlowTreeBuilder, createSVGRender } from 'js2flowchart';

const flowTreeBuilder = createFlowTreeBuilder();
const svgRender = createSVGRender();

const code = `
const base = '';

function getById(id) {
    return Vue.http.get('base/images').then(
        response => {
            // get body data
            console.log(response.body);
            return response.body;
        },
        response => {
            // error callback
            new Error('got some error trying to fetch particular image 😑', response);
        }
    );
};
`;

const flowTree = flowTreeBuilder.build(code);
const shapesTree = svgRender.buildShapesTree(flowTree);

const svg = shapesTree.print();

document.getElementById('codeDebug').innerHTML = svg;
