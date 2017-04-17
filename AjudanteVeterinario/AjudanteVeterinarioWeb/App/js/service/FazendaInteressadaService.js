angulaAppModulo.factory("fazendaInteressadaService", function($http) {

    //url do seu banco
    var urlBase = "http://localhost:8080/RestEasyApp/fazenda_interessada";


    // Lista todos as fazendas
    var _getAll = function() {
        return $http.get(urlBase + "/listar")
    };

    // Pega fazenda pelo id
    var _getById = function(id) {
        return $http.get(urlBase + "/id/" + id)
    };

    // Cadastra fazenda
    var _insertFazenda = function(fazenda){
		    return $http.post(urlBase + "/inserir", fazenda)
	  };

    return {
        getAll: _getAll,
        getById: _getById,
        insertFazenda: _insertFazenda


    };
});
