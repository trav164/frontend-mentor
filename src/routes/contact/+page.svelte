<!-- https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj -->

<div class="flex flex-col gap-6 rounded-lg bg-white p-8">
	<span class="text-2xl font-bold text-gray-800">Contact Us</span>

	<div class="flex flex-col gap-4 md:flex-row">
		<div class="flex flex-col gap-2">
			<label for="" class="text-sm font-medium text-gray-600"
				>First Name <span class="text-emerald-600">*</span></label
			>
			<input class="rounded-lg border border-gray-400 p-2" />
		</div>
		<div class="flex flex-col gap-2">
			<label for="" class="text-sm font-medium text-gray-600"
				>Last Name <span class="text-emerald-600">*</span></label
			>
			<input class="rounded-lg border border-gray-400 p-2" />
		</div>
	</div>

	<div class="flex flex-row gap-4">
		<div class="flex w-full flex-col gap-2">
			<label for="" class="text-sm font-medium text-gray-600"
				>Email Address <span class="text-emerald-600">*</span></label
			>
			<input class="rounded-lg border border-gray-400 p-2" />
		</div>
	</div>

	<div class="flex flex-row gap-4">
		<div class="flex w-full flex-col gap-2">
			<label for="" class="text-sm font-medium text-gray-600"
				>Query Type <span class="text-emerald-600">*</span></label
			>
			<div class="flex w-full flex-col gap-4 md:flex-row">
				<div class="flex w-full items-center gap-2 rounded-lg border border-gray-400 px-5 py-2">
					<input type="radio" />
					<span class="text-sm font-medium text-gray-600">General Enquiry</span>
				</div>
				<div class="flex w-full items-center gap-2 rounded-lg border border-gray-400 px-5 py-2">
					<input type="radio" />
					<span class="text-sm font-medium text-gray-600">Support Request</span>
				</div>
			</div>
		</div>
	</div>

	<div class="flex flex-row gap-4">
		<div class="flex w-full flex-col gap-2">
			<label for="" class="text-sm font-medium text-gray-600"
				>Message <span class="text-emerald-600">*</span></label
			>
			<textarea rows="3" class="rounded-lg border border-gray-400 p-2"></textarea>
		</div>
	</div>

	<div class="flex flex-row gap-4">
		<input type="checkbox" />
		<span>I consent to being contacted by the team <span class="text-emerald-600">*</span></span>
	</div>

	<button class="rounded-lg bg-emerald-600 p-2 font-medium tracking-wider text-white">
		Submit
	</button>
</div>
