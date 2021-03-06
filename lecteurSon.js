var son = new Audio('son.wav'); // par défaut
var versionIncrement = 0; // V2 : obligé de faire ça pour recharger un son ...
var infoTemps = document.getElementById("div-infos-temps");
var inpTemps = document.getElementById("inp-temps");
var temps = 0;

var infoCompensPC = document.getElementById("div-infos-compensPC");
var inpCompensPC = document.getElementById("inp-compensPC");
var tempsCompens = 0;

analyseTemps();
analyseTempsCompens();

// Événements fenêtre
window.addEventListener("keydown", peseSpace); // aussi pour enter
inpTemps.addEventListener("input", analyseTemps);
inpCompensPC.addEventListener("input", analyseTempsCompens);

// Événements son
son.addEventListener('ended', sonEstFini);
son.addEventListener('pause', sonEstFini);
son.addEventListener('play', sonJoue);
son.addEventListener('canplaythrough', sonEstCharge); // chargement
son.addEventListener('canplaythrough', sonEstFini); // Ajouté pour mettre l'état pause après un rechargement
son.addEventListener('error', erreurChargement); // chargement

function analyseTempsCompens(e) {
	tempsCompens = Number.parseInt(inpCompensPC.value);
	
	if(Number.isNaN(Number.parseInt(tempsCompens))) {
		infoCompensPC.innerHTML = "<font color='red'>(ms!)</font>";
		return;
	}
	
	infoCompensPC.innerHTML = tempsCompens + ' ms';
}

function analyseTemps(e) {
	var tempsArray = inpTemps.value.split('.');
	
	if(tempsArray.length < 0 || tempsArray.length > 3) {
		infoTemps.innerHTML = "<font color='red'>(m.s.ms!)</font>";
		return;
	}
	
	for(var i in tempsArray) {
		if(Number.isNaN(Number.parseInt(tempsArray[i]))) {
			infoTemps.innerHTML = "<font color='red'>(m.s.ms!)</font>";
			return;
		} else {
			tempsArray[i] = Number.parseInt(tempsArray[i]);
		}
	}
	
	if(tempsArray.length == 1)
		temps = tempsArray[0];
	else if (tempsArray.length == 2) {
		temps = tempsArray[0]*60 + tempsArray[1];
	} else if (tempsArray.length == 3) {
		
		// remplacer cette ligne par le commentaire ci-dessous
		// pour avoir le dernier nombre en ms
		// Changer 30 par 25 pour changer le framerate
		var milli = tempsArray[2]*1000/30;
		
		/*var milli = tempsArray[2];
	
		if(milli >= 1000) milli = 0;
		else if(milli>=100 && milli<1000) milli = milli;
		else if(milli>=10 && milli<100) milli *= 10;
		else if(milli>=0 && milli<10) milli *= 100;
		else milli = 0;*/

		temps = tempsArray[0]*60 + tempsArray[1] + milli/1000;
	}
		
	temps = Number.parseFloat(temps).toFixed(3);
	infoTemps.innerHTML = temps + ' s';
}

function sonEstFini(e) {
	if(son.paused)
		document.getElementById("div-statut").innerHTML = "<font color='red'>Statut : à l'arrêt";
}

function sonJoue(e) {			
	document.getElementById("div-statut").innerHTML = "<font color='green'>Statut : lecture";
}

function sonEstCharge(e) {
	document.getElementById("div-infos-son").innerHTML = Number.parseFloat(son.duration).toFixed(3) + ' s';
}

function erreurChargement(e) {
	document.getElementById("div-infos-son").innerHTML = "<font color='red'>(erreur!)</font>";
}
function peseSpace(e) {
	if(e.key == ' ') {
		
		if(!son.paused) {
			son.pause();
			return;
		}
		
		son.currentTime = temps;
		son.play();

	} else if (e.key == 'Enter') {
		son.src = document.getElementById("inp-fichier").value;
		document.getElementById("div-infos-son").innerHTML = '(chargement...)';
	} else if (e.key == 'Control') {
		inpTemps.value = ''
		inpTemps.focus();
	} else if (e.key == 'r') {  // Ajouté à V2, pour recharger même fichier
		// ajoute une version, sinon le fichier n'est pas chargé
		// Note : tous les fichiers restent en cache!! donc au bout d'un certain temps,
		//        il y aura une perte de performance (plein de RAM utilisée par le browser...
		++versionIncrement;
		son.src = document.getElementById("inp-fichier").value + '?' + versionIncrement;
	}
}
