const actionsCase = require('./actionsCase');
const prompt = require('prompt-sync')({sigint: true});
const {help} = require('../help');

module.exports = () => {

    // show welcome help before user input
    console.log('****** Welcome to KeyStore ******');
    console.log(help);

    while(true) {
        
        let input = prompt('>>> ');

        const [action, key, value] = input.split(' ');

        if(actionsCase(action, key, value) === false) break;
    }
}