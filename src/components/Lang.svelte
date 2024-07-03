<script lang="ts">
    import { locale } from "../lib/i18n";
    import { onMount } from "svelte";

    let doc: HTMLElement | undefined = undefined;

    onMount(() => {
        doc = document.documentElement;
        doc.lang = $locale;
    });

    $: {
        if (doc) doc.setAttribute("lang", $locale);
    }
</script>
