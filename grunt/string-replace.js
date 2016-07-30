module.exports={
            stylus: {
                files: {
                  '<%= app_files.stylus_style_guide %>main.styl': '<%= app_files.stylus_style_guide %>main.styl'
                },
                options: {
                  replacements: [{
                    pattern: "@import '../../node_modules/jeet/stylus/jeet/index'",
                    replacement: "@import '../../../../node_modules/jeet/stylus/jeet/index'"
                  }]
                }
            },
            single_file: {
                files: {
                    '<%= build_dir %>/templates-orion.js' : '<%= build_dir %>/templates-orion.js',
                    '<%= build_dir %>/templates-taurus.js' : '<%= build_dir %>/templates-taurus.js'
                },
                options: {
                    replacements: [
                        {
                            pattern: /orion-/g,
                            replacement: ''
                        },
                        {
                            pattern: /taurus-([A-Za-z0-9-]*)\/src\/app\//g,
                            replacement: ''
                        }
                    ]
                }
            }
        };
