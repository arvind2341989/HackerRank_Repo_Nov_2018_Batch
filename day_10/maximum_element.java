import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

 
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        static class StackNode{
        int val;
        StackNode(int val){
            this.val = val;
        }
    }
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        Stack<StackNode> myStack = new Stack<>();
        while(n-->0){
            int type = in.nextInt();
            if(type==1){
                int x = in.nextInt();
                myStack.push(new StackNode(myStack.empty()?x:Math.max(x, myStack.peek().val)));
            }
            else if(type==2)
                myStack.pop();
            else
                System.out.println(myStack.peek().val);
        }
    }

    
}

