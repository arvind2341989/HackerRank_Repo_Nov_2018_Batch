// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    var bird = [0, 0, 0, 0, 0];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 1) bird[0]++;
        else if (arr[i] == 2) bird[1]++;
        else if (arr[i] == 3) bird[2]++;
        else if (arr[i] == 4) bird[3]++;
        else bird[4]++;
    }
    var counter = 0;
    for (let i = 0; i < bird.length; i++){
        if(bird[counter] < bird[i]) counter = i;
    }
    return ++counter;

}