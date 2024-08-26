<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color='primary'>
        <ion-icon className="ion-margin" :icon="arrowBackOutline"></ion-icon>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row class="">
          <ion-col>
            <h1 className="ion-padding">Sign up</h1>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <form>  
              <ion-input class="input-field" fill="solid" label-placement="stacked" label="First name" type="text">  </ion-input>
              <ion-input class="input-field" fill="solid" label-placement="stacked" label="Second name" type="text" >  </ion-input>
              <ion-input class="input-field" fill="solid" label-placement="stacked" label="Email" type="email">  </ion-input>
              <ion-input class="input-field" fill="solid" label-placement="stacked" label="Password" type="password">  </ion-input>
              <ion-button class="password-show-hide-button" fill="clear" aria-label="Show/hide" >
                  <ion-icon :icon="eye" aria-hidden="true"></ion-icon>
              </ion-button>
            </form>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script >
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonInput, IonButton, IonIcon } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { arrowBackOutline, eye } from 'ionicons/icons';

  export default defineComponent({
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonInput, IonButton, IonIcon},
    setup() {
      return { arrowBackOutline, eye };
    },
  });
</script>

<style>
  .input-field {
    margin: 10px;
    width: auto;
    --background: transparent !important; 
  }
  .password-show-hide-button {
    position: absolute;
    right: 0;
    z-index: 1;
  }
</style>