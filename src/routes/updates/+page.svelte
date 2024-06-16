<script lang="ts">
    import { Title, UpdatesEn, UpdatesFr } from "../../components";
    import { t } from "../../lib/i18n";

    import SvelteSeo from "svelte-seo";
    $: pageTitle = `${$t("Mises-a-jour")} • ${$t("Escalade Laurentides")}`;
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

<SvelteSeo description="Les mises-à-jour du guide des Laurentides." />

<Title>{$t("MisesAJourParoisDesBois")}</Title>
<div style="text-align: left;">
    <UpdatesFr />
</div>
<Title>{$t("MisesAJourWeir")}</Title>
<div style="text-align: left;">
    <UpdatesEn />
</div>
