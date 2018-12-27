function cavityMap(grid) {
    for (var i = 1; i < grid.length; i++)
    {
        if (grid[i] > ((grid[i - 1]) && (grid[i + 1])))
        {
            grid[i] = "X";
        }
    }
    return grid;

}