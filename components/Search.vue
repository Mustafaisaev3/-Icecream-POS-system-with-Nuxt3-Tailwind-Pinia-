<template>
    <div class="w-full max-w-[500px] h-[50px] border rounded-full overflow-hidden bg-[#f8f8f8]">
        <div class="w-full h-full pl-4 flex items-center">
            <IconSearch class="text-[20px] text-[gray]" /> 
            <input class="w-full h-full px-4 bg-transparent outline-none" placeholder="Search" />
            <div class="w-auto h-full flex items-center justify-center px-6 gap-1 bg-[#fc5a95] rounded-full">
                <IconFilter class="text-[16px] text-white" /> 
                <div class="text-white text-base">Filter</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconSearch from '~icons/mdi/magnify'
import IconFilter from '~icons/mdi/filter'

</script>

<style>

</style>