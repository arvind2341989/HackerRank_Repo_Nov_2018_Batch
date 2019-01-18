 Arrays.sort(s, 0, n, (String s1, String s2) -> {
            BigDecimal n1 = new BigDecimal(s1);
            BigDecimal n2 = new BigDecimal(s2);
            return n2.compareTo(n1);
        });