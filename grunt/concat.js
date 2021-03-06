module.exports={
            /**
            * The `build_css` target concatenates compiled CSS and vendor CSS
            * together.
            */
            build_css: {
                src: [
                    '<%= vendor_files.css %>',
                    '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css',
                    '<%= build_dir %>/assets/<%= pkg.name %>--<%= pkg.version %>.css'
                ],
                dest: '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css'
            },
            /**
            * The `compile_js` target is the concatenation of our application source
            * code and all specified vendor source code into a single file.
            */
            compile_js: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                src: [
                    '<%= vendor_files.js %>',
                    'module.prefix',
                    '<%= app_files.modjs %>',
                    '<%= app_files.configjs %>',
                    '<%= app_files.js %>',
                    '<%= html2js.app.dest %>',
                    '<%= html2js.orion.dest %>',
                    '<%= html2js.taurus.dest %>',
                    '<%= html2js.common.dest %>',
                    'module.suffix'
                ],
                dest: '<%= compile_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        };
