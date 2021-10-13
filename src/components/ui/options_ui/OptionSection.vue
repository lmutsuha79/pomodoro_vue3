<template>
    
    <div class="option_section" :class="classStyle">
        <header>{{title}}</header>
        <div class="option_body">
            <slot></slot>
        </div>
    </div>
</template>


<script>
import { computed } from '@vue/reactivity'
export default {
    props: ['title','same_line'],
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
    .in_one_line_style{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .option_section{
        border-top: 1px solid #cccccc;
        padding: 20px 20px;
        
    }
    header{
        color: var(--text-blue);
        letter-spacing: 4px;
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 10px;
    }
    .option_body{
        display: flex;
        gap: 10px;
    }
</style>