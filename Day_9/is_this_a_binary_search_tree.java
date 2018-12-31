    Node prevNode = null;
    
    boolean checkBST(Node root) {
        if(root != null){
            if(!checkBST(root.left)) return false;
            if(prevNode!=null && root.data <= prevNode.data) return false;

            prevNode = root;

            return checkBST(root.right);
        }
        return true;
    }