import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int [] arr=new int[n];
        int count=0;
        int temp=0;
        for(int i=0;i<n;i++){
            arr[i]=sc.nextInt();
            if(arr[i]<0)count++;
            temp+=arr[i];
        }
        if(temp<0){
            count++;
        }
        temp=0;
        int k=2;
        while(k!=n){
            for(int i=0;i<n-k+1;i++){
                for(int j=i;j<i+k;j++){
                    temp+=arr[j];
                }
                if(temp<0){
                    count++;
                }
                temp=0;
            }
            k++;
        }
        System.out.println(count);
    }
}

