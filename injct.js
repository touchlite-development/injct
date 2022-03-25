/* Variables */

const args = process.argv

const argumentValue = args[2];
const colors = require('colors')
const fs = require('fs')

const defaultNoArgString = 
[
    'Sorry! But you need to setup an argument to do that!',
]

/* For my memory and code */

const commands = Array();

commands[0] = '-i'
commands[1] = '-st'
commands[2] = '--injct'
commands[3] = '--help'
commands[4] = '--link'

/* Functions */

function injectst(array, strings)
{
    for (x = 0; x <= strings.length - 1; x++)
    {
        array[array.length] = strings[x];
        console.log('injct:'.green + ' injected ' + String(strings[x]).green + ' into selected array');
    }
}

function injctLog(x)
{
    console.log('injct: '.green + x)
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

        /*if (!fs.access(path1))
        {
            injctLog('cannot inject, permissions not granted'.red)
        }*/

        /*if (!fs.access(path2))
        {
            injctLog('cannot inject, permissions not granted'.red)
        }*/

        if (!fs.existsSync(path2))
        {
            injctLog('cannot find file '.red + String(split1[split1.length - 1]).green)
            /*throw new Error('/nil/')*/
        }

        if (!fs.existsSync(path1))
        {
            injctLog('cannot find file '.red + String(split0[split0.length - 1]).green)
            /*throw new Error('/nil/')*/
        }

        if (fs.lstatSync(path2).isFile())
        {
            if (fs.lstatSync(path1).isFile())
            {
                var data = fs.readFileSync(path1, 'utf-8');
                var firstFile = fs.readFileSync(path2, 'utf-8');

                injctLog('old data: \n' + data.bold.blue)

                data = data + '\n\n' + firstFile;

                injctLog('new data: \n' + data.bold.blue)

                fs.writeFileSync(path1, data, 'utf-8');

                injctLog('check your file!')
            }
            else
            {
                fs.copyFile(path2, path1, (err) => {
                    if (err) throw err;
                    injctLog('successfully injected ' + String(split1[split1.length - 1]).green + 'to file' + String(split0[split0.length - 1]).green);
                });
            }
        }
        else if (fs.lstatSync(path1).isFile())
        {
            fs.copyFile(path2, path1, (err) => {
                if (err) throw err;
                injctLog('successfully injected ' + String(split1[split1.length - 1]).green + 'to file' + String(split0[split0.length - 1]).green);
            });
        }
        else
        {
            injctLog('failed to compute'.red)
            /*throw new Error('/nil/')*/
        }
    }
    else if (argumentValue == '--injct')
    {
        injctLog('https://github.com/touchlite-development/injct')
    }
    else if (argumentValue == '--link')
    {
        injctLog('https://github.com/touchlite-development/injct')
    }
    else if (argumentValue == '--help')
    {
        for (x = 0; x <= commands.length - 1; x++)
        {
            console.log('injct command: '.green + String(commands[x]).blue)
        }
    }
    else if (argumentValue == '-st')
    {   
        var list = []
        var passing = 0;
        for (x = 3; x <= args.length - 1; x++)
        {   
            list[passing] = args[x];
            passing ++;
        }
        injectst(Array(), list)
    }
}
else
{
    console.log('injct:'.green + ' sorry! you need to specify an argument value for the function to work! Try again.'.red)
}