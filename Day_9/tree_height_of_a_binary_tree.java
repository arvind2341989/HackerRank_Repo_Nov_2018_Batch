	/*
    class Node 
    	int data;
    	Node left;
    	Node right;
	*/
	public static int height(Node root) {
        int lHeight = 0, rHeight = 0;
        
        if(root == null){
            return -1;
        }
        else{
            lHeight = height(root.left) + 1;
            rHeight = height(root.right) + 1;
            
            if(rHeight > lHeight){
                return rHeight;
            }
            else{
                return lHeight;
            }
        }
        
    }