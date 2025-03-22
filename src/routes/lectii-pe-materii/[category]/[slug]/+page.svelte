<script>
    import Header from "$lib/Header.svelte";

    let { data } = $props();
</script>

<Header color={data.color}></Header>
<div id="wrap">
    {@html data.wrap}
</div>