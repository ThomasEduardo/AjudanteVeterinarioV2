angulaAppModulo.factory("propriedadeService", function($http) {

    //url seu banco
    var urlBase = "http://localhost:8080/RestEasyApp/propriedade";


    // Lista todos as propriedades
    var _getAll = function() {
        return $http.get(urlBase + "/listar")
    };

    // Pega propriedade pelo id
    var _getById = function(id) {
        return $http.get(urlBase + "/id/" + id)
    };

    // Cadastra propriedade
    var _insertPropriedade = function(propriedade){
		    return $http.post(urlBase + "/inserir", propriedade)
	  };

    // deleta propriedade
    var _deletePropriedade = function(id){
         return $http.get(urlBase + "/id/" + id)
	  };

    // Alterna propriedade
    var _updatePropriedade = function(propriedade){
        return $http.post(urlBase + "/alterar", propriedade)
    };

    return {
        getAll: _getAll,
        getById: _getById,
        insertPropriedade: _insertPropriedade,
        deletePropriedade: _deletePropriedade,
        updatePropriedade: _updatePropriedade

    };
});
