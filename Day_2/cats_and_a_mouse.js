function catAndMouse(x, y, z) {
    if (Math.abs(z-x) > Math.abs(z-y)) {
        return "Cat B";
    }
    else if (Math.abs(z - x) < Math.abs(z - y)) {
        return "Cat A";
    }
    else {
        return "Mouse C";
    }
}