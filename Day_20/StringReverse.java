import java.io.*;
import java.util.*;

public class stringReverse {

    public static void main(String[] args) {
        
        Scanner sc=new Scanner(System.in);
        String A=sc.next();
        
        StringBuilder B = new StringBuilder();  
        B.append(A); 
        B = B.reverse();
         String C = B.toString();
        if(C.equals(A))
        {
            System.out.println("Yes");
        } 
        else
        {
            System.out.println("No");
        }
        
    }
}



