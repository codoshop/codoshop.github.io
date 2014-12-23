'use strict'

angular
	.module 'codoshopAbout', ['firebase']
	.directive 'about', ($firebase) ->
		# templateUrl: 'components/modal/modal.html'
		link: (scope, el, attrs, ctrls) -> do (fb = null, sync = null) ->
			
			fb = new Firebase('https://codoshop.firebaseio.com/')
			sync = $firebase fb
			scope.donStats = sync.$asObject()
			# console.log scope.donStats


			scope.tryIt = do (scope) -> () ->
				scope.codoshopVM.modal.show = false;
				return
			return