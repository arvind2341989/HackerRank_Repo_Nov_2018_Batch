/*  
	class Node
		public  int frequency; // the frequency of this tree
    	public  char data;
    	public  Node left, right;
    
*/ 

	void decode(String s, Node root) {
        decodeRec(s, root, root);
    }

    void decodeRec(String s, Node n, Node root){
        if(s != null){
            if(n.left == null && n.right == null){
                System.out.print(n.data);
                decodeRec(s, root, root);
            }
            char ch = s.charAt(0);
            if(ch == '0'){
               decodeRec(s.substring(1, s.length()), n.left, root);
            }
            if(ch == '1'){
                decodeRec(s.substring(1, s.length()), n.right, root);
            }
        }
    }