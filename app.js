// Initial set of colors to cycle through based on user selection.
const colorCarousel = {
    'red': ['garnet', 'currant', 'sangria'],
    'blue': ['azure', 'lapis', 'admiral'],
    'green': ['chartreuse', 'parakeet', 'fern'],
    'yellow': ['canary', 'tuscan_sun', 'daffodil']
}

function changeColor(selectedColor){
    // Injects the stringified array into the HTML based on the initial ID.
    const carouselID = document.getElementById("carousel");
    carouselID.innerHTML = JSON.stringify(colorCarousel[selectedColor]);
}