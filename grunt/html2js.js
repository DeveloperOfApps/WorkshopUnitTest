module.exports={
            /**
            * These are the templates from `src/app`.
            */
            app: {
                options: {
                    base: 'src/app'
                },
                src: [ '<%= app_files.app_tpl %>' ],
                dest: '<%= build_dir %>/templates-app.js'
            },

            orion: {
                options: {
                    base: 'vendor'
                },
                src: [ '<%= app_files.orion_tpl %>' ],
                dest: '<%= build_dir %>/templates-orion.js'
            },

            taurus: {
                options: {
                    base: 'vendor'
                },
                src: [ '<%= app_files.taurus_tpl %>' ],
                dest: '<%= build_dir %>/templates-taurus.js'
            },


            /**
            * These are the templates from `src/common`.
            */
            common: {
                options: {
                    base: 'src/common'
                },
                src: [ '<%= app_files.common_tpl %>' ],
                dest: '<%= build_dir %>/templates-common.js'
            }
        };
