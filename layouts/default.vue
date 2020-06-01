<template>
  <v-app>
    <v-navigation-drawer light v-model="drawer" :clipped="clipped" fixed app>
      <v-row class="py-5" justify="center">
        <span class="info--text title">NuxtDashboard</span>
      </v-row>
      <v-list>
        <v-list-item
          active-class="highlighted"
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="info" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon id="menuTrigger" @click.stop="drawer = !drawer" />
      <v-spacer />

      <!-- Navbar right content -->
      <!-- <v-text-field
        color="accent"
        class="mt-5"
        background-color="accent"
        rounded
        clearable
        prepend-icon="mdi-magnify"
      ></v-text-field>-->
      <v-btn text rounded fab>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn text rounded fab>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid class="pa-10">
        <transition name="fade" mode="out-in">
          <nuxt />
        </transition>
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-line',
          title: 'Finances',
          to: '/finances'
        },
        {
          icon: 'mdi-calendar',
          title: 'Events',
          to: '/events'
        },
        {
          icon: 'mdi-note',
          title: 'Notes',
          to: '/notes'
        },
        {
          icon: 'mdi-chart-line',
          title: 'Finances',
          to: '/inspire'
        }
      ]
    }
  },
    created() {
    this.$store.dispatch('events/SET_EVENTS')
  }
}
</script>


<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.v-content {
  background: white !important;
}

.highlighted {
  color: #26a69a !important;
}

.v-input {
  max-width: 300px !important;
}
#menuTrigger {
  display: block !important;
}
@media screen and (min-width: 1310px) {
  #menuTrigger {
    display: none !important;
  }
}
</style>