    public static void inOrder(Node root) {
        Node tempNode = root;
        if(root==null) return;

        inOrder(tempNode.left);
        System.out.print(tempNode.data+" ");
        inOrder(tempNode.right);
    }