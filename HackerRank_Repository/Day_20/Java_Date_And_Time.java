class Result {

    /*
     * Complete the 'findDay' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts following parameters:
     *  1. INTEGER month
     *  2. INTEGER day
     *  3. INTEGER year
     */

    public static String findDay(int month, int day, int year) {
        Calendar calendar=Calendar.getInstance();
        calendar.set(year,month-1,day);
        SimpleDateFormat simpledata=new SimpleDateFormat("EEEE");
        return simpledata.format(calendar.getTime()).toUpperCase();
    }

}
