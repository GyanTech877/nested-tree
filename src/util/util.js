export class Util {

    constructor() {
        this.flatNodes = {};
    }

    getFlattenNodes(nodes, parent = {}, depth = 0) {

        if (!Array.isArray(nodes.children) || nodes.children.length === 0) {
            return;
        }
        // Flatten the `node` property for internal lookups
        nodes
            .children
            .forEach((node) => {
                const isParent = this.nodeHasChildren(node);

                this.flatNodes[node.source] = {
                    value: node.source,
                    children: node.children,
                    parent,
                    isParent,
                    checked: false,
                    expanded: true,
                    collapseIcon: true
                };
                this.getFlattenNodes(node, node, depth + 1);
            });
        return this.flatNodes;

    }

    nodeHasChildren(node) {
        return Array.isArray(node.children) && node.children.length > 0;
    }
}