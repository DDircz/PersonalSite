(function() {

    'use strict';

    // Angular Module Defined
    var app = angular.module('app', ['ngRoute']);

    // Configure Routes
    app.config(function($routeProvider, $locationProvider) {

        $routeProvider

        // route for the home page
            .when('/', {

            templateUrl: 'pages/home.html',
            controller: 'mainController'

        })

        // Route for career page
        .when('/career', {

                templateUrl: 'pages/career.html',
                controller: 'mainController'

            })
            // route for food page

        .when('/food', {

            templateUrl: 'pages/food.html',
            controller: 'mainController'

        })

        // route for adventure page

        .when('/adventure', {

            templateUrl: 'pages/adventure.html',
            controller: 'mainController'

        })

        // route for contact page

        .when('/contact', {

            templateUrl: 'pages/contact.html',
            controller: 'mainController'

        })

        // Correct invalid links :)
        .otherwise(

            {
                redirectTo: "/"
            }

        );



        // use the HTML5 History API
        $locationProvider.html5Mode(true);

    });

    // Auto scroll to top on page change... not working
    app.run(["$rootScope", "$anchorScroll", function($rootScope, $anchorScroll) {

        $rootScope.$on("$locationChangeSuccess", function() {

            $anchorScroll();

        });

    }]);



    //Controllers Specified here
    app.controller('mainController', function($scope) {

        // create vars to display in our view

        $scope.linkedin = 'https://www.linkedin.com/in/DanielDircz/';
        $scope.facebook = 'https://www.facebook.com/danny.dircz';
        $scope.instagram = 'https://www.instagram.com/ddircz/';

    });



    app.controller('careerController', function($scope) {

        $scope.title = "Career";

    });





})();