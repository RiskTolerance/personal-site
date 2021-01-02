<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let page;
    export let subPage;
    export let currentFocusItem;

    let title = "";
    if (subPage) {
        console.log(subPage);
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        color: white;
    }

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

    #subtitle {
        display: flex;
        align-self: flex-end;
        width: 100%;
        height: 50%;
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

    #closeBtn {
        scale: 0.8;
        margin-left: 2rem;
        margin-right: 2rem;
    }

    #closeBtn:hover {
        cursor: pointer;
    }
</style>

<div id="wrapper">
    {#if page === 'Welcome'}
        <div style="width: 100%" class="baseline" />
    {:else if page === 'About'}
        <div style="width: 100%" class="baseline" />
    {:else if page === 'Work'}
        {#if currentFocusItem === ''}
            <div style="width: 4%" class="baseline" />
            <h3 on:click={() => dispatch('workNavPress')}>Graphic Design</h3>
            <div style="width: 4%" class="baseline" />
            <h3 on:click={() => dispatch('workNavPress')}>Web Development</h3>
            <div style="width: 4%" class="baseline" />
            <h3 on:click={() => dispatch('workNavPress')}>Photography</h3>
            <div style="width: 100%" class="baseline" />
        {:else}
            <div id="subtitle">
                <div
                    style="width: 50%; background-color: #e0a43e;"
                    class="baseline" />
                <h3 style="color: #e0a43e; width: 30%; font-size: 3rem; font-family: essonnes-headline, serif;">
                    {currentFocusItem.title}
                </h3>
                <div
                    style="width: 50%; background-color: #e0a43e;"
                    class="baseline" />
            </div>

            <img
                id="closeBtn"
                on:click={() => dispatch('closeWork')}
                src="./images/ex.svg"
                alt="close section button" />
        {/if}
    {:else if page === 'Blog'}
        <div style="width: 100%" class="baseline" />
    {:else if page === 'Contact'}
        <div style="width: 100%" class="baseline" />
    {/if}
</div>
