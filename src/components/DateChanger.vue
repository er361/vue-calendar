<template>
    <div class="changer">

        <font-awesome-icon icon="arrow-left"
                           @click="$emit('changeMonth',monthNumber--)"/>
        Changer dates
        <font-awesome-icon icon="arrow-right"
                           @click="$emit('changeMonth',monthNumber++)"/>

    </div>
</template>
<script>
    export default {
        name: 'dateChanger',
        data(){
            return {
                monthNumber: 1
            }
        }
    }
</script>
<style scoped>
    .changer{
        display: flex;
        justify-content: space-between;
        padding: 5px 10px;
    }

</style>