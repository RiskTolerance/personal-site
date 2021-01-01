<script>
    import WorkBlock from "../WorkBlock.svelte";
    export let subPage;
    import { graphicDesignProjects } from "../../data/GraphicDesignWork.js";
    import { webDevProjects } from "../../data/WebDevWork.js";
    import { photographyProjects } from "../../data/PhotographyWork.js";

    // import marked from "marked";
    // import { onMount } from "svelte";
    // onMount(async () => {
    //     document.getElementById('description').innerHTML = marked('# Marked in the browser\n\nRendered by **marked**.');
    // });
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        color: white;
    }

    #work-block-wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        flex-wrap: wrap;
    }

    #section-description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        margin: 10%;
    }

    p {
        font-family: "Lato", sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
    }
</style>

{#if subPage === 'Graphic Design'}
    <div id="section-description">
        <h1>Graphic Design Work</h1>
        <p id="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            libero accusamus ea quidem sunt eum facere saepe? Dolorem nam fugit,
            libero neque omnis voluptas optio quaerat nisi deleniti! Provident,
            eos?
        </p>
    </div>
{:else if subPage === 'Web Development'}
    <div id="section-description">
        <h1>Web Dev Work</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            libero accusamus ea quidem sunt eum facere saepe? Dolorem nam fugit,
            libero neque omnis voluptas optio quaerat nisi deleniti! Provident,
            eos?
        </p>
    </div>
{:else if subPage === 'Photography'}
    <div id="section-description">
        <h1>Photography Work</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            libero accusamus ea quidem sunt eum facere saepe? Dolorem nam fugit,
            libero neque omnis voluptas optio quaerat nisi deleniti! Provident,
            eos?
        </p>
    </div>
{/if}

<div id="work-block-wrapper">
    {#if subPage === 'Graphic Design'}
        {#each graphicDesignProjects as project, i}
            <WorkBlock {project} />
        {/each}
    {:else if subPage === 'Web Development'}
        {#each webDevProjects as project, i}
            <WorkBlock {project} />
        {/each}
    {:else if subPage === 'Photography'}
        {#each photographyProjects as project, i}
            <WorkBlock {project} />
        {/each}
    {/if}
</div>
