module.exports={
            compile: {
                files: [
                    {
                        src: [ '<%= app_files.modjs %>', '<%= app_files.configjs %>','<%= app_files.js %>' ],
                        cwd: '<%= build_dir %>',
                        dest: '<%= build_dir %>',
                        expand: true
                    }
                ]
            }
        };
