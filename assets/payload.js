// Adjacency List based payload

export default {
    A: {
            connections: ['B'],
            color: 'default'
        },
    B: {
            connections: ['C'],
            color: 'default'
        },
    C: {
            connections: ['D','G'],
            color: 'default'
        },
    D: {
            connections: [],
            color: 'default'
        },
    E: {
            connections: ['D'],
            color: 'default'
        },
    F: {
            connections: ['E'],
            color: 'default'
        },
    G: {
            connections: ['H'],
            color: 'green'
        },
    H: {
            connections: ['I'],
            color: 'red'
        },
    I: {
            connections: ['F'],
            color: 'green'
        }         
}
