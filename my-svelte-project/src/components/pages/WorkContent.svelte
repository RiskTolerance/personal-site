<script>
    export let subPage;
    let graphicProjects = [
        { id: "0", name: "testname1", image: "null" },
        { id: "1", name: "testname2", image: "null" },
        { id: "2", name: "testname3", image: "null" },
        { id: "3", name: "testname4", image: "null" },
        { id: "4", name: "testname5", image: "null" },
        { id: "5", name: "testname6", image: "null" },
    ];
    let webDevProjects = [
        { id: "0", name: "testname1", image: "null" },
        { id: "1", name: "testname2", image: "null" },
        { id: "2", name: "testname3", image: "null" },
        { id: "3", name: "testname4", image: "null" },
        { id: "4", name: "testname5", image: "null" },
        { id: "5", name: "testname6", image: "null" },
    ];
    let photographyProjects = [
        { id: "0", name: "testname1", image: "null" },
        { id: "1", name: "testname2", image: "null" },
        { id: "2", name: "testname3", image: "null" },
        { id: "3", name: "testname4", image: "null" },
        { id: "4", name: "testname5", image: "null" },
        { id: "5", name: "testname6", image: "null" },
    ];
    console.log(subPage);
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

    .work-block {
        width: 300px;
        height: 300px;
        margin: 3%;
        background-color: orange;
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
        <p>
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
        {#each graphicProjects as project, i}
            <div class="work-block">
                <p>{project.id}</p>
            </div>
        {/each}
    {:else if subPage === 'Web Development'}
        {#each webDevProjects as project, i}
            <div class="work-block">
                <p>{project.id}</p>
            </div>
        {/each}
    {:else if subPage === 'Photography'}
        {#each photographyProjects as project, i}
            <div class="work-block">
                <p>{project.id}</p>
            </div>
        {/each}
    {/if}
</div>
