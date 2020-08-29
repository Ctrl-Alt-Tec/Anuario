window.storage
class student{
	constructor(stu){
		this.timestamp = stu.timestamp;
		this.matricula = stu.matricula;
		this.nombrecompleto = stu.nombrecompleto;
		this.frase = stu.frase;
		this.foto = stu.foto;
		this.mail = stu.mail;
		this.semestre = stu.semestre;
		this.programa = stu.programa;
		this.acuerdo = stu.acuerdo;
		this.gruposestudiantiles = stu.gruposestudiantiles;
		this.fotoURL = stu.fotoURL;
	}
}

async function fetchy(gen){
	var URL = 'http://ctrl-alt-tec.herokuapp.com/colab/saprepa/anuario'+gen;
	let raw = await fetch(URL);
	return raw
}

async function studentBuilder(gen){//main function
	if(sessionStorage.getItem('allStudents')==null){
		sessionStorage.setItem('allStudents',await fetchy(gen))
	}
	var allStudents = new student(JSON.parse(sessionStorage.getItem('allStudents')))
}