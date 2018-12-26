var page = 1, problems = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 1; j <= arr[i]; j++) {
            if ((j-1) % k == 0 && j != 1) {
                page++;
            }
            if (page == j) {
                problems++;
            }
        }
        page++;
    }
    return problems;