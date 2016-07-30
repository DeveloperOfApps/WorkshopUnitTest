module.exports = {
            build: {
                options: {
                   paths : ['.'],
                   import : ['vendor/taurus-plataforma/src/stylus/parciales/variables.styl','node_modules/jeet/stylus/jeet/index.styl']
                },
                files: {
                    '<%= build_dir %>/assets/<%= pkg.name %>--<%= pkg.version %>.css': [
                    '<%= app_files.stylus_folder %>'+'*.styl',
                    '<%= app_files.stylus_component_folder %>'+'*.styl',
                    '<%= app_files.stylus_style_guide %>*.styl',
                    '<%= app_files.stylus_vendor_folders %>'+'*.styl',
                    '<%= app_files. stylus_vendor_taurus_folders %>'+'*.styl',
                    '<%= app_files.stylus_plataforma_vendor_folders %>'+'*.styl'] // compile and concat into single file
                }
            },
            compile: {
                options: {
                   paths : ['.'],
                   import : ['vendor/taurus-plataforma/src/stylus/parciales/variables.styl','node_modules/jeet/stylus/jeet/index.styl']
                },
                files: {
                    '<%= build_dir %>/assets/<%= pkg.name %>--<%= pkg.version %>.css': [
                    '<%= app_files.stylus_folder %>'+'*.styl',
                    '<%= app_files.stylus_component_folder %>'+'*.styl',
                    '<%= app_files.stylus_style_guide %>*.styl',
                    '<%= app_files.stylus_vendor_folders %>'+'*.styl',
                    '<%= app_files. stylus_vendor_taurus_folders %>'+'*.styl',
                    '<%= app_files.stylus_plataforma_vendor_folders %>'+'*.styl'] // compile and concat into single file
                }
            }
        };
