<template>
    <div class="container">
        <div class="row">
            <div class="col p-3">
                <h1 class="display-1">Battleship</h1>
            </div>
        </div>
        <div class="row">
            <div class="col m-3">
                <button class="btn btn-lg btn-outline-primary m-3" v-on:click="createRoom">Create room</button>
                <button class="btn btn-lg btn-outline-primary m-3" v-on:click="joinRoom">Join room</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    methods: {
        createRoom() {
            this.$emit('create-room');
        },
        joinRoom() {
            this.$emit('join-room')
        }
    }
}
</script>