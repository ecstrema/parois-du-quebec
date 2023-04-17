<script lang="ts">
    import Title from "$components/Title.svelte";
    import { t } from "$i18n";

    import SvelteSeo from "svelte-seo";

    const oldGuidebooks = [
        { name: "Baldy 2016", path: "baldy_2016.pdf" },
        { name: "Belle-Neige", path: "belle-neige.pdf" },
        { name: "Julien Labedan 2009", path: "julien-labedan_2009.pdf" },
        { name: "Kanata 2013", path: "kanata_2013.pdf" },
        { name: "Lac-Boisseau 2014", path: "lac-boisseau_2014.pdf" },
        { name: "Poisson Blanc 2020", path: "poisson-blanc_2020.pdf" },
    ];
    const oldGuidebooksWeir = [
        { name: "Club Alpin 1966", path: "TopoClubAlpin1966.pdf" },
        { name: "Bernard Poisson 1971", path: "TopoBernardPoisson1971.pdf" },
        { name: "FQM 1978", path: "TopoFQM1978.pdf" },
        { name: "John Harlin 1986", path: "TopoJohnHarlin1986.pdf" },
        { name: "Pierre Cornellier 1995", path: "TopoPierreCornellier1995.pdf" },
        { name: "Kelly McCleod (Far Ouest)", path: "VieuxTopoFarOuest.jpg" },
        { name: "Pierre Cornellier 1998", path: "TopoPierreCornellier1998.pdf" },
        { name: "Jean-Pierre Ouellet 2008", path: "weir-par-peewee.pdf" },
    ];

    $: otherResources = [
        { name: $t("Weir"), link: "https://escaladeweir.ca" },
        {
            name: "Mountain Project",
            link: "https://www.mountainproject.com/area/107336285/laurentians",
        },
        {
            name: "The Crag",
            link:
                "https://www.thecrag.com/en/climbing/canada/quebec/area/319448343",
        },
    ];

    const otherProjects = [
        { name: "Proximus", path: "proximus.pdf" },
        { name: "Sérénité", path: "serenite.pdf" },
        { name: "St. Côme Centre-Ville", path: "st-come-centre-ville.pdf" },
    ];

    $: pageTitle = `${$t("Documents")} • ${$t("Escalade Laurentides")}`;
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

<SvelteSeo
    description="Documents accompagnant le nouveau guide d'escalade des Laurentides."
/>

<Title>{$t("Documents")}</Title>

<div class="responsive-layout">
    <div class="responsive-center">
        <h2>{$t("AnciensLaurentides")}</h2>
        {#each oldGuidebooks as og}
            <a
                class="download-button"
                href="/guidebooks/existing/{og.path}"
                download
            >
                <img
                    class="download-icon"
                    src="/icons/TablerDownload.svg"
                    aria-hidden="true"
                    alt="download"
                />
                {og.name}
            </a>
            <br />
        {/each}
    </div>

    <div class="responsive-center">
        <h2>{$t("AnciensWeir")}</h2>
        {#each oldGuidebooksWeir as ogw}
            <a
                class="download-button"
                href="/guidebooks/existing/{ogw.path}"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    class="download-icon"
                    src="/icons/RiExternalLinkLine.svg"
                    aria-hidden="true"
                    alt="external-link icon"
                />
                {ogw.name}
            </a>
            <br />
        {/each}
    </div>
    
    <div class="responsive-center">
        <h2>{$t("Autres resources")}</h2>
        {#each otherResources as or}
            <a
                class="download-button"
                href={or.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    class="download-icon"
                    src="/icons/RiExternalLinkLine.svg"
                    aria-hidden="true"
                    alt="external-link icon"
                />
                {or.name}
            </a>
            <br />
        {/each}
    </div>

    <div class="responsive-center">
        <h2>{$t("Et plus")}</h2>
        {#each otherProjects as op}
            <a
                class="download-button"
                href="/guidebooks/ours/{op.path}"
                download
            >
                <img
                    class="download-icon"
                    src="/icons/TablerDownload.svg"
                    aria-hidden="true"
                    alt="download"
                />
                {op.name}
            </a>
            <br />
        {/each}
    </div>
</div>

<style>
    @media screen and (min-width: 1000px) {
        .responsive-layout {
            display: flex;
        }

        .responsive-center {
            flex: 1;
        }
    }

    .download-button {
        padding: 12px;
        text-decoration: none;
        color: #4f4f4f;
        background-color: #f4f4f4;
        display: inline-flex;
        align-items: center;
        background-image: linear-gradient(to top, #e6e6e6, #fefefe);
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.25);
        box-shadow: inset 0 0 0 1px #dcdcdc;
        border-radius: 25px;
        margin: 8px;
        min-width: 200px;
    }

    .download-button:hover {
        background-image: linear-gradient(to top, #ededed, #fff);
    }

    @media only screen and (max-width: 600px) {
        .download-button {
            justify-content: center;
        }
    }
    .responsive-center {
        text-align: center;
    }

    .download-icon {
        height: 24px;
        width: 24px;
        margin-right: 4px;
        overflow: hidden;
    }
</style>
