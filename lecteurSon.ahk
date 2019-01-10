; Permet d'entrer le temps
^E::
	InputBox, temps, Decalage (1m30 = 1.30.00 ou 1.30):,,,275,100,,,,,%temps%
	return

; Met le temps dans le lecteur et déclanche la lecture
; Si ce n'est pas assez rapide, on pourrait séparer mettre le temps et déclancher
^W::
	vaAuLecteurDeSon()
	send {control}	; Contrôle est un événement qui efface le contenu
					; de décalage lecture et met le focus dessus
	send %temps%	; écrit le temps dans le input box
	send {space}	; envoie la touche espace pour démarrer le son
	
	vaAuProgrammeDeTitre()
	send {space} ; Démarre le vidéo dans le programme de titre
	
	return
	
vaAuLecteurDeSon()
{
	settitlematchmode 2
	IfWinExist, Bruno-Marie's lecteur de son HTML5  ; C'est le titre de la page web, doit être l'onglet actif!
		WinActivate
	return
}

vaAuProgrammeDeTitre()
{
	settitlematchmode 2
	IfWinExist, Film   ; Nom du programme, à adapter au besoin
		WinActivate
	return
}
