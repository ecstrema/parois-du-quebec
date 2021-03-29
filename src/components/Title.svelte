<script lang="ts">
    import Divider from "./Divider.svelte"
</script>

<h1 class="title"><slot></slot></h1>
<Divider/>

<style>
    .title {
        margin-bottom: 3px;
		text-align: center;
	}

	/* @media only screen and (max-width: 800px) {
		.title {
            text-align: center;
		}
	} */
</style>
