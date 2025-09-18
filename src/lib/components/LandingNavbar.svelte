<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { setLocale } from '$lib/paraglide/runtime';
	import { browser } from '$app/environment';

	if (browser) {
		const locale = document.documentElement.lang === 'pl' ? 'pl' : 'en';
		setLocale(locale);
	}
</script>

<nav>
	<div class="bot">
		<img src="/bot-logo.png" alt="bot-logo" />
		<p class="bot-name">Skyndalex</p>
	</div>
	<div class="links">
		<a class="link-active"> {m.home()}</a>
		<a class="link">{m.policy()}</a>
		<a class="link"> {m.links()} </a>
		<a class="link"> {m.project()} </a>
	</div>
</nav>

<style>
	nav {
		position: absolute;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		border-bottom: 1px solid #424242;
		height: 121px;
		width: 100%;
		caret-color: transparent;
	}

	a {
		transition:
			color 0.3s ease,
			opacity 0.3s ease;
	}
	a:hover {
		color: #fff;
		opacity: 1;
	}

	.bot {
		display: flex;
		align-items: center;
		caret-color: transparent;
	}

	.bot img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		caret-color: transparent;
		margin-left: 23px;
	}
	.bot-name {
		position: absolute;
		color: #fff;
		font:
			800 24px / normal 'Be Vietnam Pro',
			sans-serif;
		margin-left: 75px;
	}

	.links {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 50px;
		z-index: 2;
		margin: 0 auto;
	}
	.link {
		color: rgba(255, 255, 255, 0.2);
		font:
			400 24px / normal 'Be vietnam pro',
			sans-serif;
		cursor: pointer;
		text-align: center;
		text-decoration: none;
	}
	.link-active {
		color: #fff;
		font:
			700 24px / normal 'Be vietnam pro',
			sans-serif;
	}
</style>
