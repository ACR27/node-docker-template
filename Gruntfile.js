/*jslint node: true */
// "use strict";


module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            mocha_tests: {
                files: [ 'Gruntfile.js', 'test/**/*.js', 'modules/**/*.js', 'index.js'],
                tasks: [ 'mochaTest', 'mocha_istanbul'],
                options: {
                    atBegin: true
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'build/coverage.xml', // Optionally capture the reporter output to a file
                    quiet: false, // Optionally suppress output to standard out (defaults to false)
                    clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
                },
                src: ['test/modules/**/*.js']
            }
        },
        mocha_istanbul: {
            coverage: {
                src: 'test', // a folder works nicely
                options: {
                    mask: 'modules/**/*.js',
                    istanbulOptions: ['--include-all-sources'],
                    excludes:['Gruntfile.js'],
                    reportFormats:['cobertura']
                }
            }
        },
        istanbul_check_coverage: {
            default: {
                options: {
                    coverageFolder: 'coverage*', // will check both coverage folders and merge the coverage results
                    check: {
                        lines: 80,
                        statements: 80
                    }
                }
            }
        },
        mochacov: {
            default: {
                src: ['test/**/*.js'],
                options: {
                    reporter: 'spec'
                }
            },
            jenkins: {
                src: ['test/**/*.js'],
                options: {
                    reporter: 'xunit',
                    output: 'build/test-result.xml'
                }
            },
            cobertura: {
                options: {
                    reporter: 'mocha-cobertura-reporter',
                    require: ['chai'],
                    output: 'build/cobertura.xml'

                },
                src: ['test/**/*.js']
            }
        },
        jshint: {
            options: {
                //jshintrc: '.jshintrc'
            },
            default: ['Gruntfile.js', 'lib/**/*.js'],
            jenkins: {
                options: {
                    reporter: 'checkstyle',
                    reporterOutput: 'build/checkstyle-result.xml'
                },
                src: ['Gruntfile.js', 'lib/**/*.js']
            }
        }
        //githooks: {
        //    all: {
        //        'pre-commit': 'mochaTest'
        //    }
        //}
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-mocha-cov');
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    //grunt.loadNpmTasks('grunt-githooks');

    grunt.registerTask('jenkins', ['jshint:jenkins', 'mochacov:jenkins', 'mochacov:cobertura']);


};
