<script lang="ts">
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	let { children } = $props();
</script>

<div style="display: none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
<div class="app">
	<main>
		{@render children()}
	</main>
</div>

<style>
	:global(body) {
		caret-color: transparent;
		background: linear-gradient(180deg, var(--color-bg-start) 0%, var(--color-bg-end) 100%);
		height: 100%;
		min-height: 100vh;
		width: 100%;
	}
</style>
