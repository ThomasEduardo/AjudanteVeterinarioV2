angulaAppModulo.config(function ($stateProvider, $urlRouterProvider) {

    // Rota padrão.
    $urlRouterProvider.otherwise("/");

    // Estados
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'index.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'login.html'
        })
        .state("cadastroAnimal", {
            url: '/cadastroAnimal',
            title: 'Cadastro',
            controller:'animalController'
            templateUrl: 'cadastroAnimal.html'
        })
        .state("cadastroFazenda", {
            url: '/cadastroFazenda',
            title: 'Fazenda',
            controller:'PropriedadeController'
            templateUrl: 'cadastroFazenda.html'
        })
        .state("listarAnimais", {
            url: '/listarAnimais',
            templateUrl: 'cadastroFazenda.html'
        })
});
