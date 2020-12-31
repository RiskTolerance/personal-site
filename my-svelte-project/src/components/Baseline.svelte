<script>
    import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();
    export let page;
    export let subPage;

    if (subPage) {
        console.log(subPage);
    }
</script>

<style>
    #wrapper {
        display: flex;
        width: 100%;
        align-self: flex-end;
    }

    .baseline {
        height: 10px;
        background-color: white;
        align-self: flex-end;
    }

    h3 {
        margin: 0;
        text-align: center;
        font-family: "Lato", sans-serif;
        font-size: 1.5em;
        width: 40%;
    }

    h3:hover {
        color: #e0a43e;
        cursor: pointer;
    }
</style>

<div id="wrapper">
    {#if page === 'Welcome'}
        <div style="width: 100%" class="baseline" />
    {:else if page === 'About'}
        <div style="width: 100%" class="baseline" />
    {:else if page === 'Work'}
        <div style="width: 4%" class="baseline" />
        <h3 on:click={() => dispatch('subpress')}>Graphic Design</h3>
        <div style="width: 4%" class="baseline" />
        <h3 on:click={() => dispatch('subpress')}>Web Development</h3>
        <div style="width: 4%" class="baseline" />
        <h3 on:click={() => dispatch('subpress')}>Photography</h3>
        <div style="width: 100%" class="baseline" />
    {:else if page === 'Blog'}
        <div style="width: 100%" class="baseline" />
    {:else if page === 'Contact'}
        <div style="width: 100%" class="baseline" />
    {/if}
</div>
