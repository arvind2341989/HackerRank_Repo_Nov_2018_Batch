 public static String getSmallestAndLargest(String s, int k) {
        
        // Complete the function
        // 'smallest' must be the lexicographically smallest substring of length 'k'
        // 'largest' must be the lexicographically largest substring of length 'k'
        int iterations = s.length()-k;
       String largest = s.substring(0,k);
       String smallest = s.substring(0,k);
       for(int i = 0; i<=iterations;i++)
       {
           if(largest.compareTo(s.substring(i,i+k))<0)
           {
               largest = s.substring(i,i+k);
           }
           if(smallest.compareTo(s.substring(i,i+k))>0)
           {
               smallest = s.substring(i,i+k);
           }
       }
       //System.out.println(smallest);
//System.out.println(largest);
        return smallest + "\n" + largest;
    }