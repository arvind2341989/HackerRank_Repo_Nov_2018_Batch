import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String result = "";
        Stack<String> stack = new Stack<String>();
        stack.push("");
        while(n-- > 0){
            int operation = sc.nextInt();
            if(operation == 1){
                //append w to string
                result = stack.peek();
                result += sc.next();
                stack.push(result);
            }
            else if(operation == 2){
                //delete(k) - delete last k chars
                int k = sc.nextInt();
                result = stack.peek();
                result = result.substring(0, result.length() - k);
                stack.push(result);
            }
            else if(operation == 3){
                //print(k) - print kth char
                int k = sc.nextInt();
                System.out.println(stack.peek().charAt(k - 1));
            }
            else{
                stack.pop();
            }
        }
    }
}