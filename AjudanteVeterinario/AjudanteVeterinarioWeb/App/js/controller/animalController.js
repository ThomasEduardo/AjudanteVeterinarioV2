angulaAppModulo.controller('animalController', function (animalService, $scope, $state, $mdToast) {

    $scope.animal = {};
    $scope.animais = [];

    $scope.addAnimais = function () {

        animalService.insertAnimal($scope.animal)

                    .then(function (response) {
                      console.log(response.data);

               $scope.animal = response.data;

               $scope.animais.push($scope.animal);
                        var toast = $mdToast.simple()
                            .textContent('Animal cadastrado com sucesso.')
                            .position('top right')
                            .action('Ok')
                            .hideDelay(6000);
                        $mdToast.show(toast);
                    })
                    .catch(function (data) {
                        // Handle error here
                        var toast = $mdToast.simple()
                            .textContent('Problema no cadastro do Animal')
                            .position('top right')
                            .action('Ok')
                            .hideDelay(6000);
                        $mdToast.show(toast);
                    });
            };
          });
