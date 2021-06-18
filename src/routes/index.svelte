<svelte:head>
	<title>{$t("Escalade Laurentides")}</title>
</svelte:head>

<script lang="ts">
	import Title from "../components/Title.svelte";
	import { Tr, t } from "s20n";
	import HiddenLinks from "../components/HiddenLinks.svelte";
    import Marked from "../components/Marked.svelte";
	const cover = "cover.jpg";
</script>

<HiddenLinks/>
<Title><Tr t="Le nouveau guide des parois Laurentiennes est à nos portes"/></Title>
<div class="main-flex">
	<div class="preview-side">
		<img class="cover" src="{cover}" alt={$t("La page de couverture du nouveau livre-guide")}/>
		<button class="preview">
			<img class="download-icon" src="icons/TablerDownload.svg" aria-hidden="true" alt="download icon"/>
			<Tr t="Voir des extraits"/>
		</button>
	</div>
	<div class="text-side">
		<Marked t="Le tout nouveau guide des parois Laurentiennes est sur le point de voir le jour. Il contiendra:
 - *une douzaine de parois* reconnues des Laurentides, incluant _Attitude Montagne_, _Baldy_, _Belle-Neige_, _Julien Labedan_, _Kanata_, _Lac Boisseau_, _Lac Gervais_, _Lac du Poisson Blanc_, _Montagne Verte_, _Paroi Laurin_ (_Macaza_), et, en bonus en Montérégie, _Rigaud_.
- *plus de 500 voies* dans tous les niveaux et tous les styles, réparties dans *une quarantaine de secteurs*.
- des informations historiques, des fiches sur les personalités marquantes, sur les régions alentour, etc.
			   
Le livre sera disponible dans les points de vente suivants:
– *Montréal* : centres d’escalade Allez-Up, Bloc-Shop, Le Mouv’
– *Laval et Boisbriand* : Le Crux
– *St-Adolphe* : Attitude Montagne
– *La Conception* : Montagne d’Argent
– *Sherbrooke* et *Saint-Sauveur* : Atmosphère
– *Val-David* : Roc & Ride
– *Gatineau* : Verti Call
– *Trois Rivières* : Maikan Aventure
– *Québec* : centres d’escalade Délire Escalade

Il sera également possible de le commander directement depuis ce site.

5% des revenus sont reversés au Club des Montagnards Laurentiens (CML), le club régional généralement en charge des développements et entretiens des sites d’escalades des Laurentides."></Marked>
	</div>
</div>

<style>
	.download-icon {
		height: 24px;
		width: 24px;
		/* hack to get a white image */
		filter: invert(1);
		margin-right: 10px;
	}
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

		/* Needed for an unknown and very strange reason... */
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', serif
	}
	.preview:hover, .preview:focus {
		box-shadow: 0 0 6px rgb(35 173 255);
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
