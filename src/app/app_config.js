(function(){
    angular
    .module('WebBanco')
    .config(myAppConfig);

    myAppConfig.$inject = [ '$stateProvider', '$urlRouterProvider', '$logProvider' ];
    function myAppConfig($stateProvider, $urlRouterProvider, $logProvider) {

        $logProvider.debugEnabled(true);

        $stateProvider.state('root', {
            abstract: true,
            views: {
                "header@": {},
                "aside@": {},
                "main@": {
                    controller: 'homeCtrl',
                    templateUrl: 'components/home/home_tpl.html'
                },
                "footer@": {}
            }
        });

        $urlRouterProvider.otherwise('/home');

    }

})();
