const hash = require('./helpers/hash');

class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    set(key, value) {
        const index = hash(key, this.keyMap.length);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        const index = hash(key, this.keyMap.length);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                } 
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keysArray.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keysArray;
    }

    values() {
        const valuesArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // includes all values from the hash table
                    valuesArray.push(this.keyMap[i][j][1]);
                    // code that will leave out duplicated data
                    // if (!valuesArray.includes(this.keyMap[i][j][1])) {
                    //     valuesArray.push(this.keyMap[i][j[1]]);
                    // }
                }
            }
        }
        return valuesArray;
    }
}

const HT = new HashTable(17);
HT.set("maroon", "#800000");
HT.set("yellow", "#FFFF00");
HT.set("olive", "#808000");
HT.set("salmon", "#FA8072");
HT.set("lightcoral", "#F08080");
HT.set("mediumvioletred", "#C71585");
HT.set("plum", "#DDA0DD");
// console.log(HT.keyMap);
// console.log(HT.get('yellow'));
// console.log(HT.get('maroon'));
// console.log(HT.get('hot pink'));
console.log(HT.values());
console.log(HT.keys());