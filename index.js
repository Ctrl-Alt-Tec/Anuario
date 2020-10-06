//-------------Variables Globales------------------
window.sessionStorage;
//-------------Main------------------

async function fetchy(gen){
	
	var URL = 'https://cors-anywhere.herokuapp.com/ctrl-alt-tec.herokuapp.com/colab/saprepa/anuario/'+gen;
	let raw = await fetch(URL);
	let data = await raw.json();
	return data
}

async function studentBuilder(gen, searchProg = "none", searchBar = ""){//main function
	document.getElementById("load").innerHTML="Cargando..."
	document.getElementById("images").innerHTML="";

	window.sessionStorage.setItem("envirnonment",gen);

	if(searchBar != "" || window.sessionStorage.getItem("imagesFull") == null || (searchProg != "none" && window.sessionStorage.getItem(searchProg) == null )){
		if(window.sessionStorage.getItem("allStudents") == null){
			var allStudents = await fetchy(gen)
		}else{
			var allStudents = window.sessionStorage.getItem("allStudents")
			allStudents = await JSON.parse(allStudents)
		}
		allStudents.forEach((element)=>{
			if(element.programa.indexOf(searchProg)>=0 || searchProg == "none"){
				console.log(element.nombrecompleto, typeof element.frase, element.programa)
				element.frase = element.frase.toString()
				var fras = "";
				var workingFras = element.frase;
				while (element.nombrecompleto.indexOf(".")>=0){
					element.nombrecompleto = element.nombrecompleto.replace("."," ")
				}
				if(element.frase.length <= 10){
					fras += "<br/>"
				}else if(element.frase.length >=100){
					let ind = element.frase.indexOf(" ",80)
					workingFras = element.frase.slice(0,ind)
					workingFras += " [...]"
				}
				if(element.frase.indexOf('"')>=0){
					fras += `<h4 style="text-align: center; color: black; font-family: 'Merriweather Sans', sans-serif; font-size: 0.7rem; width: 100%;">${workingFras}</h4>`
				}else{
					fras += `<h4 style="text-align: center; color: black; font-family: 'Merriweather Sans', sans-serif; font-size: 0.8rem; width: 100%;">"${workingFras}"</h4>`
				}
				document.getElementById("images").innerHTML += `<a href="http://stemen.com" target="_blank" style="text-decoration: none;">
		                <div class="genCard" style="height: 370px;">
		                    <image width="180px" height="180px" src="${element.fotoURL}" style="border-radius: 1.5rem; "/>
		                    <h3 style="text-align: center; color: black; font-family: 'Merriweather Sans', sans-serif; font-size: 1.2rem;">${element.nombrecompleto}</h3>
		                    <h3 style="text-align: center; color: black; font-family: 'Merriweather Sans', sans-serif; font-size: 1rem;">${element.programa}</h3>
		                    ${fras}
		                </div>
		            </a>`
		    }
		})
		if(window.sessionStorage.getItem("allStudents")==null){
			jsonAllStudents = await JSON.stringify(allStudents);
		    window.sessionStorage.setItem("allStudents",jsonAllStudents);
		    window.sessionStorage.setItem("imagesFull",document.getElementById("images").innerHTML);
		}else{
			window.sessionStorage.setItem(searchProg,document.getElementById("images").innerHTML);
		}
	}else if(searchProg != "none" && window.sessionStorage.getItem(searchProg) != null){
		document.getElementById("images").innerHTML = window.sessionStorage.getItem(searchProg);
	}else{
		document.getElementById("images").innerHTML = window.sessionStorage.getItem("imagesFull");
	}
	document.getElementById("load").innerHTML = ""
}

//-----------------------top bar animation------------------------
window.onscroll = function(){menuScroll()}
function menuScroll(){
	if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 10){
		document.getElementById("padd").style.padding = "0.1rem"
		document.getElementById("paddh").style.fontSize = "1.5rem"
		document.getElementById("paddh").innerHTML = ""
		document.getElementById("arrow").style.marginTop = "0.5rem"
		document.getElementById("arrow").style.height = "50%"

		document.getElementById("footer").innerHTML = `<div class='footer'>
            <p class='footer'>
                Made with 💙 by <a href="https://ctrl-alt-tec.hackclub.com" style='text-decoration: none; color: inherit;'>Ctrl Alt Tec</a>
            </p>
            <a href="#TOP" style="text-align: right; margin-right: 20px; text-decoration: none; color: white">Volver arriba</a>
        </div>`
	}else{
		document.getElementById("padd").style.padding = "3rem"
		document.getElementById("paddh").style.fontSize = "3rem"
		document.getElementById("paddh").innerHTML = "Anuario Prepa Tec"
		document.getElementById("arrow").style.marginTop = "3.5rem"
		document.getElementById("arrow").style.height = "6rem"

		document.getElementById("footer").innerHTML = ""
	}
}

//-----------------------Filters----------------------------------

async function clearFilters(){
	var standardStyle = "max-width: 50px;max-height: 50px;width: 100%;padding: 1rem;margin: 1rem;border: 0.15rem solid rgb(200,200,200);border-radius: 1rem;display: flex;justify-content: center;align-items: stretch;flex-wrap: wrap;text-decoration: none;color: inherit;transition: transform 0.2s;background: white;"
	document.getElementById("PBB").style = standardStyle;
	document.getElementById("PTM").style = standardStyle;
	document.getElementById("PBI").style = standardStyle;
}

document.getElementById("PBB").addEventListener('click', ()=>{
	clearFilters()
	studentBuilder(window.sessionStorage.getItem("envirnonment"),"PBB")
	document.getElementById("PBB").style = "color: #0000ff; transform: scale(1.5);"
})

document.getElementById("PTM").addEventListener('click', ()=>{
	clearFilters()
	studentBuilder(window.sessionStorage.getItem("envirnonment"),"PTM")
	document.getElementById("PTM").style = "color: #0000ff; transform: scale(1.5);"
})

document.getElementById("PBI").addEventListener('click', ()=>{
	clearFilters()
	studentBuilder(window.sessionStorage.getItem("envirnonment"),"PBI")
	document.getElementById("PBI").style = "color: #0000ff; transform: scale(1.5);"
})

document.getElementById("nofilter").addEventListener('click', ()=>{
	clearFilters()
	studentBuilder(window.sessionStorage.getItem("envirnonment"),"none")
})

//---------------------------search engine -----------------------

async function searchEngine (toSearch){

	allStudents.forEach(element => { 
		if (toSearch in element.nombrecompleto){

			document.getElementById("Images").innerHTML = "";
		}
		
	});
}

