(function(){
angular
    .module( 'WebBanco.home' )
    .config(homeConfig);

function homeConfig( $stateProvider ) {
    $stateProvider.state( 'home', {
        parent: 'root',
        url: '/home',
        views: {
            "main@": {
                controller: 'homeCtrl',
                templateUrl: 'components/home/home_tpl.html',
                controllerAs: 'vm'
            }
        },
        data:{ pageTitle: 'Home' }
    });
}

})();
