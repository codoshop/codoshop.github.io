'use strict'

angular
	.module 'codoshopModal', ['codoshopAbout', 'codoshopDonate']
	.directive 'modal', () ->
		templateUrl: 'components/modal/modal.html'
		link: (scope, el, attrs, ctrls) -> do (asd = null) ->
			
			scope.tryIt = do (scope) -> () ->
				scope.codoshopVM.modal.show = false;
				return
			return