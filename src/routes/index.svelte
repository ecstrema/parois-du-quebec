<script lang="ts">
	import Title from "../components/Title.svelte";
	import { t } from "s20n";
	import HiddenLinks from "../components/HiddenLinks.svelte";
	const cover = "cover.jpg";
</script>

<HiddenLinks/>
<Title>{$t("index.title")}</Title>
<div class="main-flex">
	<div class="preview-side">
		<img class="cover" src="{cover}" alt={$t("index.imgAltText")}/>
		<div tabindex="0" class="preview">{$t("index.preview")}</div>
	</div>
	<p class="text-side">
		{@html $t("index.description", null, { useMarkdown: true })}
	</p>
</div>

<style>
	.preview-side {
		display: flex;
		flex-direction: column;
		max-width: 100%;
		width: 300px;
		min-width: 250px;
		align-items: center;
		margin-right: 20px;
	}
	.preview {
		text-align: center;
		width: 70%;
		border-radius: 10px;
		background-color: #1976d2;
		color: white;
		margin-top: 20px;

		padding: 5px;
		box-sizing: border-box;
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
		margin: 20px;
	}
	@media only screen and (max-width: 600px) {
		.main-flex {
			flex-wrap: wrap;
		}
		.preview-side {
			width: 100%;
		}
		.preview {
			width: 85%;
		}
	}

	@media only screen and (max-width: 400px) {
		.preview {
			width: 100%;
		}
	}
</style>
