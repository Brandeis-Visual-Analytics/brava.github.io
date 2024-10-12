<script lang="ts">
	import Markdown from '$lib/markdown.svelte';
	import content from './about.md?raw';
</script>

<svelte:head>
	<title>Brandeis Visual Analytics Lab | About</title>
</svelte:head>

<Markdown {content} />
