<template>
  <div id="wraper" :style="cssVars">
    <h1 class="">pomodoro</h1>

    <nav-bar :activeTab="selected_tab"></nav-bar>
    <!-- <keep-alive> -->
    <poro-modo
      v-if="selected_tab === 'poroModo'"
      :starting="pomodoro_inp"
    ></poro-modo>
    <!-- </keep-alive> -->
    <!-- <keep-alive> -->
    <short-break
      v-if="selected_tab === 'shortBreak'"
      :starting="short_break_inp"
    ></short-break>
    <!-- </keep-alive> -->

    <!-- <keep-alive> -->
    <long-break
      v-if="selected_tab === 'longBreak'"
      :starting="long_break_inp"
    ></long-break>
    <!-- </keep-alive> -->

    <settings-button @click="optionsVisible = true"></settings-button>

    <!-- <keep-alive> -->
    <options-view
      v-if="optionsVisible"
      header_title="Setings"
      :colors="colors"
      :pomodoroTime="pomodoro_inp"
      :shortBreakTime="short_break_inp"
      :longBreakTime="long_break_inp"
      @options-close-event="optionsVisible = false"
      @change-default-color="changeCssVars"
      @pomodoroTime-change="(data) => (pomodoro_inp = data)"
      @shortBreak-change="(data) => (short_break_inp = data)"
      @longBreak-change="(data) => (long_break_inp = data)"
    ></options-view>
    <!-- </keep-alive> -->

  <pause-before
    v-if="Pause_before_warn_is_active"
    @click="Pause_before_warn_is_active = false"
  ></pause-before>
    
  
  </div>
  <!-- #wraper -->
</template>

<script>
import NavBar from "./components/ui/NavBar.vue";
import PoroModo from "./components/ui/PoroModo.vue";
import LongBreak from "./components/ui/LongBreak.vue";
import ShortBreak from "./components/ui/ShortBreak.vue";
import SettingsButton from "./components/buttons/SettingsButton.vue";
import OptionsView from "./components/ui/OptionsView.vue";
import PauseBefore from './components/ui/warning_ui/PauseBefore.vue'
export default {
  name: "App",
  provide() {
    return {
      reSelectTab: this.reSelectTab,
      isTheTimerWorking: this.is_the_timer_working,
      timeSpeed: this.time_speed,
    };
  },
  components: {
    NavBar,
    PoroModo,
    LongBreak,
    ShortBreak,
    SettingsButton,
    OptionsView,
    PauseBefore,
  },
  
  data() {
    return {
      timer_is_runing: false,
      selected_tab: "poroModo",
      optionsVisible: false,
      colors: ["#f8716b", "#75effc", "#da81f5"],
      mainColor: "#f8716b",

      pomodoro_inp: 25,
      short_break_inp: 5,
      long_break_inp: 15,
  // time speed count with ms
      time_speed: 1000,

      Pause_before_warn_is_active: false,
    };
  },
  computed: {
    cssVars() {
      return {
        "--main-color": this.mainColor,
      };
    },
  },
  methods: {
    is_the_timer_working(is) {
      if (is === "yes") {
        this.timer_is_runing = true;
      } else if (is === "no") {
        this.timer_is_runing = false;
      } else {
        console.log("acsept yes or no only");
      }
    },


    changeCssVars(color) {
      this.mainColor = color;
    },
    reSelectTab(tab) {
      if (this.timer_is_runing === false) {
        // add if prametre of clicking methods is go back dont change the tab
        // if he acsept reset 
        if (tab === "poroModo") {
          this.selected_tab = "poroModo";
        } else if (tab === "shortBreak") {
          this.selected_tab = "shortBreak";
        } else {
          this.selected_tab = "longBreak";
        }
      }
      else{
        this.Pause_before_warn_is_active = true;
        // alert('you cant go to the next tap witout pause the timer')
      }
    },
  },
};
</script>

<style>
:root {
  /* main-color with vue */
  --dark-blue: #151932;
  --text-blue: #1e2140;
}
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;600;700;800&display=swap");
* {
  font-family: "Inter", sans-serif;
}
#wraper {
  background-color: #1e2140;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
}
h1 {
  margin: 0px;
  color: white;
  font-weight: bold;
  font-size: 32px;
}
</style>

