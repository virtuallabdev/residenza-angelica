<script lang="ts">
	import { language } from '$stores/language';
	import { t } from '$lib/i18n';
	import { generateMetaTags } from '$utils/seo';

	let meta = generateMetaTags({
		title: 'Contact Us - Residenza Angelica',
		description: 'Get in touch with Residenza Angelica. Phone, email, address and contact form available.',
		keywords: ['contact', 'phone', 'email', 'address', 'inquiry'],
		canonical: 'https://residenza-angelica.it/contacts'
	});

	let formData = {
		name: '',
		email: '',
		phone: '',
		message: ''
	};

	let isSubmitting = false;
	let submitMessage = '';

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;

		try {
			// Simulate form submission
			await new Promise((resolve) => setTimeout(resolve, 1000));
			submitMessage = t($language, 'contact.success');
			formData = { name: '', email: '', phone: '', message: '' };

			// Clear message after 3 seconds
			setTimeout(() => {
				submitMessage = '';
			}, 3000);
		} catch (error) {
			submitMessage = t($language, 'contact.error');
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="canonical" content={meta.canonical} />
</svelte:head>

<div class="hero-section">
	<div class="hero-content text-center">
		<div class="max-w-2xl">
			<h1 class="section-title text-gradient">
				{t($language, 'contact.title')}
			</h1>
			<p class="section-subtitle">
				{t($language, 'contact.subtitle')}
			</p>
		</div>
	</div>
</div>

<section class="py-20">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Contact Information -->
			<div>
				<h2 class="text-3xl font-bold text-primary mb-8">Get In Touch</h2>

				<div class="space-y-6">
					<div class="flex gap-4">
						<div class="text-3xl">📍</div>
						<div>
							<h3 class="font-bold text-lg mb-2">{t($language, 'contact.address')}</h3>
							<p class="opacity-75">Via Example 123<br />12345 City, Region<br />Italy</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div class="text-3xl">📞</div>
						<div>
							<h3 class="font-bold text-lg mb-2">{t($language, 'contact.phone')}</h3>
							<p class="opacity-75">
								<a href="tel:+39123456789" class="link link-primary">+39 123 456 789</a>
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div class="text-3xl">📧</div>
						<div>
							<h3 class="font-bold text-lg mb-2">{t($language, 'contact.email')}</h3>
							<p class="opacity-75">
								<a href="mailto:info@residenza-angelica.it" class="link link-primary">
									info@residenza-angelica.it
								</a>
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div class="text-3xl">🕐</div>
						<div>
							<h3 class="font-bold text-lg mb-2">{t($language, 'contact.hours')}</h3>
							<p class="opacity-75">
								Mon - Fri: 9:00 AM - 6:00 PM<br />
								Sat - Sun: 10:00 AM - 4:00 PM<br />
								24/7 Emergency Support
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div>
				<h2 class="text-3xl font-bold text-primary mb-8">{t($language, 'contact.send')}</h2>

				<form on:submit={handleSubmit} class="space-y-4">
					<div class="form-control">
						<label class="label" for="name">
							<span class="label-text">{t($language, 'contact.name')}</span>
						</label>
						<input
							id="name"
							type="text"
							placeholder={t($language, 'contact.name')}
							class="input input-bordered"
							bind:value={formData.name}
							required
						/>
					</div>

					<div class="form-control">
						<label class="label" for="email">
							<span class="label-text">{t($language, 'contact.email')}</span>
						</label>
						<input
							id="email"
							type="email"
							placeholder="email@example.com"
							class="input input-bordered"
							bind:value={formData.email}
							required
						/>
					</div>

					<div class="form-control">
						<label class="label" for="phone">
							<span class="label-text">{t($language, 'contact.phone')}</span>
						</label>
						<input
							id="phone"
							type="tel"
							placeholder="+39 123 456 789"
							class="input input-bordered"
							bind:value={formData.phone}
						/>
					</div>

					<div class="form-control">
						<label class="label" for="message">
							<span class="label-text">{t($language, 'contact.message')}</span>
						</label>
						<textarea
							id="message"
							placeholder={t($language, 'contact.message')}
							class="textarea textarea-bordered h-32"
							bind:value={formData.message}
							required
						/>
					</div>

					{#if submitMessage}
						<div
							class="alert {submitMessage.includes('success')
								? 'alert-success'
								: 'alert-error'}"
						>
							<span>{submitMessage}</span>
						</div>
					{/if}

					<button
						type="submit"
						class="btn-primary-custom w-full"
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Sending...' : t($language, 'contact.send')}
					</button>
				</form>
			</div>
		</div>
	</div>
</section>

<!-- Map Section -->
<section class="py-20 bg-base-200">
	<div class="container mx-auto px-4">
		<h2 class="section-title mb-12">Find Us On The Map</h2>
		<div class="rounded-lg overflow-hidden shadow-lg h-96 bg-base-300 flex items-center justify-center">
			<p class="text-center opacity-50">
				Embed your Google Map here<br />
				<code class="text-xs">iframe with map</code>
			</p>
		</div>
	</div>
</section>
