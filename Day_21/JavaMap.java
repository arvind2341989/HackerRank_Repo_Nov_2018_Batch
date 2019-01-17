import java.util.*;
import java.io.*;

class JavaMap{
   public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        Map<String,Integer> person = new HashMap<String,Integer>();  
        int n=in.nextInt();
        in.nextLine();
        for(int i=0;i<n;i++)
        {
            String name = in.nextLine();
            int phone = in.nextInt();
            person.put(name,phone);
            in.nextLine();
        }
        while(in.hasNext()) {
            String s=in.nextLine();
            if (person.containsKey(s)) {
                System.out.println(s+"="+ person.get(s));
            } else {
                System.out.println("Not found"); 
            }
        }
        in.close();  
   }
}

