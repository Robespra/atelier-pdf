# [Opti restau] Points à ajouter aux US : variations B et C

Légende : **[B]** version B uniquement · **[C]** version C uniquement · **[B+C]** les deux.
Les blocs sont prêts à coller sous les sections existantes de chaque US (Périmètre, TO DO, Critères d'acceptation, Contraintes).

## Décisions prises (à reporter dans les US)

1. **[C] Clic sur un horaire** : ajout direct au panier, pas de modale. La modale s'ouvre seulement via « Voir menus et carte », la photo / le nom / le « i » de la carte, ou « Modifier ma sélection ». À retirer de l'US modale : « ou clic sur un horaire ».
2. **[C] Modale, première sélection** : l'horaire se choisit en **2ᵉ étape après « Continuer »**. L'ajout au panier se fait au clic sur l'horaire, pas au « Continuer ».
3. **[C] Autres cartes du repas** : elles restent cliquables. Choisir un autre restaurant remplace la réservation. Aucun grisage.
4. **[B] Horaires** : la carte est redessinée, horaires en texte simple, sans chips ni aspect cliquable, tous affichés. Pas de dropdown ni de « +N ». Les horaires indisponibles sont **grisés** (affichés, pas masqués).
5. **[B+C] Repli automatique des sections** : ajouté à la US #753, déclenché au premier scroll vers le bas après une confirmation.
6. **[B+C] Toast de confirmation** : en C après un clic horaire ou la fin de la modale ; en B au retour sur /restaurants après l'ajout au panier depuis la page restaurant.
7. **[B] Retour au listing** : après l'ajout au panier sur la page restaurant, l'utilisateur revient sur /restaurants (la page « dashboard » avec tous les restaurants), où la carte et la section sont en état de réservation active. Le lien « retour » de la page restaurant pointe aussi vers /restaurants (la page liste intermédiaire n'existe plus).
8. **[B] CTA et libellé** : le CTA devient **« Voir détails et horaires »** (la page restaurant montre les horaires, des infos sur le restaurant et la description de la formule) ; en C il reste « Voir menus et carte » (modale : menus puis horaire). Le CTA est identique sur toutes les cartes B, y compris plage horaire / toute la journée. Le libellé « Sélectionnez un horaire » le libellé « Sélectionnez un horaire » (avec son icône d'horloge) est **supprimé** au-dessus des horaires, sans remplacement. Les horaires sont du texte simple, **sans bordure ni fond**, pour en montrer un maximum sur la carte.
10. **[B+C] Restaurants à plage horaire ou ouverts toute la journée** : pas de créneaux fixes, donc un **seul élément cliquable** sur la carte (« Service continu de 12:00 à 15:00 » ou « Ouvert toute la journée »). Un clic **réserve directement** (ajout au panier), **y compris en B** : c'est la seule exception à la règle « horaires non cliquables » de B. Pas de dropdown. Dans le récap et le bandeau, la plage ou « Toute la journée » tient lieu d'horaire. Les prototypes B et C contiennent **deux cartes de démonstration** (une plage, une toute la journée).
9. **Cadre du test** : un seul test **A/B/C**. A = parcours actuel (témoin), B = page /restaurants enrichie qui mène à la page restaurant, C = B + modale et sélection directe sur la page.

| Décision | US concernées |
|---|---|
| 1. Clic horaire = ajout direct | #756 (ajout) · Modale (retrait de « clic sur un horaire » : périmètre **et** critère 1) |
| 2. Horaire en 2ᵉ étape de la modale | Modale (périmètre, TO DO, critères) · #755 (toast) |
| 3. Autres cartes restent cliquables | #756 · #755 (remplacement) |
| 4. Horaires B en texte simple | #753 · #756 (critères « cliquables », « dropdown », « grisés » à restreindre à C) |
| 5. Repli automatique (B et C) | #753 |
| 6. Toast (B et C) | #755 |
| 7. Retour au listing après ajout (B) | #755 (+ page restaurant existante : redirection et lien retour) |
| 8. CTA, libellé supprimé, horaires sans bordure (B) | #753 · #756 |
| 10. Plage horaire / toute la journée (B et C) | #753 · #756 · #755 |

Chaque US a, en plus des ajouts, un bloc **« Lignes existantes à modifier ou supprimer »** qui liste les phrases de l'US actuelle à remplacer.

## Récapitulatif B / C

| Comportement | B | C |
|---|---|---|
| Horaires sur la carte | Texte simple sans bordure, non cliquable, un maximum affichés (indisponibles grisés) | Chips cliquables ; dropdown si plus de 4 (indisponibles grisés) |
| Libellé au-dessus des horaires | Aucun (supprimé) | « Sélectionnez un horaire » |
| Restaurant à plage horaire / ouvert toute la journée | Un élément cliquable : un clic réserve directement | Un élément cliquable : un clic réserve directement |
| CTA de la carte | « Voir détails et horaires » | « Voir menus et carte » |
| Clic sur un horaire | Rien | Ajout direct au panier |
| CTA de la carte, photo, nom | Page restaurant existante | Modale latérale |
| « Modifier ma sélection » | Page détail | Modale sans horaires |
| Choix de l'horaire | Sur la page détail | Étape 2 de la modale ou clic sur la carte |
| Retour sur /restaurants | Redirection après l'ajout au panier sur la page restaurant | On ne quitte jamais la page |
| État « sélectionné » sur la liste | Affiché au retour de la page restaurant (relu depuis le panier) | Affiché après clic horaire ou modale |
| Toast de confirmation | Oui, au retour sur /restaurants après l'ajout | Oui, après clic horaire ou fin de la modale |
| Repli automatique de la section | Oui, au premier scroll après le retour | Oui, au premier scroll après confirmation |
| Filtres, pagination, cartes, prix | Identiques | Identiques |

---

## US #753 : Page /restaurants enrichie avec cartes restaurant

### Périmètre : à ajouter
- **[B+C]** Sections « Votre déjeuner » / « Votre dîner » repliables au clic sur l'en-tête (chevron). Ouvertes par défaut. Quand une sélection existe, l'en-tête affiche le bandeau récap (voir #755).
- **[B+C]** Repli automatique : après la confirmation d'un restaurant, la section du repas se replie au **premier scroll vers le bas**. **[C]** confirmation = clic horaire ou fin de la modale ; **[B]** confirmation = retour sur /restaurants après l'ajout au panier depuis la page restaurant (pas de repli lors d'un simple refresh ou d'une navigation sans ajout).
- **[B]** Aucun libellé au-dessus des horaires (« Sélectionnez un horaire » et son icône sont supprimés). Le CTA devient « Voir détails et horaires » en B (« Voir menus et carte » en C).
- **[B+C]** Trois types de restaurants selon les données : créneaux fixes ; **plage horaire** (« Service continu de 12:00 à 15:00 ») ; **ouvert toute la journée** (« Ouvert toute la journée »). Les deux derniers affichent un seul élément cliquable (bordé, comme une chip) à la place des horaires, y compris en B. Le type est fourni par les données de la carte.
- **[B+C]** Suppression de la phrase « N restaurants recommandés (2 adultes · 1 enfant) » au-dessus des cartes de chaque section (la composition reste affichée sur chaque carte).
- **[B+C]** Carrousel photo sur la carte : flèches (desktop), points, swipe (mobile). Clic sur la photo ou le nom : **[B]** page détail, **[C]** modale.
- **[B]** Horaires affichés en texte simple, sans chips, sans bordure ni fond, sans dropdown, sans aspect cliquable, pour en montrer un maximum. Tous les horaires sont affichés ; les indisponibles sont grisés (non masqués).
- **[B+C]** Pagination : indicateur « 1 / 2 », précédent / suivant, masquée s'il n'y a qu'une page.
- **[B+C]** Mobile : cartes en bande horizontale (scroll-snap), la carte suivante dépasse pour signaler le défilement.
- **[B+C]** Prix : « X € sur réservation / au lieu de Y € sur place ». Composition des menus issue du groupe. **[C]** recalculés après modification en modale.
- **[B+C]** États limites : repas sans restaurant disponible (message à définir) ; restaurant sans horaire (cas VF).

### TO DO : à ajouter
- [ ] Composant d'en-tête de section repliable (chevron, `aria-expanded`)
- [ ] **[B+C]** Repli automatique : un seul écouteur de scroll par section, retiré après déclenchement et à l'annulation de la sélection ; la position de scroll ne doit pas sauter
- [ ] **[B]** Distinguer l'arrivée « juste après un ajout au panier » d'un chargement ordinaire (par exemple un indicateur transmis à la redirection), pour ne déclencher ni toast ni repli au refresh
- [ ] Carrousel photo de carte (flèches, points, swipe)
- [ ] Bande horizontale scroll-snap sur mobile
- [ ] **[B]** Redessiner la carte : horaires en texte simple, sans chips
- [ ] Calcul dynamique du prix et de la composition
- [ ] États vides : aucun restaurant sur un repas, aucun horaire disponible
- [ ] Événements de suivi (affichage des cartes, clic photo / nom, pagination, repli de section) à valider avec l'analytics

### Critères d'acceptation : à ajouter
- [ ] **[B+C]** Un clic sur l'en-tête replie ou déplie la section ; chevron et `aria-expanded` restent cohérents ; toutes les sections sont ouvertes au chargement
- [ ] **[B+C]** Après la confirmation d'un restaurant, la section de ce repas se replie au premier scroll vers le bas ; le bandeau récap reste visible ; les autres sections ne bougent pas
- [ ] **[B+C]** Le repli ne se déclenche qu'une fois par confirmation ; si l'utilisateur rouvre la section, elle ne se referme pas seule
- [ ] **[B+C]** Si la sélection est annulée avant le scroll, aucun repli ; modifier les menus via « Modifier ma sélection » ne déclenche pas de repli ; choisir un autre restaurant (remplacement) déclenche à nouveau le repli
- [ ] **[B+C]** Au moment du repli, la page ne saute pas sous le curseur ou le doigt de l'utilisateur
- [ ] **[B]** Un refresh ou une navigation vers /restaurants sans ajout préalable ne déclenche aucun repli automatique
- [ ] **[B]** Les horaires sont affichés en texte simple, sans élément cliquable, tous visibles, sans dropdown ni « +N »
- [ ] **[B]** Les horaires indisponibles restent affichés, **grisés** (non masqués), sans aucune interaction
- [ ] **[B]** Aucun libellé ni icône d'horloge au-dessus des horaires ; le CTA est « Voir détails et horaires »
- [ ] **[B+C]** Un restaurant à plage horaire ou ouvert toute la journée affiche un seul élément cliquable (« Service continu de 12:00 à 15:00 » / « Ouvert toute la journée ») au lieu de la liste d'horaires ; aucun dropdown
- [ ] **[B+C]** Le carrousel de la carte se parcourt aux flèches, aux points ou au swipe ; la pagination des photos suit la photo affichée
- [ ] **[B+C]** La pagination affiche « n / N », désactive « précédent » en page 1 et « suivant » en dernière page, et disparaît s'il n'y a qu'une page
- [ ] **[B+C]** Sur mobile, les cartes d'un repas défilent horizontalement avec accroche (snap) et la carte suivante dépasse
- [ ] **[B+C]** Quand aucun restaurant n'est disponible pour un repas, un message remplace la liste
- [ ] **[B+C]** La phrase « N restaurants recommandés (2 adultes · 1 enfant) » n'apparaît nulle part au-dessus des cartes d'une section, y compris après application de filtres (le proto la met à jour : à retirer)

### Contraintes / points de données
- Le type de restaurant (créneaux fixes / plage horaire / ouvert toute la journée) et le libellé de la plage doivent venir des données ; les cartes de démonstration des prototypes en sont des exemples.
- Le prix barré « sur place » doit avoir une source réelle (le proto le calcule en ajoutant 15 %).
- À confirmer : la barre de récap en bas de page (total + tiroir « J1 · Déjeuner · 12:30 — prix ») existe-t-elle déjà sur le site ? Sinon, il faut une US.

### Lignes existantes à modifier ou supprimer
- Périmètre « horaires disponibles (affichés, non sélectionnables) » → « **[B]** horaires en texte simple, non cliquables ; **[C]** chips cliquables (voir #756) »
- Périmètre « CTA « Voir menus et carte » redirige vers la page détail existante (étape 3 inchangée) » → « **[B]** le CTA, libellé « Voir détails et horaires », redirige vers la page détail existante ; **[C]** le CTA « Voir menus et carte » ouvre la modale latérale »
- Critère « Le CTA « Voir menus et carte » redirige vers la page détail existante du restaurant » → même scission **[B]** (libellé « Voir détails et horaires ») / **[C]** (« Voir menus et carte »)
- Critère « Chaque carte affiche : … horaires disponibles … » → préciser « en texte simple (B) ou en chips (C) »

---

## US #756 : Sélection de l'horaire sur la carte restaurant

### Contexte / Contraintes : à corriger
- La contrainte dit « Version C uniquement » et le critère Kameleoon dit « B & C ». Reformuler : **[C]** pour l'interaction, **[B]** pour l'affichage en texte simple (voir #753).

### Périmètre : à ajouter
- **[C]** Clic sur un horaire = ajout direct au panier, sans ouvrir la modale. Chargement visible pendant l'appel, échec géré.
- **[C]** Les autres cartes du repas restent cliquables : choisir un autre restaurant remplace la réservation précédente (aucun grisage).
- **[C]** Dropdown (5 horaires ou plus) : détail du comportement ci-dessous.
- **[B+C]** Restaurant à plage horaire ou ouvert toute la journée : un seul élément cliquable (« Service continu de 12:00 à 15:00 » / « Ouvert toute la journée ») ; un clic ajoute directement au panier, **y compris en B** ; la plage ou « Toute la journée » est enregistrée comme horaire ; pas de dropdown.
- **[C]** « Voir menus et carte » ouvre la modale sans horaire pré-sélectionné ; l'horaire est choisi à l'étape 2 de la modale (voir US modale).
- **[B]** Horaires en texte simple, non cliquables, tous affichés ; les indisponibles sont grisés (non masqués). Aucun libellé au-dessus des horaires. Exception : un restaurant à plage horaire ou ouvert toute la journée affiche un élément cliquable dont le clic ajoute directement au panier. « Voir détails et horaires » mène à la page restaurant existante, où l'on choisit **l'horaire seulement** (la page actuelle n'a pas de sélection de menus : le prix est celui du groupe) ; après l'ajout au panier, retour sur /restaurants (voir #755).

### TO DO : à ajouter
- [ ] **[B+C]** Élément cliquable unique pour les restaurants à plage horaire / toute la journée, avec ajout direct au panier (y compris en B)
- [ ] **[B+C]** Deux cartes de démonstration dans les prototypes B et C : une plage horaire, une ouverte toute la journée
- [ ] **[C]** État de chargement sur la carte pendant l'ajout, et blocage du double clic
- [ ] **[C]** Gestion d'erreur : échec de l'API panier, créneau devenu complet entre l'affichage et le clic
- [ ] **[C]** Remplacement de réservation : retirer l'ancienne ligne et ajouter la nouvelle sans jamais laisser deux lignes pour un même repas
- [ ] **[C]** Mettre à jour le total, le bandeau de section et le toast après succès
- [ ] **[C]** Dropdown : positionnement, fermeture, synchronisation du libellé
- [ ] Événements de suivi : clic horaire, ouverture du dropdown, erreurs d'ajout

### Critères d'acceptation : à ajouter
- [ ] **[C]** Pendant l'ajout au panier, un indicateur de chargement s'affiche sur la carte et ses horaires ne sont pas cliquables
- [ ] **[C]** En cas de succès : la carte passe à l'état « sélectionné » (voir #755), un toast s'affiche, le total est mis à jour
- [ ] **[C]** En cas d'échec (erreur panier ou créneau complet) : un message d'erreur s'affiche sur la carte, aucune sélection n'est affichée, **l'ancienne réservation est conservée**
- [ ] **[B+C]** Sur un restaurant à plage horaire ou ouvert toute la journée, un clic sur l'élément unique ajoute directement au panier (en B comme en C) ; la carte passe à l'état sélectionné ; le récap affiche la plage ou « Toute la journée » à la place de l'horaire
- [ ] **[C]** Après sélection d'un restaurant, les horaires des autres cartes du même repas restent cliquables et n'apparaissent pas grisés ; la nouvelle sélection remplace l'ancienne
- [ ] **[C]** Dropdown (5 horaires ou plus) : le bouton affiche « Sélectionnez un horaire », puis l'horaire choisi ; le panneau s'ouvre sous le bouton et le suit au scroll ; il se ferme au choix d'un horaire, au clic à l'extérieur et au redimensionnement ; un seul dropdown est ouvert à la fois ; les horaires indisponibles sont grisés et non sélectionnables
- [ ] **[C]** 4 horaires ou moins : chips cliquables, sans dropdown
- [ ] **[C]** Chips et dropdown atteignables au clavier (Entrée / Espace pour choisir, Échap pour fermer le dropdown) : recommandé, absent du proto
- [ ] **[B]** Les horaires sont en texte simple : pas de survol, pas de curseur « main », aucune action au clic
- [ ] **[B]** Les horaires indisponibles sont affichés **grisés** (pas masqués), au même format que les horaires disponibles, avec un contraste suffisant pour rester lisibles
- [ ] **[B+C]** Cas VF : aucun horaire disponible → présentation à revoir (renvoyer à la maquette)

### Points ouverts
- L'info « complet » est-elle fournie par Experticket ? (question déjà posée dans le TO DO)
- Re-clic sur l'horaire déjà sélectionné : le proto **annule** la réservation. Recommandation : ne rien faire, l'annulation passe par le lien « Annuler » (#755). À confirmer.
- Décidé : en B, les horaires indisponibles sont affichés grisés (pas masqués). Le niveau de grisé reste à valider avec la maquette de la carte redessinée (lisibilité).

### Lignes existantes à modifier ou supprimer
- Résultat attendu « Le visiteur ne quitte jamais la page /restaurants » → **[C]** uniquement
- Critère « Les horaires affichés sur chaque carte restaurant sont cliquables » → **[C]** uniquement ; **[B]** : « les horaires ne sont pas cliquables », **sauf** l'élément unique d'un restaurant à plage horaire ou ouvert toute la journée (cliquable en B et C)
- Critère « S'il y a plus de 4 horaires affichés, les chips sont remplacées par un dropdown ⚠️ version B différente » → « **[C]** … dropdown ; **[B]** aucun dropdown, tous les horaires en texte simple (voir #753) » (le ⚠️ disparaît)
- Critères « Le clic sur un horaire disponible ajoute au panier… », « Les créneaux indisponibles sont grisés et non cliquables », « Si l'utilisateur a déjà sélectionné un restaurant… remplace la réservation » → **[C]** uniquement
- Critère « Le CTA « Voir menus et carte » ouvre la modale sans horaire pré-sélectionné » → **[C]** ; **[B]** : « le CTA « Voir détails et horaires » ouvre la page restaurant »
- TO DO « Connecter le CTA « Voir menus et carte » à l'ouverture de la modale » et « Gérer l'état visuel des créneaux » → **[C]** uniquement
- Contraintes « Dépend… de la modale latérale (US à venir) » → référencer l'US de la modale latérale

---

## US Modale latérale de sélection des menus (C uniquement)

### Périmètre : à corriger et à ajouter
- **À retirer** : « ou clic sur un horaire (US #756) ». Les modes d'ouverture sont : « Voir menus et carte », photo / nom / bouton « i » de la carte, « Modifier ma sélection ».
- **Mode première sélection** : après « Continuer », la modale affiche une 2ᵉ étape « Choisissez votre horaire » (chips ; horaires indisponibles grisés) avec un lien « ← Revenir aux menus ». Un clic sur un horaire lance l'ajout au panier (chargement « Confirmation en cours… »), ferme la modale et passe la carte à l'état « sélectionné » + toast.
- **Mode modification** : pas d'étape horaire. « Continuer » met à jour la ligne de panier existante (remplace, jamais de doublon), recalcule prix et composition sur la carte et dans le bandeau, puis ferme la modale.
- Menus végétariens affichés quand la case « J'ai un régime alimentaire spécifique » est cochée. Si on la coche ou la décoche alors que la modale est ouverte, la liste se met à jour et les quantités végétariennes repassent à 0.
- Compteurs de quantité avec bornes (voir critères).
- Fermeture : croix, « Annuler », clic sur le fond. Le scroll de la page derrière est figé et la position est restaurée à la fermeture.

### TO DO : à ajouter
- [ ] Étape 2 « Choisissez votre horaire » (chips, retour aux menus, chargement, erreur)
- [ ] Ajout au panier déclenché au choix de l'horaire (première sélection) ; mise à jour de la ligne existante (modification)
- [ ] Gérer les menus végétariens selon la case régime alimentaire
- [ ] Bornes des compteurs et blocage de « Continuer » si aucun menu
- [ ] Mettre à jour la carte (composition, prix, prix barré) et le bandeau après modification
- [ ] Vérifier que le composant VEL gère le focus, la touche Échap et le blocage du scroll (sinon l'ajouter)
- [ ] Événements de suivi : ouverture de la modale (par point d'entrée), « Continuer », « Annuler », choix d'horaire

### Critères d'acceptation : à ajouter ou corriger
- [ ] **Corriger** « En mode première sélection, la sélection de l'horaire est disponible dans la modale » → « Après « Continuer », la modale affiche l'étape de choix d'horaire ; « ← Revenir aux menus » ramène aux menus avec les quantités conservées »
- [ ] **Corriger** « Le clic sur Continuer ajoute les menus au panier » → « En première sélection, le menu est ajouté au panier au clic sur un horaire ; en modification, « Continuer » met à jour la ligne existante »
- [ ] Pendant la confirmation, la modale affiche un état de chargement ; en cas d'échec, un message s'affiche **dans la modale** et la sélection n'est pas enregistrée
- [ ] Les menus végétariens n'apparaissent que si la case « régime alimentaire spécifique » est cochée ; la décocher met leurs quantités à 0
- [ ] Un menu ne peut pas passer sous 0 (bouton « − » désactivé à 0) ; « Continuer » est désactivé si aucun menu n'est sélectionné
- [ ] Le total et le prix barré « sur place » sont recalculés à chaque changement de quantité
- [ ] En mode modification, la carte (composition « 2 menus adulte + 1 menu enfant », prix, prix barré) et le bandeau de section sont mis à jour à la fermeture
- [ ] La modale se ferme par la croix, « Annuler », le clic sur le fond et la touche Échap ; la page reprend exactement sa position
- [ ] Le carrousel photo de l'en-tête se parcourt aux flèches, aux points et au swipe
- [ ] Le focus se place dans la modale à l'ouverture et revient au déclencheur à la fermeture (à vérifier dans la VEL)

### Points ouverts
- Règle de bornes : quantité maximale (nombre de personnes du groupe ?) et règle de présélection des menus (restaurant sans menu enfant, bébés, prix « inclus »).

### Lignes existantes à modifier ou supprimer
- Périmètre « Via « Voir menus et carte » ou clic sur un horaire (US #756) : modale complète avec menus + sélection de l'horaire » → « Via « Voir menus et carte » ou la photo / le nom / le « i » de la carte : menus, puis étape horaire après « Continuer » »
- Périmètre « Sélection de l'horaire (uniquement en mode « première sélection »…) » → « Étape 2 « Choisissez votre horaire » après « Continuer », en première sélection uniquement »
- Périmètre « Bouton « Continuer » : ajoute au panier, ferme la modale, retour sur /restaurants… » → « Première sélection : « Continuer » ouvre l'étape horaire ; l'ajout au panier a lieu au clic sur l'horaire. Modification : « Continuer » met à jour la ligne existante et ferme la modale »
- TO DO « Implémenter la sélection de l'horaire dans la modale » → « Implémenter l'étape 2 (choix d'horaire) »
- TO DO « Implémenter le bouton « Continuer » (ajout au panier + fermeture modale + état…) » → même correction que le périmètre
- **Critère 1** « La modale s'ouvre au clic sur « Voir menus et carte », **sur un horaire de la carte**, ou sur « Modifier ma sélection » » → retirer « sur un horaire de la carte » ; ajouter « la photo, le nom ou le « i » de la carte »
- Critère « En mode « première sélection » (via « Voir menus et carte » **ou clic horaire**)… » → retirer « ou clic horaire »
- Contraintes « Version C uniquement » : inchangé

---

## US #755 : État visuel « Restaurant sélectionné »

### Périmètre : à ajouter
- **[B]** Après l'ajout au panier sur la page restaurant, l'utilisateur est ramené sur /restaurants : la carte du restaurant et la section du repas sont en état de réservation active (état relu depuis le panier). Il survit au refresh. Le lien « retour » de la page restaurant pointe aussi vers /restaurants.
- **[C]** L'état s'affiche juste après un clic horaire ou la fin de la modale.
- **[B+C]** Pour un restaurant à plage horaire ou ouvert toute la journée, la plage (ou « Toute la journée ») remplace l'horaire dans la mise en surbrillance, le bandeau de section et le récap.
- **[B+C]** Toast « <Restaurant> réservé » juste après la confirmation (**[C]** clic horaire ou fin de la modale ; **[B]** arrivée sur /restaurants après l'ajout). Disparition automatique après environ 3 secondes, sans interaction, annoncé aux lecteurs d'écran. Pas de toast lors d'un simple refresh.
- **[B+C]** Remplacement : quand un autre restaurant du même repas est choisi, l'ancienne carte perd l'état sélectionné (bouton redevenu « Voir menus et carte » en C, « Voir détails et horaires » en B).
- **[B+C]** Annulation : retire du panier, la carte reste en 1ʳᵉ position jusqu'au refresh ou à l'application d'un filtre, le bandeau de section est vidé.
- **[B+C]** Carte en 1ʳᵉ position : si elle venait de la page 2, elle passe en page 1 et la pagination revient en page 1. Sur mobile, la bande revient au début.

### TO DO : à ajouter
- [ ] Relire l'état depuis le panier au chargement de la page (jour, repas, restaurant, horaire, composition)
- [ ] Gérer le cas pagination : carte de la page 2 promue en page 1
- [ ] Gérer le cas mobile : bande qui revient au début quand la carte passe en tête
- [ ] Retrait du panier avec état de chargement et gestion d'erreur au clic sur « Annuler »
- [ ] Mettre à jour le bandeau de section et la barre de récap (total) après chaque changement
- [ ] **[B+C]** Toast de confirmation (composant existant ou nouveau)
- [ ] **[B]** Page restaurant existante : rediriger vers /restaurants après l'ajout au panier ; faire pointer le lien « retour » vers /restaurants ; transmettre l'information « ajout à l'instant » pour le toast et le repli
- [ ] **[B]** Au retour, replacer la page sur la section du repas concerné (à confirmer)

### Critères d'acceptation : à ajouter
- [ ] **[B]** Après l'ajout au panier sur la page restaurant, l'utilisateur arrive sur /restaurants ; la carte du restaurant réservé est à l'état « sélectionné » et le bandeau de section est affiché
- [ ] **[B]** Après un refresh, l'état « sélectionné » est conservé (relu depuis le panier)
- [ ] **[B]** Le lien « retour » de la page restaurant (sans ajout) ramène sur /restaurants et non sur la page liste intermédiaire
- [ ] **[B+C]** Quand un autre restaurant est choisi pour le même repas, l'ancien perd l'état sélectionné et il n'y a jamais deux restaurants sélectionnés pour un repas
- [ ] **[B+C]** Si la carte venait de la page 2, elle apparaît en page 1 et la pagination revient en page 1
- [ ] **[C]** Sur mobile, la bande de cartes revient au début pour montrer la carte sélectionnée
- [ ] **[B+C]** Au clic sur « Annuler », un état de chargement s'affiche ; en cas d'échec, la réservation reste affichée avec un message d'erreur
- [ ] **[B+C]** Quand les menus sont modifiés, la composition, le prix, le prix barré de la carte et le bandeau de section sont mis à jour
- [ ] **[B+C]** Si un filtre masque la carte sélectionnée, le bandeau de section reste visible et la réservation est conservée
- [ ] **[C]** Le toast apparaît après un clic horaire **et** après la fin de la modale, disparaît seul, sans bloquer l'interaction
- [ ] **[B]** Le toast apparaît à l'arrivée sur /restaurants après l'ajout au panier depuis la page restaurant, disparaît seul, et n'apparaît pas lors d'un refresh ou d'une navigation sans ajout

### Points ouverts
- Après un refresh, la carte sélectionnée doit-elle rester en 1ʳᵉ position ? Recommandation : oui tant qu'elle est sélectionnée ; seule une carte annulée perd sa position au refresh.
- Après un remplacement, l'ancienne carte reprend-elle sa place d'origine (comportement du proto) ou reste-t-elle en 2ᵉ position ? À confirmer.

### Lignes existantes à modifier ou supprimer
- Critère « Sur la version C, afficher un toast de confirmation après clic sur « Continuer » » → « **[B+C]** afficher un toast après la confirmation d'un restaurant : **[C]** clic direct sur un horaire ou fin de la modale (étape horaire) ; **[B]** arrivée sur /restaurants après l'ajout au panier depuis la page restaurant »
- Périmètre « Bouton « Modifier ma sélection » : redirige vers la page détail existante (version B) ou réouvre la modale latérale (version C) » : inchangé
- Contraintes « Dépend de l'US #753 » : inchangé ; ajouter « et de l'US #756 pour le déclenchement en C »

---

## US Refonte visuelle des filtres sur /restaurants

### Périmètre : à ajouter
- **[B+C]** Le bouton « Filtrer » affiche un badge avec le nombre de filtres actifs (un tri différent de la valeur par défaut compte pour 1).
- **[B+C]** Les choix sont mémorisés **par repas** : en rouvrant la modale, les sélections du repas concerné sont préremplies.
- **[B+C]** La modale comporte « Appliquer » et « Réinitialiser ». « Réinitialiser » remet les valeurs par défaut, applique et ferme.
- **[B+C]** Les filtres sont cumulatifs (un restaurant doit correspondre à tous les filtres cochés) ; le tri s'applique ensuite.
- **[B+C]** Tant qu'un filtre est actif, **tous** les restaurants correspondants s'affichent sans pagination ; en réinitialisant, on retrouve la pagination en page 1.
- **[B+C]** État vide quand aucun restaurant ne correspond.

### TO DO : à ajouter
- [ ] Badge du nombre de filtres actifs sur le bouton
- [ ] Mémoriser l'état des filtres par repas et le restituer à la réouverture
- [ ] Boutons « Appliquer » et « Réinitialiser »
- [ ] Masquer la pagination quand un filtre est actif, la restaurer au reset
- [ ] Composant d'état vide avec lien « Réinitialiser les filtres »
- [ ] Vérifier le comportement avec la carte sélectionnée (voir #755)
- [ ] Événements de suivi : ouverture de la modale, application, réinitialisation

### Critères d'acceptation : à ajouter
- [ ] **[B+C]** Le bouton « Filtrer » affiche le nombre de filtres actifs du repas concerné, et rien quand il n'y en a aucun
- [ ] **[B+C]** En rouvrant la modale, les filtres et le tri précédemment appliqués à ce repas sont préremplis ; les autres repas ne sont pas affectés
- [ ] **[B+C]** « Appliquer » filtre et trie la liste, ferme la modale et met à jour le badge
- [ ] **[B+C]** « Réinitialiser » remet les filtres par défaut, ferme la modale et retire le badge
- [ ] **[B+C]** Quand plusieurs filtres sont cochés, seuls les restaurants correspondant à **tous** s'affichent
- [ ] **[B+C]** Avec au moins un filtre actif, la pagination est masquée et tous les résultats sont visibles ; sans filtre, la pagination revient en page 1
- [ ] **[B+C]** Quand aucun restaurant ne correspond, le message « Aucun restaurant ne correspond à ces filtres » s'affiche avec un lien « Réinitialiser les filtres » qui restaure la liste
- [ ] **[B+C]** Appliquer un filtre réinitialise l'ordre de la liste (la carte promue perd sa position en tête), mais la réservation et le bandeau de section restent visibles
- [ ] **[B+C]** La modale se ferme par la croix, le clic sur le fond et Échap ; le scroll de la page derrière est figé et sa position restaurée
- [ ] Si le filtrage est celui de la page liste actuelle, la logique (cumul, tri) est strictement reprise de cette page : reprendre sa liste de tris exacte (le proto n'a que « Recommandé », prix croissant / décroissant, nom)

---

## À confirmer (résumé)

1. En B, au retour de la page restaurant, la page doit-elle se replacer sur la section du repas réservé (jour et repas concernés) ? Recommandation : oui.
2. Re-clic sur l'horaire actif : ne rien faire (recommandation) ou annuler (proto).
3. Bornes des quantités de menus et règle de présélection selon le groupe.
4. Après remplacement : sort de l'ancienne carte ; après refresh : carte sélectionnée en tête.
5. Barre de récap en bas : existante ou à spécifier.
6. Source des données du prix barré « sur place » et du statut « complet » des créneaux (Experticket).
7. Liste d'événements de suivi à valider avec l'analytics.
