import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        
        Scanner sc=new Scanner(System.in);
        String A=sc.next();
        int leng=A.length()-1;
        boolean status=true;
        for(int i=0;i<leng;i++){
            if(i==(leng/2)){
                break;
            }
            if(A.charAt(i)!=A.charAt(leng-i)){
                System.out.println("No"); status=false; break;
            }
        }
        if(status){
            System.out.println("Yes");
        }
    }
}



