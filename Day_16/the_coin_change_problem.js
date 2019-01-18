function getWays(n, c) {
	var table = [];
	var m = c.length
	table[0] = [];
	for (var i = 0; i < m; i++) {
		table[0].push(1);
	}
	for (var i = 1; i < n+1; i++) {
		table[i] = [];
		for (var j = 0; j < m; j++) {
			var coin = c[j];
			var x = (i-coin >= 0) ? table[i-coin][j]: 0;
			var y = (j >= 1)? table[i][j-1]: 0;
			table[i][j] = x + y;
		}
	}
	return table[n][m-1];
}