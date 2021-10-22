<template>
  <div class="wraper">
    <label for="inp">{{lable}}</label>
    <div class="input_number">
      <input type="number" max="120" min="0" :value="time" disabled />
      <div class="controle_btns" :style="contorl_btn_style" >
        <div class="arrow btn_top" @click="$emit('plusCount')" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 172 172"
            style="fill: #000000"
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#cccccc">
                <path
                  d="M86,129.00178c-0.89233,0 -1.78467,-0.33244 -2.47754,-0.99382l-82.41667,-78.83333c-1.42773,-1.36825 -1.48022,-3.63582 -0.11198,-5.06706c1.36475,-1.43123 3.63232,-1.48722 5.06706,-0.11198l79.93913,76.46427l79.93913,-76.46427c1.43823,-1.36825 3.70231,-1.31226 5.06706,0.11198c1.36825,1.43123 1.31576,3.69881 -0.11198,5.06706l-82.41667,78.83333c-0.69287,0.66138 -1.58521,0.99382 -2.47754,0.99382z"
                ></path>
              </g>
            </g>
          </svg>
        </div><!-- ./btn_top -->

        <div class="arrow btn_down" @click="$emit('minsCount')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20px"
            height="20px"
            viewBox="0 0 172 172"
            style="fill: #000000"
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#cccccc">
                <path
                  d="M86,129.00178c-0.89233,0 -1.78467,-0.33244 -2.47754,-0.99382l-82.41667,-78.83333c-1.42773,-1.36825 -1.48022,-3.63582 -0.11198,-5.06706c1.36475,-1.43123 3.63232,-1.48722 5.06706,-0.11198l79.93913,76.46427l79.93913,-76.46427c1.43823,-1.36825 3.70231,-1.31226 5.06706,0.11198c1.36825,1.43123 1.31576,3.69881 -0.11198,5.06706l-82.41667,78.83333c-0.69287,0.66138 -1.58521,0.99382 -2.47754,0.99382z"
                ></path>
              </g>
            </g>
          </svg>
        </div><!-- ./btn_down -->

      </div><!-- ./controle_btns -->
    </div>
  </div>
</template>

<script>
export default {
    emits : ['plusCount','minsCount'],
    props: ['lable','time'],
    inject: ['getTimerStatus'],

    computed: {
      contorl_btn_style: function(){
         if(this.getTimerStatus()){
          return `pointer-events: none;`

        }
        else{
          return `pointer-events: auto;`
        }
      }
    }
    

}
</script>


<style scoped>

.wraper{

}
label{
    color: #cccccc;
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.input_number {
  border: 1px solid #cccccc;
  border-radius: 10px;
  height: 40px;
  width: 65px;
  padding: 0px 10px;
  background-color: #eef1fa;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  background: transparent;
  width: 100%;
  border: none;
  outline: none;
}
input:hover {
  /* outline: none; */
}
.controle_btns {
  /* background: red; */
  width: 50px;
  height: 100%;

  display: grid;
  place-items: center;
  overflow: hidden;
}

.controle_btns .arrow{
    width: 20px;
    height: 20px;
    /* display: grid;
    place-content: center; */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    /* background: red; */
    /* border: 1px solid black; */


}
.controle_btns .arrow svg g {
    transition: 0.2s ease;
}
.controle_btns .arrow:hover svg g {
    fill: var(--text-blue);
}
.controle_btns .arrow.btn_top{
    transform: rotate(180deg);
}


</style>