'use strict'

angular
	.module 'codoshopAbout', []
	.directive 'about', () ->
		# templateUrl: 'components/modal/modal.html'
		link: (scope, el, attrs, ctrls) ->
			
			scope.tryIt = do (scope) -> () ->
				scope.codoshopVM.modal.show = false;
				return
			return