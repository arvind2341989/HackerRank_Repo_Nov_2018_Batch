import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        ArrayList<ArrayList<Integer>> lists=new ArrayList<>();
        for(int z=0;z<n;z++){
            int a=sc.nextInt();
            ArrayList<Integer> temp=new ArrayList<Integer>();
            for(int v=0;v<a;v++){
                temp.add(sc.nextInt());
            }
            lists.add(temp);
        }
        n=sc.nextInt();
        int x,y;

        for(int i=0;i<n;i++){

            x=sc.nextInt();y=sc.nextInt();
            
            ArrayList<Integer> temp=new ArrayList<>();
            temp=lists.get(x-1);

            if(temp.isEmpty()){
                System.out.println("ERROR!");
            }else{
                if(temp.size()<y){
                                    System.out.println("ERROR!");
                }else{
                    System.out.println(temp.get(y - 1));

                }
            }
        }
    }
}

