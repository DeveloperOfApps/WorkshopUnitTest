module.exports={
            src: [
                '<%= app_files.modjs %>', '<%= app_files.configjs %>','<%= app_files.js %>'
            ],
            test: [
                '<%= app_files.jsunit %>'
            ],
            gruntfile: [
                'Gruntfile.js'
            ],
            options: {
                curly: true,
                immed: true,
                newcap: true,
                noarg: true,
                sub: true,
                expr: true,
                boss: true,
                eqnull: true


            },
            globals: {}
        };
