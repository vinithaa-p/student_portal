const { format } = require('data-fns');
const { v4: uuidv4 } = require('uuid');

const fs=require('fs')
const fsPromises=require('fs').promises
const path=require('path')

const logEvents=async(message) =>
{
    const dateTime=`${format(new Date(),'ddMMyyyy\tHH:mm:ss')}`
    const logItem=`${dateTime}\t${uuid()}\t${message}\n`
    console.log(logItem)
    try{
        if(!fs.existsSync(path.join(__dirname,'logs')))
        {
            await fsPromises.mkdir(path.join(__dirname,'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'logs','eventFile.txt'),logItem)
    }catch(err)
    {
        console.error(err)
    }
}

module.exports=logEvents