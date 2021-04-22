export default class Node {
    constructor (value, color = 'default') {
      if (value && typeof value === 'string') {
        this.value = value
        this.color = color
        this.edgesList = []
      } else {
        throw new Error('Node payload must exist and be string')
      }
    }
    
    connect (node) {
      this.edgesList.push(node)
      node.edgesList.push(this)
    }
    
    getAdjacentNodes() {
      return this.edgesList
    }
}