<template>
  <div>
    <p>
      Le brevet de technicien supérieur se prépare en section de technicien
      supérieur dans un lycée. Cette formation accessible après le baccalauréat
      ou équivalent dispense des enseignements spécialisés. Elle est accompagnée
      d'un ou de plusieurs stages en entreprise. Elle permet d'obtenir un
      diplôme professionnalisé en deux ans.
    </p>
    <img
      alt=""
      align="center"
      src="http://lycee-europe-dunkerque.fr/userfiles/images/labels/bts.png"
      width="120"
      height="175"
    /><img
      alt=""
      align="center"
      src="http://lycee-europe-dunkerque.fr/userfiles/images/habillage/bts.png"
      width="120"
      height="175"
    />
    <p>Les differents BTS</p>
    <a href="http://crci.lycee-europe-dunkerque.fr/">
      <img
        alt=""
        align="center"
        src="http://lycee-europe-dunkerque.fr/userfiles/images/logosdivers/log_crci.png"
        width="70"
        height="75"
      />
    </a>
    <a href="http://crsa.lycee-europe-dunkerque.fr/">
      <img
        alt=""
        align="center"
        src="http://lycee-europe-dunkerque.fr/userfiles/images/logosdivers/log_crsa.png"
        width="70"
        height="75"
      />
    </a>
    <a href="http://cprp.lycee-europe-dunkerque.fr/">
      <img
        alt=""
        align="center"
        src="http://lycee-europe-dunkerque.fr/userfiles/images/logosdivers/log_cprp.png"
        width="70"
        height="75"
      />
    </a>
    <a href="http://et.lycee-europe-dunkerque.fr/">
      <img
        alt=""
        align="center"
        src="http://lycee-europe-dunkerque.fr/userfiles/images/logosdivers/log_tset.png"
        width="70"
        height="75"
      />
    </a>
    <a href="http://snir.lycee-europe-dunkerque.fr/">
      <img
        alt=""
        align="center"
        src="http://lycee-europe-dunkerque.fr/userfiles/images/logosdivers/log_tssn.png"
        width="70"
        height="75"
      />
    </a>
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