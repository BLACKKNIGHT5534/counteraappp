let count = 0;
let number = 1;

function plus5() {
    let box5 = document.getElementById("plus5");
    let box25 = document.getElementById("plus25");

    if (box5.checked) {
        number = 5;
        box25.checked = false; // Uncheck the other box instantly
    } else {
        number = 1; // Default back to 1 if unchecked
    }
}

function plus25() {
    let box5 = document.getElementById("plus5");
    let box25 = document.getElementById("plus25");

    if (box25.checked) {
        number = 25;
        box5.checked = false; // Uncheck the other box instantly
    } else {
        number = 1; // Default back to 1 if unchecked
    }
}

function change() {
    document.getElementById("counter").textContent = count;
}

document.getElementById("increase").onclick = function() {
    if (count + number <= 100) {
        count += number;
        change();
    }
};

document.getElementById("decrease").onclick = function() {
    if (count - number >= 0) {
        count -= number;
        change();
    }
};

document.getElementById("reset").onclick = function() {
    count = 0;
    // Optional: uncheck the boxes on reset if you want
    document.getElementById("plus5").checked = false;
    document.getElementById("plus25").checked = false;
    number = 1;
    change();
};

document.getElementById("random").onclick = function() {
    count = Math.floor(Math.random() * 100) + 1;
    change();
};