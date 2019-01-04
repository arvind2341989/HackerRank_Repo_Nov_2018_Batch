 static void almostSorted(int[] arr) {
        int n = arr.length;
        int[] sortedArray = new int[n];
        for(int i = 0; i < n; i++){
            sortedArray[i] = arr[i];
        }
        Arrays.sort(sortedArray);
        ArrayList<Integer> difference = new ArrayList<Integer>();
        for(int i = 0; i < n; i++) {
            if(arr[i] != sortedArray[i]) {
                difference.add(i);
                if(difference.size() == 3) {
                    break;
                }
            }
        }
        if(difference.size() == 2) {
            System.out.println("yes\nswap " + (difference.get(0) + 1) + " " + (difference.get(1) + 1));
        } else {
            int first = -1;
            int last = Integer.MAX_VALUE;
            for(int i = 0; i < n; i++) {
                if(arr[i] != sortedArray[i]) {
                    if(first == -1) {
                        first = i;
                    }
                    last = i;
                }
            }
            if(first == -1) {
                System.out.println("no");
            } else {
                boolean works = true;
                for(int i = 0; i < last - first; i++) {
                    if(arr[first + i] != sortedArray[last - i]) {
                        works = false;
                        break;
                    }
                }
                if(works) {
                    System.out.println("yes\nreverse " + (first + 1) + " " + (last + 1));
                } else {
                    System.out.println("no");
                }
            }
        }
    }