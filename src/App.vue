<template>
  <div id="wraper" :style="cssVars" ref="wrapper">
      <!-- ################################################### -->

    <!-- the title in the center of the main window -->
    <h1 class="main_title">pomodoro</h1>
    <!-- ################################################### -->

    <!-- the nav bar contain the links of tabs -->
          <!-- ###################### nav bar for tabs ################################ -->
    <nav-bar :activeTab="selected_tab"></nav-bar>
    <!-- ################################################### -->

          <!-- ###################### tabs ################################ -->

<!-- ############################## -->
  <!-- pomodoro tab: -->
    <poro-modo
      v-if="selected_tab === 'poroModo'"
      :starting="pomodoro_inp"
    ></poro-modo>
<!-- ############################## -->

  <!-- short break tab: -->
    <short-break
      v-if="selected_tab === 'shortBreak'"
      :starting="short_break_inp"
    ></short-break>
<!-- ############################## -->

  <!-- long break tab: -->
    <long-break
      v-if="selected_tab === 'longBreak'"
      :starting="long_break_inp"
    ></long-break>
<!-- ############################## -->

    <!-- ################################################### -->
<!-- settings_button click on it to open the settings window -->
    <!-- click event is waiting to make the option window visible -->
    <settings-button @click="optionsVisible = true"></settings-button>
    <!-- ################################################### -->
          <!-- ###################### windows ################################ -->
    <!-- ################################################### -->

<!-- the options view (window) -->
<keep-alive>

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
      :fullScreanTarget="$refs.wrapper"
      
    ></options-view>

</keep-alive>
    <!-- ################################################### -->
  <!-- the warn window when trying to switch the tab when the timer in runing -->
  <!-- when clicking on the window it close -->
  <!-- when clicking on the oky button inside the iptions view nothing hapens -->
  <!-- but the window still close  -->
  <pause-before
    v-if="Pause_before_warn_is_active"
    @click="Pause_before_warn_is_active = false"
  ></pause-before>
      <!-- ################################################### -->

  
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
      getTimerStatus: this.get_timer_status,
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
    // this method is provided to the timer component 
    // to get the timer status and make it = this.timer_is_runing data
    is_the_timer_working(is) {
      if (is === "yes") {
        this.timer_is_runing = true;
      } else if (is === "no") {
        this.timer_is_runing = false;
      } else {
        console.log("acsept yes or no only");
      }
    },
    // this methods provide to other comps to let them know the timr state
    // because if we provide the data timer_is_runing directly 
    // provide and inject aproche is not reactive
    get_timer_status(){
      return this.timer_is_runing;
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
  user-select: none;
  /* p,a,span,h1,h2,h3,h4,h5,h6,input,label,header,footer,main,div {
  user-select: none;
} */
}

#wraper {
  background-color: var(--text-blue);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
}
.main_title {
  margin: 0px;
  color: white;
  font-weight: bold;
  font-size: 32px;
}
</style>

