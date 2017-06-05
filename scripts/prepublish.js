#!/usr/bin/env node

const fs = require('fs');
const json = require('comment-json');

const options = {encoding: 'utf8'};

function stripComments(filename) {
  const object = json.parse(fs.readFileSync(filename, options), null, true);

  fs.writeFileSync(filename, JSON.stringify(object, null, 2), options);
}

stripComments('tsconfig.json');
stripComments('tslint.json');
