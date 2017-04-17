angulaAppModulo.factory("animalService", function($http) {

    //ur do banco
    var urlBase = "http://localhost:8080/RestEasyApp/animal";


    // Lista todos os animais
    var _getAll = function() {
        return $http.get(urlBase + "/listar")
    };

    // Pega animal pelo id
    var _getById = function(id) {
        return $http.get(urlBase + "/id/" + id)
    };

    // Cadastra animal
    var _insertAnimal = function(animal){
		    return $http.post(urlBase + "/inserir", animal)
	  };

    // deleta animal
    var _deleteAnimal = function(id){
		    return $http.get(urlBase + "/id/" + id)
	  };

    // Alterna animal
    var _updateAnimal = function(animal){
        return $http.post(urlBase + "/alterar", animal)
    };

    return {
        getAll: _getAll,
        getById: _getById,
        insertAnimal: _insertAnimal,
        deleteAnimal: _deleteAnimal,
        updateAnimal: _updateAnimal

    };
});
