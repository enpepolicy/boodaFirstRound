import Node from '../models/node.js';

const {
    core: {describe, expect, test},
} = window.jestLite;

export default () => {    
    describe("Node Class", () => {
        test ("constructor payload must exist and be string", () => {
            expect(() => new Node())
                .toThrow(Error('Node payload must exist and be string'))
            expect(() => new Node(8))
                .toThrow(Error('Node payload must exist and be string'))
        })
        
        test ("construct without color argument", () => {
            let node = new Node('A')
            expect(node.color).toBe('default')
        })

        test ("construct with color argument", () => {
            let node = new Node('A', 'red')
            expect(node.color).toBe('red')
        })
    })
}

