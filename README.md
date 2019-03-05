# lecteurSon

Lecteur audio HTML5 pour aider au montage vidéo avec NewBlueFX.
Note : le son par défaut (son.wav) a été enregistré lors d'un voyage en auto.

## Manuel

### Démarrage
Il y a deux étapes :
 * Ouvrir la page web dans Chrome : `lecteurSon.html`
 * Démarrer le script AutoHotKey : `lecteurSon.ahk`
 
### Utilisation
#### Entrer le temps désiré (raccourci par défaut : Ctrl+E)
Faire le raccourci, puis entrer le temps désiré dans un des formats suivants :
  * `123` = 123 secondes
  * `1.23` = 1 minute 23 secondes = 83 secondes
  * `1.23.1` = 1 minute 23 secondes et 1 frame = 83.1/30 secondes (fps = 30)

Le temps entrée sera mémorisé pour le prochain appel.

#### Démarrer le son au moment désiré (raccourci par défaut : Ctrl+W)
Le raccourci fait les tâches suivantes :
 * Active la fenêtre du lecteur de son (la page web doit être l'onglet actif dans Chrome!)
 * Efface le contenu de `Décalage lecture` en envoyant la touche `Ctrl`
 * Entre le temps voulu dans `Décalage lecture`
 * Envoie la touche `Espace` pour démarrer le son
 * Active NewBlueFX
 * Envoie la touche `Espace`

## Révisions
 * `v1.0.0` (2019-03-05) : Rev 1 - Ajout de la fonction rechargement, remplacement ms par fps
 * `v0.9.0` (2018-09-01) : Pour commentaires
