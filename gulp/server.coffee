'use strict'

browserSyncInit = (baseDir, routes) ->
	browserSync
		server:
			baseDir: baseDir
			routes: routes

		middleware: middleware

gulp 		= require('gulp')
browserSync = require('browser-sync')
middleware 	= require('./proxy')

bowerRoute 	= '/bower_components': 'bower_components'

gulp.task 'serve', ['watch'], ->
	browserSyncInit [
		'.tmp'
		'src'
	], bowerRoute
	return

gulp.task 'serve:dist', ['build'], ->
	browserSyncInit 'dist', bowerRoute
	return

gulp.task 'serve:e2e', ->
	browserSyncInit [
		'src'
		'.tmp'
	], null
	return

gulp.task 'serve:e2e-dist', ['watch'], ->
	browserSyncInit 'dist', null
	return

