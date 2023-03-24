<template>
	<button :type="type" :disabled="disabled" :class="colorClass[color]" class="px-3 py-2 rounded-md transition-colors">
		{{ text }}
	</button>
</template>
<script lang="ts">
import { PropType } from 'vue'
enum ButtonType {
	'button' = 'button',
	'submit' = 'submit',
	'reset' = 'reset',
}

enum ButtonColor {
	'primary' = 'primary',
	'secondary' = 'secondary',
	'danger' = 'danger',
	'success' = 'success',
	'warning' = 'warning',
}



const colorClass = {
	primary: 'bg-easeal hover:bg-easeal-900 text-white',
	secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
	danger: 'bg-red-500 hover:bg-red-700 text-white',
	success: 'bg-green-500 hover:bg-green-700 text-white',
	warning: 'bg-yellow-500 hover:bg-yellow-700 text-white',
}
export default {
	name: 'UiButton',
	props: {
		type: {
			type: String as PropType<ButtonType>,
			default: ButtonType.button,
		},
		color: {
			type: String as PropType<ButtonColor>,
			default: ButtonColor.primary,
		},
		text: {
			type: String,
			default: '',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			colorClass,
		}
	}
}
</script>
