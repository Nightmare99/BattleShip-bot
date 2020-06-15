<template>
    <div>
        <div class="container-flex">
            <div class="row p-3" v-for="x in 8" :key="x">
                <div class="col p-1" v-for="y in 8" :key="y">
                    <Cell v-bind:x="x" v-bind:y="y" @click-cell="clickCell"/>
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
    },
    props: {
        player: String
    },
    data() {
        return {
            selectedCells: []
        }
    },
    methods: {
        clickCell(data) {
            if (data.selected === true) this.selectedCells.push(data.coords);
            else {
                this.selectedCells.splice(
                    this.selectedCells.findIndex( item => 
                        item[0] == data.coords[0] && item[1] == data.coords[1]
                    ), 
                1);
            }
            console.log(this.selectedCells);
        }
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