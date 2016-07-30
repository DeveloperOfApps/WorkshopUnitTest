(function() {
    angular.module('WebBanco.home')
        .controller('homeCtrl', homeCtrl);

    function homeCtrl() {
        var vm = this;
        vm.miNumero = '';
        vm.nroDecimales = 3;
        vm.numeroMin = 10000;
        vm.numeroMax = 30000;
    }
})();