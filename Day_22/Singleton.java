import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
import java.lang.reflect.*;

class Singleton{
    public String str;
    static Singleton s = null;
    private Singleton(){
        
    }
    public static Singleton getSingleInstance(){
        if(s==null){
            s = new Singleton();
        }
        return s;
    }
}