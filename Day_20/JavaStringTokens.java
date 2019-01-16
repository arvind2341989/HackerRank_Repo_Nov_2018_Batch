import java.io.*;
import java.util.*;

public class JavaStringTokens {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.nextLine().trim();
        // Write your code here.
        if(s.isEmpty()) System.out.println("0");
        else{
            String[] arr = s.split("[ !,?\\.\\_'@]+");
            System.out.println(arr.length);
            for(int i = 0; i < arr.length && arr[i] !=null; i++){
                System.out.println(arr[i]);
            }
        }
        scan.close();
    }
}

