    public static void postOrder(Node root) {
        Node tempNode = root;
        if(root==null) return;

        postOrder(tempNode.left);
        postOrder(tempNode.right);
        System.out.print(tempNode.data + " ");
    }