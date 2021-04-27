<script lang="ts">
    import { Tr } from "s20n";
    export let status: string;
</script>

<h1>{status}</h1>
<h2><Tr t="Oups. Une erreur s'est produite..."/></h2>
<h2><a href="."><Tr t="Retour à la page d'acceuil"/></a></h2>

<style>
    h1, h2, a {
        text-align: center;
    }

    a {
        text-decoration: none;
        border: 1px solid gray;
        border-radius: 10px;
        padding: 5px;
        box-sizing: border-box;
    }
    a:hover, a:focus {
        box-shadow: 1px 1px 0 0 lightgray;
    }
    a:focus {
        outline: none;
    }
</style>
