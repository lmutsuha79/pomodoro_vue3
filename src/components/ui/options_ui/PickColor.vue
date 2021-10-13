<template>
    <div class="sircle" :style="`background: ${this.color};`"
        @click="send_color_change_event"
    >
        <div v-if="selected === true" class="over_layer">
            <span>selected</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['color','selected'],
    emits: ['color-picked'],
    methods:{
        send_color_change_event(){
            this.$emit('color-picked',this.color);
        }
    }
}
</script>


<style scoped>
    .sircle{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #cccccc;
        cursor: pointer;
        overflow: hidden;
        /* display: grid;
        place-content: center; */
    }
    .over_layer{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: grid;
        place-items: center;
    }
    .sircle span{
        font-size: 8px;
        color: white;    
    }
</style>