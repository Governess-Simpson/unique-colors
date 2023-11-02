// Initial set of colors to cycle through based on user selection.
let colorCarousel = {
    'red': ['garnet', 'currant', 'sangria'],
    'blue': ['azure', 'lapis', 'admiral'],
    'green': ['chartreuse', 'parakeet', 'fern'],
    'yellow': ['canary', 'tuscan_sun', 'daffodil']
}

// Stores the hex values of the unique color, which we'll use to update the placeholder text color.
let uniqueColorsInfo = {
    // Red
    'garnet': '830E0D',
    'currant': 'AD3D3C',
    'sangria': '92000A',
    // Yellow
    'canary': 'FFFF99',
    'tuscan_sun': 'FFD84D',
    'daffodil': 'FFFF31',
    // Blue
    'azure': '007FFF',
    'lapis': '26619C',
    'admiral': '1D1C57',
    // Green
    'chartreuse': '7FFF00',
    'parakeet': '1AA36D',
    'fern': '71BC78'
}


// Injects the stringified array into the HTML based on the initial ID.
const color_1 = document.getElementById("color_1");
const color_2 = document.getElementById("color_2");
const color_3 = document.getElementById("color_3");
const isHidden = document.getElementById('hidden');

const selectedColorArray = colorCarousel[selectedColor];

// Updates the ID from the HTML tag with the corresponding color.
const setUniqueColorText = (id, color) => id.innerHTML = color;

function displayUniqueColorText(selectedColor){
    if (!isHidden.style.display){
        isHidden.style.display = 'block'
    }

    // For each unique color (inside the bucket of the original color category), we will display them on-screen.
    selectedColorArray.forEach(color => {
        switch(true){
            case selectedColorArray[0] === color:
                setUniqueColorText(color_1, color);
                break;
            case selectedColorArray[1] === color:
                setUniqueColorText(color_2, color);
                break;
            case selectedColorArray[2] === color:
                setUniqueColorText(color_3, color);
                break;
            default:
                console.log(`Error. ${color} does not equal ${selectedColorArray[0]}`);
                break;
        }
    });

}