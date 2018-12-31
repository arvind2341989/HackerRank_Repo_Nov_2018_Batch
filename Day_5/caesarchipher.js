function caesarCipher(s, k) {
   var str = "";
    for(var i = 0; i < s.length; i++) {
       
        if(s[i] >= 'a' && s[i] <= 'z') {
            
           var c = ((s.charCodeAt(i)+k - 97)%26)+97;
           
            var char = String.fromCharCode(c);
           str = str+char;
           }
        
           else if(s[i] >= 'A' && s[i] <= 'Z') {
           
           var c = ((s.charCodeAt(i)+k - 65)%26)+65;
           
            var char = String.fromCharCode(c);
           str = str+char;
           }
        else {
            str = str + s[i];
        }
        }
    
 return str;

}