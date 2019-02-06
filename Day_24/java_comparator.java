class Checker implements Comparator<Player> {
    public int compare(Player a, Player b) {
        int flag = b.score - a.score;
        if(flag == 0) {
            return a.name.compareTo(b.name);
        }
        return flag;
    }
}
