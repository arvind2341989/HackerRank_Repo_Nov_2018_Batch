function staircase(n) {
    var i, j;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if ((i + j - 1) >= n) {
                process.stdout.write('#');
            }
            else {
                process.stdout.write(' ');
            }
        }
        process.stdout.write('\n');
    }
}