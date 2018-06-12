function solve(arr) {

    let list = [], sum = 0;
    for (let element of arr) {

        let townData = element.split('|');
        let town = townData[1].trim();
        let income = parseInt(townData[2].trim());

        list.push(town);
        sum+=income;
    }
    console.log(list.join(', '));
    console.log(sum);;

}

solve(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);