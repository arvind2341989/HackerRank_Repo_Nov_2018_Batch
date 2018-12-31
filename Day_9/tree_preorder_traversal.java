    public static void preOrder(Node root) {
        Node tempNode = root;
        if(root==null) return;

        System.out.print(tempNode.data+" ");
        preOrder(tempNode.left);
        preOrder(tempNode.right);
    }