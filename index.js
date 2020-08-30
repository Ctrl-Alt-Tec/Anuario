

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
		var fras = "";
		if(element.frase.length <= 10){
			fras += "<br/>"
		}
		if(element.frase.indexOf('"')>=0){
			fras += `<h4 style="text-align: center; color: black; font-family: 'Merriweather Sans', sans-serif; font-size: 0.7rem; width: 100%;">${element.frase}</h4>`
		}else{
			fras += `<h4 style="text-align: center; color: black; font-family: 'Merriweather Sans', sans-serif; font-size: 0.8rem; width: 100%;">"${element.frase}"</h4>`
		}
		document.getElementById("images").innerHTML += `<a href="http://stemen.com" target="_blank" style="text-decoration: none;">
                <div class="genCard" style="height: 370px;">
                    <image width="180px" height="180px" src="${element.fotoURL}" style="border-radius: 1.5rem; "/>
                    <h3 style="text-align: center; color: black; font-family: 'Merriweather Sans', sans-serif; font-size: 1.2rem;">${element.nombrecompleto}</h3>
                    <h3 style="text-align: center; color: black; font-family: 'Merriweather Sans', sans-serif; font-size: 1rem;">${element.programa}</h3>
                    ${fras}
                </div>
            </a>`
	})
}

document.getElementById("PBB").addEventListener('click', ()=>{
	
})

document.getElementById("PBB").addEventListener('click', ()=>{
	
})

document.getElementById("PBB").addEventListener('click', ()=>{
	
})

document.getElementById("PBB").addEventListener('click', ()=>{
	
})