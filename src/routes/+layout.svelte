<script>
	import '../app.css';
	import '../fonts.css';
	import Logo from '$lib/logo.svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	const sections = [
		{
			name: 'about',
			href: `${base}/about`
		},
		{
			name: 'people',
			href: `${base}/people`
		},
		{
			name: 'projects',
			href: `${base}/papers`
		},
		{
			name: 'code',
			href: 'https://github.com/Brandeis-Visual-Analytics'
		}
	];

	const mobile = [
		{
			name: 'home',
			href: `${base}/`
		},
		...sections.filter(s => !['video'].includes(s.name))
	]

	$: pageName =
		$page.url.pathname.split('/').filter((x) => x && x !== 'Brandeis-Visual-Analytics.github.io')[0] ||
		'home';
	$: subtitle = pageName === 'home' ? 'Visualization + Analysis' : pageName;
</script>

<div class="w-full md:max-w-4xl m-0 font-sans px-4 py-3 overflow-x-clip">
	<nav class="md:hidden flex justify-between mb-2 text-xs tracking-wider uppercase">
		{#each mobile as section}
			{#if pageName === section.name}
				<a class="font-semibold" href={section.href}>{section.name}</a>
			{:else}
				<a href={section.href}>{section.name}</a>
			{/if}
		{/each}
	</nav>

	<div class="hidden md:flex flex-col justify-between fixed top-0 h-screen">
		<nav class="flex flex-col mb-4">
			<div class="mb-0.5"><Logo /></div>
			{#each sections as section}
				<a class="uppercase font-medium text-2xs tracking-extra mb-1.5" href={section.href}
					>{section.name}</a
				>
			{/each}
		</nav>
		<div class="mb-4">
			<a
				class="block w-11 mt-3"
				href="https://www.brandeis.edu/computer-science/"
				title="Michtom School of Computer Science"
				><img
					class="rounded halo"
					src={`${base}/images/logo/brandeis.png`}
					alt="Brandeis University logo"
				/></a
			>
		</div>
	</div>

	<div class="flex flex-col w-full md:pl-24">
		<header class="flex flex-row justify-between mb-3">
			<div class="text-2xl md:text-3xl mt-1">
				<span class="font-medium text-uw">Brandeis</span> Visual Analytics Lab
				<span class="hidden md:inline ml-3 uppercase text-xl tracking-wider text-gray-500">{subtitle}</span>
			</div>
			<div class="md:hidden w-9">
				<img
					src={`${base}/images/logo/brandeis.png`}
					alt="IDL logo"
				/>
			</div>
		</header>
		<div class="md:pt-2">
			<slot />
		</div>
	</div>
</div>
