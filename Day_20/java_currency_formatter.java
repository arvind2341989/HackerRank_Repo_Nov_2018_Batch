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
     
           System.out.println("US: "+ NumberFormat.getCurrencyInstance(Locale.US).format(payment));
           System.out.println("India: "+ NumberFormat.getCurrencyInstance(new Locale("en", "IN")).format(payment));
           System.out.println("China: "+ NumberFormat.getCurrencyInstance(Locale.SIMPLIFIED_CHINESE).format(payment));
           System.out.println("France: "+ NumberFormat.getCurrencyInstance(Locale.FRANCE).format(payment));
           
    }
}