<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6></v-flex>
    <v-btn>CREATE</v-btn>
    <span>asdasd</span>

    <ul>
      <li class="red" v-for="(event, index) in events" :key="index">
        {{ event.name }}
      </li>
    </ul>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

import { db } from '~/plugins/firebase.js'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
    }
  },
  computed: {
    events() {
      return this.$store.getters['events/getEvents']
    }
  },
  methods: {
    writeToFirestore() {
      const ref = db.collection('calEvent')
      ref.add({
        name: 'Stefan'
      })
    },
  },

}
</script>
