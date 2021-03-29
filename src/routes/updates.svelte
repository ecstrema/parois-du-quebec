<script lang="ts">
    import Title from "../components/Title.svelte";
    import { t } from "s20n";
</script>

<Title>{$t("updates.title")}</Title>
<p class="note">{$t("updates.noUpdatesYet")}</p>

<style>
    .note {
        text-align: center;
        color: darkgray;
        font-size: 18px;

        margin-top: 40px;
    }
</style>
