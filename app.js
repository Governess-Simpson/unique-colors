// Initial set of colors to cycle through based on user selection.
let colorCarousel = {
    'red': ['garnet', 'currant', 'sangria'],
    'blue': ['azure', 'lapis', 'admiral'],
    'green': ['chartreuse', 'parakeet', 'fern'],
    'yellow': ['canary', 'tuscan_sun', 'daffodil']
}

// colorCarousel = JSON.stringify(colorCarousel)

function setUniqueColor(id, color){
    return id.innerHTML = color;
}

function changeColor(selectedColor){
    // Injects the stringified array into the HTML based on the initial ID.
    // const carouselID = document.getElementById("carousel");
    const color_1 = document.getElementById("color_1");
    const color_2 = document.getElementById("color_2");
    const color_3 = document.getElementById("color_3");
    const isHidden = document.getElementById('hidden');

    const selectedColorArray = colorCarousel[selectedColor];
    console.log(selectedColorArray)
    console.log(isHidden, isHidden.style.visibility);

    if (!isHidden.style.visibility){
        isHidden.style.visibility = 'visible'
    }

    // For each unique color (inside the bucket of the original color category), we will display them on-screen.
    selectedColorArray.forEach(color => {
        console.log(color, typeof color)
        console.log(selectedColorArray[0], selectedColorArray[1], selectedColorArray[2])
        switch(true){
            case selectedColorArray[0] === color:
                setUniqueColor(color_1, color);
                break;
            case selectedColorArray[1] === color:
                setUniqueColor(color_2, color);
                break;
            case selectedColorArray[2] === color:
                setUniqueColor(color_3, color);
                break;
            default:
                console.log(`Error. ${color} does not equal ${selectedColorArray[0]}`);
                break;
        }
    });

}