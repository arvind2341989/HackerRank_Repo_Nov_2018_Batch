static boolean isAnagram(String A, String B){

        char a[] = A.toLowerCase().toCharArray();
       char b[] = B.toLowerCase().toCharArray();
         if (A.length()!=B.length()) {
            return false;         
        } 
    else {

            java.util.Map<Character, Integer> map = new java.util.HashMap<>();

            for (int i = 0; i < a.length; i++) {

                if (map.containsKey(a[i])) {

                    map.put(a[i], map.get(a[i]) + 1);

                } else {
                    map.put(a[i], 1);

                }

            }
            //Now testing the case 
            
            for(int i= 0;i<b.length;i++) {
                
                if(map.containsKey(b[i])) {
                     if(map.get(b[i])>0) {
                         map.put(b[i], map.get(b[i])-1);    
                         
                     }
                     else {
                        return false;
                     }
                         
                }
                else {
                     return false;
                }
                               
            } 
 
        }
    return true;
           
}