<script>
    import {writable} from 'svelte/store'
import TweenedStore from './TweenedStore.svelte';
    export let clipRatio = 40;
    let widthConstraint = window.innerWidth/(clipRatio*0.1);
    let heightConstraint = window.innerHeight/2;

    const generateDimention = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const generatePosition = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    let dimentions = writable({width: generateDimention(100, 500),height: generateDimention(100, 700),left: generatePosition(10, widthConstraint),top: generatePosition(10, heightConstraint)})

    const generateNewDimentions = () => {
        dimentions.width = generateDimention(100, 500)
        dimentions.height = generateDimention(100, 700)
        dimentions.left = generatePosition(10, widthConstraint)
        dimentions.top = generatePosition(10, heightConstraint);
    };

    setInterval(() => {
        generateNewDimentions();
    }, 7000);
</script>

<style>
    #wrapper {
        position: fixed;
        height: 100vh;
        width: 100%;
        z-index: -2;
        top: 0px;
        left: 0px;
    }

    #img-wrapper {
        height: 100%;
        clip-path: inset(0px 0px 0px 0px);
    }

    img {
        position: relative;
        scale: 1.3;
        top:-15%;
        left: -50%;
    }

    #color-box-container {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100%;
    }
</style>

<div id="wrapper">
    <div style="width:{clipRatio}%" id="img-wrapper">
        <img src="./images/backgrounds/1.jpg" alt="" />
        <div id="color-box-container">
            <TweenedStore {dimentions} />
        </div>
    </div>
</div>
