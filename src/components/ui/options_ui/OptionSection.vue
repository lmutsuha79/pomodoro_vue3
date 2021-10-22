<template>
    
    <div class="option_section" :class="classStyle">
        <div class="over_lay" v-if="disable == true">
            <div class="tool_tip">stop the timer first</div>

        </div>
        <header>{{title}}</header>
        <div class="option_body">
            <slot></slot>
        </div>
    </div>
</template>


<script>
export default {
    props: ['title','same_line','disable'],
    computed: {
        classStyle: function(){
            if(this.same_line == 'true'){
                return 'in_one_line_style';
            }else{
                return '';
            }
        }
    }
  
}
</script>

<style scoped>
.over_lay{
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 99;
}
.over_lay .tool_tip{
    color: var(--main-color);
    font-weight: 600;
    text-shadow: 0 0 20px var(--main-color), 0 0 20px var(--main-color), 0 0 20px var(--main-color),0 0 20px var(--main-color);


}

    .in_one_line_style{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .option_section{
        position: relative;
        color: var(--text-blue);
        border-top: 1px solid #cccccc;
        padding: 20px 20px;
        
    }
    header{
        letter-spacing: 4px;
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 10px;
    }
    .in_one_line_style header{
        margin-bottom: 0px;

    }
    .option_body{
        display: flex;
        gap: 10px;
    }
</style>