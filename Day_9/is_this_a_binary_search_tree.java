/* Hidden stub code will pass a root argument to the function below. Complete the function to solve the challenge. Hint: you may want to write one or more helper functions.

The Node class is defined as follows:
    class Node {
        int data;
        Node left;
        Node right;
     }
*/
    String result = "";
    boolean checkBST(Node root) {
       String[] res = inOrder(root).split(" ");
        return isSorted(res);
    }
    
    String inOrder(Node root){
        if(root == null){
            return "";
        }
        if(root.left!=null){ inOrder(root.left); }
        result += String.valueOf(root.data) + " ";
        if(root.right!=null){ inOrder(root.right); }
        return result;
    }

    boolean isSorted(String[] array){
        
        if(array.length == 0 || array.length == 1){
            return true;
        }
        
        for(int i = 1; i < array.length; i++){
            if(Integer.parseInt(array[i]) <= Integer.parseInt(array[i-1])){
                return false;
            }
        }
        return true;
    }