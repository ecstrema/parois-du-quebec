<script lang="ts">
	import { Title } from "$components";
	import { t } from "$i18n";

	import SvelteSeo from "svelte-seo";

	// const emailAddress = "info@escaladelaurentides.ca";
	const emailAddress = "info@escaladeweir.ca";
</script>

<svelte:head>
	<title>{$t("Contact") + " | " + $t("Escalade Laurentides")}</title>
</svelte:head>

<SvelteSeo
    title="Contact"
    description="Contactez les auteurs"
/>

<Title>{$t("Contact")}</Title>
<div class="center">
	<p class="description">
		{$t("MerciInfo")}
	</p>
	<a
		class="mailto"
		target="_blank"
		rel="noopener noreferrer"
		href="mailto:{emailAddress}?subject={$t('infoGuide')}"
	>
		{$t("ContacterAuteurs")}
	</a>
	<div class="note">
		{$t("LienEmailBrise")}
		<strong> {emailAddress}</strong>.
	</div>
</div>

<style>
	.description {
		margin-top: 20px;
		margin-left: auto;
		margin-right: auto;
		max-width: 80%;
	}
	.center {
		text-align: center;
	}

	.note {
		color: #999;
		font-size: 12px;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
	a:focus {
		outline: none;
	}
	.mailto {
		display: inline-block;
		text-align: center;
		width: 60%;
		border-radius: 10px;
		background-color: #1976d2;
		color: white;

		margin-top: 40px;
		margin-bottom: 30px;

		padding: 10px;
		box-sizing: border-box;
		cursor: pointer;
	}
	.mailto:hover,
	.mailto:focus {
		box-shadow: 0 0 6px rgb(35 173 255);
	}
	.mailto:focus {
		font-weight: 600;
		outline: none;
	}
	@media only screen and (max-width: 800px) {
		.mailto {
			width: 100%;
			margin-top: 20px;
		}
	}
	@media only screen and (max-width: 600px) {
		.mailto {
			width: 100%;
			margin-top: 10px;
		}
	}
</style>
