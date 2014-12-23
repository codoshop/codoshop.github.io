'use strict'

angular
	.module 'codoshopDonate', ['angular.filter', 'ngResource']
	.directive 'donate', ($resource) ->
		controller: ($scope) ->

			$scope.donList = [
				label: 'windows support'
				progress: 22
			,
				label: 'linux support'
				progress: 32
			,
				label: 'better performance'
				progress: 78
			]


			$scope.custom = [{},{}]

			$scope.amounts = new WeakMap()

			$scope.getters = do (wm = $scope.amounts) -> (k) ->
					(arg) -> do (v = wm.get(k)) ->
						if not arg
							return v ? 0
						else
							wm.set k, arg
						return
			$scope.total = do (wm = $scope.amounts, s = $scope) -> () -> do (keys = null) ->
				keys = [].concat s.donList, s.custom
				keys.reduce (p,k,i,a) ->
					do (v = wm.get(k)) -> 
						if v then p + v else p
				, 0

			$scope.paypal = do (s = $scope) -> () -> do (form = $('#codoshop-donation-form')) ->
				# $(document).trigger 'coinbase_show_modal', 'eae403700bd7f90f6afdd533d96c1a66'
				
				# $resource(url, [paramDefaults], [actions], options);
				# json =
				# 	button:
				# 		name: 'Codoshop donation'
				# 		price_string: '15.00'
				# 		price_currency_iso: 'USD'

				# r = $resource('https://api.coinbase.com/v1/buttons').get()
				# r = $resource 'https://api.coinbase.com/v1/buttons', {},
				# 	foo:
				# 		method: 'POST'
				# 		headers:
				# 			Accept: '*/*'
				# 			'Content-Type': 'application/json'
				# 			ACCESS_KEY: ''
				# 			ACCESS_NONCE: 50
							# Connection: 'close'
							# Host: 'coinbase.com'

				# r.foo json, (u, putResponseHeaders) ->
				# 	console.log u
				# 	return
				form.children('input[name="amount"]').attr 'value', s.total()
				$('#codoshop-donation-form').submit()
				return


			return

		link: (scope, el, attrs, ctrls) ->
			
			return