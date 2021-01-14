<script>
    import BlogBlock from "../BlogBlock.svelte";
    import { posts } from "../../data/BlogPosts.js";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
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
    {#each posts as post, i}
        <BlogBlock
            on:blogItemPress={() => dispatch('blogItemPress')}
            {post}
            {i} />
    {/each}
</div>
