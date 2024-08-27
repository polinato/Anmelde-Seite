<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script >
  import { IonApp, IonHeader, IonToolbar, IonRouterOutlet } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonApp, IonHeader, IonToolbar, IonRouterOutlet },
  });
</script>
