"use strict";

module.exports = function(Grunt)
{
    var bowerPath = "./bower_components";
    var sourcePath = "./src";
    var distPath = "./dist";
    var distCssPath = (distPath + "/css");
    var distJsPath = (distPath + "/js");

    Grunt.initConfig({

        // Concat
        concat: {
            options: { separator: "; \n" },
            vendor: {
                src: [ 
                    (bowerPath + "/jquery/dist/jquery.min.js"),
                    (bowerPath + "/bootstrap/dist/js/bootstrap.min.js"),
                    (bowerPath + "/angular/angular.min.js"),
                    (bowerPath + "/angular-route/angular-route.min.js"),
                    (bowerPath + "/angular-animate/angular-animate.min.js"),
                    (bowerPath + "/tweenmax/TweenMax.min.js"),
                    (bowerPath + "/instafeed.js/instafeed.min.js"),
                    (bowerPath + "/angular-modal-service/dst/angular-modal-service.min.js"),
                    (bowerPath + "/angular-carousel/dist/angular-carousel.min.js")
                ],
                dest: (distJsPath + "/vendor.js")
            },
            app: {
                src: [ 
                    (sourcePath + "/app.module.js"),
                    (sourcePath + "/plugins/**/*.js"),
                    (sourcePath + "/components/**/*.module.js"),
                    (sourcePath + "/components/**/*.directive.js"),
                    (sourcePath + "/components/**/*.provider.js"),
                    (sourcePath + "/components/**/*.service.js"),
                    (sourcePath + "/components/**/*.controller.js"),
                    (sourcePath + "/globals/js/**/*.module.js"),
                    (sourcePath + "/globals/js/**/*.service.js"),
                    (sourcePath + "/pages/**/*.module.js"),
                    (sourcePath + "/pages/**/*.service.js"),
                    (sourcePath + "/pages/**/*.controller.js"),
                ],
                dest: (distJsPath + "/app.js")
            }
        },

        // Less
        less: {
            options: { compress: true },
            app: {
                files: { "./dist/css/app.css": "./src/style.loader.less" }
            }
        },

        // Concat CSS
        concat_css: {
            vendor: {
                src: [ 
                    (bowerPath + "/reset-css/reset.css"),
                    (bowerPath + "/components-font-awesome/css/font-awesome.min.css"),
                    (bowerPath + "/bootstrap/dist/css/bootstrap.min.css"),
                    (bowerPath + "/angular-carousel/dist/angular-carousel.css")
                ],
                dest: (distCssPath + "/vendor.css")
            }
        },

        // Copy
        copy: {
            components_templates: { 
                expand: true,
                cwd: (sourcePath + "/components"),
                src: "**/*.html",
                dest: (distPath + "/templates/components")
            },
            pages_templates: {
                expand: true,
                cwd: (sourcePath + "/pages"),
                src: "**/*.html",
                dest: (distPath + "/templates/pages")
            },
            images: {
                expand: true,
                cwd: (sourcePath + "/images"),
                src: ["**/*.jpg", "**/*.png"],
                dest: (distPath + "/images")
            },
            vendor: {
                expand: true,
                cwd: (bowerPath + "/components-font-awesome/fonts"),
                src: "**",
                dest: (distPath + "/fonts")
            }
        },

        // Watch
        watch: {
            options: {},
            app: {
                files: (sourcePath + "/**/*"),
                tasks: ["default"]
            }
        }
    });

    Grunt.loadNpmTasks("grunt-contrib-concat");
    Grunt.loadNpmTasks("grunt-contrib-less");
    Grunt.loadNpmTasks("grunt-contrib-copy");
    Grunt.loadNpmTasks("grunt-contrib-watch");
    Grunt.loadNpmTasks("grunt-concat-css");

    Grunt.registerTask("default", ["concat:app", "less:app", "copy:components_templates", "copy:pages_templates", "copy:images"]);
    Grunt.registerTask("vendor", ["concat:vendor", "concat_css:vendor", "copy:vendor"]);
}