const fs = require('fs');
const YAML = require('yaml');

// d is data storage and ext is flag or extension 
const saveFile = (ext, d) => {
    const data = ext === 'json' ? toJson(d) : ext === 'yaml' ? toYaml(d) : toCsv(d);

    if (checkFileExist('outputs')){
        saveTheOutput(data, ext);
    } else {
        makeDir('outputs');
        saveTheOutput(data, ext);
    }

    return true;
}

const checkFileExist = (name) => {
    return fs.existsSync(name);
}

const saveTheOutput = (data, ext) => {
    fs.writeFileSync(`./outputs/output.${ext}`, data, (error) => {
        if(error) console.log(error);
    });
}

const makeDir = (name) => {
    fs.mkdirSync(name);
}

const toCsv = (data) => {
    const keys = [];
    const values = [];

    for(let key in data) {
        keys.push(key);
        values.push(data[key]);
    }

    return `${keys}\n${values}`
}

const toYaml = (data) => {
    return YAML.stringify(data);
}

const toJson = (data) => {
    return JSON.stringify(data);
}

module.exports = {
    saveFile
}