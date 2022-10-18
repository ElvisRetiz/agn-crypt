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

export function handleUp(container, valuesArray, current) {
    let newValue;
    if (current === valuesArray.length - 1) {
        newValue = 0
    } else {
        newValue = current + 1;
    }
    container.innerText = valuesArray[newValue];
    return newValue
}

export function handleDown(container, valuesArray, current) {
    let newValue;
    if (current === 0) {
        newValue = valuesArray.length - 1
    } else {
        newValue = current - 1
    }
    container.innerText = valuesArray[newValue];
    return newValue
}

export function handleCheck(...args) {
    let comprobation = [25, 23, 0, 4, 5, 12, 0, 19, 5, 9, 28]
    console.log(comprobation.every((v, i) => v === args[i]))
}