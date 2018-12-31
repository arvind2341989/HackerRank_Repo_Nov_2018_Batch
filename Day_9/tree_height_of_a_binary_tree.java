	public static int height(Node root) {
      	Node tempNode = root;
        if(tempNode==null) return -1;
        else{
            int leftHeight = height(tempNode.left);
            int rightHeight = height(tempNode.right);

            if(leftHeight > rightHeight) return (leftHeight+1);
            else return rightHeight + 1;
        }
    }