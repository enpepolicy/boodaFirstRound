import Node from './node.js';

export default class Graph {
    constructor (graphPayload = {}) {
        if (graphPayload && Object.keys(graphPayload).length !== 0) {
            this.nodes = []
            this.#createNodes(graphPayload)
            this.#connectNodes(graphPayload)
        } else {
            throw new Error('Graph payload must not be empty');
        }
    }

    addToGraph (node) {
        this.nodes.push(node)
    }

    breadthFirstTraversalSearch (startString, endString, color = 'default') {
        const startNode = this.nodes.find( node => node.value === startString)
        const endNode = this.nodes.find( node => node.value === endString)
        const queue = [startNode]
        const visitedNodes = {}

        if (
                color === 'default' ||
                (
                    startNode.color === color &&
                    endNode.color === color
                )
            ){
            visitedNodes[startNode.value] = null
            
            while (queue.length > 0){
                const node = queue.shift()
                    
                if (node.value === endNode.value) {
                    return this.#reconstructPath(visitedNodes, endNode, color)
                }
                
                for (const adjacency of node.edgesList) {
                    if (!visitedNodes.hasOwnProperty(adjacency.value)) {
                        visitedNodes[adjacency.value] = node
                        queue.push(adjacency)
                    }
                }
            }
        }
        else {
            throw new Error('Color must match with starting and end nodes')
        }
        
    }

    #createNodes (graphPayload) {
        Object.keys(graphPayload).forEach( nodeName => {
            this.nodes.push(new Node (nodeName, graphPayload[nodeName].color))
        })
    }

    #connectNodes (graphPayload) {
        this.nodes.forEach(node => {
            graphPayload[node.value].connections
                .forEach(connection => {
                    const otherNode = this.nodes.find( node => {
                        return node.value === connection
                    })
                    node.connect(otherNode)
                })
        })
    }

    #reconstructPath (visitedNodes, endNode, color) {        
        let currNode = endNode
        
        let shortestPath = []
        while (currNode !== null) {
            shortestPath.push(currNode)
            currNode = visitedNodes[currNode.value]
        }
        
        if (color !== 'default') {
            shortestPath = shortestPath.filter(node => node.color === color)
        }

        return this.#createBestRouteString(shortestPath.reverse(), endNode)
    }
        
    #createBestRouteString (shortestPathNodes, endNode) {
        const bestRoute = []

        shortestPathNodes.forEach(item => {
            bestRoute.push(item.value)
            if (item.value !== endNode.value) {
                bestRoute.push('->')
            }
        })

        // console.log('Less number of stops:', shortestPathNodes.length)
        // console.log('Best route:', bestRoute.join('').toString())
        return bestRoute.join('').toString()
    }
}