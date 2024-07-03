<script lang="ts">
	import "./global.css";

	import SvelteSeo from "svelte-seo";

	import { Header, Footer, Lang } from "../components";
</script>

<Lang />

<SvelteSeo
	keywords="Laurentides, escalade, livre-guide, topo, climbing, Laurentians, guidebook, pages, book, livre, reference, montagne, français, anglais, english, french, Quebec, Qc, Canada, Ca, Kanata, Blocs, Bouldering, boulders, lac Boisseau, Boisseau, Gervais, lac Gervais, Julien Labedan, Chutes St-Philippe, Paroi Laurin, Attitude Montagne, Baldy, Belle-neige, Poisson blanc, Poisson-Blanc, Rigaud"
	twitter={{
		card: "summary_large_image",
		title: "Escalade Laurentides",
		description: "Guide d'escalade des Laurentides verticales",
		image: "https://escaladelaurentides.ca/cover_card.jpg",
		imageAlt: "Page de couverture du livre d'escalade des Laurentides",
	}}
	openGraph={{
		title: "Escalade Laurentides",
		description: "Guide d'escalade des Laurentides verticales",
		url: "https://escaladelaurentides.ca/",
		type: "website",
		images: [{
			url: "https://escaladelaurentides.ca/cover_card.jpg",
			alt: "Page de couverture du livre d'escalade des Laurentides",
		}],
	}}
	jsonLd={{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		url: "https://www.escaladelaurentides.ca",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Accueil",
				item: "https://escaladeLaurentides.ca",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Documents",
				item: "https://escaladeLaurentides.ca/documents",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: "Contact",
				item: "https://escaladeLaurentides.ca/contact",
			},
		],
	}}
/>

<Header />

<div class="centered-layout" style="margin-bottom: 70px;">
	<main>
		<slot />
	</main>
</div>

<Footer />

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

			font-size: 15px;
		}
	}
</style>
