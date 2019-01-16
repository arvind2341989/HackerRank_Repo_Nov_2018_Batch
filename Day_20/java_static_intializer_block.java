
static   Byte B,H;   
static Boolean flag=false;

static {
        Scanner  sc= new Scanner(System.in);
      
        B= sc.nextByte();
        H= sc.nextByte();
        
        if(B > 0 && H>0) {
         flag=true;
            
        }
    else{
        
                    System.out.println("java.lang.Exception: Breadth and height must be positive" );
    
    }
      
        
        
    }
