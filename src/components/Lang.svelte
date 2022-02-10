<script lang="ts">
    import { locale } from "$i18n";
    import { onMount } from "svelte";

    let doc = undefined;

    onMount(() => {
        doc = document.documentElement;
        doc.setAttribute("lang", $locale);
    });

    $: {
        if (doc) doc.setAttribute("lang", $locale);
    }
</script>

<svelte:head>
    <html lang={$locale} />
</svelte:head>
