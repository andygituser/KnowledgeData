angular.module('KRRclass', [ 'chart.js']).controller('MainCtrl', ['$scope','$http', mainCtrl]);


//kanker = function(){
//	sparql query
//}

function mainCtrl($scope, $http){


	$scope.launchMyGreatApp = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
	$scope.mySparqlQuery = encodeURI('select * where {?sub ?pred ?obj}').replace(/#/, '%23');
    $scope.myDisplayMessage = "Welcome to my great Web Application called: " + '1111' ;

    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results = data.results.bindings;
      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});

	};

	$scope.Results_Arnhem = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {?sub ?pred ?obj}').replace(/#/, '%23');

    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results = data.results.bindings;
      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});
	};

	$scope.Abstract_Arnhem = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {?sub ?pred ?obj}').replace(/#/, '%23');

    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results = data.results.bindings;
      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});
	};

	$scope.Results_Nijmegen = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {?sub ?pred ?obj}').replace(/#/, '%23');

    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results = data.results.bindings;
      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});
	};

	$scope.Abstract_Nijmegen = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {?sub ?pred ?obj}').replace(/#/, '%23');

    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results = data.results.bindings;
      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});
	};

	$scope.Results_Rotterdam = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {?sub ?pred ?obj}').replace(/#/, '%23');

    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results = data.results.bindings;
      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});
	};
	$scope.Abstract_Rotterdam = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {?sub ?pred ?obj}').replace(/#/, '%23');

    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results = data.results.bindings;
      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});
	};	

	$scope.Results_Wageningen = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {?sub ?pred ?obj}').replace(/#/, '%23');

    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results = data.results.bindings;
      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});
	};
	$scope.Abstract_Wageningen = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {?sub ?pred ?obj}').replace(/#/, '%23');

    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results = data.results.bindings;
      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});
	};
}

