public class JavaStaticInitializerBlock {
    
    //write your code here
    static boolean flag=true;
    static Scanner in = new Scanner(System.in);
    static int B;
    static int H;
    static{
        try{
            B = in.nextInt();
            H = in.nextInt();
            if(B <= 0 || H <= 0) flag = false;
            if(!flag) throw new Exception();
        }catch(Exception e){
            System.out.println("java.lang.Exception: Breadth and height must be positive");
        }
    }

    public static void main(String[] args){
		if(flag){
			int area=B*H;
			System.out.print(area);
		}
		
	}//end of main

}//end of class