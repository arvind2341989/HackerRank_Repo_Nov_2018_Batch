import java.util.*;
class JavaStack{
   
   public static void main(String []argh)
   {
      Scanner sc = new Scanner(System.in);
      
      while (sc.hasNext()) {
         String input=sc.next();
          char[] inputArr = input.toCharArray();
          Stack<Character> stack = new Stack<Character>();
          boolean isBalanced = true;

          for(int index = 0; index < inputArr.length; index++) {
              if((inputArr[index] == '(') || (inputArr[index] == '[') || (inputArr[index] == '{')) {
                  stack.push(inputArr[index]);
              } else if((inputArr[index] == ')') || (inputArr[index] == ']') || (inputArr[index] == '}')) {
                  if(stack.empty()) {
                      isBalanced = false;
                      break;
                  }
                  if(inputArr[index] == ')' && stack.pop() != '(' ) {
                      isBalanced = false;
                      break;
                  } else if(inputArr[index] == ']' && stack.pop() != '[' ) {
                      isBalanced = false;
                      break;
                  } else if(inputArr[index] == '}' && stack.pop() != '{' ) {
                      isBalanced = false;
                      break;
                  }
              }
          }
          if(isBalanced == false || !stack.empty()) {
              System.out.println(false);
          } else {
              System.out.println(true);
          }
      }
      
   }
}