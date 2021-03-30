<script lang="ts">
	import Title from "../components/Title.svelte";
	import { t } from "s20n";
	import HiddenLinks from "../components/HiddenLinks.svelte";
	import cover from "images/cover.jpg";
</script>

<HiddenLinks/>
<Title>{$t("acceuil.title")}</Title>
<div class="main-flex">
	<div class="preview-side">
		<img class="cover" src="{cover}" alt={$t("acceuil.imgAltText")}/>
		<div tabindex="0" class="preview">{$t("acceuil.preview")}</div>
	</div>
	<p class="text-side">
		Un tout nouveau guide contenant les parois de <i>Julien Labedan</i>, <i>Lac Boisseau</i>
	</p>
</div>

<style>
	.preview-side {
		display: flex;
		flex-direction: column;
		max-width: 100%;
		width: 300px;
		min-width: 250px;
		gap: 20px;
		align-items: center;
	}
	.preview {
		text-align: center;
		width: 60%;
		border-radius: 10px;
		background-color: #1976d2;
		color: white;

		padding: 5px;
		cursor: pointer;

		box-shadow: 4px 4px 3px rgba(149,157,165,0.6);
		transition: box-shadow 0.1s linear;
	}
	.preview:hover, .preview:focus {
		box-shadow: 4px 4px 1px rgba(149,157,165,0.6);
	}
	.preview:focus {
		font-weight: 600;
		outline: none;
	}
	.cover {
		max-width: 100%;
		box-shadow: 0 8px 24px rgba(149,157,165,0.6);
	}
	.main-flex {
		display: flex;
		gap: 20px;
		margin: 20px;
	}
	@media only screen and (max-width: 600px) {
		.main-flex {
			flex-wrap: wrap;
		}
		.preview-side {
			width: 100%;
		}
	}
</style>
