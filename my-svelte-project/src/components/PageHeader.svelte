<script>
    import Baseline from "./Baseline.svelte"
    import { createEventDispatcher } from "svelte";
    export let title;
    export let leftHeaderMargin;
    export let page;
    export let subPage;
    const dispatch = createEventDispatcher();
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        color: white;
    }

    #wrapper {
        display: flex;
        height: 15vh;
        padding-top: 15vh;
    }

    #title-wrapper {
        display: flex;
        align-items: flex-end;
    }

    #title {
        line-height: 8rem;
        font-family: essonnes-headline, serif;
        font-weight: 700;
        font-style: italic;
        font-size: 10rem;
        margin-right: 4rem;
        margin-left: 4rem;
        align-self: flex-end;
    }
</style>

<div id="wrapper">
    <div style={`margin-left: ${leftHeaderMargin}%;`} id="title-wrapper">
        <h1 id="title">{title}</h1>
    </div>
    <Baseline on:subpress={() => dispatch('subpress')} {page} {subPage} />
</div>