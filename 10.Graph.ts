class Graph {
    vertices: any;
    adj: any[][] = [];
    edges = 0;
    marked = [];
    edgeTo = [];
    constructor(v: any) {
        this.vertices = v;
        this.init();
    }

    init(){
        for (let i = 0; i < this.vertices; i++) {
            this.adj[i] = [];
            this.marked[i] = false;
        }
    }

    addEdge(v, w) {
        this.adj[v].push(w)
        this.adj[w].push(v)
        this.edges++;
    }

    show(){
        for (let i = 0; i < this.vertices; i++) {
            console.log(i + " -> ");
            for (let j = 0; j < this.vertices; j++) {
                if (this.adj[i][j] != undefined) {
                    console.log(this.adj[i][j] + ' ');
                }
            }
        }
    }

    /**
     * 深度优先
     * 访问一个没有访问的节点，访问过，设置为 true
     */
     dfs(v) {
         console.log(this.marked);
         this.marked[v] = true;
         if (this.adj[v] != undefined) {
             console.log(" 进入 " + v + " 节点");
         }

         for (let w of this.adj[v]) {
             console.log(w);
             if (!this.marked[w]) {
                 this.dfs(w)
             }
         }

     }
     /**
      * 广度优先遍历
      * @param {[type]} v [description]
      */
     bfs(v) {
         let queue = [];
         this.marked[v] = true;
         queue.push(v)
         while(queue.length > 0) {
             let v = queue.shift();
             if (v != undefined) {
                 console.log("V " + v);
             }
             for(let w of this.adj[v]) {
                 if (!this.marked[w]) { //  没看过
                     this.edgeTo[w] = v;
                     this.marked[w] = true;
                     queue.push(w);
                 }
             }
         }
     }
}

let g = new Graph(5);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
// g.show()
g.dfs(0)