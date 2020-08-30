

/*
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
}*/

async function fetchy(gen){
	
	var URL = 'https://cors-anywhere.herokuapp.com/ctrl-alt-tec.herokuapp.com/colab/saprepa/anuario/'+gen;
	let raw = await fetch(URL);
	let data = await raw.json();
	return data
}

async function studentBuilder(gen){//main function
	var allStudents = await fetchy(gen)
	allStudents.forEach((element)=>{
		document.getElementById("images").innerHTML += `<a href="http://stemen.com" target="_blank" style="text-decoration: none;">
                <div class="genCard" >
                    <image width="180px" height="180px" src="${element.fotoURL}" style="border-radius: 1.5rem; "/>
                    <h3 style="text-align: center; color: black; font-family: 'Merriweather Sans', sans-serif; font-size: 1.2rem;">${element.nombrecompleto}</h3><br/>
                    <h4 style="text-align: center; color: black; font-family: 'Merriweather Sans', sans-serif; font-size: 0.7rem;">"${element.frase}"</h4>
                </div>
            </a>`
	})
}

