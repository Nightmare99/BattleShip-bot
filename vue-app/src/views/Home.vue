<template>
    <div class="container">
        <div class="row">
            <div class="col mt-3">
                <h1 class="display-1">Battleship</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-primary" type="button" v-on:click="createRoom">Create room</button>  
                    </div>
                    <input type="text" class="form-control text-center" placeholder="Enter room ID">
                    <div class="input-group-append">
                        <button class="btn btn-outline-primary" type="button" v-on:click="joinRoom">Join room</button>
                    </div>
                </div>
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