'use strict'

angular
	.module 'codoshopWebsiteModal', []
	.directive 'welcome', () ->
		# templateUrl: 'components/modal/modal.html'
		link: (scope, el, attrs, ctrls) -> do (asd = null) ->
			
			scope.tryIt = do (scope) -> () ->
				scope.codoshopVM.modal.show = false;
				return
			return