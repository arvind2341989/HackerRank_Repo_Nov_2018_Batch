
    public static void inOrder(Node root) {
        // n L r - l r n - l n r
        if (root.left != null) {
            inOrder(root.left);
        }
        System.out.print(root.data + " ");
        if (root.right != null) {
            inOrder(root.right);
        }
     
    }
