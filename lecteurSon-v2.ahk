; Met le temps dans le lecteur et déclanche la lecture
; Si ce n'est pas assez rapide, on pourrait séparer mettre le temps et déclancher

^+Space::
	entrerTemps()
	activeLecture()
	return

^Space::
	activeLecture()	
	return

entrerTemps() 		; permet d'entrer le temps
{
	InputBox, temps, Decalage (1m30 = 1.30.00 ou 1.30):,,,275,100,,,,,%temps%
}
	
activeLecture()
{
	vaAuLecteurDeSon()
	send {control}	; Contrôle est un événement qui efface le contenu
					; de décalage lecture et met le focus dessus
	send %temps%	; écrit le temps dans le input box
	send {space}	; envoie la touche espace pour démarrer le son
	
	vaAuProgrammeDeTitre()
	send {space} ; Démarre le vidéo dans le programme de titre
}


vaAuLecteurDeSon()
{
	settitlematchmode 2
	IfWinExist, Bruno-Marie's lecteur de son HTML5  ; C'est le titre de la page web, doit être l'onglet actif!
		WinActivate
	return
}

vaAuProgrammeDeTitre2()
{
	settitlematchmode 2
	IfWinExist, Film   ; Nom du programme, à adapter au besoin
		WinActivate
	return
}
vaAuProgrammeDeTitre() ; J'utilise la classe du logiciel parce qu'il change de nom selon le document ouvert...
{
	WinActivate, ahk_class ahk_class Qt5QWindowIcon
}

