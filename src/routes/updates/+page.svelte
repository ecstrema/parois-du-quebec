<script lang="ts">
    import Title from "../../components/Title.svelte";
    import { t } from "../../lib/i18n";

    import UpdatesParoisDesBois from "./UpdatesParoisDesBois.svelte.md";
    import UpdatesWeir from "./UpdatesWeir.svelte.md";

    import SvelteSeo from "svelte-seo";
    $: pageTitle = `${$t("Mises-a-jour")} • ${$t("ParoisDuQuebec")}`;
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

<SvelteSeo description="Les mises-à-jour du guide des Laurentides." />

<Title>{$t("MisesAJourParoisDesBois")}</Title>
<div style="text-align: left;">
    <UpdatesParoisDesBois />
</div>
<Title>{$t("MisesAJourWeir")}</Title>
<div style="text-align: left;">
    <UpdatesWeir />
</div>
