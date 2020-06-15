<template>
  <div id="app">
    <router-view @join-room="joinRoom" @create-room="createRoom"/>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  created() {
    var socket = io('http://localhost:3000/');
    socket.emit('myID', {id: 'this is an ID'});
  },
  methods: {
    joinRoom() {
      console.log('joining room...');
    },
    createRoom() {
      console.log('creating room...')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: hsl(244, 100%, 55%);
}
</style>
