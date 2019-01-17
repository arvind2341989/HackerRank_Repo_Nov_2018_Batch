import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class JavaList {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        List<Integer> L = new ArrayList<Integer>();
        for(int i=0;i<n;i++) {
            int element = scanner.nextInt();    
            L.add(element);    
        }
        int q = scanner.nextInt();   
        for(int i=0; i<q;i++){
            String query = scanner.next();
            if(query.equals("Insert")) {
                int x = scanner.nextInt(); 
                int y = scanner.nextInt();
                L.add(x,y);   
            }else if (query.equals("Delete")) {
                int x = scanner.nextInt();
                L.remove(x);   
            }
        }
        for(int res:L){
            System.out.print(res + " ");
        }
        scanner.close();
    }
}
