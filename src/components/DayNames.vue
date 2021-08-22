<template>
    <div class="container">
    <span class="dayName" v-for="weekDay in 7" :key="weekDay">
        {{getDayName(weekDay)}}
    </span>
    </div>

</template>
<script>
    export default {
        name: 'dayNames',
        methods: {
            getDayName(dayNumber) {
                let date = new Date(0, 0, dayNumber);
                return date.toLocaleDateString(this.$store.state.locale, {weekday: 'short'})
            }
        }
    }
</script>
<style scoped>
    .dayName {
        font-size: 18px;
    }

    .container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        margin-top: 10px;
    }
</style>
