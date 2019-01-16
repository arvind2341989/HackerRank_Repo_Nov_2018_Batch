import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class JavaCurrencyFormatter {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double payment = scanner.nextDouble();
        scanner.close();

        // Write your code here.
        NumberFormat u = NumberFormat.getCurrencyInstance(Locale.US);
        String us = u.format(payment);

        u = NumberFormat.getCurrencyInstance(new Locale("en","IN"));
        String india = u.format(payment);

        u = NumberFormat.getCurrencyInstance(Locale.CHINA);
        String china = u.format(payment);

        u = NumberFormat.getCurrencyInstance(Locale.FRANCE);
        String france = u.format(payment);

        System.out.println("US: " + us);
        System.out.println("India: " + india);
        System.out.println("China: " + china);
        System.out.println("France: " + france);
    }
}

