<script>
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();
</script>

<style>
    * {
        display: flex;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    nav {
        width: 33%;
        align-items: center;
    }

    ul {
        height: 100%;
        width: 100%;
        justify-content: space-between;
        list-style: none;
    }

    li {
        height: 40%;
        align-self: center;
        color: white;
        font-family: "Lato", sans-serif;
        font-weight: 700;
        font-size: 1.5rem;
    }

    li:hover {
        color: #E0A43E;
        cursor: pointer;
        border-bottom: 3px solid #E0A43E;
    }
</style>

<nav>
    <ul>
        <li data-menu-item="About" on:click={() => dispatch('navpress')}>About</li>
        <li data-menu-item="Work" on:click={() => dispatch('navpress')}>Work</li>
        <li data-menu-item="Blog" on:click={() => dispatch('navpress')}>Blog</li>
        <li data-menu-item="Contact" on:click={() => dispatch('navpress')}>Contact</li>
    </ul>
</nav>