usr/bin/env node

var fs = require('fs');
var sys = require('util');
var rest = require('restler');
var program = require('commander');
var cheerio = require('cheerio');
var HTMLFILE_DEFAULT = "index.html";
//var HTMLFILE_DEFAULT = "urlString.txt";
var CHECKSFILE_DEFAULT = "checks.json";
var URL_DEFAULT = "http://mysterious-coast-2071.herokuapp.com";
//var URL_DEFAULT = "urlString.txt";
//var restHtmlFile = function(urlfile) {
//rest.get(urlfile).on('complete', function(result) {
//fs.writeFileSync("urlString.txt", result);
//  return cheerio.load(fs.readFileSync("urlString.txt"));
//}
//)};

var assertFileExists = function(infile) {
    var instr = infile.toString();
    if ( !fs.existsSync(instr)) {
	console.log("%s does not exist. Exiting.", instr);
	process.exit(1);
	}
    return instr;
};

var cheerioHtmlFile = function(htmlfile) {
    return cheerio.load(fs.readFileSync(htmlfile));
};

var loadChecks = function(checksfile) {
    return JSON.parse(fs.readFileSync(checksfile));
};

var checkHtmlFile = function(htmlfile, checksfile) {
      $ = cheerioHtmlFile(htmlfile);
//    $ = restHtmlFile(htmlfile);
    var checks = loadChecks(checksfile).sort();
    var out = {};
    for (var ii in checks) {
	var present = $(checks[ii]).length > 0;
	out[ checks[ii]] = present;
	}
    return out;
};

if (require.main == module) {
    program
	.option('-c, --checks ', 'Path to checks.json', assertFileExists, CHECKSFILE_DEFAULT)
    .option('-f, --file ', 'Path to index.html', assertFileExists, HTMLFILE_DEFAULT)
    .option('-u, --url ', 'Path to htmlfile', assertFileExists, URL_DEFAULT)
    .parse(process.argv);
    console.log(program.checks);
    console.log(program.url);
    rest.get(program.url).on('complete', function(result) {
	fs.writeFileSync("urlString.txt", result);
});

//    var checkJson = checkHtmlFile(program.file, program.checks);
    var checkJson = checkHtmlFile("urlString.txt", program.checks);
    var outJson = JSON.stringify(checkJson, null, 4);
    console.log(outJson);
} else {
    exports.checkHtmlFile = checkHtmlFile;
}
