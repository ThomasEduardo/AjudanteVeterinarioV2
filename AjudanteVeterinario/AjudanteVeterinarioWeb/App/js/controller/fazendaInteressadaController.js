angulaAppModulo.controller('tarefaController', function (fazendaInteressadaService, $scope, $state, $mdToast) {

  $scope.fazendaInteressada = {};
  $scope.fazendasInteressadas = [];

$scope.addFazenda = function () {

      fazendaInteressadaService.insertFazenda ($scope.fazenda))
                    .then(function (response) {
                          // Chamado quando a resposta contém status de sucesso.
                          // Exibir toas com mensagem de sucesso ou erro.
                        var toast = $mdToast.simple()
                              .textContent('Fazenda Interessada cadastrada com sucesso.')
                              .position('top right')
                              .action('Ok')
                              .hideDelay(6000);
                        $mdToast.show(toast);
                      })
                      .catch(function (data) {
                          // Handle error here
                          var toast = $mdToast.simple()
                              .textContent('Problema no cadastro da Fazenda Interessada')
                              .position('top right')
                              .action('Ok')
                              .hideDelay(6000);
                          $mdToast.show(toast);
                      });
              };
            });
