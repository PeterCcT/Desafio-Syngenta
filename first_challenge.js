function getGreenPointsFromImage(path,callback) {
    let greenPoints = 0
    const fs = require('fs')
    const stream = fs.createReadStream(path)
    return stream.on(
        'data',
        (chunk) => {
            greenPoints += getGreenPointsFromChunk(chunk)
        }).on('end', () => callback(greenPoints))
}

function getGreenPointsFromChunk(chunk) {
    const DECIMAL_GREEN_POINT_CODE = 51
    let greenPoints = 0
    chunk.forEach(element => {
        if (element === DECIMAL_GREEN_POINT_CODE)
            greenPoints++
    })
    return greenPoints
}

getGreenPointsFromImage('./Syngenta.bmp',(greenPointsQuantity) =>{
    console.log(`The quantity of green points is ${greenPointsQuantity}`)
})



