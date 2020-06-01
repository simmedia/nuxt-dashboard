<template>
  <v-card class="mt-5 pa-5" color="white">
    <v-card-title class="accent--text">Transactions</v-card-title>
    <v-timeline dense clipped>
      <v-slide-x-transition group>
        <v-timeline-item v-for="event in timeline" :key="event.id" class="mb-4" color="info" small>
          <v-row justify="space-between">
            <v-col cols="5" class="accent--text" v-text="event.text"></v-col>
            <v-col class="grey--text text-right" cols="7">{{event.time}}</v-col>
          </v-row>
        </v-timeline-item>
      </v-slide-x-transition>
    </v-timeline>
  </v-card>
</template>

<script>
import moment from 'moment'
export default {
  data: () => ({
    transactions: [],
    input: null,
    nonce: 0
  }),

  computed: {
    timeline() {
      return this.transactions.slice().reverse()
    }
  },

  methods: {
    comment() {
      this.transactions.push({
        id: this.nonce++,
        text: this.input,
        time: moment().format('MMMM Do YYYY, h:mm:ss a')
      })

      this.input = null
    }
  }
}
</script>

<style>

</style>