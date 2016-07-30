module.exports={
            options: {
		debug: true,
                instance: {
                    hostUrl : '<%= sonardata.host %>',
                    jdbcUrl :  '<%= sonardata.jdbc %>',
                    jdbcUsername: '<%= sonardata.user %>',
                    jdbcPassword: '<%= sonardata.password %>'
                }
            },
            sonarqube: {
                project: {
                    key: 'cl.bancochile.taurus.<%= pkg.name %>:front',
                    name: '<%= pkg.name %>',
                    version: '<%= pkg.version %>'
                },
                paths: [{
                    cwd: '.', // the current working directory'
                    src: 'src', // the source directory within the cwd
                    test: 'src', // the test directory within the cwd
                    reports: {
                        unit: 'reports/TESTS-xunit.xml', // the result file within the cwd
                        coverage: 'reports/coverage/lcov.info' // the glob for lcov files'
                    }
                }]
            }
        }
