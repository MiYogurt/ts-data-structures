class Tree {
    left: Tree;
    right: Tree;
    data: any;

    constructor(data: any, left: Tree, right: Tree) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show() : any {
        return this.data;
    }
}


class BST {
    root: Tree;

    /**
     * 插入数据
     * @param {any} data 数据值
     */
    insert(data: any): void{
        let tree = new Tree(data, null, null)
        if (this.root == null) {
            this.root = tree
        } else {
            let current = this.root;
            let parent;
            while(true){
                parent = current;
                if (data < current.data) {
                    current = current.left
                    if (current == null) {
                        parent.left = tree;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        parent.right = tree;
                        break;
                    }
                }
            }
        }
    }
    /**
     * 中序遍历
     * @param {Tree} node 节点
     */
    inOrder(node: Tree) : void {
        if (!(node == null)) {
            this.inOrder(node.left);
            console.log(node.show() + " ");
            this.inOrder(node.right)
        }
    }
    /**
     * 前序遍历
     * @param {Tree} node 节点
     */
    preOrder(node: Tree) : void {
        if (node !== null) {
            console.log(node.show() + " ");
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }
    /**
     * 后序遍历
     * @param {Tree} node 节点
     */
    postOrder(node: Tree): void {
        if(node != null){
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.show() + " ");
        }
    }

    getMin(): any {
        let current = this.root;
        while(current.left != null) {
            current = current.left
        }
        return current.data;
    }

    getMax(): any {
        let current = this.root;
        while(current.right != null){
            current = current.right
        }
        return current.data;
    }
    /**
     * 查找节点
     * @param  {any}  data 节点里的值
     * @return {Tree}      节点
     */
    find(data: any) : Tree {
        var current = this.root;
        while(current != null) {
            if (current.data == data) {
                return current;
            } else if (data < current.data) { // 往左边找
                current = current.left;
            } else {    // 往右找
                current = current.right;
            }
        }
        return null;
    }

    remove(data: any): void {
        let root = this.removeNode(this.root, data)
    }

    removeNode(node: Tree, data: any): Tree {
        if (node == null) {
            return null;
        }
        if (data == node.data) {
            // 找到了
            if (data.left == null && data.right == null) {
                return null;
            }

            if (data.left == null) {
                return node.right;
            }

            if (data.right == null) {
                return  node.left;
            }

            /**
             * 最小的节点
             * @param {Tree} node 节点
             */
            function getSmallest(node: Tree) : Tree {
                while(node.left != null){
                    node = node.left
                }
                return node;
            }

            let tempNode = getSmallest(node.right); // 右树位置的最小节点
            node.data = tempNode.data
            node.right = this.removeNode(node.right, tempNode.data)
            return node;

        } else if (data < data.data) {
            node.left = this.removeNode(node.left, data)
            return node;
        }else {
            node.right = this.removeNode(node.right, data)
            return node;
        }
    }
}