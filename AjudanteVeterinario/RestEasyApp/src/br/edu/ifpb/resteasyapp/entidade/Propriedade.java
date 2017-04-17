package br.edu.ifpb.resteasyapp.entidade;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
@Table(name = "tb_propriedade")
@NamedQuery(name = "Propriedade.getAll", query = "from Propriedade")
public class Propriedade {

	public Propriedade() {

	}

	public Propriedade(String nome, String proprietario, String email) {
		super();
		this.nome = nome;
		this.proprietario = proprietario;
		this.email = email;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_Propriedade")
	private int id;

	@Column(name = "nome")
	private String nome;

	@Column(name = "proprietario")
	private String proprietario;

	@Column(name = "email", unique = true)
	private String email;

	@XmlElement
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@XmlElement
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@XmlElement
	public String getProprietario() {
		return proprietario;
	}

	public void setProprietario(String proprietario) {
		this.proprietario = proprietario;
	}

	@XmlElement
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Propriedade [id=" + id + ", nome=" + nome + ", proprietario=" + proprietario + ", email=" + email + "]";
	}

}
