#! /usr/bin/env node
// 上面一行检测环境变量的 必须在第一行
// #! 符号的名称叫 Shebang，用于指定脚本的解释程序
// Node CLI 应用入口文件必须要有这样的文件头
// 如果是Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js 实现修改
const program = require('commander')
const chalk = require('chalk')
const figlet = require('figlet')
// 配置创建命令
program
   .command('create <app-name>')   // 定义命令和参数
   .description('create a new project')
   // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
   .option('-f, --force', 'overwrite target directory if it exist')
   .action((name, options) => {
       require('../lib/create')(name,options)
  })

  program
   // 配置版本号信息
  .version(`v${require('../package.json').version}`)
  .usage('<command> [option]')


// 配置 config 命令
program
    .command('config [value]')
    .description('inspect and modify the config')
    .option('-g, --get <path>', 'get value from option')
    .option('-s, --set <path> <value>')
    .option('-d, --delete <path>', 'delete option from config')
    .action((value, options) => {
    console.log(value, options)
    })

// 配置 ui 命令
program
    .command('ui')
    .description('start add open roc-cli ui')
    .option('-p, --port <port>', 'Port used for the UI Server')
    .action((option) => {
    console.log(option)
    })


program
  // 监听 --help 执行
  .on('--help', () => {
    console.log('\r\n' + figlet.textSync('canway', {
        font: 'Big Money-ne',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
      }));
    // 增加说明信息
    console.log(`\r\nRun ${chalk.cyan(`way <command> --help`)} for detailed usage of given command\r\n`)
  })
  // 解析用户执行命令传入参数
program.parse(process.argv);


// const inquirer = require('inquirer')
// inquirer.prompt([
//     {
//         type:'input',
//         name:'name',
//         message:'your name',
//         default: 'my-node-cli' // 默认值
//     }
// ]).then((answers )=>{
//     console.log(answers );
// })
