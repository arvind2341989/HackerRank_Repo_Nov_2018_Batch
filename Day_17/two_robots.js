function twoRobots(m, queries) {
    let total = queries.length,
        pathTracking = Array(total);    
    for (let i = 0; i < total; ++i) {
        pathTracking[i] = Array(total);
    }    
    for (let i = total - 1; i >= 0; --i) {
        for (let j = total - 1; j >= 0; --j) {
            pathTracking[i][j] = -1;
        }
    }    
    function dp(r1, r2) {
        if (r1 + 1 === total || r2 + 1 === total) {
            return 0;
        }        
        if (pathTracking[r1 + 1][r2 + 1] !== -1) {
            return pathTracking[r1 + 1][r2 + 1];
        } 
        let i = Math.max(r1, r2) + 1,
            robot1Distance = 0,
            robot2Distance = 0,
            direction1 = dp(r1, i),
            direction2 = dp(i, r2),
            baseDistance = Math.abs(queries[i][0] - queries[i][1]);
        if (r2 !== -1) {
            robot2Distance = Math.abs(queries[r2][1] - queries[i][0]);
        }
        if (r1 !== -1) {
            robot1Distance = Math.abs(queries[r1][1] - queries[i][0]);
        }
        let min = Math.min(robot2Distance + direction1 + baseDistance, robot1Distance + direction2 + baseDistance);
        pathTracking[r1 + 1][r2 + 1] = min;
        return min;
    }    
    return dp(-1, -1);
}