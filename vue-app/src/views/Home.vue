<template>
    <div class="container">
        <div class="row">
            <div class="col mt-3">
                <h1 class="display-1">Battleship</h1>
                <p class="text-danger">{{ error }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-primary" type="button" v-on:click="createRoom">Create room</button>  
                    </div>
                    <input type="text" class="form-control text-center" placeholder="Enter room ID" v-model="roomNo">
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
    data() {
        return {
            roomNo: undefined,
            error: '',
        }
    },
    methods: {
        displayError() {
            this.error = "Room is already under use. Try a different one, or try joining it.";
        },
        createRoom() {
            if (this.roomNo == undefined) this.error = "Room number can't be empty."
            else this.$emit('create-room', this.roomNo);
        },
        joinRoom() {
            if (this.roomNo == undefined) this.error = "Room number can't be empty."
            else this.$emit('join-room')
        }
    }
}
</script>