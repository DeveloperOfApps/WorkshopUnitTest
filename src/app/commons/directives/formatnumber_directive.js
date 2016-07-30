/**
 * Created by Efrain Rebolledo on 28-04-2016.
 */
(function(){
    angular.module('WebBanco.formatNumDirective', [])
        .directive('formatNumber', formatNumber);

    function formatNumber(){
        return {
            require: 'ngModel',

            link: function(scope, element, attrs, ngModelCtrl){
                if(!ngModelCtrl){
                    return;
                }
                ngModelCtrl.$parsers.push(function (val) {
                        if (angular.isUndefined(val)) {
                            val = '';

                        }
                        var clean = formatNumberDirective(val, attrs.formatNumber);
                        if (val !== clean) {
                            ngModelCtrl.$setViewValue(clean);
                            ngModelCtrl.$render();
                        }
                        var modelNumber = parseFloat(val.replace(/[\.]/g, '').replace(",", "."));
                            ngModelCtrl.$setValidity('formatnumbermax', true);
                            ngModelCtrl.$setValidity('formatnumbermin', true);
                        if(angular.isDefined(attrs.formatNumberMax) && parseFloat(modelNumber) > parseFloat(attrs.formatNumberMax)){
                                ngModelCtrl.$setValidity('formatnumbermax', false);
                        }
                        if(angular.isDefined(attrs.formatNumberMin) && parseFloat(modelNumber) < parseFloat(attrs.formatNumberMin)) {
                                ngModelCtrl.$setValidity('formatnumbermin', false);
                        }
                        return modelNumber;
                    }
                );
                ngModelCtrl.$formatters.push(function (val) {
                    if (angular.isUndefined(val)) {
                        val = '';
                    }
                    if (angular.isDefined(val) && val !== null) {
                        var clean = val.toString().replace('.', ',');
                        clean = formatNumberDirective(clean, attrs.formatNumber);
                        ngModelCtrl.$setViewValue(clean);
                        ngModelCtrl.$render();
                        return clean;
                    }
                });
                element.bind('keypress', function () {
                    ngModelCtrl.$setValidity('formatnumbermax', true);
                    ngModelCtrl.$setValidity('formatnumbermin', true);
                });
                element.bind('keydown', function (event) {
                    if (event.keyCode === 32) {
                        event.preventDefault();
                        return false;
                    }
                    if (event.keyCode === 190 || event.keyCode === 110 || event.keyCode === 188) {
                        event.target.value = event.target.value + ',';
                        return true;
                    }
                });
            }
        };
        function formatNumberDirective(val,decimales){
            var clean;
            if (decimales === 0) {
                clean = val.replace(/[^0-9]/g, '');
            } else {
                clean = val.replace(/[^0-9\,]/g, '');
                var decimalCheck = clean.split(',');
                var entero = decimalCheck[0];
                var enteroForm = '';
                var a=0;
                for( var i = entero.length-1; i >= 0;i--){
                    if(a===3){
                        enteroForm = '.' + enteroForm;
                        a=0;
                    }a++;
                    enteroForm = entero.charAt(i) + enteroForm;
                }
                clean =  enteroForm;
                if (!angular.isUndefined(decimalCheck[1])) {
                    if (decimales > 0) {
                        decimalCheck[1] = decimalCheck[1].slice(0, decimales);
                        clean = enteroForm + ',' + decimalCheck[1];
                    } else {
                        clean = enteroForm + decimalCheck[1];
                    }
                }
            }
            return clean;
        }
    }
})();
