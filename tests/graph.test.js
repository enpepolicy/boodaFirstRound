import Graph from '../models/graph.js';
import BasePayload from '../assets/payload.js';

const {
    core: {describe, expect, test, beforeEach},
} = window.jestLite;

export default () => {
    let graph;

    beforeEach(() => {
        graph = new Graph(BasePayload)
    });

    describe("Graph Class", () => {
        test ("constructor payload must exist", () => {
            expect(() => new Graph())
                .toThrow(Error('Graph payload must not be empty'))
        })
        
        describe("BreadthFirstTraversalSearch", () => {
            test ("throws when startNode and endNode are not passed as parameters", () => {
                expect(() => graph.breadthFirstTraversalSearch())
                    .toThrow(TypeError)
                expect(() => graph.breadthFirstTraversalSearch('F'))
                    .toThrow(TypeError)
            });
            
            test ("throws when startNode and endNode don't exist in graph.", () => {
                expect(() => graph.breadthFirstTraversalSearch('F', 'Z'))
                    .toThrow()
            });

            test ("throws when incoming train color doesn't match with start and end node colors", () => {
                expect(() => graph.breadthFirstTraversalSearch('A', 'G', 'yellow'))
                    .toThrow(new Error('Color must match with starting and end nodes'))
            });

            test ('no specified (default) color best route', () => {
                expect(graph.breadthFirstTraversalSearch('F', 'G'))
                    .toBe('F->I->H->G')
            });

            test ('red color argument best route', () => {
                expect(graph.breadthFirstTraversalSearch('H', 'H', 'red'))
                    .toBe('H')
            });
            
            test ('green color argument best route', () => {
                expect(graph.breadthFirstTraversalSearch('G', 'I', 'green'))
                    .toBe('G->I')
            });
        })
    })
}

