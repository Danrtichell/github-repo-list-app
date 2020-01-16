#!/usr/bin/env node

const { readdir, writeFileSync } = require('fs');
const { basename, extname, join } = require('path');

readdir(join(__dirname, 'images'), (err, files) => {
  if (err) {
    return console.log(`Unable to scan directory: ${err}`);
  }

  const mapped = files
    .filter(file => file.indexOf('@') < 0)
    .reduce((result, file) => result.concat(imageAssociation(file)), [])
    .join(';\n');

  const content = `${mapped}`;

  writeFileSync(join(__dirname, 'images.js'), content);
});

function titleCase(string) {
  return string
    .split(/[-|_]/)
    .filter(string => string)
    .map(string => string[0].toUpperCase() + string.substr(1).toLowerCase())
    .join('');
}

function imageAssociation(file) {
  const key = titleCase(basename(file, extname(file)));
  return `export const ${key} = require('./images/${basename(file)}')`;
}
