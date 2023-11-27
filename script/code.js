function convertRGBtoHex() {
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;

    // Ensure that the values are within the valid range (0-255)
    red = Math.min(255, Math.max(0, red));
    green = Math.min(255, Math.max(0, green));
    blue = Math.min(255, Math.max(0, blue));

    // Convert RGB to hexadecimal
    var hexColor = "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);

    // Display the result
    document.getElementById("result").innerText = "Hex: " + hexColor;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}