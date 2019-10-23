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
		$scope.mySparqlQuery = encodeURI('select * where {{?sub ?pred <http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Arnhem>} UNION {<http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Arnhem> ?pred ?obj}}').replace(/#/, '%23');

    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results1 = data.results.bindings;
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
		$scope.mySparqlQuery = encodeURI('select * where {{?sub ?pred <http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Nijmegen>} UNION {<http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Nijmegen> ?pred ?obj}}').replace(/#/, '%23');
    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results1 = data.results.bindings;
      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});
	};

	$scope.Abstract_Nijmegen = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {SERVICE <http://dbpedia.org/sparql> { select ?obj where {<http://dbpedia.org/resource/Nijmegen> <http://dbpedia.org/ontology/abstract> ?obj. FILTER (langMatches(lang(?obj),"nl"))}}}').replace(/#/, '%23');

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
		$scope.mySparqlQuery = encodeURI('select * where {{?sub ?pred <http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Rotterdam>} UNION {<http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Rotterdam> ?pred ?obj}}').replace(/#/, '%23');

    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results1 = data.results.bindings;
      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});
	};
	$scope.Abstract_Rotterdam = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where { SERVICE <http://dbpedia.org/sparql> { select ?objwhere {<http://dbpedia.org/resource/Rotterdam> <http://dbpedia.org/ontology/abstract> ?obj. FILTER (langMatches(lang(?obj),"nl"))}}}').replace(/#/, '%23');

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
		$scope.mySparqlQuery = encodeURI('select * where {{?sub ?pred <http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Wageningen>} UNION {<http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Wageningen> ?pred ?obj}}').replace(/#/, '%23');

    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results1 = data.results.bindings;
      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});
	};

	$scope.Abstract_Wageningen = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where { SERVICE <http://dbpedia.org/sparql> { select ?obj where {<http://dbpedia.org/resource/Wageningen> <http://dbpedia.org/ontology/abstract> ?obj. FILTER (langMatches(lang(?obj),"nl"))}}}').replace(/#/, '%23');


    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results1 = data.results.bindings;
      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});
	};


	$scope.Results_Februaristaking = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {{?sub ?pred <http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/February_strike>} UNION {<http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/February_strike> ?pred ?obj}}').replace(/#/, '%23');

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

	$scope.Results_Capitulatie = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {{?sub ?pred <http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Capitulation>} UNION {<http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Capitulation> ?pred ?obj}}').replace(/#/, '%23');

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

	$scope.Results_Slag_Arnhem = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {{?sub ?pred <http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Battle_Of_Arnhem>} UNION {<http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Battle_Of_Arnhem> ?pred ?obj}}').replace(/#/, '%23');

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

	$scope.Results_Slag_Nijmegen = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {{?sub ?pred <http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Battle_of_Nijmegen>} UNION {<http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Battle_of_Nijmegen> ?pred ?obj}}').replace(/#/, '%23');

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
	$scope.Results_Bom_Rotterdam = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {{?sub ?pred <http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Allied_bombing_of_Rotterdam>} UNION {<http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Allied_bombing_of_Rotterdam> ?pred ?obj}}').replace(/#/, '%23');

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

	$scope.Results_Hitler = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {{?sub ?pred <http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Adolf_Hitler>} UNION {<http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Adolf_Hitler> ?pred ?obj}}').replace(/#/, '%23');

    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results1 = data.results.bindings;
      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});
	};

	$scope.Abstract_Hitler = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where { SERVICE <http://dbpedia.org/sparql> { select ?obj where {<http://dbpedia.org/resource/Adolf_Hitler> <http://dbpedia.org/ontology/abstract> ?obj. FILTER (langMatches(lang(?obj),"nl"))}}}').replace(/#/, '%23');

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

	$scope.Results_Frank = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {{?sub ?pred <http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Anne_Frank>} UNION {<http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Anne_Frank> ?pred ?obj}}').replace(/#/, '%23');

    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results1 = data.results.bindings;
      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});
	};

	$scope.Abstract_Frank = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where { SERVICE <http://dbpedia.org/sparql> { select ?obj where {<http://dbpedia.org/resource/Anne_Frank> <http://dbpedia.org/ontology/abstract> ?obj. FILTER (langMatches(lang(?obj),"nl"))}}}').replace(/#/, '%23');

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

	$scope.Results_Model = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where {{?sub ?pred <http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Walter_Model>} UNION {<http://www.semanticweb.org/rabie/ontologies/2019/9/groteoorlog/Walter_Model> ?pred ?obj}}').replace(/#/, '%23');

    $http( {
     	method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			$scope.Results1 = data.results.bindings;
      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});
	};

	$scope.Abstract_Model = function(){

		$scope.mySparqlEndpoint = 'http://192.168.2.5:7200/repositories/repo-VU' ;
		$scope.mySparqlQuery = encodeURI('select * where { SERVICE <http://dbpedia.org/sparql> { select ?obj where {<http://dbpedia.org/resource/Walter_Model> <http://dbpedia.org/ontology/abstract> ?obj. FILTER (langMatches(lang(?obj),"nl"))}}}').replace(/#/, '%23');

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
};
