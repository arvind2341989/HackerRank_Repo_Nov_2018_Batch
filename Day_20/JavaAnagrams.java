import java.util.Scanner;

public class JavaAnagrams {

    static boolean isAnagram(String a, String b) {
        // Complete the function
        if(a.length() != b.length())
            return false;
        else{
            String newA = a.toLowerCase();
            String newB = b.toLowerCase();
            String[] arr1 = newA.split("");
            String[] arr2 = newB.split("");
            java.util.Arrays.sort(arr1);
            java.util.Arrays.sort(arr2);
            
            if(java.util.Arrays.toString(arr1).equals(java.util.Arrays.toString(arr2)))
                return true;
        }
        return false;
    }

  public static void main(String[] args) {
    
        Scanner scan = new Scanner(System.in);
        String a = scan.next();
        String b = scan.next();
        scan.close();
        boolean ret = isAnagram(a, b);
        System.out.println( (ret) ? "Anagrams" : "Not Anagrams" );
    }
}