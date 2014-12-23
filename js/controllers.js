var ControllerModule = angular.module('ControllerModule', []);
app.controller('mainController', function($scope, gitAPIservice) {

	

	$scope.getUser = function getUser() {
		gitAPIservice.searchRepos($scope.query, function (error, data) {
			if (!error) {
				$scope.repos = data;
				$scope.repoNum = data.length;

				$scope.results = [];

				angular.forEach(data, function(value, index) {
					

					repoURL = $scope.query + '.github.io/' + value.name;
					

					userImg = value.owner['avatar_url'];
					

					userGithubURL = value.owner['html_url'];
					

					$scope.results.push({
						repoURL: repoURL,
						userImg: userImg,
						userGithubURL: userGithubURL,
						repoNum: $scope.repoNum
					});
				
				});
				console.log($scope.results);
				
			}
		});
	};
});