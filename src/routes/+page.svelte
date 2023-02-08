<script>
    import { onMount } from 'svelte';

    onMount(() => onMountCompleted = true);

    let onMountCompleted = false;
</script>

<h1>Welcome to SvelteKit</h1>
<p>OnMount has run: {onMountCompleted ? 'yes' : 'no'}</p>
