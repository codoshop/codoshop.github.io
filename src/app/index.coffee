'use strict'

angular
	.module 'codoshopWebsite', [
		'ngAnimate'
		'ngCookies'
		'ngTouch'
		'ngSanitize'
		'ngResource'
		'ui.router'
		'codoshop'
		'codoshopWebsiteModal'
		'codoshopWebsiteDonate'
		'bardo.directives'
	]
	.config ($stateProvider, $urlRouterProvider) ->
		$stateProvider
			.state 'index',
				url: ''
				views:
					'modal':
						templateUrl: 'components/modal/modal.html'
			.state 'donate',
				url: '/donate'
				views:
					'modal':
						templateUrl: 'components/donate/donate.html'
		return
