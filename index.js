//-------------Variables Globales------------------


//-------------Main------------------

async function fetchy(gen){
	
	var URL = 'https://cors-anywhere.herokuapp.com/ctrl-alt-tec.herokuapp.com/colab/saprepa/anuario/'+gen;
	let raw = await fetch(URL);
	let data = await raw.json();
	return data
}

async function studentBuilder(gen, searchBar = null){//main function
	const allStudents = await fetchy(gen)
	allStudents.forEach((element)=>{
		console.log(element.nombrecompleto, typeof element.frase)
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
	})
	document.getElementById("load").innerHTML = ""
	window.sessionStorage.setItem("alreadyLoaded",true);
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

document.getElementById("PBB").addEventListener('click', ()=>{

})

document.getElementById("PBB").addEventListener('click', ()=>{
	
})

document.getElementById("PBB").addEventListener('click', ()=>{
	
})

document.getElementById("PBB").addEventListener('click', ()=>{
	
})

//---------------------------search engine -----------------------

async function searchEngine (toSearch){

	allStudents.forEach(element => { 
		if (toSearch in element.nombrecompleto){

			document.getElementById("Images").innerHTML = "";
		}
		
	});
}

