<script lang="ts">
    import "../app.css";
    import "../eduboom.css";
    import "../bootstrap.css";
    import "../video.css";

    let { children } = $props();
</script>

<div class="app">
    {@render children()}
</div>
