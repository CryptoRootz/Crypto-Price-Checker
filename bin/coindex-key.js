const program = require('commander');

program
.command('set')
.description('Set API Key -- Get at https://nomics.com')
.action(() => console.log('Hello from set'));

program
.command('show')
.description('Show API Key')
.action(() => console.log('Hello from show'));

program
.command('remove')
.description('Set API Key')
.action(() => console.log('Hello from remove'));

program.parse(process.argv);

funkytown testing