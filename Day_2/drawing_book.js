function pageCount(n, p) {
    var total_turns = Math.floor(p / 2), req_turn  ;
    if ((n % 2) != 0) {
        req_turn = Math.floor(( n - p )/2);
    }
    else { 
        req_turn = Math.floor(( n - p + 1)/2);
    }
    return Math.min(total_turns, req_turn);
}