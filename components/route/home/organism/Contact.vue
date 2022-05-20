<template>
    <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-4 tw-p-1 tw-bg-[#3B3E99] tw-rounded">
        <div class="tw-flex tw-flex-col tw-gap-2 tw-leading-snug">
            <div class="tw-text-[#64D9F7] tw-text-2xl">Contato</div>
            <div>
                <p class="mdi mdi-phone">&nbsp;Telefone</p>
                <p>(21) 3540-2249</p>
                <p>(21) 3101-2541</p>
            </div>
            <div>
                <p class="mdi mdi-whatsapp">&nbsp;Whatsapp</p>
                <p>(21) 99582-5518</p>
            </div>
            <div>
                <p class="mdi mdi-at">&nbsp;Email</p>
                <p>claudete@equipededicar.com</p>
            </div>
        </div>
        <div class="tw-flex tw-flex-col tw-gap-2 tw-leading-snug">
            <div class="tw-text-[#64D9F7] tw-text-2xl">Redes sociais</div>
            <div>
                <p class="mdi mdi-facebook">&nbsp;Facebook</p>
                <a href="https://www.facebook.com/Dedicar-Equipe-116445227709103" class="tw-w-min">página</a>
            </div>
            <div>
                <p class="mdi mdi-instagram">&nbsp;Instagram</p>
                <a href="https://www.instagram.com/equipededicar/" target="_blank" class="tw-w-min">@equipededicar</a>
            </div>
        </div>
        <div class="tw-flex tw-flex-col tw-gap-2 tw-leading-snug">
            <div class="tw-text-[#64D9F7] tw-text-2xl">Mapa do site</div>
            <div class="tw-flex tw-flex-col tw-gap-1">
                <nuxt-link class="tw-w-min"
                    v-for="(item, index) in ['início', 'serviço', 'sobre', 'depoimentos', 'contato']" :key="index"
                    :to="{ path: '/', hash: item }">{{ item }}</nuxt-link>
            </div>
        </div>
        <div class="tw-flex tw-flex-col tw-gap-1 sm:tw-flex-row   tw-text-[#64D9F7] tw-whitespace-normal tw-col-span-1 md:tw-col-span-3 tw-text-xs tw-font-thin tw-tracking-wider tw-rounded-lg
                 tw-text-center">
            <span>Site desenvolvido por Antonio Castillo</span>
            <span>-</span>
            <span>[fullstack web developer]</span>
            <span>-</span>
            <span>(21) 9 7606-7823</span>
        </div>
    </div>
</template>