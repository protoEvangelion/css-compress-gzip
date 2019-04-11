#!/usr/bin/env node
'use strict';
const meow = require('meow');
const liferayCompressCss = require('.');

const cli = meow(`
	Usage
	  $ liferay-compress-css [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ liferay-compress-css
	  unicorns & rainbows
	  $ liferay-compress-css ponies
	  ponies & rainbows
`);

console.log(liferayCompressCss(cli.input[0] || 'unicorns'));
