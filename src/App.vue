<template>
    <div id="app">
        <Calendar class="calendar"/>
        <div>
            <input type="text">
        </div>

    </div>
</template>

<script>
    import Calendar from './components/Calendar.vue'

    export default {
        name: 'App',
        components: {
            Calendar
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>
