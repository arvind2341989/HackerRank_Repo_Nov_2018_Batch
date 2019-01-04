static String gridSearch(String a[] , String b[]) {
        boolean isFound = false;
        for (int i = 0; i < a.length - b.length + 1; i++) {
            for (int j = 0; j < a[0].length() - b[0].length() + 1; j++) {
                if (a[i].charAt(j) == b[0].charAt(0)) {
                    boolean isSame = true;
                    for (int k = 0; k < b.length; k++) {
                        for (int l = 0; l < b[0].length(); l++) {
                            if (a[i + k].charAt(j + l) != b[k].charAt(l)) {
                                isSame = false;
                                break;
                            }
                        }
                        if (!isSame) {
                            break;
                        }
                    }
                    if (isSame) {
                        isFound = true;
                        break;
                    }
                }
            }
            if (isFound) {
                break;
            }
        }
        if(isFound){
            return "YES";
        }
        else{
            return "NO";
        }
    }