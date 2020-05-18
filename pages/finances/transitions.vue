<template>
  <v-card class="mt-5 pa-5" color="white">
    <v-card-title class="accent--text">Transitions</v-card-title>
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
    <v-btn fixed dark fab bottom right color="pink">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import moment from 'moment'
export default {
  data: () => ({
    events: [],
    input: null,
    nonce: 0
  }),

  computed: {
    timeline() {
      return this.events.slice().reverse()
    }
  },

  methods: {
    comment() {
      this.events.push({
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
.v-btn--bottom {
 bottom: 7% !important;
  z-index: 1 !important;
}

</style>