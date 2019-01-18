static boolean isAnagram(String a, String b) {
        // Complete the function
        a=a.toLowerCase();b=b.toLowerCase();
        //System.out.println(a+"----"+b);
        int [] result=new int[26];
        for(int z=0;z<26;z++){
            result[z]=0;
        }
        for(int z=0;z<a.length();z++){
            result[(int)a.charAt(z)-97]++;
        }    
        
        for(int z=0;z<b.length();z++){
            result[(int)b.charAt(z)-97]--;
        }
        for(int z=0;z<26;z++){
            if(result[z]!=0){
                return false;
            }
        }
        return true;
    }