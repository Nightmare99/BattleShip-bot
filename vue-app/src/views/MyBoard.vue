<template>
  <div class="about">
    <div id="nav">
      <router-link to="/attack">Attack</router-link> |
      <router-link to="/myBoard">My board</router-link>
    </div>
    <Grid player="self"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Grid from '@/components/Grid.vue';

export default {
  name: 'MyBoard',
  components: {
    Grid
  }
}
</script>