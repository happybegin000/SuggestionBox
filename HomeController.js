app.controller('HomeController',['$scope','suggestions',function($scope,suggestions){
	$scope.helloWorld = "hell  World";
	$scope.posts = suggestions.posts;
	$scope.addSuggestion = function(){
		if (!$scope.title || $scope.title==="") {
			return;
		}
		$scope.posts.push({
			title:$scope.title,
			upvotes:0,
		});
		$scope.title='';
	};
	$scope.upVote=function(index){
		suggestions.posts[index].upvotes+=1;
	}
}]);