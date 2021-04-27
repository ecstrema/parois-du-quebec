<svelte:head>
	<title>{$t("Contact")}</title>
</svelte:head>

<script lang="ts">
	import Title from "../components/Title.svelte";
	import { Tr, t } from "s20n";

	// const emailAddress = "info@escaladelaurentides.ca";
	const emailAddress = "info@escaladeweir.ca";
</script>

<Title><Tr t="Contact"/></Title>
<div class="center">
	<p class="description">
		<Tr t="Merci de nous faire part d’informations de mise à jour qui peuvent compléter/corriger le guide. Fournissez tous les détails possibles (secteur, voie, nom, date, etc.)."/>
	</p>
	<a class="mailto" target="_blank" rel="noopener noreferrer" href="mailto:{emailAddress}?subject={$t("Infos sur le guide des Laurentides")}">
		<Tr t="Contacter les auteurs par courriel"/>
	</a>
	<div class="note">
		<Tr t="Si ce lien ne fonctionne pas, vous pouvez envoyer un courriel à l'adresse"/>
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
	.mailto:hover, .mailto:focus {
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
