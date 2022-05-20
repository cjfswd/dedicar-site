<template>
    <div style="-webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;" class="tw-w-full tw-mb-2 tw-p-3 tw-bg-[#24265C] tw-rounded-lg">
        <div class="tw-flex">
            <div>
                <img v-if="deposition.photo" :src="deposition.photo"
                    :class="`tw-w-[45.5px] tw-bg-[#3B3E99] tw-rounded tw-mr-2`">
            </div>
            <div class="tw-flex tw-flex-col">
                <p class="tw-text-xl tw-font-semibold tw-leading-tight tw-tracking-wider">{{ deposition.name }}</p>
                <p v-if="deposition.occupation" class="tw-text-sm tw-leading-tight tw-mb-2">{{ deposition.occupation }}
                </p>
                <p v-else class="tw-text-sm tw-leading-tight tw-mb-2">&nbsp;</p>
            </div>
        </div>
        <p class="tw-leading-snug">
            {{ deposition.text }}
        </p>
    </div>
</template>
<script>
export default {
    props: {
        deposition: {
            type: Object,
            default: {
                photo: '',
                name: '',
                occupation: '',
                text: ''
            }
        }
    }
}
</script>