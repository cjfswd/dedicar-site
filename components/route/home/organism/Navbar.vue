<template>
    <div style="z-index: 999; background:#3B3E99"
        class="tw-w-full tw-pt-2 md:tw-pt-4 tw-absolute tw-top-0 tw-grid tw-grid-cols-1 sm:tw-w-full sm:tw-grid-cols-5 tw-gap-2 md:tw-gap-3 lg:tw-text-2xl lg:tw-gap-4 tw-text-center">
        <nuxt-link :to="{ path: '/', hash: '#início' }"
            class="tw-w-full tw-flex tw-flex-col tw-items-center tw-cursor-pointer">
            <div class="tw-bg-white tw-rounded tw-p-2 tw-w-1/2 sm:tw-w-full tw-shadow tw-drop-shadow">
                <img src="media/component/navbar/logo.png" type="image/png">
            </div>
        </nuxt-link>
        <nuxt-link v-for="(link, index) in ['serviço', 'sobre', 'depoimentos', 'contato']" :key="index"
            :to="{ path: '/', hash: link }"
            :class="`tw-hidden sm:tw-flex tw-text-lg tw-font-semibold tw-tracking-wider  tw-items-center tw-justify-center tw-rounded tw-bg-[#3B3E99] hover:tw-bg-[#00B0F2] hover:tw-text-[#3B3E99] hover:tw-border-[#3B3E99] hover:tw-shadow hover:tw-drop-shadow hover:tw-font-black tw-cursor-pointer ${index == 4 ? 'tw-col-span-2' : ''} sm:tw-col-span-1`">
            {{ link }}
        </nuxt-link>
    </div>
</template>