import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>();
        for(int i=0;i<n;i++){
            int q = input.nextInt();
            switch(q){
                case 1:
                    pQueue.add(input.nextInt());
                    break;
                case 2: 
                    pQueue.remove(input.nextInt());
                    break;
                case 3:
                    System.out.println(pQueue.peek());
                    break;
            }
        }
    }
}

