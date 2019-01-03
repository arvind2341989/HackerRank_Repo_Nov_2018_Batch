public static Node lca(Node root, int v1, int v2) {
       // Write your code here.
            Node curr = root;
        
        while ((curr.data < v1 && curr.data < v2) || (curr.data > v1 && curr.data > v2)) {
            if(curr.data < v1 && curr.data < v2){
                curr = curr.right;
            }
            else {
                curr = curr.left;
            }
        }
        
        return curr;
    }