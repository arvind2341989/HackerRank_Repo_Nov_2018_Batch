import java.io.*;
import java.util.*;
import java.math.BigInteger;

public class Solution {

    public static void main(String[] args) {
        /*
         * Enter your code here. Read input from STDIN. Print output to STDOUT. Your
         * class should be named Solution.
         */
        Scanner sc = new Scanner(System.in);
        BigInteger bi = new BigInteger(sc.nextLine());
        BigInteger bi_1 = new BigInteger(sc.nextLine());
        System.out.println(bi_1.add(bi));
        System.out.println(bi_1.multiply(bi));
        sc.close();
    }
}
