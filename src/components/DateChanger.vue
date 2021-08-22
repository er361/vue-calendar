<template>
    <div class="changer">

        <font-awesome-icon icon="arrow-left"
                           class="changeDateArrow"
                           @click="decrementMonth"/>
        {{monthYear}}
        <font-awesome-icon icon="arrow-right"
                           class="changeDateArrow"
                           @click="incrementMonth"/>

    </div>
</template>
<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: 'dateChanger',
        methods:{
          ...mapMutations([
              'incrementMonth',
              'decrementMonth'
          ])
        },
        computed:{
            ...mapGetters([
                'monthYear'
            ])
        }
    }
</script>
<style scoped>
    .changer {
        display: flex;
        justify-content: space-between;
        padding: 5px 10px;
    }
    .changeDateArrow{
        cursor: pointer;
    }
</style>