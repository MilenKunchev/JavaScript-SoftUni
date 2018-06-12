function townsToJSON(inputArr) {

    let townsArr = [];
    for (let town of inputArr.slice(1)){

        let [empty,townName,lat,lng] = town.split(/\s*\|\s*/g);

        let townObj = {Town:townName,Latitude:Number(lat),Longitude:Number(lng)};

        townsArr.push(townObj);
    }
    console.log(townsArr);
    console.log(JSON.stringify(townsArr));

}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);