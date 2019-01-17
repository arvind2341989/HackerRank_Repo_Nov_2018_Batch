import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class JavaSubarray {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] a = new int[n];
        int count = 0, sum;
        for(int i=0; i<n;i++) {
            a[i] = scanner.nextInt();
        }
        for( int i=0;i<n;i++) {
        sum = a[i];
        if(sum<0){
            count++;
          }
        for(int j=i+1;j<n;j++) {
        sum = sum + a[j];
        if(sum<0){
                    count++;
                }                
            }
        }
        System.out.println(count);
    }
}