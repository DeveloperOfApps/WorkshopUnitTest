module.exports={
            build: [
                '<%= build_dir %>',
                '<%= compile_dir %>',
                '<%= karma_reports %>',
                '<%= sonar_tmp_dir %>',
                '<%= bin_zip %>',
                '<%= build_zip %>'
            ],
            css: ['<%= build_dir %>/assets/<%= pkg.name %>--<%= pkg.version %>.css'],
            clean_concat_css: ['<%= build_dir %>/assets/<%= pkg.name %>--<%= pkg.version %>.css']
        };
