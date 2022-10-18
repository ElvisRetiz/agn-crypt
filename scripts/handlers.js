export function handleForward(imgContainer, imgArray, imgCurrent) {
    let newValue;
    if (imgCurrent === imgArray.length - 1) {
        newValue = 0
    } else {
        newValue = imgCurrent + 1;
    }
    imgContainer.src = imgArray[newValue];
    return newValue
}

export function handleBackward(imgContainer, imgArray, imgCurrent) {
    let newValue;
    if (imgCurrent === 0) {
        newValue = imgArray.length - 1
    } else {
        newValue = imgCurrent - 1
    }
    imgContainer.src = imgArray[newValue];
    return newValue
}