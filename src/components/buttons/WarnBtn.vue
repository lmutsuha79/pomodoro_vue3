<template>
  <div class="the_btn">
      <div class="over_lay"></div>
        <span> {{ text }} </span>

  </div>
</template>

<script>
export default {
  props: ["text", "width", "heigth"],
};
</script>

<style scoped>
.the_btn {
    position: relative;
  background: var(--main-color);
  cursor: pointer;
  display: grid;
  place-items: center;
  overflow: hidden;
  
}
.over_lay{
    width: 100%;
    height: 100%;
    background: var(--dark-blue);
    position: absolute;
    opacity: 0;
    transition: 0.2s ease;
}
.the_btn:hover .over_lay{
    opacity: 0.3;
}

span {
  /* color: var(--text-blue); */
  font-weight: bolder;
  color: var(--text-blue);
  z-index: 99;
}
</style>