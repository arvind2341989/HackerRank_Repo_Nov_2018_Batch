    public static void postOrder(Node root) {
        // n L r - l r n - l n r
        if (root.left != null) {
            postOrder(root.left);
        }
        if (root.right != null) {
            postOrder(root.right);
        }
        System.out.print(root.data + " ");

    }
