module.exports = function(grunt) {

    'use strict';

    //Carregar os plugins
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    //iniciar as configurações das tarefas
    grunt.initConfig({

        //Carregar Plugins instalados
        pkg: grunt.file.readJSON('package.json'),
        
        //
        jade: {
            compile: {
                options: {
                    pretty: true,
                    data: {
                        debug: true
                    }
                },
                files: {
                    "build/index.html": ["source/index.jade"]
                }
            }
        },

        //Tarefa de trocar os links de referências nos arquivos html
        processhtml: {
            deploy: {
                options: {
                    process: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'build/',
                        src: ['**/*.html'],
                        dest: 'release/',
                        ext: '.html'
                    }
                ]
            }
        },

        //Tarefa de copiar itens
        copy: {
            main: {
                files: [
                    // includes files within path PASTA
                    //{expand: true, src: ['build/*.html'], dest: 'release/', filter: 'isFile'},

                    // flattens results to a single level INDEX
                    //{expand: true, flatten: true, src: ['build/*.html'], dest: 'release/', filter: 'isFile'}
                    // includes files within path and its sub-directories
                    //{expand: true, src: ['path/**'], dest: 'dest/'},

                    // makes all src relative to cwd
                    {expand: true, cwd: 'build/', src: ['*.html'], dest: 'release/'},

                ]
            }
        },
        
        //
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'release/',
                        src: ['**/*.html'],
                        dest: 'release/',
                        ext: '.html'
                    }
                ]
            }
        },

        //Tarefa de juntar os CSS de desenvolvimento e colocar em um só na build
        cssmin: {
            combine: {
                files: {
                    'release/css/main.css': ['bower_components/normalize/normalize.css',
                                             'bower_components/bootstrap/dist/css/bootstrap.min.css',
                                             'build/css/*.css']
                }
            }
        },
        
        //
        uglify: {
            options: {
                preserveComments: 'some',
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */\n\n'
            },
            my_target: {
                files: {
                    'release/js/main.js': ['bower_components/jquery/dist/jquery.min.js',
                                           'bower_components/bootstrap/dist/js/bootstrap.min.js',
                                           'build/js/*.js']
                }
            }
        },

        //
        coffee: {
            compile: {
                files: {
                    'build/js/main.js': 'source/coffees/main.coffee'
                }
            }
        },
        
        //Tarefa de compilar SCSS para CSS
        sass: {
            compile: {
                options: {
                    style: 'expanded',
                    lineNumbers: true,
                    sourcemap: true
                },
                expand: true,
                cwd: './source/sass/',
                src: ['*.scss'],
                dest: './build/css/',
                ext: '.css'
            }
        },
        
        //
        watch: {
            sass: {
                files: ['source/sass/*.scss'],
                tasks: ['sass']
            },
            coffee: {
                files: ['source/coffes/*.coffee'],
                tasks: ['coffee']
            },
            jade: {
                files: ['source/index.jade', 'source/jades/*.jade'],
                tasks: ['jade']
            },
            livereload: {
                options: { livereload: true },
                files: ['build/**/*']
            }
        }

        //final das configurações das tarefas
    });

    //Tarefa default de desenvolvimento
    grunt.registerTask('default', []);
    grunt.registerTask('build', ['sass', 'coffee', 'jade']);
    grunt.registerTask('release', ['cssmin', 'uglify', 'processhtml', 'htmlmin']);
    
    grunt.registerTask('printenv', function () { console.log(process.env); });

};