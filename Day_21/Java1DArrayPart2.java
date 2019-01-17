import java.util.*;
public class Java1DArrayPart2 { 
	public static boolean canWin(int m, int[] array, int i) {
		if (i < 0 || array[i] == 1) {
			return false;
		} else if (i + 1 >= array.length || i + m >= array.length) {
			return true;
		}
		 
		array[i] = 1;

		return canWin(m, array,i + m) || 
		canWin(m, array,i + 1) || 
		canWin(m, array,i - 1);
	}
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int q = scan.nextInt();
		while (q-- > 0) {
			int n = scan.nextInt();
			int leap = scan.nextInt();
			 
			int[] game = new int[n];
			for (int i = 0; i < n; i++) {
				game[i] = scan.nextInt();
			}

			System.out.println( (canWin(leap, game,0)) ? "YES" : "NO" );
		}
		scan.close();
	}
}