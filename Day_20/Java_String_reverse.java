import java.io.*;
import java.util.*;



class Java_String_Reverse {
    static String reverse(String s) {
        return new StringBuffer(s).reverse().toString();
    }

    public static void main(String[] args) {
        Scanner cin = new Scanner(System.in);
        String a = cin.next();
        System.out.println(a.equals(reverse(a)) ? "Yes" : "No");
    }
}