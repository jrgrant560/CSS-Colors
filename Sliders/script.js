//rgb slider elements
let rgbRed = document.getElementById("rgbRed");
let rgbGreen = document.getElementById("rgbGreen");
let rgbBlue = document.getElementById("rgbBlue");

//hsl slider elements
let hslHue = document.getElementById("hslHue");
let hslSaturation = document.getElementById("hslSaturation");
let hslLight = document.getElementById("hslLight");

//hsl paletteSquare elements
let paletteHslHue = document.getElementById("paletteHslHue");
let paletteHslSaturation = document.getElementById("paletteHslSaturation");
let paletteHslLight = document.getElementById("paletteHslLight");

//hex slider elements
//NOTE FROM DEV: element's value property is a STRING!... -_-
let hex1 = document.getElementById("hex1");
let hex2 = document.getElementById("hex2");
let hex3 = document.getElementById("hex3");
let hex4 = document.getElementById("hex4");
let hex5 = document.getElementById("hex5");
let hex6 = document.getElementById("hex6");

//hsl paletteSquare elements
let paletteHex1 = document.getElementById("paletteHex1");
let paletteHex2 = document.getElementById("paletteHex2");
let paletteHex3 = document.getElementById("paletteHex3");
let paletteHex4 = document.getElementById("paletteHex4");
let paletteHex5 = document.getElementById("paletteHex5");
let paletteHex6 = document.getElementById("paletteHex6");

//cmyk slider elements
let cmykCyan = document.getElementById("cmykCyan");
let cmykMagenta = document.getElementById("cmykMagenta");
let cmykYellow = document.getElementById("cmykYellow");
let cmykBlack = document.getElementById("cmykBlack");

//linear gradient slider elements
let LGAngle = document.getElementById("LGAngle");
let LGStop1 = document.getElementById("LGStop1");
let LGStop2 = document.getElementById("LGStop2");
let LGStop3 = document.getElementById("LGStop3");

//linear gradient color select elements
let LGColor1 = document.getElementById("LGColor1");
let LGColor2 = document.getElementById("LGColor2");
let LGColor3 = document.getElementById("LGColor3");

//radial gradient slider elements
let RGStop1 = document.getElementById("RGStop1");
let RGStop2 = document.getElementById("RGStop2");
let RGStop3 = document.getElementById("RGStop3");
let RGShineX = document.getElementById("RGShineX");
let RGShineY = document.getElementById("RGShineY");

//radial gradient color select elements
let RGColor1 = document.getElementById("RGColor1");
let RGColor2 = document.getElementById("RGColor2");
let RGColor3 = document.getElementById("RGColor3");

//"display" elements
let displayRGB = document.getElementById("displayRGB");
let displayHSL = document.getElementById("displayHSL");
let displayHex = document.getElementById("displayHex");
let displayCMYK = document.getElementById("displayCMYK");
let displayLinearGradient = document.getElementById("displayLinearGradient");
let displayRadialGradient = document.getElementById("displayRadialGradient");

//display element child article elements
let displayLinearGradientText = document.getElementById("displayLinearGradientText");
let displayRadialGradientText = document.getElementById("displayRadialGradientText");

// NodeList of all "input" elements
let inputList = document.querySelectorAll("input");

// changes "display" element's background whenever input changes
for (let i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener("input", function () {

        //hex slider values (including alpha conversion)
        let hex1Val = convertHexValue(hex1);
        let hex2Val = convertHexValue(hex2);
        let hex3Val = convertHexValue(hex3);
        let hex4Val = convertHexValue(hex4);
        let hex5Val = convertHexValue(hex5);
        let hex6Val = convertHexValue(hex6);

        //paletteSquares
        paletteHslHue.style.background = "hsl(" + hslHue.value + ", 100%, 50%)";
        paletteHslSaturation.style.backgroundImage = "linear-gradient(90deg, hsl(" + hslHue.value + ", 0%, 50%), hsl(" + hslHue.value + ", 100%, 50%))";

        paletteHex1.style.background = "#" + hex1Val + hex2Val + "0000";
        paletteHex1.innerText = hex1Val;
        paletteHex2.style.background = "#" + hex1Val + hex2Val + "0000";
        paletteHex2.innerText = hex2Val;
        paletteHex3.style.background = "#00" + hex3Val + hex4Val + "00";
        paletteHex3.innerText = hex3Val;
        paletteHex4.style.background = "#00" + hex3Val + hex4Val + "00";
        paletteHex4.innerText = hex4Val;
        paletteHex5.style.background = "#0000" + hex5Val + hex6Val;
        paletteHex5.innerText = hex5Val;
        paletteHex6.style.background = "#0000" + hex5Val + hex6Val;
        paletteHex6.innerText = hex6Val;

        //calculated backgrounds
        let rgbBG = "rgb(" + rgbRed.value + ", " + rgbGreen.value + ", " + rgbBlue.value + ")";
        let hslBG = "hsl(" + hslHue.value + ", " + hslSaturation.value + "%, " + hslLight.value + "%)";
        let hexBG = "#" + hex1Val + hex2Val + hex3Val + hex4Val + hex5Val + hex6Val;
        let lGradientBG = "linear-gradient(" + LGAngle.value + "deg, " + LGColor1.value + " " + LGStop1.value + "%, " + LGColor2.value + " " + LGStop2.value + "%, " + LGColor3.value + " " + LGStop3.value + "%)";
        let rGradientBG = "radial-gradient(ellipse at " + RGShineX.value + "% " + RGShineY.value + "%, " + RGColor1.value + " " + RGStop1.value + "%, " + RGColor2.value + " " + RGStop2.value + "%, " + RGColor3.value + " " + RGStop3.value + "%)";
        // changes "displayCMYK" element's 'data-w3-color' attribute to input values
        let cmykBG = "cmyk(" + cmykCyan.value + "%, " + cmykMagenta.value + "%, " + cmykYellow.value + "%, " + cmykBlack.value + "%)";

        // changes "display" element's background to calculated bg values
        displayRGB.style.background = rgbBG;
        displayHSL.style.background = hslBG;
        displayHex.style.background = hexBG;
        displayLinearGradient.style.backgroundImage = lGradientBG;
        displayRadialGradient.style.backgroundImage = rGradientBG;
        displayCMYK['data-w3-color'] = cmykBG;
        // applies CMYK conversion from w3color library
        w3SetColorsByAttributeCMYK();

        //changes "display" element's inner text to reflect the background color
        displayRGB.innerText = rgbBG;
        displayHSL.innerText = hslBG;
        displayHex.innerText = hexBG;
        displayLinearGradientText.innerText = lGradientBG;
        displayRadialGradientText.innerText = rGradientBG;
        displayCMYK.innerText = cmykBG;
    });
}

// variable that is a list of all "select" elements
let selectList = document.querySelectorAll("select");

// changes "display" element's background whenever select changes
for (let i = 0; i < selectList.length; i++) {
    selectList[i].addEventListener("change", function () {

        //select element text colors
        LGColor1.style.color = LGColor1.value;
        LGColor2.style.color = LGColor2.value;
        LGColor3.style.color = LGColor3.value;
        RGColor1.style.color = RGColor1.value;
        RGColor2.style.color = RGColor2.value;
        RGColor3.style.color = RGColor3.value;

        if (selectList[i].value == "white" || selectList[i].value == "yellow" ) {
            selectList[i].style.textShadow = "black 0px 0px 3px";
        } else (
            selectList[i].style.textShadow = ""
        )

        //calculated background values
        let lGradientBG = "linear-gradient(" + LGAngle.value + "deg, " + LGColor1.value + " " + LGStop1.value + "%, " + LGColor2.value + " " + LGStop2.value + "%, " + LGColor3.value + " " + LGStop3.value + "%)";
        let rGradientBG = "radial-gradient(ellipse at " + RGShineX.value + "% " + RGShineY.value + "%, " + RGColor1.value + " " + RGStop1.value + "%, " + RGColor2.value + " " + RGStop2.value + "%, " + RGColor3.value + " " + RGStop3.value + "%)";

        // changes "displayGradient" element's background to calculated linearGradient Values
        displayLinearGradient.style.backgroundImage = lGradientBG;
        displayRadialGradient.style.backgroundImage = rGradientBG;

        //changes "displayGradient" element's inner text to reflect the background color
        displayLinearGradientText.innerText = lGradientBG;
        displayRadialGradientText.innerText = rGradientBG;
    });
}

//converts hex codes 10-15 into a-f
function convertHexValue(hex) {
    let checkHexval = hex.value;
    let hexVal = checkHexval;
    switch (checkHexval) {
        case '10':
            hexVal = "a";
            break;
        case '11':
            hexVal = "b";
            break;
        case '12':
            hexVal = "c";
            break;
        case '13':
            hexVal = "d";
            break;
        case '14':
            hexVal = "e";
            break;
        case '15':
            hexVal = "f";
    };
    return hexVal;
};