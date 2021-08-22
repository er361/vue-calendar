import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        year: 0,
        month: 0,
        day: 0,
        selectedMonth: 0,
        locale: 'ru',
    },
    mutations: {
        setLocale(state, locale) {
            state.locale = locale;
        },
        setYear(state, year) {
            state.year = parseInt(year);
        },
        setMonth(state, month) {
            state.month = parseInt(month);
        },
        setDay(state, day) {
            state.day = parseInt(day);
        },
        incrementMonth(state) {
            state.month++;
        },
        decrementMonth(state) {
            state.month--;
        },
        selectMonth(state, month) {
            state.selectedMonth = parseInt(month);
        }
    },
    getters: {
        monthYear(state) {
            let month = new Date(state.year, state.month);
            return month.toLocaleString(state.locale, {month: 'short'}) + ' ' + state.year;
        },
        canShowSelect(state) {
            return state.month === state.selectedMonth;
        },
        maxDayOfMonth(state) {
            return new Date(state.year, state.month, 0).getDate();
        },
        fullDate(state) {
            let date = new Date(state.year, state.selectedMonth, state.day);
            return new Intl.DateTimeFormat(state.locale).format(date)
        },
    },
    actions: {
        selectDate({commit, state}, day) {
            commit('setDay', day)
            commit('selectMonth', state.month)
        }
    },
    modules: {}
})
