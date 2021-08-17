<template>
    <div class="grid">
        <span v-for="index in 31"
              :key="index"
              style="cursor: pointer"
              @click="setActive(index),getDate()"
              class="day"
              :class="{active: activeNumber === index}"
        >
            {{index}}
            <br v-if="[1,2,3,4].includes(index / 7)">
        </span>
    </div>

</template>

<script>
    export default {
        name: 'Days',
        data() {
            return {
                activeNumber: null
            }
        },
        methods: {
            setActive(index) {
                this.activeNumber = index;
            },
            getDate(){
                console.log('date')
            }
        }
    }

</script>
<style scoped>
    .active{
        border: 1px solid aquamarine;
    }
    .grid{

        display: grid;
        grid-template-columns: 30px 30px 30px 30px 30px 30px 30px;
        grid-template-rows: 30px 30px 30px 30px 30px;
        grid-auto-flow: dense;
        justify-content: space-evenly;
    }
</style>