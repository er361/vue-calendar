<template>
    <div class="calendar">
        <dateChanger/>
        <days class="daysTable"/>
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
                isActive:false
            }
        },
        methods:{
            setActive(){

            }
        }
    }
</script>
<style scoped>
    .calendar {
        margin: auto;
        border: 1px solid cadetblue;
        font-size: 20px;
        width: 270px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
