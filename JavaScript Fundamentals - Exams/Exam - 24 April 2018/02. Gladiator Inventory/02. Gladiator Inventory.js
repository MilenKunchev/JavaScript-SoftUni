function gladiatorInventory(inputArr) {

    let inventory = inputArr[0].trim().split(/\s/g);

    for (let tokens of inputArr.slice(1)) {

        let command = tokens.split(/\s/g)[0];

        if (command !== 'Fight!') {

            let equipment = tokens.split(/\s/g)[1];

            switch (command) {
                case 'Buy':
                    if (!itExists(inventory, equipment)) {
                        inventory.push(equipment);
                    }
                    break;
                case 'Trash':
                    if (itExists(inventory, equipment)) {
                        let index = inventory.indexOf(equipment);
                        inventory.splice(index, 1);
                    }
                    break;
                case 'Repair':
                    if (itExists(inventory, equipment)) {
                        let index = inventory.indexOf(equipment);
                        inventory.splice(index, 1);
                        inventory.push(equipment);
                    }
                    break;
                case 'Upgrade':
                    inventory = upgrade(inventory, equipment);
                    break;
            }
        }
    }

    console.log(inventory.join(' '));

    function itExists(inventory, equipment) {
        let exist = inventory.includes(equipment);
        return exist;
    }

    function upgrade(inventory, equipment) {

        let upgrade = `${equipment.split('-')[0]}:${equipment.split('-')[1]}`;
        // Check for upgraded equipment
        if (itExists(inventory, upgrade)) {
            return inventory;
        }
        let arrLength = inventory.length;
        equipment = equipment.split('-')[0];
        if (itExists(inventory, equipment)) {
            let index = inventory.indexOf(equipment);
            let leftPart = inventory.slice(0, arrLength - (arrLength - (index + 1)));
            leftPart.push(upgrade);
            let result = leftPart.concat(inventory.slice(index + 1, arrLength));
            return result;
        }
        return inventory;
    }
}


gladiatorInventory([
    'SWORD Shield Spear'
    ,'Buy Bag'
    ,'Trash Shield'
    ,'Repair Spear'
    ,'Upgrade SWORD-Steel'
    ,'Fight!'

]);

gladiatorInventory([
    'Bow Helmet'
    , 'Upgrade Helmet-V'
    , 'Fight!']);