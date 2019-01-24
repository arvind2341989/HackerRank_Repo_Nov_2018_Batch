public static void levelOrder(Node root) {
        Node node = root;
        LinkedList<Node> queue = new LinkedList<Node>();
        queue.add(node); 
        while (queue.size() != 0)
        {
            int s = queue.poll().data;
            System.out.print(s + " ");
            
            if(node.left != null) {
                queue.add(node.left);
            }
            
            if(node.right != null) {
                queue.add(node.right);
            }   
            node = queue.peek();
        }       
      
    }