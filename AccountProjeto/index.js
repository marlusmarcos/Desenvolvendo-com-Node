const inquirer = require ("inquirer");
const chalk = require ("chalk");
const fs = require ('fs');

function operation() {
    inquirer.prompt ([
    {
        type: 'list',
        name: 'action',
        message: 'O que quer fazer?',
        choices: ['1. Criar Conta','2. Ver conta', '3. Creditar', '4. Debitar', '5. Sair']
    },
    ],
    ).then((answer) => {
        const action = answer['action']
        //console.log (action)
        if (action === '1. Criar Conta') {
            createCount();
            buildCount();
        } else if (action === '5. Sair') {
            console.log (chalk.bgGreen ("obrigado por utilizar nosso sistema!"));
            process.exit();
        }
    }
    ).catch(err => console.log(err))
}

function createCount (){
    console.log(chalk.bgGreen.black("Obrigado pela escolha"));
    console.log (chalk.green("Defina as opções"));
}


function buildCount () {
    inquirer.prompt ([{
        name:"accountName",
        message:"Digite o nome da conta!"
    }]).then(answer => {
        const accountname = answer['accountName']
        console.log (accountname)
        if (!fs.existsSync('accounts')) {
            fs.mkdirSync ('accounts')
        }
        if (fs.existsSync(`accounts/${accountname}.json`)) {
            console.log(chalk.bgRed.black(`Já existe uma conta com o nome ${accountname}, tente outra`))
            buildCount();
            return
        } else {
            fs.writeFileSync(`accounts/${accountname}.json`, '{"balance": 0}', function (err) {
                console.log(err);
            }
            )
        }
        operation();

    }).catch()
}
operation();