<template>
  <div id="options_wraper">
    <div id="options_container">
      <header>
        <h2>{{ header_title }}</h2>
        <div id="close_btn" @click="$emit('options-close-event')">
          <img src="../../assets/close.png" />
        </div>
      </header>
  <!-- ####################### timer options ############################### -->
      <option-section same_line="false" title="Time (minutes)" :disable="getTimerStatus()" :style="timerOptionStyle">
        <template v-slot:default>
          <adjust-time
            :time="pomodoroTime"
            lable="poromodo"
          
            @plusCount="pomodoroTime++; $emit('pomodoroTime-change',pomodoroTime++)"
            @minsCount="pomodoroTime--; $emit('pomodoroTime-change',pomodoroTime--)"
          ></adjust-time>
<!-- when we emmit we send the value befor ++ because if we send value +1 it send but the value in the ui doesn't  change
  -->
          <adjust-time
            :time="shortBreakTime"
            lable="short break"
            @plusCount="shortBreakTime++; $emit('shortBreak-change',shortBreakTime++)"
            @minsCount="shortBreakTime--; $emit('shortBreak-change',shortBreakTime--)"
          ></adjust-time>

          <adjust-time
            :time="longBreakTime"
            lable="long break"
            @plusCount="longBreakTime++; $emit('longBreak-change',longBreakTime++)"
            @minsCount="longBreakTime--; $emit('longBreak-change',longBreakTime--)"
          ></adjust-time>
        </template>
      </option-section>
  <!-- ########################## colors option ######################### -->
      <option-section same_line="true" title="Color">
        <pick-color
          v-for="color in colors"
          :key="color"
          :color="color"
          :selected="colors.indexOf(color) === defaultIndexColor"
          @color-picked="changeColor"
        >
        </pick-color>
      </option-section>
  <!-- ########################## full screan mode option ####################### -->
      <option-section same_line="true" title="focus mode">
        <!-- <template v-slot:default>
          <div>
            <input type="checkbox" id="checkbox" v-model="checked"
              style="margin:0px 5px;"
            >
            <label for="checkbox">selected</label>
          </div>
        </template> -->


        <entre-fscrean :fullScreanTarget="fullScreanTarget"></entre-fscrean>
      </option-section>

    </div>
    <!-- .#options_container -->
  </div>
  <!-- .#options_wraper -->
</template>



<script>
import AdjustTime from "./options_ui/AdjustTime.vue";
import OptionSection from "./options_ui/OptionSection.vue";
import PickColor from "./options_ui/PickColor.vue";
import EntreFscrean from './options_ui/EntreFscrean.vue';
export default {

  emits: ['options-close-event','change-default-color','pomodoro-time',
          'pomodoroTime-change',
          'longBreak-change',
          'shortBreak-change'
  ],
  props: ["header_title","colors","pomodoroTime","shortBreakTime","longBreakTime","fullScreanTarget"],
  components: {
    OptionSection,
    AdjustTime,
    PickColor,
    EntreFscrean,
  },
  inject: ['getTimerStatus'],
  data() {
    return {
      defaultIndexColor: 0,
      colors: this.colors,
    };
  },
  computed: {
      timerOptionStyle: function(){
         if(this.getTimerStatus() === false){
          return `color: var(--text-blue); cursor: auto;`

        }
        else{
          return `color: #cccccc; cursor: not-allowed;`
        }
      }
  },
  methods: {

    changeColor(color) {
      const index = this.colors.indexOf(color);
      this.defaultIndexColor = index;
      this.$emit('change-default-color',color)


    },
  },

};
</script>

<style scoped>

#options_wraper {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  display: grid;
  place-content: center;
}
#options_container {
  width: 320px;
  height: 400px;
  background-color: white;
  border-radius: 25px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
}
header h2 {
  color: var(--text-blue);
}
header #close_btn {
  width: 20px;
  height: 20px;
  /* background: black; */
  overflow: hidden;
  cursor: pointer;
}
header #close_btn img {
  width: 100%;
  height: 100%;
}
</style>