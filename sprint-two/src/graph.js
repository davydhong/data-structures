

// Instantiate a new graph
var Graph = function () {
    this.edges = [];
    this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
    this.nodes[this.nodes.length] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
    if (_.contains(this.nodes, node)) {
        return true;
    } else {
        return false;
    }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
    if (_.contains(this.nodes, node)) {
        this.nodes = _.reject(this.nodes, function (e) {
            return e === node;
        });
        this.edges = _.reject(this.edges,function(e){
            return e[0] === node || e[1] === node;
        });
    }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
    if (this.edges.toString().indexOf([fromNode, toNode].toString()) > -1 || this.edges.toString().indexOf([toNode, fromNode].toString()) > -1) {
        return true;
    } else {
        return false;
    }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
    if (_.contains(this.nodes, fromNode) && _.contains(this.nodes, toNode)) {
        this.edges.push([fromNode, toNode]);
    }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
    if(this.hasEdge(fromNode,toNode)){
        this.edges = _.reject(this.edges, function (e) {
            return e.toString() === [fromNode,toNode].toString();
        });
    }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
    this.nodes = _.map(this.nodes,function(e){
        return cb(e);
    });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// slice(0,length -1)   slice(numarr[])