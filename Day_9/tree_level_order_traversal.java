	public static void levelOrder(Node root) {
      Queue<Node> queueNodes = new LinkedList<Node>();

      queueNodes.add(root);
      while(!queueNodes.isEmpty()){
          Node tempNode = queueNodes.poll();
          System.out.print(tempNode.data + " ");

          if(tempNode.left != null) queueNodes.add(tempNode.left);
          if(tempNode.right != null) queueNodes.add(tempNode.right);
      }
    }