function hurdleRace(k, height) {
    var hurdles = 0; 
    for (var i = 0; i < height.length; i++) {  
        if (height[i] > k) { 
            if ((height[i] - k) > hurdles) { 
                hurdles = height[i] - k;
            }
        }
    }
    return hurdles;
}