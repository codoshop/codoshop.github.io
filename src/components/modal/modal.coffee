'use strict'

angular
	.module 'codoshopModal', ['codoshopAbout', 'codoshopDonate']
	.directive 'dialog', () ->
		templateUrl: 'components/modal/modal.html'
		link: (scope, el, attrs, ctrls) -> do (parent = null) ->
			
			scope.tryIt = do (s = scope) -> () ->
				s.codoshopVM.dialog.show = false
				return

			parent = scope.codoshopVM.dialog.parent
			el.appendTo parent if parent
			return