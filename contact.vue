<template>
  
        <div>
    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Contacter - appel - mail</span>
      </md-toolbar>

      <md-list class="md-double-line">
        <md-subheader>Phone</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">phone</md-icon>

          <div class="md-list-item-text">
            <span>: 03 28 58 72 49</span>
            <span>fax</span>
          </div>
          <p> </p>
          <div class="md-list-item-text">
            <span>: 03 28 58 72 41</span>
            <span>intendance</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>sms</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item class="md-inset">
          <div class="md-list-item-text">
            <span> : 03 28 58 72 10</span>
            <span>tél</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>sms</md-icon>
          </md-button>
        </md-list-item>

        <md-divider></md-divider>
        <md-subheader>Email</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">email</md-icon>

          <div class="md-list-item-text">
            <span>ce.0590072h@ac-lille.fr</span>
           
          </div>
        </md-list-item>

        
      </md-list>
    </div>

    
         
    
  </div>
        
      
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