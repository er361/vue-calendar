<template>
    <div>
        <div class="calendar">
            <dateChanger @changeMonth="setMonthNumber"/>
            <days :max-day-num="maxDayMonth" class="daysTable"/>
        </div>
    </div>

</template>

<script>
    import days from "@/components/Days";
    import DateChanger from "@/components/DateChanger";

    export default {
        name: 'Calendar',
        components: {DateChanger, days},
        props: {
            msg: String
        },
        data() {
            return {
                monthNumber: 0,
            }
        },
        methods: {
            setMonthNumber(monthNumber) {
                this.monthNumber = monthNumber;
            }
        },
        computed: {
            maxDayMonth() {
                console.log('number', this.monthNumber);
                let maxDayNumber = new Date(2021,this.monthNumber,0).getDate();
                console.log(maxDayNumber)
                return maxDayNumber;
            }
        }
    }
</script>
<style scoped>
    .calendar {
        margin: 0 10px 0 0;
        border: 1px solid cadetblue;
        font-size: 20px;
        width: 270px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
