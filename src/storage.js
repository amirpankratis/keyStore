const { saveFile } = require('./file');

module.exports = class Storage {
    constructor() {
        this.storage = {}
        this.availableOutputs = ['json', 'csv', 'yaml'];
        this.flag = 'json';
    }

    addItem(key, value) {
        if (this.validate(key) && this.validate(value)){
            return this.storage[key] = value;
        }
        return this.printError()
    }

    printValueByKey(key) {
        if (this.validate(key) && key in this.storage){
            console.log(this.storage[key])
            return this.storage[key];
        }
        return this.printError()
    }

    deleteItemByKey(key) {
        if (this.validate(key) && key in this.storage){
            return delete this.storage[key];
        }
        return this.printError()
        
    }

    changeFlag(key) {
        if(this.availableOutputs.includes(key)){
            return this.flag = key;
        }
        return this.printError();
    }

    saveCurrentStorage() {
        return saveFile(this.flag, this.storage);
    }

    validate(i) {
        if (i !== undefined && i.length !== 0) return true;
        return false;
    }

    printError() {
        console.log("null");
        return 'null'
    }
}