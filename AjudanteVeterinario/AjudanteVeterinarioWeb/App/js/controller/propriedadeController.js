angulaAppModulo.controller('fazendaController', function (propriedadeService, $scope, $state, $mdToast) {

  $scope.propriedade = {};
  $scope.propriedades = [];

$scope.addPropriedade = function () {

      propriedadeService.insertPropriedade($scope.propriedade)
            .then(function (response) {
                // Chamado quando a resposta contém status de sucesso.
                // Exibir toas com mensagem de sucesso ou erro.
                var toast = $mdToast.simple()
                    .textContent('Propriedade cadastrada com sucesso.')
                    .position('top right')
                    .action('Ok')
                    .hideDelay(6000);
                $mdToast.show(toast);
            })
            .catch(function (data) {
                // Handle error here
                var toast = $mdToast.simple()
                    .textContent('Problema no cadastro da Propriedade')
                    .position('top right')
                    .action('Ok')
                    .hideDelay(6000);
                $mdToast.show(toast);
            });
    };
  });
