<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color='primary'>
        <ion-icon class="ion-margin" :icon="arrowBackOutline"></ion-icon>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card class="form-container ion-justify-content-center ion-margin-top">
      <ion-grid>
        <ion-row class="">
          <ion-col>
            <h1 class="ion-padding">Create account</h1>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <form @submit.prevent="signUp">  
              <ion-input 
                class="input-field" 
                v-model="newUser.firstName"
                fill="solid" 
                label-placement="floating" 
                label="First name" 
                type="text"
                required>  
              </ion-input>
              <ion-input 
                class="input-field" 
                v-model="newUser.secondName" 
                fill="solid" 
                label-placement="floating" 
                label="Second name" 
                type="text"
                required>  
              </ion-input>
              <ion-input 
                class="input-field" 
                v-model="newUser.email" 
                fill="solid" 
                label-placement="floating" 
                label="Email" 
                type="email"
                required>  
              </ion-input>
              <ion-input 
                class="input-field" 
                v-model="newUser.password" 
                fill="solid" 
                label-placement="floating" 
                label="Password" 
                :type="passwordType"
                required
                minlength="8">  
                <ion-button 
                  class="password-show-hide-button" 
                  id="show-hide" 
                  fill="clear" 
                  aria-label="Show/hide" 
                  @click="togglePasswordVisability">
                  <ion-icon :icon="eyeIcon" aria-hidden="true"></ion-icon>
                </ion-button>
              </ion-input>
              <ion-button 
                class="sign-up-button ion-justify-content-center ion-margin-top" 
                fill="solid"
                type="submit"> 
                Sign up 
              </ion-button>
            </form>
          </ion-col>
        </ion-row>
      </ion-grid>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script >
  import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard,
    IonGrid, 
    IonRow, 
    IonCol, 
    IonInput, 
    IonButton, 
    IonIcon 
  } from '@ionic/vue';
  import { defineComponent, ref, computed } from 'vue';
  import { arrowBackOutline, eye, eyeOff } from 'ionicons/icons';
  import { useUserStore } from '@/stores/user.js';

  export default defineComponent({
    components: { 
      IonPage, 
      IonHeader, 
      IonToolbar, 
      IonTitle, 
      IonContent, 
      IonCard,
      IonGrid, 
      IonRow, 
      IonCol, 
      IonInput, 
      IonButton, 
      IonIcon,
    },
    
    setup() {

      const isPasswordVisible = ref(false);

      const togglePasswordVisability = () => {
        isPasswordVisible.value = !isPasswordVisible.value;
      };

      const eyeIcon = computed(() => (isPasswordVisible.value ? eyeOff : eye));
      const passwordType = computed(() => (isPasswordVisible.value ? 'text' : 'password'));

      const userStore = useUserStore();

      const newUser = ref({
        firstName: '',
        secondName: '',
        email: '',
        password: '',
      });

      const signUp = () => {
        userStore.addUser(newUser.value.firstName, newUser.value.secondName, newUser.value.email, newUser.value.password);
        console.log(userStore.users)
      }

      return { 
        arrowBackOutline, 
        eyeIcon,
        passwordType,
        togglePasswordVisability, 
        newUser,
        signUp
      };
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
  .sign-up-button {
    display: inline;
  }
  .form-container {
    max-width: 350px;
    margin: auto;
    padding: 20px;
    background: var(--ion-background-color, #fff);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
</style>