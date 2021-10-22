function convert(temperature, temp_type){
    if (temp_type == "F") {
    temperature = Math.round(temperature * 9/5) + 32; }
    else {
    temperature = Math.round(temperature - 32) * 5/9;
    }
    return temperature
}

console.log(convert(21, "C"));


function tempchanger(element){  
    var temp = document.querySelectorAll('#temp_value')
    for (i = 0; i < temp[i].length; i++)
    {
        temp[i].innerHTML = convert(temp[i].innerHTML, element.value);
    }
}