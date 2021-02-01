const { Input } = require('enquirer');
const { Password } = require('enquirer');
import chalk from 'chalk';
import Api from './src/api/Api';

const api = new Api(true); //Depois botar algua configuração de variavel de ambiente para ativar ou não o debug

async function start(api : Api) {
  console.log(chalk.bold('Insira o seus dados do PontoMais!'));
  const promptUser = new Input({
    message: 'Usuario',
  });
  const promptPassword = new Password({
    name: 'password',
    message: 'Senha'
  });

  let user : string = await promptUser.run();
  let password : string = await promptPassword.run();
  api.login(user, password);
}


start(api);