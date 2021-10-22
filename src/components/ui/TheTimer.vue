<template>
  <div class="container">
    <div class="sircle">
      <sircle-bar :percentage="percentage"></sircle-bar>

      <div id="sircle_content_text">
        <div class="all_text_not_reset" @click="count">
          <div id="timer">
            <span id="min">{{ formate_number(currentMin) }}</span>
            <span id="colom" ref="theColom">:</span>
            <span id="sec">{{ formate_number(currentSec) }}</span>
          </div>
          <!-- .#timer -->
          <span id="timer_text">{{ timer_text }}</span>
        </div>
        <div v-if="percentage != 0" id="reset_timer" @click="click_reset">
          reset timer
        </div>
      </div>
      <!-- .#sircle_content_text -->
    </div>
    <!-- .#sircle -->
  </div>
  <!-- ./container -->
</template>

<script>
import SircleBar from "./SircleBar.vue";

import successMp3 from "../../assets/mp3/success.mp3";

export default {
  props: ["start"],
  inject: ["isTheTimerWorking", "timeSpeed"],

  components: {
    SircleBar,
  },
  watch: {
    percentage: function (pers) {
      if (pers === 100) {
        const audio = new Audio(successMp3);
        audio.play();
      }
    },
    start: function () {
      this.currentMin = this.start;
    },
    currentSec: function (sec) {
      this.percentage =
        100 -
        (100 * (this.currentMin * 60 + this.currentSec)) / (this.start * 60);
    },
  },

  data: function () {
    return {
      currentMin: this.start,
      currentSec: 0,

      entervalId: null,
      timer_text: "start",
      percentage: 0,
    };
  },

  methods: {
    click_reset() {
      this.count();
      this.resetTimer();
    },
    formate_number(number) {
      return number.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    },
    resetTimer() {
      this.currentMin = this.start;
      this.currentSec = 0;
      this.timer_text = "start";
      this.percentage = 0;
      this.isTheTimerWorking("no");
    },
    change_timer_text() {
      if (this.timer_text === "start") {
        this.timer_text = "pause";
      } else if (this.timer_text === "pause") {
        this.timer_text = "resume";
      } else {
        this.timer_text = "pause";
      }
    },

    checkZeroOnSecs() {
      if (this.currentSec === 0 && this.currentMin != 0) {
        this.currentMin--;
        this.currentSec = 60;
      }
    },

    timer_working() {
      // stop conter when min and sec === 0:0
      if (this.currentMin === 0 && this.currentSec === 0) {
        // stop enterval
        clearInterval(this.entervalId);
        // reset the timer :
        this.resetTimer();
      } else {
        this.checkZeroOnSecs();
        this.currentSec--;
        this.colon_flash(this.currentSec);
      }
    },
    count() {
      if (this.timer_text === "pause") {
        clearInterval(this.entervalId);
        this.isTheTimerWorking("no");
      } else {
        this.isTheTimerWorking("yes");

        const enterval = setInterval(() => {
          // give the enterval Id to stop it later
          this.entervalId = enterval;
          this.timer_working();
        }, this.timeSpeed);
      }

      this.change_timer_text();
    },
    // tek  ':' tek '' ...
    colon_flash(sec) {
      if (sec % 2 === 0) {
        this.colom = " ";
        this.$refs["theColom"].style.color = "var(--main-color)";
      } else {
        this.colom = ":";
        this.$refs["theColom"].style.color = "white";
      }
    },
  },
};
</script>

<style scoped>
.container {
  box-shadow: 0px 0px 80px 12px #2b2e52;
  user-select: none;
  background: linear-gradient(
    -90deg,
    rgba(40, 44, 81, 1) 0%,
    rgba(21, 25, 50, 1) 100%
  );
  height: 280px;
  width: 280px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  padding: 25px;
}
.sircle {
  background: var(--dark-blue);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  /* cursor: pointer; */
}

#sircle_content_text {
  position: absolute;
  text-align: center;
}

span {
  color: white;
}
/* #colom{
    color: #cccccc;
} */
#timer_text {
  letter-spacing: 5px;
  font-size: 16px;
  transition: 0.1s ease;
}

#timer {
  font-size: 56px;
  font-weight: 500;
}
#reset_timer {
  color: #353b71;
  margin: 5px 0px;
  transition: 0.1s;
  font-size: 14px;
}
#reset_timer:hover {
  color: var(--main-color);
  font-size: 16px;
}
.all_text_not_reset,
#reset_timer {
  cursor: pointer;
}
.all_text_not_reset:hover #timer_text {
  font-size: 18px;
  font-weight: bold;
  color: var(--main-color);
}
</style>