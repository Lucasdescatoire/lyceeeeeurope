<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Lycée de L'europe</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Menu</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>send</md-icon>
            <router-link to="home">
              <span class="md-list-item-text">home</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <router-link to="/lycee">
              <span class="md-list-item-text">le lycée</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <router-link to="/bac2021">
              <span class="md-list-item-text">BAC2021 </span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <router-link to="/rentree">
              <span class="md-list-item-text">rentree</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <router-link to="/bac">
              <span class="md-list-item-text">bac</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <router-link to="/BTS">
              <span class="md-list-item-text"> BTS</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <router-link to="/prepa">
              <span class="md-list-item-text">prepa</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <router-link to="/contact">
              <span class="md-list-item-text">contact</span>
            </router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
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