import java.util.*;
import java.io.*;

class Solution{
    public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        int t=in.nextInt();
        int sum=0;
        String result="";
        for(int i=0;i<t;i++){
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();
            sum=a+1*b;
            for(int v=0;v<n;v++){
                result+=sum+" ";
                sum+=Math.pow(2, v+1)*b;
            }
            System.out.println(result);
            result="";
            sum=0;
        }
        in.close();
    }
}

