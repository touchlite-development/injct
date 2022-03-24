/* Variables */

const args = process.argv

const argumentValue = args[2];
const colors = require('colors')

const defaultNoArgString = 
[
    'Sorry! But you need to setup an argument to do that!',
]

/* Not actually used in code, but for my memory :') */

const commands =
[
    '-i',
    '-st',
    '-injct',
    '-help',
]

/* Functions */

function injectst(array, strings)
{
    for (x = 0; x <= strings.length - 1; x++)
    {
        array[array.length] = strings[x];
        console.log('injct:'.green + ' injected ' + String(strings[x]).green + ' into selected array');
    }
}

/* Main Code */

if (argumentValue)
{
    if (argumentValue == '-i')
    {
        let path2 = String(args[3])
        let path1 = String(args[4])

        let split0 = path1.split("/")
        let split1 = path2.split("/")

        console.log('injct:'.green + ' injecting ' + String(split1[split1.length - 1]).green + ' to file: ' + String(split0[split0.length - 1]).green)
    }
    else if (argumentValue == '-injct')
    {
        console.log()
    }
}
else
{
    console.log('injct:'.green + ' sorry! you need to specify an argument value for the function to work! Try again.'.red)
}
