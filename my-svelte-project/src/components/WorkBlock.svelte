<script>
    export let project;
    export let i;
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        color: white;
    }

    p {
        font-family: "Lato", sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
    }

    .work-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 300px;
        margin: 3%;
        background-position: center;
        background-size: auto 300px;
        background-repeat: no-repeat;
    }
</style>

<div
    on:click={() => dispatch('workItemPress')}
    style="background-image: url(/images/projects/{project.type}/{project.titleUrl}/{project.headerImg})"
    class="work-block">
    <p data-item={i} data-link={project.titleUrl}>{project.title}</p>
</div>
