package br.edu.ifpb.resteasyapp.dao;

import java.sql.SQLException;
import java.util.List;

import br.edu.ifpb.resteasyapp.entidade.Animal;


public class AnimalDAO extends GenericDao<Integer, Animal>{

	private static AnimalDAO instance;
	
	public static AnimalDAO getInstance() {		
		instance = new AnimalDAO();		
		return instance;
	}
	
	@Override
	public List<Animal> getAll() throws SQLException {
		return super.getAll("Animal.getAll");
	}

	@Override
	public Class<?> getEntityClass() {
		return Animal.class;
	}

	@Override
	public Animal find(Animal entity) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}
}
