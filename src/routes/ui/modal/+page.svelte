<script>
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Modal from '$lib/components/Modal.svelte';

	let isSmallModalOpen = false;
	let isMediumModalOpen = false;
	let isLargeModalOpen = false;

	const handleSmallModalClose = () => {
		isSmallModalOpen = false;
	};
	const handleMediumModalClose = () => {
		isMediumModalOpen = false;
	};
	const handleLargeModalClose = () => {
		isLargeModalOpen = false;
	};
</script>

<Breadcrumbs
	links={[
		{ link: '/', name: 'Home' },
		{ link: '/ui', name: 'Custom Components' }
	]}
	current="Modal"
/>

<p>TODO: mobile full-width</p>

<div class="m-5 flex items-center gap-2">
	<button
		class="btn"
		on:click={() => {
			isSmallModalOpen = true;
		}}>Small Modal</button
	>
	<button
		class="btn"
		on:click={() => {
			isMediumModalOpen = true;
		}}>Medium Modal</button
	>
	<button
		class="btn"
		on:click={() => {
			isLargeModalOpen = true;
		}}>Large Modal</button
	>
</div>

<Modal open={isSmallModalOpen} on:close={handleSmallModalClose} size="sm">
	<div>Hello</div>
</Modal>

<Modal open={isMediumModalOpen} on:close={handleMediumModalClose} size="md">
	<div slot="dialogTitle" class="flex justify-end">
		<button class="btn" on:click={handleMediumModalClose}>Close</button>
	</div>
	<div>Hello</div>
	<div slot="dialogActions" class="flex justify-end gap-3">
		<button class="btn" on:click={handleMediumModalClose}>Cancel</button>
		<button class="btn" on:click={handleMediumModalClose}>Ok</button>
	</div>
</Modal>

<!-- Large Modal -->
<Modal open={isLargeModalOpen} on:close={handleLargeModalClose} size="lg">
	<div slot="dialogTitle" class="flex justify-end">
		<button class="btn" on:click={handleLargeModalClose}>Close</button>
	</div>
	<div>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquam, repudiandae saepe earum
		cupiditate minus expedita aliquid numquam quibusdam exercitationem at commodi optio dicta
		debitis repellat ab eveniet. Fuga, minus. Vero aliquam, repudiandae saepe earum cupiditate minus
		expedita aliquid numquam quibusdam exercitationem at commodi optio dicta debitis repellat ab
		eveniet. Fuga, minus. Vero aliquam, repudiandae saepe earum cupiditate minus expedita aliquid
		numquam quibusdam exercitationem at commodi optio dicta debitis repellat ab eveniet. Fuga,
		minus. Vero aliquam, repudiandae saepe earum cupiditate minus expedita aliquid numquam quibusdam
		exercitationem at commodi optio dicta debitis repellat ab eveniet. Fuga, minus. Vero aliquam,
		repudiandae saepe earum cupiditate minus expedita aliquid numquam quibusdam exercitationem at
		commodi optio dicta debitis repellat ab eveniet. Fuga, minus. Vero aliquam, repudiandae saepe
		earum cupiditate minus expedita aliquid numquam quibusdam exercitationem at commodi optio dicta
		debitis repellat ab eveniet. Fuga, minus. Vero aliquam, repudiandae saepe earum cupiditate minus
		expedita aliquid numquam quibusdam exercitationem at commodi optio dicta debitis repellat ab
		eveniet. Fuga, minus. Vero aliquam, repudiandae saepe earum cupiditate minus expedita aliquid
		numquam quibusdam exercitationem at commodi optio dicta debitis repellat ab eveniet. Fuga,
		minus. Vero aliquam, repudiandae saepe earum cupiditate minus expedita aliquid numquam quibusdam
		exercitationem at commodi optio dicta debitis repellat ab eveniet. Fuga, minus. Lorem ipsum
		dolor sit amet consectetur adipisicing elit. Vero aliquam, repudiandae saepe earum cupiditate
		minus expedita aliquid numquam quibusdam exercitationem at commodi optio dicta debitis repellat
		ab eveniet. Fuga, minus. Vero aliquam, repudiandae saepe earum cupiditate minus expedita aliquid
		numquam quibusdam exercitationem at commodi optio dicta debitis repellat ab eveniet. Fuga,
		minus. Vero aliquam, repudiandae saepe earum cupiditate minus expedita aliquid numquam quibusdam
		exercitationem at commodi optio dicta debitis repellat ab eveniet. Fuga, minus. Vero aliquam,
		repudiandae saepe earum cupiditate minus expedita aliquid numquam quibusdam exercitationem at
		commodi optio dicta debitis repellat ab eveniet. Fuga, minus. Vero aliquam, repudiandae saepe
		earum cupiditate minus expedita aliquid numquam quibusdam exercitationem at commodi optio dicta
		debitis repellat ab eveniet. Fuga, minus. Vero aliquam, repudiandae saepe earum cupiditate minus
		expedita aliquid numquam quibusdam exercitationem at commodi optio dicta debitis repellat ab
		eveniet. Fuga, minus. Vero aliquam, repudiandae saepe earum cupiditate minus expedita aliquid
		numquam quibusdam exercitationem at commodi optio dicta debitis repellat ab eveniet. Fuga,
		minus. Vero aliquam, repudiandae saepe earum cupiditate minus expedita aliquid numquam quibusdam
		exercitationem at commodi optio dicta debitis repellat ab eveniet. Fuga, minus. Vero aliquam,
		repudiandae saepe earum cupiditate minus expedita aliquid numquam quibusdam exercitationem at
		commodi optio dicta debitis repellat ab eveniet. Fuga, minus. Lorem ipsum dolor sit amet
		consectetur adipisicing elit. Vero aliquam, repudiandae saepe earum cupiditate minus expedita
		aliquid numquam quibusdam exercitationem at commodi optio dicta debitis repellat ab eveniet.
		Fuga, minus. Vero aliquam, repudiandae saepe earum cupiditate minus expedita aliquid numquam
		quibusdam exercitationem at commodi optio dicta debitis repellat ab eveniet. Fuga, minus. Vero
		aliquam, repudiandae saepe earum cupiditate minus expedita aliquid numquam quibusdam
		exercitationem at commodi optio dicta debitis repellat ab eveniet. Fuga, minus. Vero aliquam,
		repudiandae saepe earum cupiditate minus expedita aliquid numquam quibusdam exercitationem at
		commodi optio dicta debitis repellat ab eveniet. Fuga, minus. Vero aliquam, repudiandae saepe
		earum cupiditate minus expedita aliquid numquam quibusdam exercitationem at commodi optio dicta
		debitis repellat ab eveniet. Fuga, minus. Vero aliquam, repudiandae saepe earum cupiditate minus
		expedita aliquid numquam quibusdam exercitationem at commodi optio dicta debitis repellat ab
		eveniet. Fuga, minus. Vero aliquam, repudiandae saepe earum cupiditate minus expedita aliquid
		numquam quibusdam exercitationem at commodi optio dicta debitis repellat ab eveniet. Fuga,
		minus. Vero aliquam, repudiandae saepe earum cupiditate minus expedita aliquid numquam quibusdam
		exercitationem at commodi optio dicta debitis repellat ab eveniet. Fuga, minus. Vero aliquam,
		repudiandae saepe earum cupiditate minus expedita aliquid numquam quibusdam exercitationem at
		commodi optio dicta debitis repellat ab eveniet. Fuga, minus.
	</div>
	<div slot="dialogActions" class="flex justify-end gap-3">
		<button class="btn" on:click={handleLargeModalClose}>Cancel</button>
		<button class="btn" on:click={handleLargeModalClose}>Ok</button>
	</div>
</Modal>
