function towns(towns) {
    let townsArr = [];
    for (let town of towns.slice(1)){
        let [empty, townName, lat, lng] = town.split(/\s*\|\s*/);
        let obj = {Town: townName, Latitude: Number(lat), Longitude: Number(lng)}
        townsArr.push(obj);
    }
    return JSON.stringify(townsArr)
}
console.log(towns((['|Town|Lat|Lng|', '|Sofia |42|23|'])));