ublic static Node insert(Node root,int data) {
Node nod=new Node(data);
      
        if (root == null) {
           
            return nod;
        }
        else{
        Node tmp = root;
        while (tmp != null) {
            if (tmp.data > data) {
                if (tmp.left != null)
                    tmp = tmp.left;
                else {
                    tmp.left = nod;
                    break;
                }
            } else if (tmp.right != null)
                tmp = tmp.right;
            else {
                tmp.right = nod;
                break;
            }
        }
            return root;

        }
    	
    }