<template>
    <div class="btn_item">
        <span>{{btnTitle}}</span>
    </div>
</template>
<script>
export default {
    props: ['btnTitle']
}
</script>
<style scoped>
    .btn_item{
        /* background-color: transparent; */
        text-align: center;
        height: 100%;
        width: 100%;
        display: grid;
        align-items: center;
    }
    .btn_item span{
        color: #555972;
        font-weight: bold;
        transition: 0.1s ease;
        cursor: pointer;
        font-weight: 400;
    }
    .btn_item span:hover{
        color: var(--main-color);
    }
    .btn_item_active{
        background: var(--main-color);
        border-radius: 50px;
    }
    .btn_item_active span{
        color: var(--text-blue);
        font-weight: bold;
    }
    .btn_item_active span:hover{
        color: var(--text-blue);
    }

</style>

