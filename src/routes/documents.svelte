<svelte:head>
	<title>{$t("Documents")}</title>
</svelte:head>

<script lang="ts">
    import Title from "../components/Title.svelte";
    import { Tr, t } from "s20n";

    const oldGuidebooks = [
        {name: "Baldy 2016", path: "baldy_2016.pdf"},
        {name: "Belle-Neige", path: "belle-neige.pdf"},
        {name: "Julien Labedan 2009", path: "julien-labedan_2009.pdf"},
        {name: "Kanata 2013", path: "kanata_2013.pdf"},
        {name: "Lac-Boisseau 2014", path: "lac-boisseau_2014.pdf"},
        {name: "Poisson Blanc 2020", path: "poisson-blanc_2020.pdf"},
    ];

    const otherResources = [
        {name: "Livre-Guide de Weir", link: "https://escaladeweir.ca"},
        {name: "Mountain Project", link: "https://www.mountainproject.com/area/107336285/laurentians"},
        {name: "The Crag", link: "https://www.thecrag.com/en/climbing/canada/quebec/area/319448343"},
    ]

    const otherProjects = [
        {name: "Proximus", path: "proximus.pdf"},
        {name: "Sérénité", path: "serenite.pdf"},
        {name: "St. Côme Centre-Ville", path: "st-come-centre-ville.pdf"},
    ]
</script>

<Title><Tr t="Documents"/></Title>

<h2><Tr t="Anciens topos – livres guides"/>:</h2>
<div class="responsive-center">
    {#each oldGuidebooks as og}
        <a class="download-button" href="guidebooks/existing/{og.path}" download>
            <img class="download-icon" src="icons/TablerDownload.svg" aria-hidden="true" alt="download icon"/>
            {og.name}
        </a>
        <br/>
    {/each}
</div>

<div>
    <h2><Tr t="Autres resources gratuites"/>:</h2>
    <div class="responsive-center">
        {#each otherResources as or}
            <a class="download-button" href={or.link} target="_blank" rel="noopener noreferrer">
                <img class="download-icon" src="icons/RiExternalLinkLine.svg" aria-hidden="true" alt="external-link icon"/>
                {or.name}
            </a>
            <br/>
        {/each}
    </div>
</div>


<h2><Tr t="Et Plus…"/>:</h2>
<div class="responsive-center">
    {#each otherProjects as op}
        <a class="download-button" href="guidebooks/ours/{op.path}" download>
            <img class="download-icon" src="icons/TablerDownload.svg" aria-hidden="true" alt="download icon"/>
            {op.name}
        </a>
        <br/>
    {/each}
</div>

<style>
    .download-button{
        padding: 12px;
        text-decoration: none;
        color: #4f4f4f;
        background-color: #f4f4f4;
        display: inline-flex;
        align-items: center;
        background-image: linear-gradient(to top,#e6e6e6,#fefefe);
        text-shadow: 0 1px 1px rgba(255,255,255,0.25);
        box-shadow: inset 0 0 0 1px #dcdcdc;
        border-radius: 25px;
        margin: 8px;
        min-width: 200px;
    }

    .download-button:hover {
        background-image: linear-gradient(to top,#ededed,#fff);
    }

    @media only screen and (max-width: 600px) {
		.download-button {
            justify-content: center;
		}
		.responsive-center {
			text-align: center;
		}
	}

    .download-icon {
        height: 24px;
        width: 24px;
        margin-right: 4px;
        overflow: hidden;
    }
</style>
