#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const marked = require('marked');
const pdf = require('html-pdf');
const agreementName = process.argv[2]; // i.e. foo_agreement

const source = agreementName.includes('.md')
  ? agreementName
  : agreementName + '.md';

const html = marked(fs.readFileSync(source, 'utf8'));

const options = {
  base: 'file://' + path.resolve(source),
  format: 'A4',
  border: '0.75in'
};

pdf.create(html, options).toFile(agreementName + '.pdf', function(err, res) {
  if (err) {
    return console.log(err);
  }

  console.log(res);
});

