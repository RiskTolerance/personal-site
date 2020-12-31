<script>
    let blogs = [
        { id: "0", name: "testname1", image: "null" },
        { id: "1", name: "testname2", image: "null" },
        { id: "2", name: "testname3", image: "null" },
        { id: "3", name: "testname4", image: "null" },
        { id: "4", name: "testname5", image: "null" },
        { id: "5", name: "testname6", image: "null" },
    ];
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        color: white;
    }

    #blog-block-wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        flex-wrap: wrap;
    }

    .blog-block {
        width: 40%;
        height: 350px;
        margin: 3%;
        background-color: orange;
    }

    #section-description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        margin: 5% 10%;
    }

    p {
        font-family: "Lato", sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
    }
</style>

<div id="section-description">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        libero accusamus ea quidem sunt eum facere saepe? Dolorem nam fugit,
        libero neque omnis voluptas optio quaerat nisi deleniti! Provident, eos?
    </p>
</div>

<div id="blog-block-wrapper">
    {#each blogs as blog, i}
        <div class="blog-block">
            <p>{blog.id}</p>
        </div>
    {/each}
</div>
