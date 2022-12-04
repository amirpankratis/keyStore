const fs = require('fs');
const actions = require('../src/actionsCase');

test('SET some sample with values', () => {
    expect(actions('SET', 'name', 'John')).toBe('John');
    expect(actions('SET', 'age', '30')).toBe('30');
    expect(actions('SET', 'city', 'London')).toBe('London');
    expect(actions('SET', 'language', 'English')).toBe('English');
});

test('GET samples that been set before', () =>{
    expect(actions('GET', 'name')).toBe('John');
    expect(actions('GET', 'age')).toBe('30');
    expect(actions('GET', 'city')).toBe('London');
    expect(actions('GET', 'language')).toBe('English');
});

test('SET override a key that been set before', () =>{
    actions('SET', 'age', '50');
    expect(actions('GET', 'age')).toBe('50');
});

test('DEL one of samples been set before', () => {
    expect(actions('DEL', 'language')).toBe(true);
});

test('GET deleted KEY return null', () => {
    expect(actions('GET', 'language')).toBe('null');
});

test('input falsy KEY VALUE return noop', () => {
    expect(actions(undefined, undefined, undefined)).toBe('noop');
    expect(actions('some', undefined, undefined)).toBe('noop');
    expect(actions('some', 'key', undefined)).toBe('noop');
});

test('input falsy Action key value to get null', () => {
    expect(actions('GET', '', undefined)).toBe('null');
    expect(actions('SET', 'name', undefined)).toBe('null');
    expect(actions('SET', 'name', '')).toBe('null');
    expect(actions('DEL', '', undefined)).toBe('null');
    expect(actions('FLAG', '', undefined)).toBe('null');
    expect(actions('FLAG', 'yml', undefined)).toBe('null');
});

test('FLUSH with default flag successfully saved', () => {
    expect(actions('FLUSH')).toBe(true);
});

test('FLAG change to csv and FLUSH successfully', () => {
    expect(actions('FLAG', 'csv')).toBe('csv');
    expect(actions('FLUSH')).toBe(true);
});

test('FLAG change to yaml and FLUSH successfully', () => {
    expect(actions('FLAG', 'yaml')).toBe('yaml');
    expect(actions('FLUSH')).toBe(true);
});

test('EXIT the program successfully', () => {
    expect(actions('EXIT')).toBe(false);
});