<template>
    <div id="app">
        <Calendar @selectDate="setDate"

        />
        <div>
            <label for="curDate">Текущая дата</label>
            <br>
            <input id="curDate" type="text" :value="$store.getters.fullDate" size="30">
        </div>

    </div>
</template>

<script>
    import Calendar from './components/Calendar.vue'

    export default {
        name: 'App',
        components: {
            Calendar
        },
        data(){
          return {
              date: '',
          }
        },
        methods:{
            setDate(val){
                this.date = val;
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin-top: 60px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>
