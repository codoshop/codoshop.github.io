'use strict'

###
 # @ngdoc function
 # @name codoshop
 # @description
 # codoshop module
###

angular
	.module('codoshopWebsite')
	.directive 'codoshopWebsitee', () ->
		link: (scope, el, attrs, ctrls) ->

			scope.openFiles =
				[
					name: 'main.scss'
					mode:
						name: 'text/x-scss'
					content:
						"""
						body {
							width: 100%;
							height: 100%;
							background-color: #eee;
							border-top: 5px dotted #0000ff;
							border-bottom: none;
							color: #def;
						}

						$what: #fff;
						"""
					selected: true
				,
					name: 'index.html'
					mode: 'htmlmixed'
					content:
						"""
						<!doctype html>
						<html>
							<head></head>
							<body>
								Hello there.
							</body>
						</html>
						"""
					selected: false
				,
					name: 'main.coffee'
					mode:
						name: 'coffeescript'
					content:
						"""
						'use strict'

						###*
						 # @ngdoc service
						 # @name codoshopApp.Parser
						 # @description
						 # # Parser
						 # Service in the codoshopApp.
						###
						angular.module('codoshop-parser', [])
							.factory 'parser', () ->
								# AngularJS will instantiate a singleton by calling "new" on this function
								
								what: true

						"""
					selected: false
				]

			scope.projects ?= []
			scope.projects.push proj for proj in [
				name: 'Codoshop-Website'
			,
				name: 'Codoshop'
				status: 'expanded'
				dirTree:
					[
						name: 'My Project'
						type: 'dir'
						status: 'open'
						nodes: [
								name: 'js'
								'type': 'dir'
								'status': 'open'
								'nodes': [ 
									'name': 'main.js'
									'type': 'file'
									]
							,
								'name': 'scss'
								'type': 'dir'
								'status': 'open'
								'nodes': [ 
									'name': 'nav-bar.scss'
									'type': 'file'
									]
							]
					]
			]

			return
	.directive 'main', () ->
		templateUrl: 'app/main/main.html'
		link: (scope, el, attrs, ctrls) ->

			scope.slickConfig =
				dots: true
				autoplay: false
				autoplaySpeed: 3000
				slidesToShow: 3
				onAfterChange: (slick, index) -> do (slides = null) ->
					# slides = $('.slick-track').children().not('.slick-cloned')
					# if index >= slides.length
					# 	return
					# $(slides[index]).find('video').each(playVideo)
					return

			scope.media1 = [
				mimeType: 'image/jpeg'
				src: 'http://i1-linux.softpedia-static.com/screenshots/Mac-OS-X-theme_1.jpg'
			,
				mimeType: 'image/jpeg'
				src: 'http://i1-linux.softpedia-static.com/screenshots/Mac-OS-X-theme_1.jpg'
			]

			scope.codoshopVM ?= {} 
			scope.codoshopVM.modal =
					show: true
			return
