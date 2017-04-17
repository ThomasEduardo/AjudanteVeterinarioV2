//AINDA NAO TA FUNFCIONANDO
angulaAppModulo.controller('loginController', function (loginService, $scope, $state, #mdToast) {

$scope.login = function () {

      loginService.login($scope.login)
            .then(function (response) {

              // Chamado quando a resposta contém status de sucesso.
              // Exibir toas com mensagem de sucesso ou erro.
              var toast = $mdToast.simple()
                  .textContent('Logged.')
                  .position('top right')
                  .action('Ok')
                  .hideDelay(6000);
              $mdToast.show(toast);

              //Save current user in session
              UserService.getByEmail($scope.input.email).then(function(response){
                UserService.setCurrentUserByEmail(response.data);
              });

              // Redirect to home page
              $state.go('home');

          })
          .catch(function (data) {
            var error = getError(data.status);
              // Handle error here
              var toast = $mdToast.simple()
                  .textContent(error)
                  .position('top right')
                  .action('Ok')
                  .hideDelay(6000);
              $mdToast.show(toast);
          });
        };
