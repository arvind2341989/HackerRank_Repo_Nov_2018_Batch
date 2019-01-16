public class Java_End-of-file {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */

        Scanner in = new Scanner(System.in);

        String line, text = "";
        int i = 1;

        while( in.hasNextLine() != false){
            line = in.nextLine();
            text = text + Integer.toString(i) + " " + line +"\n";
            i++;
        }
        System.out.println(text);
    }
}