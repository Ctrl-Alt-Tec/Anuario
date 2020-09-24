//-------------Main------------------

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


//-----------------------top bar animation------------------------
window.onscroll = function(){menuScroll()}
function menuScroll(){
	if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 10){
		document.getElementById("padd").style.padding = "0.1rem"
		document.getElementById("paddh").style.fontSize = "1.5rem"
		document.getElementById("paddh").innerHTML = ""
		document.getElementById("arrow").style.marginTop = "0.5rem"
		document.getElementById("arrow").style.height = "50%"
	}else{
		document.getElementById("padd").style.padding = "3rem"
		document.getElementById("paddh").style.fontSize = "3rem"
		document.getElementById("paddh").innerHTML = "Anuario Prepa Tec"
		document.getElementById("arrow").style.marginTop = "3.5rem"
		document.getElementById("arrow").style.height = "6rem"
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
