import BasePayload from '../assets/payload.js';

const {
    core: {describe, expect, test},
} = window.jestLite;

export default () => {
    describe("Graph Payload", () => {
        const keys =  Object.keys(BasePayload)
        const values =  Object.values(BasePayload)

        test ("is an object", () => {
            expect(typeof BasePayload)
                .toBe('object');
        });

        test ("is not empty", () => {
            expect(keys.length)
                .toBeGreaterThan(0)
        });

        test ("each node has connections and color keys", () => {  
            values.forEach( node => {
                expect(
                    node.hasOwnProperty('color') &&
                    node.hasOwnProperty('connections')
                ).toBe(true)
            })          
        });

        test ("each connection node refers to an incoming node", () => { 
            values.forEach( node => {
                node.connections.forEach( connection => {
                    expect(keys.includes(connection))
                        .toBe(true)
                })
            })          
        });
    })
}