<template>
    <div id="nav_container">
        <nav-button btn-title="poromodo"
            :class="{btn_item_active: activeTab === 'poroModo'}"
            @click="()=>{
                reSelectTab('poroModo')
            }"
        ></nav-button>
        <nav-button btn-title="short break"
            :class="{btn_item_active: activeTab === 'shortBreak'}"

            @click="reSelectTab('shortBreak')"

        ></nav-button>
        <nav-button btn-title="long break"
            :class="{btn_item_active: activeTab === 'longBreak'}"

            @click="reSelectTab('longBreak')"

        ></nav-button>
   

    </div>
</template>
<script>
import NavButton from '../buttons/NavButton.vue'
export default {
    props: ['activeTab'],
    inject:  ['reSelectTab'],
    components: {
        NavButton
    },
    methods: {
        
    }
}
</script>
<style scoped>
   #nav_container{
        background: #151932;
        width: 320px;
        height: 50px;
        display: flex;
        gap: 10px;
        padding: 10px;
        border-radius: 50px;
        overflow: hidden;

    }
</style>
