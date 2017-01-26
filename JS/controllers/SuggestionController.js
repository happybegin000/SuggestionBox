app.controller('SuggestionController',['$scope','suggestions','$routeParams',function($scope,suggestions,$routeParams)
	$scope.post=suggestions.posts[$routeParams.id];
	$scope.addComment=function(){
		if (!$scope.body || $scope.body==="") {
			return;
		}
		$scope.post.comments.push({
			body:$scope.body,
			upvotes:0
		});
		$scope.upVote=function(index){
		$scope.post[index].upvotes+=1;
	}
	}
	]);
