
<template>
    <div id="container-index" class="tw-relative animate__animated animate__fadeInLeft">
        <RouteHomeOrganismNavbar id="navbar"/>
        <RouteHomeOrganismHero id="início"/>
        <RouteHomeOrganismService id="serviço" />
        <RouteHomeOrganismAbout id="sobre" />
        <RouteHomeOrganismDepositions id="depoimentos" />
        <RouteHomeOrganismContact id="contato" />
    </div>
</template>
<style>
#container-index:nth-child(n + 1) {
    @apply tw-flex tw-flex-col;
}
</style>
