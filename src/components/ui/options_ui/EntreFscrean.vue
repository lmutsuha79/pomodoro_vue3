<template>
<!-- <div class="control-group"> -->
    <div>
        <label class="control control-checkbox">
        {{checked}}
            <input v-model="checked" type="checkbox" checked="checked"
            @change="full_screan_mode"/>

        <div class="control_indicator"></div>
    </label>

    </div>

</template>
<script>
export default {
    props:['fullScreanTarget'],
    data(){
        return{
            checked: false
        }
    },
   methods: {
    full_screan_mode(){
        // we keep the full screan in options with <keep-alive> in the app.vue forthe hole option-view
        if(this.checked){
            

            const con = this.fullScreanTarget
            con.requestFullscreen()
            .then(function() {
                // element has entered fullscreen mode successfully
            })
            .catch(function(error) {
                // element could not enter fullscreen mode
                // error message
                console.log(error.message);
            });
        }else{
            document.exitFullscreen()
            .then(function() {
                // element has exited fullscreen mode
            })
            .catch(function(error) {
                // element could not exit fullscreen mode
                // error message
                console.log(error.message);
});
        }
       
}
   }
 
    
}
</script>


<style scoped>
.control {
    font-family: arial;
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 5px;
    padding-top: 0px;
    cursor: pointer;
    font-size: 16px;
}
    .control input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
.control_indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
    background: #e6e6e6;
    border: 0px solid #000000;
    border-radius: 0px;
}
.control:hover input ~ .control_indicator,
.control input:focus ~ .control_indicator {
    background: #cccccc;
}

.control input:checked ~ .control_indicator {
    background: var(--text-blue);
}
/* .control:hover input:not([disabled]):checked ~ .control_indicator,
.control input:checked:focus ~ .control_indicator {
    background: #0e6647d;
} */
/* .control input:disabled ~ .control_indicator {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
} */
/* this is for the sa7 3alama */
.control_indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
}
.control input:checked ~ .control_indicator:after {
    display: block;
}
.control-checkbox .control_indicator:after {
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}
/* .control-checkbox input:disabled ~ .control_indicator:after {
    border-color: #7b7b7b;
} */
/* this is for the boble effect */
.control-checkbox .control_indicator::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 4.5rem;
    height: 4.5rem;
    margin-left: -1.3rem;
    margin-top: -1.3rem;
    background: #cccccc;
    border-radius: 3rem;
    opacity: 0.6;
    z-index: 99999;
    transform: scale(0);
}
@keyframes s-ripple {
    0% {
        transform: scale(0);
    }
    20% {
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(1);
    }
}
@keyframes s-ripple-dup {
   0% {
       transform: scale(0);
    }
   30% {
        transform: scale(1);
    }
    60% {
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(1);
    }
}
.control-checkbox input + .control_indicator::before {
    animation: s-ripple 250ms ease-out;
}
.control-checkbox input:checked + .control_indicator::before {
    animation-name: s-ripple-dup;
}
</style>