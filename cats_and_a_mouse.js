function catAndMouse(x, y, z) {
    var a = Math.abs(x - z);
    var b = Math.abs(y - z);
     if (a > b) {
        return "Cat B";
    } else if (a < b) {
        return "Cat A";
    } else {
        return "Mouse C";
    }

}