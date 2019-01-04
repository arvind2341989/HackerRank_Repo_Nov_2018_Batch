import java.io.*;
import java.util.*;

public class Solution {
    
    public static void main(String[] args) {
            
         Scanner in = new Scanner(System.in);
        int noElements = in.nextInt();

        int commandType;
        
        Stack<Integer> one = new Stack<Integer>();
        Stack<Integer> two = new Stack<Integer>();
        
        
        for (int i = 0 ; i < noElements ; i++) {
            commandType = in.nextInt();
            
            if (commandType == 1) {
                one.push(in.nextInt());
            }
            
            else if(commandType == 2) {
                if(two.isEmpty()) {
                    while(!one.isEmpty()) {
                        two.push(one.pop());
                    }
                   
                }  
                two.pop();
            }
            
            else if(commandType == 3) {
               if(two.isEmpty()) {
                    while(!one.isEmpty()) {
                        two.push(one.pop());
                    }
               }
               System.out.println(two.peek()); 
            }
                    
        }
    }
}