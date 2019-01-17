import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class JavaArraylist {

    public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    int n = scanner.nextInt(); 
    int d , q, x, y; 
    ArrayList[] resultSet = new ArrayList[n];
    for(int i=0;i<n;i++) {
        d = scanner.nextInt();
        resultSet[i] = new ArrayList();
        for(int j=0;j<d;j++) {
        resultSet[i].add(scanner.nextInt());    
        }    
     }
    q = scanner.nextInt();
    for(int i=0;i<q;i++){
        x = scanner.nextInt();
        y = scanner.nextInt();
        try{
           System.out.println(resultSet[x-1].get(y-1));
        } catch(Exception e){
           System.out.println("ERROR!");    
        }
    }
    }
}