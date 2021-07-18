const uslugi = require('./uslugi.js');
const cryptoPro = require('./cryptoPro.js');

const runParser = require('./utils/runParser.js');

async function test() {
  console.log('Running cryptoPro...');
  await runParser(cryptoPro);

  console.log('\n');

  console.log('Running uslugi...');
  await runParser(uslugi);

  process.exit();
}
test();
