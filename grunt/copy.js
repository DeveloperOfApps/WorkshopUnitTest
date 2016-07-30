module.exports= {
            build_app_assets: {
                files: [
                    {
                        src: [ '**' ],
                        dest: '<%= build_dir %>/assets/',
                        cwd: 'src/assets',
                        expand: true
                    }
                ]
            },
            build_fonts: {
                files: [
                    {
                        src: [ '<%= vendor_files.fonts %>' ],
                        dest: '<%= build_dir %>/assets/fonts',
                        expand: true,
                        rename: function(dest, src) {
                            src = src.split('/');
                            src = src[3];
                            return dest + '/'+src;
                        }
                    }
                ]
            },

            build_vendor_assets: {
                files: [
                    {
                        src: [ '<%= vendor_files.assets %>' ],
                        dest: '<%= build_dir %>/assets/',
                        cwd: '.',
                        expand: true,
                        filter: 'isFile',
                        rename: function(dest, src) {
                            var path = require('path');

                            // Get the name of the component folder (or first folder in src path)
                            var component = src.split("/")[1];

                            // Viene de orion
                            if(component.indexOf("orion-")!=-1) {
                                var dir_relativo = src.split("/assets/")[1];
                                return path.join(dest, dir_relativo);
                            } else {
                                return path.join(dest, path.basename(src));
                            }
                        }
                    }
                ]
            },
            build_appjs: {
                files: [
                    {
                        src: [
                            '<%= app_files.modjs %>',
                            '<%= app_files.configjs %>',
                            '<%= app_files.js %>'
                        ],
                        dest: '<%= build_dir %>/',
                        cwd: '.',
                        expand: true
                    }
                ]
            },

            build_vendorjs: {
                files: [
                    {
                        src: [ '<%= vendor_files.js %>' ],
                        dest: '<%= build_dir %>/',
                        cwd: '.',
                        expand: true
                    }
                ]
            },
            header_copy: {
                files: [
                    {
                        src: '<%= app_files.taurus_header %>/header_tpl.html',
                        dest: '<%= build_dir %>',
                        cwd: '.',
                        expand: true
                    }
                ]
            },
            compile_assets: {
                files: [
                    {
                        src: [ '**' ],
                        dest: '<%= compile_dir %>/assets',
                        cwd: '<%= build_dir %>/assets',
                        expand: true
                    }
                ]
            },
            taurus_copy: {
                files: [
                    {
                        src: ['<%= app_files.taurus_files %>'],
                        dest: 'src',
                        cwd: '.',
                        expand: true,
                        rename: function(dest, src) {
                            var path = require('path');
                            //Remueve '/vendor/taurus-*' de la ruta
                            var component = src.replace(/vendor\/taurus-([A-Za-z0-9-]*)\/src\//g, "");
                            return path.join(dest, component);
                        }
                    }
                ]
            }
        };


