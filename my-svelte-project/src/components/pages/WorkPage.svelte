<script>
    export let currentFocusItem;
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        color: white;
    }

    #wrapper {
        margin: 0 5% 0 5%;
    }
</style>

<div id="wrapper">
    <h1>{currentFocusItem.title}</h1>
    <p>{currentFocusItem.description}</p>
    <img src="./images/projects/{currentFocusItem.type}/{currentFocusItem.titleUrl}/{currentFocusItem.images[1]}" alt="">
</div>
