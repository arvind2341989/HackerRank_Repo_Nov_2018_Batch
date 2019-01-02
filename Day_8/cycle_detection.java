 static boolean hasCycle(SinglyLinkedListNode head) {
        SinglyLinkedListNode temp=head;
        boolean flag=false;
        while(temp.next!=null)
        {
            
            if(temp.data==-1)
            {
                flag=true;
                break;
            }
            else{
                temp.data=-1;
            }
            temp=temp.next;
        }
        return flag;
    }