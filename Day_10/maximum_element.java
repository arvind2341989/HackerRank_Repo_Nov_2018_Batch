import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
public class Solution {
    public static void main(String[] args) {
        Stack<String> stack = new Stack<String>();
        Stack<String> maxStack = new Stack<String>();
        Scanner sc = new Scanner(System.in);
        long max = -1;
        int count = 0;
        int n = sc.nextInt();
        while(n-- > 0){
            int num = sc.nextInt();
            if(num == 1){
                if(stack.isEmpty()){
                    count = 0;
                    maxStack.clear();
                    maxStack.push("0");
                    max = -1;
                }
                long data = sc.nextLong();
                if(data >= Long.valueOf(maxStack.peek())){
                    max = data;
                    maxStack.push(String.valueOf(max));
                    if(count == 0){
                        count++;
                    }
                }
                stack.push(String.valueOf(data));
            }
            else if(num == 2){
                if(!stack.isEmpty()){
                    if(stack.peek().equals(maxStack.peek())){
                        maxStack.pop();
                    }
                    stack.pop();
                }
            }
            if(num == 3){
                if(!maxStack.isEmpty()){
                     System.out.println(maxStack.peek());
                }
            }
        }
    }
}