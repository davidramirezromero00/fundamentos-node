const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

// Encuentra solo palabras formadas por letras o números (ignorando markdown, símbolos, etc.)
const words = content.match(/\b\w+\b/g);

const wordcount = words ? words.length : 0;

console.log('Palabras:', wordcount);

