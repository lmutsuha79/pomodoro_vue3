<template>
<div class="wraper">
    <div class="container">
        <header>
            warning
        </header>

        <main>
            <p>
                you need to turn off the timer or wait till the end of it before you can jump to another tab.             
            </p>
            <p style="color: var(--main-color)">
                the first tab data will lost when you go to the second tab
            </p>
            <p>
                please pause the timer and then retry
                
            </p>


            <warn-btn class="btn" text='Oky'></warn-btn>

        </main>


    </div>
</div>
</template>

<script>
import WarnBtn from '../../buttons/WarnBtn.vue'
export default {
    components: {
        WarnBtn
    }
}
</script>

<style scoped>
.wraper {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  display: grid;
  place-items: center;
  color: white;

}
.container {
  width: 80%;
  height: auto;
  background-color: #1e2140;
  border-radius: 25px;
  padding: 20px 0px;
}
header{
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 3px;
    border-bottom: 1px solid #cccccc;
    padding-bottom: 15px;
}
main{
    padding: 20px;
    text-align: center;

}
.btn{
    width: 100px;
    height: 25px;
    border-radius: 5px;
    display: inline-block;
}
p{
    color: #cccccc;
    font-weight: 300;
}
</style>