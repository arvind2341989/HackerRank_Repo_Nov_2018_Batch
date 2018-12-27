function organizingContainers(container) {
    var numoftypes = container.length;
    var capacityOfContainerList =[];
    var capacityOfEachTypeList = [];
    var i = 0, j = 0;
    while (i < numoftypes) {
        //type t is i
        var capacityOfContainer = 0;
        var capacityOfEachType = 0;
        j = 0;
        while (j < numoftypes) {
            capacityOfContainer += parseInt(container[i][j]);
            capacityOfEachType += parseInt(container[j][i]);
            j++;
        }
        capacityOfContainerList.push(capacityOfContainer);
        capacityOfEachTypeList.push(capacityOfEachType);
        i++;
    }
    capacityOfContainerList.sort();
    capacityOfEachTypeList.sort();
    for (var i = 0; i < capacityOfContainerList.length; i++){
        console.log(capacityOfContainerList[i] + " 1");
        console.log(capacityOfEachTypeList[i] + " 2");
    }
    if (JSON.stringify(capacityOfContainerList) === JSON.stringify(capacityOfEachTypeList)) {
        return "Possible";
    }
    else {
        return "Impossible";
    }
}