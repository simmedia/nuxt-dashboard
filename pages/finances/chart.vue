<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card class="pa-5" color="white">
        <apexchart height="300px" type="bar" :options="options" :series="series"></apexchart>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card class="pa-5" color="white">
        <apexchart height="312px" type="donut" :options="optionsPie" :series="seriesTransitions"></apexchart>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import apexchart from 'vue-apexcharts'
export default {
  components: { apexchart },
  data() {
    return {
      optionsPie: {
      },
      options: {
        colors: ['#303030'],
        shadeTo: 'light',
      },
      series: [
        {
          name: 'series-1',
          data: [40, 60, 50, 100, 60, 90, 50]
        }
      ],
      seriesTransitions: [40, 50, 60, 200, 40]
    }
  }
}
</script>

<style>
.apexcharts-menu-item {
  color: #303030 !important;
}

.apexcharts-tooltip {
    background: #3d3d3d !important;
    color: #fff !important;
  }
</style>