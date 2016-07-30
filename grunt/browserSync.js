module.exports = {
            dev: {
                bsFiles: {
                    src : [
                        '<%= build_dir %>/assets/*.css',
                        '<%= build_dir %>/assets/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: '<%= build_dir %>'
                }
            }
        };
