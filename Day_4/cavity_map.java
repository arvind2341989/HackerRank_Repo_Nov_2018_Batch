 static String[] cavityMap(String[] grid) {

        int rowLen = grid.length;
        int colLen = grid[0].length();

        char[][] g = new char[rowLen][colLen];

        String[] result = new String[rowLen];
        
        for(int i = 0; i < rowLen; i++){
            char[] gridRow = grid[i].toCharArray();
            for(int j = 0; j < colLen; j++){
                g[i][j] = gridRow[j];
            }
        }

        for(int i = 1; i < rowLen - 1; i++)                
        {
            for(int j = 1; j < colLen - 1; j++)
            {
                if(g[i][j] > g[i][j-1] && g[i][j] > g[i][j+1] && g[i][j] > g[i-1][j] && g[i][j] > g[i+1][j])    {
                    g[i][j]='X';
                }
            }
        }
        for(int i = 0; i < rowLen; i++)                
        {
            String row = "";
            for(int j = 0; j < colLen; j++)
            {
                row += g[i][j];
            }
            result[i] = row;
        }
        return result;
    }