<script lang="ts">
	import { Title, HomeFr, HomeEn, HomeMemeAuteurEn, HomeMemeAuteurFr } from "$components";
	import { t, locale } from "$i18n";

	import SvelteSeo from "svelte-seo";
	import Image from "svimg";
</script>

<svelte:head>
	<title>{$t("Escalade Laurentides")}</title>
</svelte:head>

<SvelteSeo description="Le nouveau guide d'escalade des Laurentides" />

<Title>{$t("Bientot")}</Title>
<div class="main-flex">
	<div class="preview-side">
		<Image class="cover" src="/cover.jpg" alt={$t("couverturePdB")} />
		<!-- <a class="preview" href="/extraits_small.pdf" target="_blank" rel="noopener noreferrer" >
			<svg class="download-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M1014.62 969.04L731.594 684.273c60.608-72.4 97.089-165.761 97.089-267.713C828.683 186.496 643.179-.001 413.13-.001S-3.413 186.495-3.413 416.543S183.083 833.087 413.13 833.087c105.008 0 200.672-38.96 273.696-103.072l282.528 284.304c12.496 12.496 32.769 12.496 45.249 0c12.512-12.512 12.512-32.768.016-45.28zM412.59 768.001c-193.552 0-352-158.448-352-352s158.448-352 352-352s352 158.448 352 352s-158.448 352-352 352zm160-384h-128v-128c0-17.664-14.336-32-32-32s-32 14.336-32 32v128h-128c-17.664 0-32 14.336-32 32s14.336 32 32 32h128v128c0 17.664 14.336 32 32 32s32-14.336 32-32v-128h128c17.664 0 32-14.336 32-32s-14.32-32-32-32z"></path></svg>
			{$t("voirExtraits")}
		</a> -->
	</div>
	<div class="text-side">
		{#if $locale == "fr"}
			<HomeFr />
		{:else}
			<HomeEn />
		{/if}
	</div>
</div>

<Title>{$t("DéjàDispo")}</Title>

<div class="main-flex">
	<div class="preview-side">
		<Image class="cover" src="/couvertureRectoWeir.jpg" alt={$t("couvertureWeir")} />
		<a class="preview" href="http://www.escaladeweir.ca" target="_blank" rel="noopener noreferrer" >
			<img class="download-icon invert" src="/icons/RiExternalLinkLine.svg" aria-hidden="true" alt="external-link icon" />
			www.escaladeweir.ca
		</a>
	</div>
	<div class="text-side">
		{#if $locale == "fr"}
			<HomeMemeAuteurFr />
		{:else}
			<HomeMemeAuteurEn />
		{/if}
	</div>
</div>

<style>
	.text-side {
		color: #757575;
		line-height: 24px;
		width: 70%;
		margin-top: -8px;
	}
	.text-side :global(a) {
		color: inherit;
	}
	.download-icon {
		height: 24px;
		width: 24px;
		margin-right: 10px;
	}
	.invert {
		/* hack to get a white image */
		filter: invert(1);
	}
	.preview-side {
		display: flex;
		flex-direction: column;
		min-width: 300px;
		align-items: center;
		margin-right: 20px;
		flex-grow: 2;
	}
	.preview {
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
		text-decoration: none;

		display: flex;
		align-items: center;
		justify-content: center;


		/* Needed for an unknown and very strange reason... */
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', serif
	}
	.preview:hover, .preview:focus {
		box-shadow: 0 0 8px rgb(35 173 255);
	}
	@media (prefers-reduced-motion: no-preference) {
		.preview {
			transition: box-shadow 0.3s ease-in-out;
		}
	}
	.preview:focus {
		font-weight: 600;
		outline: none;
	}
	/*
	@media only screen and (max-width: 400px) {
		.preview {
			width: 100%;
		}
	} */
	:global(.cover) {
		width: 100%;
		max-width: 100%;
		box-shadow: 0 8px 24px rgba(149, 157, 165, 0.6);
	}
	.main-flex {
		display: flex;
		margin: 20px;
	}

	@media only screen and (max-width: 730px) {
		.main-flex {
			flex-wrap: wrap;
			align-content: center;
			align-items: center;
		}
		.preview-side {
			margin-right: 15%;
			margin-left: 15%;
			margin-bottom: 10px;
			min-width: 280px;
		}
		.text-side {
			margin-left: 5%;
			margin-right: 5%;
			width: 100%;
			margin-top: unset;
		}
	}

	@media only screen and (max-width: 640px) {
		.text-side {
			margin-left: 2%;
			margin-right: 2%;
		}
		.preview-side {
			margin-right: 5%;
			margin-left: 5%;
		}
	}

	@media only screen and (max-width: 500px) {
		.preview-side {
			width: 100%;
			margin-right: unset;
			margin-left: unset;
		}
		.text-side {
			margin-left: unset;
			margin-right: unset;

			font-size: 14px;
			line-height: 1.5em;
		}
		.main-flex {
			margin-left: 2px;
			margin-right: 2px;
		}
	}
</style>
