

    public static void preOrder(Node root) {
        System.out.print(root.data+" ");
        //n L r
        if(root.left!=null){
            preOrder(root.left);
        }
        if(root.right!=null){
            preOrder(root.right);
        }
    }
