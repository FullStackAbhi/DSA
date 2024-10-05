class Solution {
    // Function to detect cycle in an undirected graph.
    isCycle(V, adj) {
        
      function  checkForCycle(src ,V ,adj ,vis) {
        vis[src] = true
        let queue = []
        queue.push([src,-1])
        
        while(queue.length !== 0) {
            let [node , parent]  = queue.shift()
            
            for(let ngbr of adj[node]){
                if(!vis[ngbr]){
                    vis[ngbr] = true
                    queue.push([ngbr , node])
                }
                else if(parent != ngbr) {
                    return true
                }       
            }
        }
        return false
        
    }
        let vis  = new Array(V).fill(false)
        
        for(let i = 0 ; i< V ; i ++){
            if(vis[i] == false){
                if(checkForCycle(i, V ,adj , vis)) return true
            }
        }
        return false
        
    }
    
    
    
}