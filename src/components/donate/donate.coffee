'use strict'

angular
	.module 'codoshopWebsiteDonate', []
	.directive 'donate', () ->
		link: (scope, el, attrs, ctrls) ->
			
			return