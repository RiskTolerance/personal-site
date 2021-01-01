<script>
    export let project;
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

<div style="background-image: url(/images/projects/{project.type}/{project.title}/header.jpg)" class="work-block">
    <p>{project.title}</p>
</div>
