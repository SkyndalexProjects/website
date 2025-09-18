<script>
	import LandingNavbar from '$lib/components/LandingNavbar.svelte';
	import '../app.css';
	import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>Skyndalex</title>
	<meta name="description" content="Skyndalex" />
	<meta property="og:title" content="Skyndalex" />
	<meta
		property="og:description"
		content="Skyndalex is a simple, open-source and 24/7 Discord bot, which includes modules like radio, fun, tools, moderation."
	/>
	<meta property="og:url" content="https://skyndalex.com/" />
	<meta property="og:type" content="website" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="app">
	<LandingNavbar />

	<section class="hero-section">
		<div class="headers">
			<p class="title">Skyndalex</p>
			<p class="sub-title">{m.subtitle()}</p>
			<p class="detailed-description">
				{m.detailed_subtitle()}
			</p>
			<div class="buttons">
				<button
					class="button-main"
					onclick={() =>
						window.open(
							'https://discord.com/api/oauth2/authorize?client_id=1059594156839809074&permissions=8&scope=bot%20applications.commands',
							'_blank'
						)}
				>
					{m.add_btn()}
				</button>
				<button
					class="button-secondary"
					onclick={() => window.open('https://discord.gg/SVN6HXCKT3', '_blank')}
				>
					{m.join_support_btn()}
				</button>
			</div>
		</div>
	</section>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		caret-color: transparent;
	}
	.app::before {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		background: url('/background.svg') no-repeat bottom center;
		background-size: cover;
		z-index: 0;
	}

	.hero-section {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: stretch;
		margin: 0 auto;
		max-width: 100%;
		width: 100%;
		min-height: 100vh;
		z-index: 1;
	}
	.headers {
		margin-left: 138px;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		caret-color: transparent;
	}
	.title {
		color: #fff;
		width: 264px;
		font:
			800 48px / normal 'Be vietnam pro',
			sans-serif;
		caret-color: transparent;
	}
	.sub-title {
		font:
			800 36px / normal 'Be Vietnam Pro',
			sans-serif;
		color: #fff;
		margin-top: -50px;
		caret-color: transparent;
	}
	.detailed-description {
		margin-top: -10px;
		color: #dadada;
		width: 826px;
		height: 78px;
		text-wrap: wrap;
		overflow-wrap: break-word;
		font:
			400 24px / normal 'Be Vietnam Pro',
			sans-serif;
		caret-color: transparent;
	}
	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		gap: 40px;
		padding-top: 20px;
		caret-color: transparent;
	}
	.button-main {
		background: rgba(62, 107, 255, 0.47);
		border-radius: 18px;
		border: none;
		display: inline-flex;
		padding: 12px 30px;
		justify-content: center;
		align-items: center;
		color: #fff;
		text-align: center;
		font:
			800 20px / normal 'Poppins',
			sans-serif;
		caret-color: transparent;
		transition: background 0.3s ease;
		cursor: pointer;
	}
	.button-main:hover {
		background: rgba(62, 107, 255, 1);
	}
	.button-secondary {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: 12px 30px;
		border-radius: 18px;
		border: 3px solid #3e6bff;
		background: rgba(0, 0, 0, 0.47);
		color: #fff;
		font:
			800 20px / normal 'Poppins',
			sans-serif;
		caret-color: transparent;
		transition: background 0.3s ease;
		cursor: pointer;
	}
	.button-secondary:hover {
		background: rgba(62, 107, 255, 1);
	}
</style>
