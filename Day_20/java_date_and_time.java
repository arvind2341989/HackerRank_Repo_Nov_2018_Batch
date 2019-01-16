  public static String findDay(int month, int day, int year) {
           
  Calendar calendar=Calendar.getInstance();
        calendar.set(year,month-1,day);
        SimpleDateFormat simpledata=new SimpleDateFormat("EEEE");
        return simpledata.format(calendar.getTime()).toUpperCase();

    }