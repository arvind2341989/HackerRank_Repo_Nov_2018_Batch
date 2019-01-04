	/* 
    
    class Node 
    	int data;
    	Node left;
    	Node right;
	*/
	public static void levelOrder(Node root) {
        Queue<Node> myqueue = new LinkedList<Node>();
        myqueue.add(root);
        while(!myqueue.isEmpty()){
            Node n = myqueue.poll();
            System.out.print(n.data + " ");
            if(n.left != null){
                myqueue.add(n.left);
            }
            if(n.right != null){
                 myqueue.add(n.right);
            }
        }
    }