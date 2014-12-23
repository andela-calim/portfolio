var ServiceModule = angular.module('ServiceModule', []);
app.factory('gitAPIservice', function gitAPIservice($http) {
	return {
		searchRepos: function searchRepos(query, callback)
		{
			$http.get('https://api.github.com/users/' + query + '/repos')
			.success(function (data) {
				callback(null, data);
				// console.log(data);
			})
			.error(function (e) {
				callback(e);
			});
		}
	};
});