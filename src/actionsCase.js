const {help} = require('../help');
const Storage = require('./storage');

// storage
const storage = new Storage();

module.exports = (action, key, value) => {
    switch(action){
        case 'SET':
            return storage.addItem(key, value);
        case 'GET':
            return storage.printValueByKey(key);
        case 'DEL':
            return storage.deleteItemByKey(key);
        case 'FLAG':
            return storage.changeFlag(key);
        case 'FLUSH':
            return storage.saveCurrentStorage();
        case 'HELP':
            return console.log(help);
        case 'EXIT':
            return false;
        default:
            console.log('noop');
            return 'noop';
    }
}