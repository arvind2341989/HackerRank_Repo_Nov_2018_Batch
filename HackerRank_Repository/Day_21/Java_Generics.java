
import java.io.IOException;
import java.lang.reflect.Method;

class Printer
{
   //Write your code here
   public void printArray(Object [] arr){
       for (int i = 0; i < arr.length; i++) {
            if(arr[i] instanceof String){
                System.out.println((arr[i]));
            }
            else{
                System.out.println(String.valueOf(arr[i]));
            }
        }
    }
}

public class Solution {


    public static void main( String args[] ) {
        Printer myPrinter = new Printer();
        Integer[] intArray = { 1, 2, 3 };
        String[] stringArray = {"Hello", "World"};
        myPrinter.printArray(intArray);
        myPrinter.printArray(stringArray);
        int count = 0;

        for (Method method : Printer.class.getDeclaredMethods()) {
            String name = method.getName();

            if(name.equals("printArray"))
                count++;
        }

        if(count > 1)System.out.println("Method overloading is not allowed!");
      
    }
}