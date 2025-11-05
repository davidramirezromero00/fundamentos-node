
const fs = require('fs');


const data = fs.readFyleSync('README.md', 'utf8');

const newdata = data.replace(/React/ig,  'Angular');


fs.readFileSync('README-Angular.md', newdata);


