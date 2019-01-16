import java.io.*;
import java.util.*;

public class JavaStringReverse {

    public static void main(String[] args) {
        
        Scanner sc=new Scanner(System.in);
        String A=sc.next();
        /* Enter your code here. Print output to STDOUT. */
        System.out.println(A.compareTo(new StringBuffer(A).reverse().toString())==0 ? "Yes" : "No");
        
    }
}



