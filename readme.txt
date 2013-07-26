
Fonctionnement:

La fonction init() est appelé lors de l'affichage de la page.

Elle instancie les voitures et les objets flottants.

Chaque Voiture/objet flottant est une instance de la classe Flotteur ou de la classe Voiture.

Cette instance possède les attributs tels que la position X,la position Y,la taille etc...

La fonction init() crée également un timer qui appelle la fonction draw() à intervalle régulière.

Cette fonction Draw régénère à chaque appelle un nouvel canvas et donne l'ordre aux instances de se déplacer.

C'est ainsi qu'est obtenu l'effet d'animation.



Améliorations possibles:

Optimisation des collisions avec les barges (faire que quand frog tombe à l'eau même si moins de la moitié de frog est sur la barge)

Optimisation des performances sur firefox et chrome (légers lags par intermittences).

Sous safari tout semble très fluide.


- Jan Moritz Lindemann B3
ID:124898