<svelte:head>
	<title>{$t("Mises-a-jour")}</title>
</svelte:head>

<script lang="ts">
    import { Title, UpdatesEn, UpdatesFr } from "$components";
    import { t, locale } from "$i18n";
</script>

<Title>{$t("Mises-a-jour")}</Title>
<div style="text-align: center;">
    {#if $locale == "fr"}
    <UpdatesFr />
    {:else}
    <UpdatesEn />
    {/if}
</div>
