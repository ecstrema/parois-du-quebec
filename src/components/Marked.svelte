<script>
    import marked from "marked";
    import { t as translate } from "s20n";
    export let t;
</script>

{@html marked($translate(t))}
