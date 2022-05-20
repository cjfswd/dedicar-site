<template>
    <div class="tw-flex tw-flex-col tw-mb-12 tw-gap-2 lg:tw-gap-4 lg:tw-mb-52">
        <div
            class="tw-flex tw-flex-col tw-items-center tw-items-stretch sm:tw-flex-row tw-gap-1 sm:tw-gap-4 lg:tw-gap-8 ">
            <div :style="`${$nuxt.$screen.sm? '' : 'padding-top: 35%;'}`" class="tw-w-full sm:tw-w-1/2 sm:tw-flex-1 tw-rounded-lg" style="background-image: url(media/page/service/cuidadora_de_idosos_e_idosa_felizes.jpg); background-repeat: no-repeat; background-position: center; background-size: cover;">
            </div>
            <div style="background:#3B3E99; "
                class="sm:tw-w-1/2 tw-flex tw-flex-col tw-flex-1 tw-justify-between tw-items-center tw-gap-2 sm:tw-gap-4 tw-font-medium">
                <div class="tw-flex tw-flex-col tw-justify-center tw-gap-2 sm:tw-gap-1">
                    <p
                        class="tw-leading-tight tw-text-center tw-text-xl sm:tw-text-normal sm:tw-text-2xl sm:tw-text-left md:tw-text-3xl lg:tw-text-[2.5rem] xl:tw-text-5xl 3xl:tw-text-[3.2rem] tw-font-semibold tw-tracking-wide">
                        Fornecemos apoio e
                        assistência a pacientes.</p>

                    <p class="tw-leading-tight sm:tw-text-base md:tw-text-base lg:tw-text-2xl xl:tw-text-3xl">nossa missão
                        é
                        oferecer um
                        acompanhamento personalizado para pessoas que
                        precisam de cuidados especiais.
                    </p>
                </div>
                <div
                    class="tw-w-full tw-leading-tight tw-p-1 sm:tw-text-xs md:tw-text-sm 3xl:tw-px-2 tw-rounded tw-bg-[#64D9F7] tw-text-[#24265C] tw-leading-tigth tw-text-center tw-text-sm">
                    <p>
                        trabalhamos
                        com contratos e escalas de revezamento
                    </p>
                    <p>24H,
                        24/24H,
                        24/48H,
                        12/36H e
                        Finais de Semana
                    </p>
                    
                </div>
            </div>
        </div>
        <RouteHomeMoleculeDifferential />
        <div class="tw-flex tw-items-center tw-justify-center tw-flex-col xl:tw-flex-row xl:tw-gap-2 tw-p-2 tw-font-semibold tw-tracking-wider tw-text-lg tw-border tw-bg-[#3B3E99] tw-border-[#64D9F7] tw-rounded-lg
                    tw-shadow tw-drop-shadow tw-text-center">
            <p>Ligue e faça um orçamento.</p>
            <div class="tw-flex tw-flex-col sm:tw-flex-row sm:tw-gap-2">
                <p>(21) 3540-2249 <span class="tw-hidden sm:tw-inline">|</span></p>
                <p>(21) 3101-2541 <span class="tw-hidden sm:tw-inline">|</span></p>
                <span class="tw-whitespace-nowrap mdi mdi-whatsapp">
                    (21) 9
                    9582-5518</span>
            </div>
        </div>
    </div>
</template>