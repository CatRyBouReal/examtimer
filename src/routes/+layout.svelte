<script lang="ts">
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<title>ExamTimer</title>
</svelte:head>

{@render children()}
