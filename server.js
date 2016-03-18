/**
 *   Copyright 2016 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

var express    = require('express');
var bodyParser = require('body-parser');
var cors       = require('cors');
var figlet     = require('figlet');
var chalk      = require('chalk');
var app        = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require('./server/routes.js')(app);

var server = app.listen(9999, function() {
  figlet(' Mock server NodeJS', {
      font: 'Slant'
    }, function(err, data) {
    console.log(chalk.red(data) + '\n');
    console.log(chalk.bold(' Access URL:'));
    console.log(chalk.blue(' -------------------------------------'));
    console.log(' Server runs at: ' + chalk.blue('http://localhost:' + server.address().port));
    console.log(chalk.blue(' -------------------------------------\n'));
    console.log(' Hit \'' + chalk.blue('<ctrl-c>') + '\' to shutdown.\n');
  });
});
