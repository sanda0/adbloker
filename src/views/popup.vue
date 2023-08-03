<script setup>
import { ref, watch, onMounted } from "vue";
import { showToast } from "vant";
import { rules } from "@/entry/utils";
const isCan = ref(true);

watch(isCan, async (newIsCan) => {
	if (newIsCan) {
		showToast("Activated");
		await chrome.storage.local.set({ can: true });
		OnAndOff();
	} else {
		showToast("Deactivated");
		await chrome.storage.local.set({ can: false });
		OnAndOff();
	}
});

async function OnAndOff() {
	// var op_off = chrome.declarativeNetRequest.UpdateRulesetOptions({)
	if (isCan.value) {
		await chrome.declarativeNetRequest.updateEnabledRulesets(
			{
				disableRulesetIds: [],
				enableRulesetIds: rules,
			},
			(data) => {
				console.log(data);
			}
		);
	} else {
		await chrome.declarativeNetRequest.updateEnabledRulesets(
			{
				disableRulesetIds: rules,
				enableRulesetIds: [],
			},
			(data) => {
				console.log(data);
			}
		);
	}
}

onMounted(async () => {
	var can = await chrome.storage.local.get(["can"]);
	if (can.can != undefined) {
		isCan.value = can.can;
	}
});
</script>
<template>
	<div id="main">
		<van-row>
			<van-col span="24">
				<van-nav-bar title="Ad Blocker"></van-nav-bar>
			</van-col>
		</van-row>
		<van-row justify="center">
			<van-image round width="10rem" height="10rem" src="ad-block.png" />
		</van-row>
		<van-row justify="center">
			<van-switch v-model="isCan" />
		</van-row>
		<van-row justify="center">
			<a href="https://github.com/sanda0">github:sanda0</a>
		</van-row>
	</div>
</template>
<style>
#main {
	width: 300px;

	height: 300px;
}
</style>
