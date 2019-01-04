ArrayList<Integer> list = new ArrayList<>();
boolean checkBST(Node root) {
        inOrder(root);
        
        for(int i = 0;  i < list.size() - 1; i++){
            if(list.get(i) >= list.get(i + 1)){
                return false;
            }
        }
        return true;
    }
    void inOrder(Node root){
        if(root == null){
            return;
        }
        inOrder(root.left);
        list.add(root.data);
        inOrder(root.right);
        
    }