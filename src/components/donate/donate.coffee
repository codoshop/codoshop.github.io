'use strict'

angular
	.module 'codoshopDonate', []
	.directive 'donate', () ->
		link: (scope, el, attrs, ctrls) ->
			
			return