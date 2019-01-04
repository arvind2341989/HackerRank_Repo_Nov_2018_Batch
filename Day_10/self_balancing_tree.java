	/* Class node is defined as :
    class Node 
    	int val;	//Value
    	int ht;		//Height
    	Node left;	//Left child
    	Node right;	//Right child

	*/

    static Node createNode(int val) {
        Node node = new Node();
        node.val = val;
        node.ht = 0;
        return node;
    }

    static int height(Node node) {
        if(node == null) {
            return 0;
        } else {
            return node.ht + 1;
        }
    }

    static int leftRightDiff(Node node) {
        if(node == null) {
            return 0;
        }
        return height(node.left) - height(node.right);
    }

    static Node rotateLeft(Node n) {
        Node r = n.right;
        n.right = r.left;
        r.left = n;
        n.ht = Math.max(height(n.left), height(n.right));
        r.ht = Math.max(height(r.left), height(r.right));
        return r;
    }

    static Node rotateRight(Node n) {
        Node r = n.left;
        n.left = r.right;
        r.right = n;
        n.ht = Math.max(height(n.left), height(n.right));
        r.ht = Math.max(height(r.left), height(r.right));
        return r;
    }

    static Node insert(Node root,int val)
    {
        if(root == null) {
            return createNode(val);
        }
        if(root.val < val) { // Insert on right
            root.right = insert(root.right, val);
        } else { // Insert on left
            root.left =  insert(root.left, val);
        }
        root.ht = Math.max(height(root.left), height(root.right));
        int heightDiff = leftRightDiff(root);
        if(heightDiff < -1) {
            if (leftRightDiff(root.right) > 0) {
                root.right = rotateRight(root.right);
            }
            return rotateLeft(root);
        } else if (heightDiff > 1) {
            if(leftRightDiff(root.left) < 0) {
                root.left = rotateLeft(root.left);
            }
            return rotateRight(root);
        }
        return root;
    }