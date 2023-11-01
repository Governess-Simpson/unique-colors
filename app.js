let carousel = [];

const colorCarousel = {
    'red': ['garnet', 'currant', 'sangria'],
    'blue': ['azure', 'lapis', 'admiral'],
    'green': ['chartreuse', 'parakeet', 'fern'],
    'yellow': ['canary', 'tuscan_sun', 'daffodil']
}

function changeColor(e){
    const selectedColor = e.value;
    console.log(selectedColor);
    document.getElementById("test").style.visibility = "visible";
}