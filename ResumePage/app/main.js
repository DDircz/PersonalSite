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

    // Used from: https://github.com/rommelsantor/ng-bwdfwdscroll/blob/master/ng-bwdfwdscroll.js
    app.run(function _bwdFwdDetect($rootScope, $location) {
        $rootScope.path = $location.path(); 
        $rootScope.pathBwd = [];  
        $rootScope.pathFwd = [];

        $rootScope.$on('$locationChangeStart', function(event) {
            var newPath = $location.path(); 

            if ($rootScope.path != newPath) {
                $('html,body').animate({ scrollTop: 0 }, 'fast');
            }
            $rootScope.path = newPath;  
        });

    });

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