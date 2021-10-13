<template>
    <div>
        <the-timer :start='starting'></the-timer>
    </div>
</template>


<script>
export default {
    props: ['starting']
}
</script>