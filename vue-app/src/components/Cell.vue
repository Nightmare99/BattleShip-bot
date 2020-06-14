<template>
    <div class="btn" v-bind:class="{ selected: selected }" v-on:click="select">
    </div>
</template>

<script>
export default {
    name: 'Cell',
    props: {
        x: Number,
        y: Number
    },
    data() {
        return {
            selected: false
        }
    },
    methods: {
        select() {
            if (this.selected === false) this.selected = true;
            else this.selected = false;
            this.$emit('click-cell', { coords: [this.x, this.y], selected: this.selected });
        }
    }
}
</script>

<style scoped>
    .btn {
        display: inline-block;
        border-radius: 50%;
        width: 3%;
        height: auto;
        padding: 3%;
        background: #a0a0a0;
    }
    .btn:hover {
        display: inline-block;
        border-radius: 50%;
        width: 3%;
        height: auto;
        padding: 3%;
        background: #ff0000;
    }
    .selected {
        background: #8b1010;
    }
</style>