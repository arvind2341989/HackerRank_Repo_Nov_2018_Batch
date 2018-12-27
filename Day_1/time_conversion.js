function timeConversion(s) {
    var hours = s.split(":");
    var new_hours = "";
    var am_pm = s.slice(8);
    var time = "";

    if (am_pm === "AM") {
        if (hours[0] === "12") new_hours = "00";
        else new_hours = hours[0];   
    }
    if (am_pm === "PM") {
        if (hours[0] === "12") new_hours = "12";
        else new_hours = 12 + parseInt(hours[0]);
    }
    var time = new_hours + ":" + hours[1] + ":" + hours[2].slice(0, 2);
    return time;
}