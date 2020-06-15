<template>
  <div class="home">
    <div id="nav">
      <router-link to="/attack">Attack</router-link> |
      <router-link to="/myBoard">My board</router-link>
    </div>
    <Grid player="opp"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Grid from '@/components/Grid.vue';

export default {
  name: 'Attack',
  components: {
    Grid
  }
}
</script>
