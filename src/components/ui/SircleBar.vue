

<template>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
     <circle cx="16" cy="16" r="15.9155"
           class="progress-bar__background" />
  
     <circle cx="16" cy="16" r="15.9155"
            class="progress-bar__progress 
                    js-progress-bar"
            :style="progStyle"
                     />
    </svg>
    </div>
</template>

<script>
export default {
  props: ['percentage'],
  computed: {
    progStyle: function(){
      return `stroke-dashoffset: -${this.percentage};`
    }
  }
}
</script>


<style scoped>
svg {
  height: 100%;
  transform: rotate(-90deg);
  width: 100%;
}

.progress-bar__background {
  fill: none;
  stroke: var(--main-color);
  stroke-width: 2;
}

.progress-bar__progress {
  fill: none;
  stroke: #151932;
  stroke-dasharray: 100 100;
  /* controle the presentage */
  stroke-width: 2.2;
  transition: stroke-dashoffset 0.5s ease-in-out;
}

</style>