<script lang="ts">
	import { Title, HomeCoteSudFr, HomeCoteSudEn, HomeParoisDesBoisFr, HomeParoisDesBoisEn, HomeWeirEn, HomeWeirFr } from "../components";
	import { t, locale } from "../lib/i18n";

	import SvelteSeo from "svelte-seo";
	import Image from "svimg/Image.svelte";
</script>

<svelte:head>
	<title>{$t("ParoisDuQuebec")}</title>
</svelte:head>

<SvelteSeo
    description="Livres-Guide d'Escalade du Québec."
/>

<Title>{$t("ParoisDuQuebecCoteSud")}</Title>
<div class="main-flex">
	<div class="preview-side">
		<div class="cover shadow">
			<Image src="/CouvertureCoteSud_lowres.jpg" alt={$t("couvertureCoteSud")} />
		</div>
		<a class="preview" href="/ExtraitsCoteSud.pdf" target="_blank" rel="noopener noreferrer" >
			<svg class="download-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M1014.62 969.04L731.594 684.273c60.608-72.4 97.089-165.761 97.089-267.713C828.683 186.496 643.179-.001 413.13-.001S-3.413 186.495-3.413 416.543S183.083 833.087 413.13 833.087c105.008 0 200.672-38.96 273.696-103.072l282.528 284.304c12.496 12.496 32.769 12.496 45.249 0c12.512-12.512 12.512-32.768.016-45.28zM412.59 768.001c-193.552 0-352-158.448-352-352s158.448-352 352-352s352 158.448 352 352s-158.448 352-352 352zm160-384h-128v-128c0-17.664-14.336-32-32-32s-32 14.336-32 32v128h-128c-17.664 0-32 14.336-32 32s14.336 32 32 32h128v128c0 17.664 14.336 32 32 32s32-14.336 32-32v-128h128c17.664 0 32-14.336 32-32s-14.32-32-32-32z"></path></svg>
			{$t("voirExtraits")}
			<div style="font-size: 10px; margin-left: 3px;">(2.7MB)</div>
		</a>
	</div>
	<div class="text-side">
		{#if $locale == "fr"}
			<HomeCoteSudFr />
		{:else}
			<HomeCoteSudEn />
		{/if}
		<!--<a class="preview buy-button" style="max-width: 400px;" href="javascript:void(0);" target="_self" rel="noopener noreferrer" >
			<svg width="1.3em" height="1.3em" style="margin-right: 10px;" viewBox="0 0 24 24"><path fill="#4f4f4f" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm2-2c0-.55-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14a.998.998 0 0 0-.4-1.34a.996.996 0 0 0-1.36.41L15.55 11H8.53L4.54 2.57a.993.993 0 0 0-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1zM11.29 2.71a.996.996 0 0 1 1.41 0l2.59 2.59c.39.39.39 1.02 0 1.41L12.7 9.3a.996.996 0 1 1-1.41-1.41l.88-.89H9c-.55 0-1-.45-1-1s.45-1 1-1h3.17l-.88-.88a.996.996 0 0 1 0-1.41z"></path></svg>
			{$t("OutofStock")}
		</a>
		<a class="preview buy-button" style="max-width: 400px;" href="https://checkout.square.site/buy/FXJHHCVLAIVUB7WYNRSI3YU2" target="_blank" rel="noopener noreferrer" >
			<svg width="1.3em" height="1.3em" style="margin-right: 10px;" viewBox="0 0 24 24"><path fill="#4f4f4f" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm2-2c0-.55-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14a.998.998 0 0 0-.4-1.34a.996.996 0 0 0-1.36.41L15.55 11H8.53L4.54 2.57a.993.993 0 0 0-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1zM11.29 2.71a.996.996 0 0 1 1.41 0l2.59 2.59c.39.39.39 1.02 0 1.41L12.7 9.3a.996.996 0 1 1-1.41-1.41l.88-.89H9c-.55 0-1-.45-1-1s.45-1 1-1h3.17l-.88-.88a.996.996 0 0 1 0-1.41z"></path></svg>
			Weir – Mont Larose
		</a>
		<div style="margin-top: 1em;">{$t("visiteWeir")}: <a href="http://escaladeweir.ca">escaladeweir.ca</a></div>
		-->
	</div>
</div>

<Title>{$t("ParoisDesBois")}</Title>
<div class="main-flex">
	<div class="preview-side">
		<div class="cover shadow">
			<Image src="/cover.jpg" alt={$t("couverturePdB")} />
		</div>
		<a class="preview" href="/ExtraitsParoisDesBoisLaurentides.pdf" target="_blank" rel="noopener noreferrer" >
			<svg class="download-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M1014.62 969.04L731.594 684.273c60.608-72.4 97.089-165.761 97.089-267.713C828.683 186.496 643.179-.001 413.13-.001S-3.413 186.495-3.413 416.543S183.083 833.087 413.13 833.087c105.008 0 200.672-38.96 273.696-103.072l282.528 284.304c12.496 12.496 32.769 12.496 45.249 0c12.512-12.512 12.512-32.768.016-45.28zM412.59 768.001c-193.552 0-352-158.448-352-352s158.448-352 352-352s352 158.448 352 352s-158.448 352-352 352zm160-384h-128v-128c0-17.664-14.336-32-32-32s-32 14.336-32 32v128h-128c-17.664 0-32 14.336-32 32s14.336 32 32 32h128v128c0 17.664 14.336 32 32 32s32-14.336 32-32v-128h128c17.664 0 32-14.336 32-32s-14.32-32-32-32z"></path></svg>
			{$t("voirExtraits")}
			<div style="font-size: 10px; margin-left: 3px;">(14MB)</div>
		</a>
	</div>
	<div class="text-side">
		<div>
			{#if $locale == "fr"}
			<HomeParoisDesBoisFr />
			{:else}
			<HomeParoisDesBoisEn />
			{/if}
		</div>
		<!--<a class="preview buy-button" style="max-width: 400px;" href="javascript:void(0);" target="_self" rel="noopener noreferrer" >
			<svg width="1.3em" height="1.3em" style="margin-right: 10px;" viewBox="0 0 24 24"><path fill="#4f4f4f" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm2-2c0-.55-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14a.998.998 0 0 0-.4-1.34a.996.996 0 0 0-1.36.41L15.55 11H8.53L4.54 2.57a.993.993 0 0 0-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1zM11.29 2.71a.996.996 0 0 1 1.41 0l2.59 2.59c.39.39.39 1.02 0 1.41L12.7 9.3a.996.996 0 1 1-1.41-1.41l.88-.89H9c-.55 0-1-.45-1-1s.45-1 1-1h3.17l-.88-.88a.996.996 0 0 1 0-1.41z"></path></svg>
			{$t("EnVacances")}
		</a>
		<a class="preview buy-button" style="max-width: 400px;" href="https://square.link/u/mYaLkgWT" target="_blank" rel="noopener noreferrer" >
			<svg width="1.3em" height="1.3em" style="margin-right: 10px;" viewBox="0 0 24 24"><path fill="#4f4f4f" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm2-2c0-.55-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14a.998.998 0 0 0-.4-1.34a.996.996 0 0 0-1.36.41L15.55 11H8.53L4.54 2.57a.993.993 0 0 0-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1zM11.29 2.71a.996.996 0 0 1 1.41 0l2.59 2.59c.39.39.39 1.02 0 1.41L12.7 9.3a.996.996 0 1 1-1.41-1.41l.88-.89H9c-.55 0-1-.45-1-1s.45-1 1-1h3.17l-.88-.88a.996.996 0 0 1 0-1.41z"></path></svg>
			{$t("achatLaurentides")}
		</a>-->
	</div>
</div>

<Title>Weir – Mont Larose</Title>
<div class="main-flex">
	<div class="preview-side">
		<div class="cover shadow">
			<Image src="/CouvertureWeir3_1_lowres.jpg" alt={$t("couvertureWeir")} />
		</div>
		<a class="preview" href="/ExtraitsTopoWeir3-1-small.pdf" target="_blank" rel="noopener noreferrer" >
			<svg class="download-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M1014.62 969.04L731.594 684.273c60.608-72.4 97.089-165.761 97.089-267.713C828.683 186.496 643.179-.001 413.13-.001S-3.413 186.495-3.413 416.543S183.083 833.087 413.13 833.087c105.008 0 200.672-38.96 273.696-103.072l282.528 284.304c12.496 12.496 32.769 12.496 45.249 0c12.512-12.512 12.512-32.768.016-45.28zM412.59 768.001c-193.552 0-352-158.448-352-352s158.448-352 352-352s352 158.448 352 352s-158.448 352-352 352zm160-384h-128v-128c0-17.664-14.336-32-32-32s-32 14.336-32 32v128h-128c-17.664 0-32 14.336-32 32s14.336 32 32 32h128v128c0 17.664 14.336 32 32 32s32-14.336 32-32v-128h128c17.664 0 32-14.336 32-32s-14.32-32-32-32z"></path></svg>
			{$t("voirExtraits")}
			<div style="font-size: 10px; margin-left: 3px;">(2.7MB)</div>
		</a>
	</div>
	<div class="text-side">
		{#if $locale == "fr"}
			<HomeWeirFr />
		{:else}
			<HomeWeirEn />
		{/if}
		<!--<a class="preview buy-button" style="max-width: 400px;" href="javascript:void(0);" target="_self" rel="noopener noreferrer" >
			<svg width="1.3em" height="1.3em" style="margin-right: 10px;" viewBox="0 0 24 24"><path fill="#4f4f4f" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm2-2c0-.55-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14a.998.998 0 0 0-.4-1.34a.996.996 0 0 0-1.36.41L15.55 11H8.53L4.54 2.57a.993.993 0 0 0-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1zM11.29 2.71a.996.996 0 0 1 1.41 0l2.59 2.59c.39.39.39 1.02 0 1.41L12.7 9.3a.996.996 0 1 1-1.41-1.41l.88-.89H9c-.55 0-1-.45-1-1s.45-1 1-1h3.17l-.88-.88a.996.996 0 0 1 0-1.41z"></path></svg>
			{$t("OutofStock")}
		</a>
		<a class="preview buy-button" style="max-width: 400px;" href="https://checkout.square.site/buy/FXJHHCVLAIVUB7WYNRSI3YU2" target="_blank" rel="noopener noreferrer" >
			<svg width="1.3em" height="1.3em" style="margin-right: 10px;" viewBox="0 0 24 24"><path fill="#4f4f4f" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm2-2c0-.55-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14a.998.998 0 0 0-.4-1.34a.996.996 0 0 0-1.36.41L15.55 11H8.53L4.54 2.57a.993.993 0 0 0-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1zM11.29 2.71a.996.996 0 0 1 1.41 0l2.59 2.59c.39.39.39 1.02 0 1.41L12.7 9.3a.996.996 0 1 1-1.41-1.41l.88-.89H9c-.55 0-1-.45-1-1s.45-1 1-1h3.17l-.88-.88a.996.996 0 0 1 0-1.41z"></path></svg>
			Weir – Mont Larose
		</a>
		<div style="margin-top: 1em;">{$t("visiteWeir")}: <a href="http://escaladeweir.ca">escaladeweir.ca</a></div>
		-->
	</div>
</div>

<!--<Title>Parois des Bois & Weir</Title>
<div class="main-flex">
	<div class="preview-side">
		<Image class="cover" src="/CouvertureParoiDesBois&Weir3_1-s.jpg" alt={$t("couverturePdB")} />
	</div>
	<div class="text-side">
		<div>
			{#if $locale == "fr"}
			<b>Parois des Bois – Laurentides</b> & <b>Weir – Mont Larose</b><br />
			pour réduire les frais de transport (42$ + 32$ + 10$ de livraison)
			{:else}
			<b>Parois des Bois – Laurentians</b> & <b>Weir – Mont Larose</b><br />
			to save on shipping (42$ + 29$ + 10$ shipping)
			{/if}
		</div>
		<a class="preview buy-button" style="max-width: 400px;" href="javascript:void(0);" target="_self" rel="noopener noreferrer" >
			<svg width="1.3em" height="1.3em" style="margin-right: 10px;" viewBox="0 0 24 24"><path fill="#4f4f4f" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm2-2c0-.55-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14a.998.998 0 0 0-.4-1.34a.996.996 0 0 0-1.36.41L15.55 11H8.53L4.54 2.57a.993.993 0 0 0-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1zM11.29 2.71a.996.996 0 0 1 1.41 0l2.59 2.59c.39.39.39 1.02 0 1.41L12.7 9.3a.996.996 0 1 1-1.41-1.41l.88-.89H9c-.55 0-1-.45-1-1s.45-1 1-1h3.17l-.88-.88a.996.996 0 0 1 0-1.41z"></path></svg>
			{$t("OutofStock")}
		</a>
		<a class="preview buy-button" style="max-width: 400px;" href="https://square.link/u/nbUorPDN" target="_blank" rel="noopener noreferrer" >
			<svg width="1.3em" height="1.3em" style="margin-right: 10px;" viewBox="0 0 24 24"><path fill="#4f4f4f" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm2-2c0-.55-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14a.998.998 0 0 0-.4-1.34a.996.996 0 0 0-1.36.41L15.55 11H8.53L4.54 2.57a.993.993 0 0 0-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1zM11.29 2.71a.996.996 0 0 1 1.41 0l2.59 2.59c.39.39.39 1.02 0 1.41L12.7 9.3a.996.996 0 1 1-1.41-1.41l.88-.89H9c-.55 0-1-.45-1-1s.45-1 1-1h3.17l-.88-.88a.996.996 0 0 1 0-1.41z"></path></svg>
			Parois des Bois & Weir
		</a>
	</div>
</div>
-->



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
	.buy-button {
		box-shadow: inset 0 0 0 1px #dcdcdc;
		text-shadow: 0 1px 1px rgba(255,255,255,0.25);
		background-color: #f0f0f0;
		background-image: linear-gradient(to top,#e6e6e6,#fefefe);
	}
	.buy-button:hover, .buy-button:focus {
		box-shadow: inset 0 0 0 1px #dcdcdc, 0 0 4px rgb(35 173 255);
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
	}
	.shadow {
		box-shadow: 0 8px 24px rgba(149, 157, 165, 0.6);
	}
	.main-flex {
		display: flex;
		margin: 20px;
	}

	@media only screen and (max-width: 730px) {
		.buy-button {
			margin-right: auto;
			margin-left: auto;
		}
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
