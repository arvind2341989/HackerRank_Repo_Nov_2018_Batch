import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

 public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int t = s.nextInt();
        String [] pair_left = new String[t];
        String [] pair_right = new String[t];
        
        for (int i = 0; i < t; i++) {
            pair_left[i] = s.next();
            pair_right[i] = s.next();
        }

//Write your code here
        int count=0;
        Map<String,Integer> hashmap=new HashMap<String,Integer>();
        for(int v=0;v<t;v++){
            String comp=pair_left[v]+" "+pair_right[v];
            if(!hashmap.containsKey(comp)){
                count++;
                hashmap.put(comp, 0);
            }
            System.out.println(count);
        }
   }
}