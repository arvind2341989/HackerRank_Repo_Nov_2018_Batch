 var time = s.split(':');
    var am_pm = time[2].substring(2,4);
    if (am_pm == "PM") {
        if (time[0] == '12') {
            time[0] = '12';
        }
        else {
            time[0] = parseInt(time[0]) + 12;
            console.log(time[0]);
        }
    }
    else if (am_pm == 'AM') {
        if (time[0] == '12') {
            time[0] = '00';
        }
    }
    var ans = time[0] + ':' + time[1] + ':' + time[2].substring(0,2);
    return ans;