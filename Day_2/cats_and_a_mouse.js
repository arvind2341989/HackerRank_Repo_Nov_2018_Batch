function catAndMouse(x, y, z) {
   
    if (Math.abs(z - x) < Math.abs(y-z))
    {
        return "Cat A";
    }
    else if (Math.abs(z - x) == Math.abs(y - z))
    {
        return "Mouse C";
    }
    else if (Math.abs(z - x) > Math.abs(y - z))
    {
        return "Cat B";
    }


}