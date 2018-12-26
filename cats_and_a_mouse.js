function catAndMouse(x, y, z) {
    var distFromX = Math.abs(z - x);
    var distFromY = Math.abs(z - y);
    if (distFromX == distFromY) {
        return "Mouse C";
    }
    else if (distFromX > distFromY) {
        return "Cat B";
    }
    else {
        return "Cat A";
    }
}
