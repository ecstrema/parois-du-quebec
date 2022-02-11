<script lang="ts">
	import { Title, HomeFr, HomeEn } from "$components";
	import { t, locale } from "$i18n";

	import SvelteSeo from "svelte-seo";
</script>

<svelte:head>
	<title>{$t("Escalade Laurentides")}</title>
</svelte:head>

<SvelteSeo description="Le nouveau guide d'escalade des Laurentides" />

<Title>{$t("Bientot")}</Title>
<div class="main-flex">
	<div class="preview-side">
		<!-- <picture>
			<source media="(min-width:650px)" srcset="img_pink_flowers.jpg" />
			<img class="cover" src="/cover.jpg" alt={$t("couverture")} />
		</picture> -->
		<picture>
			<source srcset="cover.webp" />
			<img class="cover" src="/cover.jpg" alt={$t("couverture")} />
		</picture>
		<!-- 		<button class="preview">
			<img class="download-icon" src="/icons/TablerDownload.svg" aria-hidden="true" alt="download"/>
			{$t("voirExtraits")}
		</button> -->
	</div>
	<div class="text-side">
		{#if $locale == "fr"}
			<HomeFr />
		{:else}
			<HomeEn />
		{/if}
	</div>
</div>

<style>
	.text-side {
		color: #757575;
		line-height: 24px;
	}
	.text-side :global(a) {
		color: inherit;
	}
	/* .download-icon {
		height: 24px;
		width: 24px;
		/* hack to get a white image
		filter: invert(1);
		margin-right: 10px;
	} */
	.preview-side {
		display: flex;
		flex-direction: column;
		max-width: 100%;
		width: 500px;
		min-width: 250px;
		align-items: center;
		margin-right: 20px;
	}
	/* 	.preview {
		text-align: center;
		width: 70%;
		border-radius: 18px;
		border-width: 0;
		background-color: #1976d2;
		color: white;
		margin-top: 20px;
		border-style: solid;

		font-size: 16px;

		padding: 10px;
		cursor: pointer;

		display: flex;
		align-items: center;
		justify-content: center;

		/* Needed for an unknown and very strange reason...
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', serif
	} */
	/* 	.preview:hover, .preview:focus {
		box-shadow: 0 0 6px rgb(35 173 255);
	}
	.preview:focus {
		font-weight: 600;
		outline: none;
	} */
	.cover {
		max-width: 100%;
		box-shadow: 0 8px 24px rgba(149, 157, 165, 0.6);
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
		/* 		.preview {
			width: 85%;
		} */
	}
	/*
	@media only screen and (max-width: 400px) {
		.preview {
			width: 100%;
		}
	} */
</style>
