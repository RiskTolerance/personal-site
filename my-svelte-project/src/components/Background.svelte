<script>
    export let clipRatio = 40;
    export let colors;
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

    #color-box {
        position: fixed;
        top: -100px;
        left: 240px;
        z-index: -1;
        width: 130px;
        height: 400px;
        filter: opacity(60%);
    }
</style>

<div id="wrapper">
    <div style="width:{clipRatio}%" id="img-wrapper">
        <img src="./images/backgrounds/1.jpg" alt="" />
    </div>
</div>
<div style="background-color: {colors.orange};" id="color-box"/>
