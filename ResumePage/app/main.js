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
    app.run(function _bwdFwdDetect($rootScope, $location) {
      
      $rootScope.path = $location.path();// stores only the current page being viewed  
      $rootScope.pathBwd = [];// stores up to the last page viewed before the current one  
      $rootScope.pathFwd = [];// stores starting with the page viewed before coming back to the current one  
      
      // detect that the location is about to change  
      $rootScope.$on('$locationChangeStart', function(event) {  
        var newPath = $location.path();// take note of the new path (using path instead of url is good)  
      
        // grab the last backward page for comparison  
        var bwd = !$rootScope.pathBwd.length ? null :  
          $rootScope.pathBwd[$rootScope.pathBwd.length - 1];  
      
        // grab the last forward page for comparison  
        var fwd = !$rootScope.pathFwd.length ? null :  
          $rootScope.pathFwd[$rootScope.pathFwd.length - 1];  
      
        // if the new page is the last backward page, assume the user went "back"  
        if (bwd == newPath) {  
          // it's no longer the last backward page, so remove it  
          $rootScope.pathBwd.pop();  
      
          // and push into the forward stack the page we're just leaving to go backward from  
          $rootScope.pathFwd.push($rootScope.path);  
        }  
        // the new page is the last page we came backward from, assume the user went "forward"  
        else if (fwd == newPath) {  
          // it's no longer the last forward page, so remove it  
          $rootScope.pathFwd.pop();  
      
          // and push into the backward stack the page we're going forward away from  
          $rootScope.pathBwd.push($rootScope.path);  
        }  
        // we didn't go back or forward; assume it's a new forward trail being started  
        else if ($rootScope.path != newPath) {  
          // remember the page we're leaving as our last backward page  
          $rootScope.pathBwd.push($rootScope.path);  
      
          // empty out our forward stack since we're now starting a wholly new forward path  
          $rootScope.pathFwd = [];  
      
          // this is what it's all about; scroll to the top of the freshly-loaded page  
          $('html,body').animate({ scrollTop: 0 }, 'fast'); 
        } 
     
        // now that we're done with our comparisons, we can remember our new current page  
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