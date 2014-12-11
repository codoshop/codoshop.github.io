'use strict'

angular
	.module 'codoshopDonate', []
	.directive 'donate', () ->
		controller: ($scope) ->
			$scope.donList = [
				label: 'windows support'
			,
				label: 'linux support'
			,
				label: 'better performance'
			]
			return
		link: (scope, el, attrs, ctrls) ->
			
			return