<script setup lang="ts">
import { FieldErrorText, FieldHelperText, FieldInput, FieldLabel, FieldRoot, FieldTextarea } from '@ark-ui/vue/field';
import { computed } from 'vue';
import type { FieldInputProps } from '@ark-ui/vue/field';

const { errorMessage, type = 'text' } = defineProps<{
	label?: string;
	type?: FieldInputProps['type'] | 'textarea';
	errorMessage?: string;
	helpMessage?: string;
}>();

const model = defineModel<string>();
const inputComponent = computed(() => (type === 'textarea' ? FieldTextarea : FieldInput));
const invalid = computed(() => Boolean(errorMessage));
</script>

<template>
	<FieldRoot class="flex flex-col gap-1.5" :invalid>
		<FieldLabel v-if="label" class="text-sm font-medium">{{ label }}</FieldLabel>
		<Component
			:is="inputComponent"
			v-bind="$attrs"
			v-model="model"
			:type
			:autoresize="type === 'textarea'"
			:aria-invalid="invalid"
			:class="[
				'h-10 w-full rounded-md border bg-white px-3 text-sm outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 disabled:cursor-not-allowed disabled:opacity-50',
				invalid ? 'border-red-600' : 'border-gray-300',
				type === 'textarea' ? 'h-auto min-h-24 resize-y py-2' : '',
			]"
		/>
		<FieldErrorText v-if="errorMessage" class="text-sm text-red-600" role="alert">
			{{ errorMessage }}
		</FieldErrorText>
		<FieldHelperText v-else-if="helpMessage" class="text-sm text-gray-600">
			{{ helpMessage }}
		</FieldHelperText>
	</FieldRoot>
</template>
