<template>
    <div>
        <div class="container-flex">
            <div class="row" v-for="index in 10" :key="index">
                <div class="column">
                    <Cell/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Cell from './Cell.vue';
export default {
    name: 'Grid',
    components: {
        Cell
    }
}
</script>

<style scoped>
    button {
        display:block;
        height: 300px;
        width: 300px;
        border-radius: 50%;
        border: 1px solid red;
    }
</style>