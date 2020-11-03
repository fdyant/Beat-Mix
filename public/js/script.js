// Drum Arrays
let kicks = [];
let snares = [];
let hiHats = [];
let rideCymbals = [];

// Function that initializes all arrays to length 16, all false
const setDefaultArrays = () => {
    for (let kicksIndex = 0; kicksIndex < 16; kicksIndex++) {
        kicks.push(false);
    }
    for (let snaresIndex = 0; snaresIndex <16; snaresIndex++) {
        snares.push(false);
    }
    for (let hiHatsIndex = 0; hiHatsIndex <16; hiHatsIndex++) {
        hiHats.push(false);
    }
    for (let rideCymbalsIndex = 0; rideCymbalsIndex <16; rideCymbalsIndex++) {
        rideCymbals.push(false);
    }
}


setDefaultArrays();

const toggleDrum = (drumName , index) => {
    let getDrum = drumName[index];

    if (drumName === undefined || index === undefined) {
        return null;
    }
}

if (getDrum === false) {
    if(drumName === kicks) {
        kicks.splice(index, 1, true);
    }
    if(drumName === snares) {
        snares.splice(index, 1, true);
    }
    if(drumName === hiHats) {
        hiHats.splice(index, 1, true);
    }
    if(drumName === rideCymbals) {
        rideCymbals.splice(index, 1, true);
    }
}

if (getDrum === true) {
    if(drumName === kicks) {
        kicks.splice(index, 1, false);
    }
    if(drumName === snares) {
        snares.splice(index, 1, false);
    }
    if(drumName === hiHats) {
        hiHats.splice(index, 1, false);
    }
    if(drumName === rideCymbals) {
        rideCymbals.splice(index, 1, false);
    }
}

function clear(drumName) {
    if (isValidArray(arrayName)) {
    let array = arrayNameToArray(drumName);
    array.forEach(function(element, index, array) {
    array[index] = false;
    });
    }
}

function invert(drumName) {
    if (isValidArray(drumName)) {
    let array = arrayNameToArray(drumName);
    array.forEach(function(element, index, array) {
    array[index] = array[index] ? false : true;
    });
    }
}