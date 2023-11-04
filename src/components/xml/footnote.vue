<template>
	<div class="tooltip">[note] 
		<span class="tooltiptext"><slot></slot></span>
	</div>
</template>
<script>
export default {
}
</script>
<style scoped>
    .tooltip {
	position: relative;
	display: inline-block;
	border-bottom: 1px dotted black;
	margin-right: 4px;
}

.tooltip .tooltiptext {
	visibility: hidden;
	width: 300px;
	background-color: black;
	color: #fff;
	text-align: center;
	border-radius: 6px;
	padding: 5px 0;

	/* Position the tooltip */
	position: absolute;
	z-index: 1;
}

.tooltip:hover .tooltiptext {
	visibility: visible;
}
</style>