import Graph from './models/graph.js';

import NodeTest from './tests/node.test.js';
import GraphTest from './tests/graph.test.js';
import PayloadTest from './tests/payload.test.js';

export function runTests() {
    const {
        core: { run },
        prettify,
    } = window.jestLite;
    
    NodeTest()
    GraphTest()
    PayloadTest()
    
    prettify.toHTML(run(), document.body);    
}

// Main entry function
export function getRoute(graphPayload, startNode, endNode, color = 'default') {
    const graph = new Graph(graphPayload)
    return graph.breadthFirstTraversalSearch(startNode, endNode, color)
}

