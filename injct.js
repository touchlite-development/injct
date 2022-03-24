const argumentValue = process.argv[1];
const colors = require('colors')

function inject(array, strings)
{
    for (x = 0; x <= strings.length; x++)
    {
        array[array.length] = strings[x];
        console.log('injct:'.green + ' injected ' + String(strings[x]).green + ' into selected array');
    }
}

inject(Array(), argumentValue)