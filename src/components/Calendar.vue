<template>
    <div>
        <select style="margin-right: 10px; float: left"
                v-model="locale">
            <option value="ru">RU</option>
            <option value="en">EN</option>
        </select>

        <div class="calendar">
            <dateChanger/>
            <days class="daysTable"/>
        </div>
    </div>

</template>

<script>
    import days from "@/components/Days";
    import DateChanger from "@/components/DateChanger";

    export default {
        name: 'Calendar',
        components: {DateChanger, days},
        created() {

            let year, month, day;
            if (!this.date) {
                let curDate = new Date();
                year = curDate.getFullYear();
                month = curDate.getMonth();
                day = curDate.getDay();
            } else {
                let dateSplit = this.date.split('-');
                year = dateSplit[0];
                month = dateSplit[1];
                day = dateSplit[2];
            }

            this.$store.commit('setYear', year);
            this.$store.commit('setMonth', month);
            this.$store.commit('setDay', day);
        },
        props: {
            date: {
                type: String,
                validator: function (dateString) {
                    console.log(dateString)
                    // First check for the pattern
                    var regex_date = /^\d{4}-\d{1,2}-\d{1,2}$/;

                    if (!regex_date.test(dateString)) {
                        return false;
                    }

                    // Parse the date parts to integers
                    var parts = dateString.split("-");
                    var day = parseInt(parts[2], 10);
                    var month = parseInt(parts[1], 10);
                    var year = parseInt(parts[0], 10);

                    // Check the ranges of month and year
                    if (year < 1000 || year > 3000 || month == 0 || month > 12) {
                        return false;
                    }

                    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

                    // Adjust for leap years
                    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
                        monthLength[1] = 29;
                    }

                    // Check the range of the day
                    return day > 0 && day <= monthLength[month - 1];
                }
            }
        },
        computed: {
            locale: {
                set(val) {
                    this.$store.commit('setLocale',val)
                },
                get() {
                    return this.$store.state.locale;
                }
            }
        },
    }
</script>
<style scoped>
    .calendar {
        margin: 0 10px 0 0;
        border: 2px solid cadetblue;
        font-size: 20px;
        width: 270px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
