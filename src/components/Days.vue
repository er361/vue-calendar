<template>
    <div>
        <dayNames/>
        <div class="grid">
            <span v-for="dayNumber in maxDayOfMonth"
                  :key="dayNumber"
                  @click="selectDate(dayNumber)"
                  class="day"
                  :class="{selected: (day === dayNumber) && canShowSelect}"
            >
                {{dayNumber}}
            <br v-if="[1,2,3,4].includes(dayNumber / 7)">
        </span>
        </div>
    </div>


</template>

<script>
    import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
    import dayNames from "@/components/DayNames";

    export default {
        name: 'Days',
        components: {dayNames},
        methods: {
            ...mapMutations([
                'setDay'
            ]),
            ...mapActions([
                'selectDate'
            ])
        },
        computed: {
            ...mapState([
                'day', 'month', 'year'
            ]),
            ...mapGetters([
                'canShowSelect',
                'maxDayOfMonth'
            ]),
        },
    }

</script>
<style scoped>
    .selected {
        border: 1px solid aquamarine;
    }

    .day {
        cursor: pointer
    }

    .grid {
        display: grid;
        grid-template-columns: 30px 30px 30px 30px 30px 30px 30px;
        grid-template-rows: 30px 30px 30px 30px 30px;
        grid-auto-flow: dense;
        justify-content: space-evenly;
    }
</style>