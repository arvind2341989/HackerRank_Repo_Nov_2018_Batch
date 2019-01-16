import java.io.*;
import java.util.*;

public class StringReverse {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String A = sc.next();

        StringBuffer r = new StringBuffer(A);
        r.reverse();

        System.out.print(A.equals(r.toString()) ? "Yes" : "No");

    }
}
