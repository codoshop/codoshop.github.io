(function(){"use strict";angular.module("codoshopWebsite",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","codoshop","codoshopModal","bardo.directives"]).config(["$stateProvider","$urlRouterProvider",function(i){i.state("index",{url:"",views:{modal:{templateUrl:"components/about/about.html"}}}).state("donate",{url:"/donate",views:{modal:{templateUrl:"components/donate/donate.html"}}})}])}).call(this),function(){"use strict";angular.module("codoshopWebsite").directive("codoshopWebsitee",function(){return{link:function(i){var o,e,t,d;for(i.openFiles=[{name:"main.scss",mode:{name:"text/x-scss"},content:"body {\n	width: 100%;\n	height: 100%;\n	background-color: #eee;\n	border-top: 5px dotted #0000ff;\n	border-bottom: none;\n	color: #def;\n}\n\n$what: #fff;",selected:!0},{name:"index.html",mode:"htmlmixed",content:"<!doctype html>\n<html>\n	<head></head>\n	<body>\n		Hello there.\n	</body>\n</html>",selected:!1},{name:"main.coffee",mode:{name:"coffeescript"},content:"'use strict'\n\n###*\n # @ngdoc service\n # @name codoshopApp.Parser\n # @description\n # # Parser\n # Service in the codoshopApp.\n###\nangular.module('codoshop-parser', [])\n	.factory 'parser', () ->\n		# AngularJS will instantiate a singleton by calling \"new\" on this function\n		\n		what: true\n",selected:!1}],null==i.projects&&(i.projects=[]),d=[{name:"Codoshop-Website"},{name:"Codoshop",status:"expanded",dirTree:[{name:"My Project",type:"dir",status:"open",nodes:[{name:"js",type:"dir",status:"open",nodes:[{name:"main.js",type:"file"}]},{name:"scss",type:"dir",status:"open",nodes:[{name:"nav-bar.scss",type:"file"}]}]}]}],e=0,t=d.length;t>e;e++)o=d[e],i.projects.push(o)}}}).directive("main",function(){return{templateUrl:"app/main/main.html",controller:["$scope",function(i){i.reset=function(i){return function(){i.codoshopVM.dialog.show=!0}}(i)}],link:function(i){return function(o){var e;i.slickConfig={dots:!0,autoplay:!1,autoplaySpeed:3e3,slidesToShow:3,onAfterChange:function(){return function(){}(null)}},i.media1=[{mimeType:"image/jpeg",src:"http://i1-linux.softpedia-static.com/screenshots/Mac-OS-X-theme_1.jpg"},{mimeType:"image/jpeg",src:"http://i1-linux.softpedia-static.com/screenshots/Mac-OS-X-theme_1.jpg"}],o=$("div[ng-attr-codoshop]"),o.css("left",$(window).width()/2-o.width()/2),o.css("top",$(window).height()/2-o.height()/2),null==i.codoshopVM&&(i.codoshopVM={}),null==(e=i.codoshopVM).dialog&&(e.dialog={}),i.codoshopVM.dialog={show:!0,modal:!0,parent:$(".modal-wrapper")}}(null)}}})}.call(this),function(){"use strict";angular.module("codoshopModal",["codoshopAbout","codoshopDonate"]).directive("dialog",function(){return{templateUrl:"components/modal/modal.html",link:function(i,o){return function(e){i.tryIt=function(i){return function(){i.codoshopVM.dialog.show=!1}}(i),e=i.codoshopVM.dialog.parent,e&&o.appendTo(e)}(null)}}})}.call(this),function(){"use strict";angular.module("codoshopAbout",["firebase"]).directive("about",["$firebase",function(i){return{link:function(o){return function(e,t){e=new Firebase("https://codoshop.firebaseio.com/"),t=i(e),o.donStats=t.$asObject(),o.tryIt=function(i){return function(){i.codoshopVM.modal.show=!1}}(o)}(null,null)}}}])}.call(this),function(){"use strict";angular.module("codoshopDonate",["angular.filter","ngResource"]).directive("donate",["$resource",function(){return{controller:["$scope",function(i){i.donList=[{label:"windows support",progress:22},{label:"linux support",progress:32},{label:"better performance",progress:78}],i.custom=[{},{}],i.amounts=new WeakMap,i.getters=function(i){return function(o){return function(e){return function(t){return e?void i.set(o,e):null!=t?t:0}(i.get(o))}}}(i.amounts),i.total=function(i,o){return function(){return function(e){return e=[].concat(o.donList,o.custom),e.reduce(function(o,e){return function(i){return i?o+i:o}(i.get(e))},0)}(null)}}(i.amounts,i),i.paypal=function(i){return function(){return function(o){o.children('input[name="amount"]').attr("value",i.total()),$("#codoshop-donation-form").submit()}($("#codoshop-donation-form"))}}(i)}],link:function(){}}}])}.call(this),angular.module("codoshopWebsite").run(["$templateCache",function(i){i.put("app/main/main.html",'<div><div ng-show="codoshopVM.dialog.show == false"><ul><li><a href="#" onclick="return false" ng-click="reset()" class="reset-btn">reset</a></li></ul></div><div ng-attr-codoshop="" ng-attr-resizable="all" class="codoshop"></div><div ng-show="codoshopVM.dialog.show == true" class="modal-wrapper"></div></div><div class="marketing"><div><h2>What is Codoshop?</h2><p>Codoshop is a text editor to help you program. It supports many language and it\'s free and open source. Download today.</p><h2>How is it different?</h2><h4>Create designs with visual tools</h4><p>Paint with code. Use the traditional programming you\'re familiar with and create cool graphics with SVG and stuff.</p><h4>Visualize code structure</h4><p>See CSS, SASS, and LESS like its a real tangible thing. See the heirarchy. Make adjustments. Popup tools to adjust colors and numbers.</p><h4>Aesthetics and usability over features</h4><p>Codoshop assumes that most of the functionality you need for development will come from your own build system (like Gulp and Grunt). This means that Codoshop doesn\'t offer stuff like live reload and</p><slick settings="slickConfig" media="media1"></slick><div class="philosophy"><h4>The text editor of the future...</h4><p>Codoshop is designed to take the best of both the past and the future, and mix it together to form the ultimate tool for you. High-tek poly alloys. A learning computer.</p><h4>..and the text editor of the past, combined!</h4><p>Inspired by technology of the past, Codoshop was a warm and personable feel that makes you feel at home as you create your next app or website.</p></div><div class="testimonials"><h2>Testimonials</h2><p>For those in the electronic arts, Codoshop is capital in creativity! - science fiction author Isiah Azimov</p><p>Codoshop is a bicycle for the mind, which helps me code the opposite - a sentient AI for my Schwin. - comedian and entrepreneur Ralph McKenzie</p></div></div></div>'),i.put("components/about/about.html",'<div ng-attr-about=""><div></div><header><div><div><div class="fa fa-code"></div></div></div><div></div><div><div>Codoshop</div><div>a text editor for visual code</div></div><div></div><div><div><div></div></div></div></header><div></div><div><div><div class="cond">free, open-source, multi-platform</div><ul><li><div class="fa fa-globe"></div></li></ul><div></div><a href="#" onclick="return false" ng-click="tryIt()" class="cond">try it</a></div></div><div class="text-thing-0"><div><div><div>{{donStats.downloads}}</div></div></div><div><div><div>downloads</div></div></div><div class="codoshop-small-btn-column"><div><div><div class="fa fa-apple codoshop-btn-color-1"></div></div></div><div><div><div class="fa fa-windows"></div></div></div></div><div class="codoshop-small-btn-column"><div><div><div class="fa fa-globe"></div></div></div><div><div><div class="fa fa-linux"></div></div></div></div></div><div class="text-thing-1"><div><div><div>{{donStats.donations}}</div></div></div><div><div><div>donations</div></div></div><div class="codoshop-single-btn"><div><a ui-sref="donate"><div class="fa fa-heart"></div></a></div></div></div><div class="text-thing-2"><div><div><div>{{donStats.subscribers}}</div></div></div><div><div><div>subscribers</div></div></div><div class="codoshop-single-btn"><div><a ui-sref="donate" class="codoshop-btn-color-3"><div class="fa fa-heart"></div></a></div></div></div><footer><ul><li><a ui-sref="donate">more info</a></li><li><a ui-sref="donate">github</a></li><li><a ui-sref="donate">twitter</a></li></ul></footer></div>'),i.put("components/about/modal.html",'<div ng-attr-welcome=""><ul><li><a href="javascript:void(0)">About</a></li><li><a href="javascript:void(0)">Download</a></li><li><a ui-sref="donate">Donate</a></li><li><a href="javascript:void(0)">More info</a></li><li></li><li><a href="javascript:void(0)">Try it</a></li></ul><div></div><header class="padding-b-0"><div></div><div><div class="fa fa-download"></div></div><div></div><div><div>Codoshop</div><div>a text editor</div></div></header><p class="flavor-text">A free and open-source text editor for creative programmers.</p><div class="stats2"><div class="fa fa-bomb"></div><div><div>248,986</div><div>downloads</div></div></div><div class="stats2 padding-t-0"><div class="fa fa-heart-o"></div><div><div>0</div><div>donations</div></div></div><div class="stats1 padding-b-0"><div>Price</div><div class="fc-fg-1"></div><div class="green">Free</div></div><div class="stats1 padding-t-0 padding-b-0"><div>License</div><div class="fc-fg-1"></div><div class="green">MIT</div></div><div class="padding-t-0"><div>Available For:</div><div><span class="fa fa-apple"></span><span>mac</span></div><div><span class="fa fa-globe"></span><span>web</span></div><div><span class="fa fa-windows"></span><span>windows - donate/fork</span></div><div><span class="fa fa-linux"></span><span>linux - donate/fork</span></div></div></div>'),i.put("components/donate/donate.html",'<div ng-attr-donate=""><header><h2>Donate</h2></header><div><p class="cond">Donations keep Codoshop alive. You can attach a suggestion to your donation that will help steer me in the direction.</p></div><div ng-repeat="don in donList" ng-class="{&quot;codoshop-first&quot;: $first}" class="codoshop-donate-row"><div><div>$</div></div><div><input ng-model="getters(don)" ng-model-options="{ getterSetter: true }" min="0" type="number" step="any" placeholder="0.0"></div><div><div><div ng-style="{width: don.progress + &quot;%&quot;}"><div></div></div></div><div><div>{{don.label}}</div></div></div></div><div ng-class="{&quot;codoshop-first&quot;: $first}" class="codoshop-donate-row"><div><div>$</div></div><div><div>{{total() | currency : \'\' : 2}}</div></div><div><div><div ng-style="{width: 0}"><div></div></div></div><div><div>total</div></div></div></div><div ng-class="{&quot;codoshop-first&quot;: $first}" class="codoshop-donate-row"><div><div>$</div></div><div><div><ul><li><a href="#" onclick="return false;" ng-click="paypal(&quot;pay&quot;)"><span class="fa fa-paypal"></span><span>paypal</span></a></li></ul></div></div><div><div><div ng-style="{width: 0}"><div></div></div></div><div><div>payment method</div></div></div></div><form id="codoshop-donation-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" style="display: none;"><input type="hidden" name="cmd" value="_xclick"> <input type="hidden" name="business" value="zakdances@gmail.com"> <input type="hidden" name="lc" value="US"> <input type="hidden" name="item_name" value="Codoshop donation"> <input type="hidden" name="amount" value="20.00"> <input type="hidden" name="currency_code" value="USD"> <input type="hidden" name="button_subtype" value="services"> <input type="hidden" name="bn" value="PP-BuyNowBF:btn_paynow_LG.gif:NonHosted"> <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form><div></div><footer><ul><li><a href="#" onclick="return false;"><span>All payment methods are secure</span></a></li></ul></footer></div>'),i.put("components/modal/modal.html",'<ul class="codoshop-modal-main-tabs"><li><a ui-sref="index">About</a></li><li><a ui-sref="donate">Donate</a></li><li><a href="javascript:void(0)">Download</a></li><li></li><li><a href="#" onclick="return false" ng-click="tryIt()">[ Try it ]</a></li></ul><div></div><div ui-view="modal"></div>')}]);