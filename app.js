const express = require('express')
const path = require('path')
const {spawn} = require('child_process')

const app = express()
const port = 3000

function runScript(scriptName){
    return spawn('python', [
       "-u",
       path.join(__dirname, scriptName),
      "--foo", "some value for foo",
    ]);
}

function startScript(scriptName) {
    var subprocess = runScript(scriptName);
    subprocess.stdout.on('data', (data) => {
        console.log(`data:${data}`);
    });
    subprocess.stderr.on('data', (data) => {
        console.log(`error:${data}`);
    });
    subprocess.stderr.on('close', () => {
        console.log("Closed");
    });
}

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/start', (req, res) => {
    startScript('automation.py');
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))