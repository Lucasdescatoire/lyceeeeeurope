<template>
  <div>
    <p>Voici une vidéo pour comprendre le deroulement du BAC 2021</p>
    <video
      src="https://www.youtube.com/watch?v=TNzvEbJdNPY&feature=emb_title"
      width="320"
      height="240"
      controls
      poster="vignette.jpg"
    ></video
    ><br />
    <p></p>
    <p></p>
    <p></p>
    <p>diaporama</p>
    <a
      href="https://view.genial.ly/5c0637826f191d2ca33a5640/interactive-content-1"
    >
      <img
        alt=""
        align="center"
        src="http://lycee-europe-dunkerque.fr/userfiles/images/rentree_2019/visu_diapo_2019.jpg"
        width="250"
        height="130"
      />
    </a>
    <p></p>
    <p></p>
    <p>plaquette</p>
    <a
      href="https://drive.google.com/file/d/1MhvRlbdAM-jkkF9nGZ-R-zJLUeh7xrwZ/view"
    >
      <img
        alt=""
        align="center"
        src="http://lycee-europe-dunkerque.fr/userfiles/images/rentree_2019/visu_plaq_SG_01.png"
        width="250"
        height="130"
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