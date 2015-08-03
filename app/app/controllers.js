'use strict';

/* Controllers */

var helloWorldControllers = angular.module('helloWorldControllers', []);



helloWorldControllers.controller('MainCtrl', ['$scope', '$location', '$http',
  function MainCtrl($scope, $location, $http) {
    $scope.message = "Hello World";
  }]);

helloWorldControllers.controller('ShowCtrl', ['$scope', '$location', '$http',
  function ShowCtrl($scope, $location, $http) {
    $scope.message = "Show The World";
  }]);


helloWorldControllers.controller('CustomerCtrl', function CustomerCtrl() {
    var customer = this;
    customer.customerName = "Bob's Burgers";
    customer.customerNumber = "44522";

    customer.changeCustomer = function() {
      customer.customerName = customer.cName;
      customer.customerNumber = customer.cNumber;
    }
  });

helloWorldControllers.controller('AddCustomerCtrl', ['$location', function AddCustomerCtrl($location) {
    var addCust = this;
    addCust.submit = function(){
        $location.path('/addedCustomer/' + addCust.cName + "/" + addCust.cCity);
    }
  }]);

helloWorldControllers.controller('AddedCustomerCtrl', ['$routeParams', function AddedCustomerCtrl($routeParams) {
    var addedCust = this;
    addedCust.customerName = $routeParams.customer;
    addedCust.customerCity = $routeParams.city;

    }]);

helloWorldControllers.controller('BlogCtrl', function BlogCtrl() {
    var blog = this;
    blog.blogArticle = "This is a blog post about AngularJS. We will cover how to build a blog and how to add comments to the blog post.";
    blog.blogList = [
        {
          "_id": 1,
          "date": 1400623623107,
          "introText": "This is a blog post about AngularJS. We will cover how to build",
          "blogText": "This is a blog post about AngularJS. We will cover how to build a blog and how to add comments to the blog post."
        },
        {
        "_id": 2,
        "date": 1400267723107,
        "introText": "In this blog post we will learn how to build applications based on REST",
        "blogText": "In this blog post we will learn how to build applications based on REST web services that contain most of the business logic needed for the application."
        }
    ];
  });
helloWorldControllers.controller('BlogViewCtrl', ['$routeParams', function BlogViewCtrl($routeParams) {
      var blogItem = this;
      var blogId = $routeParams.id;
      var blog1 = {
        "_id": 1,
        "date": 1400623623107,
        "introText": "This is a blog post about AngularJS. We will cover how to build",
        "blogText": "This is a blog post about AngularJS. We will cover how to build a blog and how to add comments to the blog post.",
        "comments" :[
        {
          "commentText" : "Very good post. I love it."
        },
        {
          "commentText" : "When can we learn services."
        }
      ]
    };

    var blog2 = {
      "_id": 2,
      "date": 1400267723107,
      "introText": "In this blog post we will learn how to build applications based on REST",
      "blogText": "In this blog post we will learn how to build applications based on REST web services thatcontain most of the business logic needed for the application.",
      "comments": [
        {
          "commentText": "REST is great. I want to know more."
        },
        {
          "commentText": "Will we use Node.js for REST services?."
        }
      ]
    }

    if(blogId === '1'){
      blogItem.blogEntry = blog1;
    }else if(blogId === '2'){
      blogItem.blogEntry = blog2;
  }
}]);
