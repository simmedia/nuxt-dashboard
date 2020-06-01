<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6></v-flex>
    <v-btn>CREATE</v-btn>
    <span>asdasd</span>
    <span class="primary--text">{{this.$store.state.budget.list}}</span>
    <ul>
      <li class="red" v-for="(user,index) in users" :key="index">
        {{user.text}}
      </li>
    </ul>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {}
  },
  computed: {
    users() {
      return this.$store.getters['budget/getList']
    }
  }
}
</script>
