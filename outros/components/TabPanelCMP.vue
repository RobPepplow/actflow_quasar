<template>
  <TabPanel >
		<template #header>
			<i v-bind:class="icon"></i>
			<span>{{name}}</span>
		</template>
		<component v-bind:is="page" />
	</TabPanel>
</template>

<script>
export default {
    name: "TabPanelCMP",
    props: ['icon', 'name', 'page']    
}
</script>

<style>

</style>