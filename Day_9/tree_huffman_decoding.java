	void decode(String s, Node root) {
        char stopCode = '\0';
        StringBuilder output = new StringBuilder();
        char[] codeArr = s.toCharArray();

        Node currentNode = root;

        for(int i=0;i<codeArr.length;i++){
            char code = codeArr[i];
            if(code == '1')
                currentNode = currentNode.right;
            else if(code == '0')
                currentNode = currentNode.left;
            
            if(currentNode.data != stopCode){
                output.append(currentNode.data);
                currentNode = root;
            }
        }
        System.out.print(output.toString());
    }