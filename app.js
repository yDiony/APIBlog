angular.module('blog', [])
.controller('Rest', function ($scope, $http) {
    $http.get('https://api-fake-blog.onrender.com/postagens')
        .success(function (data) {
            $scope.publicacoes = data;
        });
})
.controller('PostagemController', function ($scope, $http, $location) {
    var id = new URLSearchParams($location.absUrl().split('?')[1]).get('id');
    if (id) {
        $http.get('https://api-fake-blog.onrender.com/postagem/' + id)
            .success(function (data) {
                $scope.postagem = data;
            })
            .error(function () {
                $scope.postagem = { title: "Erro", description: "Postagem não encontrada.", content: "" };
            });
    } else {
        $scope.postagem = { title: "Erro", description: "ID da postagem não fornecido.", content: "" };
    }
    console.log(id);
});

