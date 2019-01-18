//Complete this code or write your own from scratch
import java.util.*;
import java.io.*;

class Solution{
	public static void main(String []argh)
	{
		Scanner in = new Scanner(System.in);
		int n=in.nextInt();
        Map<String,Integer> maps=new HashMap<String,Integer>();
		in.nextLine();
		for(int i=0;i<n;i++)
		{
			String name=in.nextLine();
			int phone=in.nextInt();
            maps.put(name,phone);
			in.nextLine();
		}
		while(in.hasNext())
		{
			String s=in.nextLine();
            if(maps.containsKey(s)){
                System.out.println(s+"="+maps.get(s));
            }else{
                System.out.println("Not found");
            }
		}
	}
}



