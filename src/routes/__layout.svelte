<script lang="ts">
    import { Header, Footer } from "$components";
</script>


<Header/>
<div class="centered-layout" style="margin-bottom: 70px;">
	<main>
		<slot></slot>
	</main>
</div>

<Footer/>

<style>
	main {
		padding-left: 30px;
		padding-right: 30px;
	}


	@media only screen and (max-width: 600px) {
		main {
			padding-left: 20px;
			padding-right: 20px;
		}
	}
	@media only screen and (max-width: 500px) {
		main {
			padding-left: 12px;
			padding-right: 12px;
		}
	}
	@media only screen and (max-width: 400px) {
		main {
			padding-left: 5px;
			padding-right: 5px;
		}
	}

</style>
