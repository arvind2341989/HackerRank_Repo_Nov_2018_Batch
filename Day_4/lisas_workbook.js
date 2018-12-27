function workbook(n, k, arr) {
        var page = 1;

        var count = 0;

        arr.forEach((item, index) => {

            for (let i = 1; i <= item; i++) {

                if (i == page) count++;

                if (i % k == 0) page++;

            }

            if (item % k != 0) page++;

        });

        return count;

    }