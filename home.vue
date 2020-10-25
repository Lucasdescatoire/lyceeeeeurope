<template>
  <div class="card-expansion">
          <md-card>
            <md-card-media>
              <img
                src="https://www.lycee-europe-dunkerque.fr/userfiles/images/habillage/photos/lyc7_1024_a.jpg"
                alt="lycée"
              />
            </md-card-media>

            <md-card-header>
              <div class="md-title">Le lycée</div>
            </md-card-header>

            <md-card-expand>
              <md-card-actions md-alignment="space-between">
                <md-card-expand-trigger>
                  <md-button>Lire plus </md-button>
                </md-card-expand-trigger>
              </md-card-actions>

              <md-card-expand-content>
                <md-card-content>
                  Depuis son ouverture en 1989, le lycée de l'Europe implanté à
                  Dunkerque accueille un public varié en raison de ses
                  spécificités. En effet, c'est un établissement polyvalent où
                  l'on trouve des formations générales et technologiques, du
                  baccalauréat aux classes préparatoires aux grandes écoles. Le
                  lycée possède aussi une unité de formation par apprentissage
                  pour la préparation de 3 BTS industriels (BTS Electrotechnique
                  - BTS Systèmes Numériques / Informatique et Réseaux - BTS
                  Conception et Réalisation en Chaudronnerie Industrielle)
                  Toutes ces facettes font de cet établissement un lieu de vie
                  unique et serein dans un cadre particulièrement soigné. En
                  effet, le bâtiment de briques rouges abrite de nombreuses
                  galeries vitrées et des courettes à thèmes pour les moments de
                  pause des lycéens et étudiants. C'est un établissement qui
                  cultive l'ouverture qu'elle soit locale (notamment avec le
                  tissu industriel important sur le secteur) ou internationale
                  (les projets Comenius, et ERASMUS+ par exemple ). Pour cette
                  rentrée 2018, 1269 lycéens, étudiants et apprentis sont
                  encadrés par plus de 130 enseignants.
                </md-card-content>
              </md-card-expand-content>
            </md-card-expand>
          </md-card>

          <md-card>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">CDI</div>
              </md-card-header-text>

              <md-card-media>
                <a href ="https://www.inspire-orientation.org/"
                <img
                  src="http://lycee-europe-dunkerque.fr/userfiles/images/cdi/esidoc.png"
                  alt="CDI"
                />
                </a>
              </md-card-media>
            </md-card-header>
          </md-card>
          <md-card>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">Orientation</div>
              </md-card-header-text>

              <md-card-media>
                <img
                  src="http://lycee-europe-dunkerque.fr/userfiles/images/cdi/inspire.png"
                  alt="Orientation"
                />
              </md-card-media>
            </md-card-header>
          </md-card>
          <md-card>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">Pronote</div>
              </md-card-header-text>

              <md-card-media md-ratio="16:9">
                <img
                  src="http://lycee-europe-dunkerque.fr/userfiles/images/PRONOTE/logo_pronote.png"
                  alt="Pronote"
                />
              </md-card-media>
            </md-card-header>
          </md-card>
        </div>
</template>

<style lang="scss" scoped>
.md-app {
  max-height: 2000px;
}

// Demo purposes only
.md-drawer {
  width: 260px;
  max-width: calc(100vw - 125px);
}
.card-expansion {
  height: 480px;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: bottom;
}
</style>


<script>
export default {
  name: "Reveal",
  data: () => ({
    menuVisible: false,
  }),
};
</script>