// function bgColorTitles(className) {
//     let markerElems = document.getElementsByClassName(className);

//     let markerElemsArray = [].slice.call(markerElems);

//     markerElemsArray.forEach(element =>
//         element.title = window.getComputedStyle( element , null).getPropertyValue( 'background-color' )
//     );
// }

// bgColorTitles('markerA');

// function bgImageTitles(className) {
//     let markerElems = document.getElementsByClassName(className);

//     let markerElemsArray = [].slice.call(markerElems);

//     markerElemsArray.forEach(element =>
//         element.title = window.getComputedStyle( element , null).getPropertyValue( 'background-image' )
//     );
// }

// bgImageTitles('markerB');


function applyBGArray(className) {
    //all elements with target class as HTMLCollection
    let markerElems = document.getElementsByClassName(className);

    //all elements with target class as Array
    let markerElemsArray = [].slice.call(markerElems);

    //apply background to all elements in target array
    markerElemsArray.forEach(element =>
        element.style.background = element.innerText
    );
};

applyBGArray('markerA');
applyBGArray('markerB');

function applyBGButton(submitId, targetClass) {
    //source element
    let submittedId = document.getElementById(submitId);

    //all elements with target class as HTMLCollection
    let targetElems = document.getElementsByClassName(targetClass);

    //all elements with target class as Array
    let targetElemsArray = [].slice.call(targetElems);

    //apply background to all elements in target array
    targetElemsArray.forEach((element) => {
        element.style.backgroundColor = submittedId.value;
        element.innerText = element.style.backgroundColor
    });

};