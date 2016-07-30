'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('WebBancoChile App', function() {

    describe('Mostrar Index', function() {
        it('Deberia mostrar el titulo correctamente', function() {
            browser.get('index.html');
            expect(browser.getTitle()).toBe("Login | Banco de Chile");
        });

    });


});