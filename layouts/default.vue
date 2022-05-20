<template>
  <div>
    <vue100vh id="container-vanta" class="container-vanta tw-font-mono"></vue100vh>
    <div class="container-default">
      <Nuxt class="tw-mb-4 lg:tw-px-0 animate__animated animate__fadeInLeft" />
    </div>
  </div>
</template>
<style>
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  border-radius: 8px;
}

*::-webkit-scrollbar-thumb {
  height: 56px;
  border-radius: 8px;
  border: 2px solid transparent;
  background-clip: content-box;
  background-color: #64D9F7;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #00B0F2;
}

html {
  width: 100%;
  height: 100%;
  color: white;
  background-color: #3B3E99;
}

canvas {
  position: fixed !important;
}

.container-vanta {
  @apply tw-w-full tw-fixed;
}

.container-default {
  @apply tw-mx-auto tw-flex tw-flex-col tw-items-center tw-gap-4 tw-px-2 md:tw-px-4 3xl:tw-px-0;
  max-width: 1200px;
}

.link-project {
  @apply tw-underline;
  color: inherit;
}

.link-project:hover {
  @apply tw-underline;
  color: #ead41c;
}
</style>
<script>
export default {
  mounted() {
    VANTA.DOTS({
      el: "#container-vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x64D9F7,
      color2: 0x3B3E99,
      backgroundColor: 0x3B3E99,
      size: 3.50
    })
    $nuxt.$router.afterEach((to, from) => {
      if (to.hash) {
        $nuxt.$scrollTo(to.hash, 500, { force: true, easing: "ease-in", cancelable: false });
      }
      else {
        $nuxt.$scrollTo("#__layout", 500, { force: true, easing: "ease-in", cancelable: false });
      }
    });
  },
};
</script>
