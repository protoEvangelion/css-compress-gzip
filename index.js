/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

const { unlinkSync } = require('fs');
const { performance } = require('perf_hooks');
const addsrc = require('gulp-add-src');
const colors = require('ansi-colors');
const cleanCSS = require('gulp-clean-css');
const gzip = require('gulp-gzip');
const log = require('fancy-log');

module.exports = function compressCss(done, gulp) {
	const startTime = performance.now();

	return gulp
		.src(['build/css/main.css', 'build/css/font_awesome.css'])
		.pipe(cleanCSS())
		.pipe(gulp.dest('build/css'))
		.pipe(addsrc('build/css/clay.css'))
		.pipe(gzip({ append: true }))
		.pipe(gulp.dest('build/css'))
		.on('end', () => {
			const endTime = performance.now();
			const timeElapsed = Math.round(endTime - startTime);
			const timeFormatted =
				timeElapsed < 1000
					? `${timeElapsed} ms`
					: `${timeElapsed / 1000} s`;

			log(
				`Finished '${colors.cyan('build:compress')}' ${colors.magenta(
					timeFormatted
				)}`
			);

			done();
		});
};
