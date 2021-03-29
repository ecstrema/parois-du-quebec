<script lang="ts">
    import Divider from "../components/Divider.svelte";

    export let status;
    export let error;
</script>

<h1>{status}</h1>
<p>{error.message}</p>
<h2>That's an error.</h2>
<h2><a href=".">Go back to home page?</a></h2>
<Divider/>


<style>
    h1, p, h2, a {
        text-align: center;
    }

    a {
        text-decoration: none;
        border: 1px solid gray;
        border-radius: 10px;
        padding: 5px;
    }
    a:hover, a:focus {
        box-shadow: 1px 1px 0 0 lightgray;
    }
    a:focus {
        outline: none;
    }
</style>
