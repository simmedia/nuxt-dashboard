<template>
  <div>
    <v-row class="background text-center">
      <v-col cols="12" md="4">
        <v-card class="pa-5" color="white">
          <v-card-title class="accent--text">Balance</v-card-title>
          <v-card-title class="display-1 info--text">30.000,00 RSD</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="pa-5" color="white">
          <v-card-title class="accent--text">Total Income</v-card-title>
          <v-card-title class="display-1 info--text">30.000,00 RSD</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="pa-5" color="white">
          <v-card-title class="accent--text">Total Expenses</v-card-title>
          <v-card-title class="display-1 info--text">30.000,00 RSD</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <vue-chart />

    <v-row>
      <v-col cols="12" md="12">
        <budget-transitions />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Transitions from './transitions'
import Chart from './chart'

export default {
  components: {
    'budget-transitions': Transitions,
    'vue-chart': Chart
  }
}
</script>


<style>

</style>