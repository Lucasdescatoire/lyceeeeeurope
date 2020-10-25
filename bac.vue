<template>
  <div>
    <img
      alt=""
      align="center"
      src="http://lycee-europe-dunkerque.fr/userfiles/images/habillage/article/diplome%20bac.jpg"
      width="120"
      height="75"
    />
    <p>
      Le lycee de l'EUROPE de DUNKERQUE prépare aux baccalauréats suivants :
    </p>

    <p>Baccalauréat Général</p>
    <p>
      Bac STI2D - série Sciences et Technologies Industrielles et du
      Dévelloppement Durable
    </p>
    <p>Spécialité Architecture et Construction (AC)</p>
    <p>Spécialité Energies et Environnement (EE)</p>
    <p>Spécialité Innovation Technologique et Eco-Conception (ITEC)</p>
    <p>Spécialité Système d'Information et Numérique (SIN)</p>
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