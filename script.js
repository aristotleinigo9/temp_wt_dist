function conv_temp(){
    var c = document.getElementById('c').value;
    var f = (c*9/5) + 32
    document.getElementById('f').value = f
}

function conv_weight(){
    var kg = document.getElementById('kg').value;
    var lbs = kg * 2.205
    document.getElementById('lbs').value = lbs
}

function conv_distance(){
    var km = document.getElementById('km').value;
    var mi = km / 1.609
    document.getElementById('miles').value = mi
}