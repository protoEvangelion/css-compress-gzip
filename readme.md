# liferay-compress-css

> A js function that integrates with Liferay theme gulp build task to compress /build css &amp; gzip

-   Uses [clean css](https://www.npmjs.com/package/clean-css) to minimize css & gzip to compress in Liferay 7.1 themes
-   We use this together with Nginx
-   This is a function that you can add right after your build stage
-   This is a very rigid package and only minimizes the following files from your theme `/build/css` dir:- font_awesome.css - main.css - clay.css (only gzips doesn't minify because it errs on the local import)
    -   if you would like it to handle more options, open an issue & we will try to make it more flexible for your use case

## Install

```
$ npm install liferay-compress-css
```

## Usage

-   in your theme's `gulpfile.js` this is how you can compress the css right after the build step
-   this will happen if gulp is run with `gulp build` or `gulp deploy`
-   make sure to pass it `done` & `gulp`

```js
const gulp = require('gulp');
const liferayThemeTasks = require('liferay-theme-tasks');

const compressCss = require('liferay-compress-css');

liferayThemeTasks.registerTasks({
	gulp: gulp,
	hookFn: function(gulp) {
		gulp.hook('after:build', done => compressCss(done, gulp));
	},
});
```

## License

[BSD-3-Clause](https://github.com/node-gh/gh/blob/master/LICENSE.txt)
