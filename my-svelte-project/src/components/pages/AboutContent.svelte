<script>
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
    }

    #wrapper {
        display: flex;
        width: 100%;
        height: 100%;
        margin-top: 60px;
        justify-content: center;
    }

    #content {
        display: flex;
        flex-direction: row;
        width: 80%;
        height: 100%;
        padding-bottom: 2.5rem;
        justify-content: space-around;
    }

    #portrait {
        width: 30%;
    }

    p {
        width: 50%;
        font-family: "Lato", sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
    }
</style>

<div id="wrapper">
    <div id="content">
        <img
            id="portrait"
            src="/images/portrait.jpeg"
            alt="Portrait of Isaac Druin" />
        <p>
            About me. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, nobis? Nemo atque, quae dolores fugiat necessitatibus
            eos dicta eius consequatur dolore quaerat non, dolorum facere
            officia sint ipsam. Iusto, ducimus.
        </p>
    </div>
</div>
