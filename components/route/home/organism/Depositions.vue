<script>
export default {
    data() {
        return {
            clientDepositions: [
                {
                    photo: 'media/page/depositions/fabio_steinberg/fabio_steinberg.png',
                    name: 'Fabio Steinberg',
                    occupation: 'Escritor',
                    text: `O serviço prestado pela Eudesia e sua equipe tem um valor inestimável, que dinheiro nenhum do
                            mundo pode retribuir. Para ela nenhum atendimento é um mero negócio, mas sim sinônimo de
                            verdadeira paixão pelo que faz, 24 horas por dia, 7 dias da semana. Onde os concorrentes
                            costumam terminam a sua responsabilidade funcional, o grupo liderado pela Eudesia começa.
                            Com
                            paciência infinita, ela aconselha, envolve-se nos problemas, busca soluções, é parceira de
                            todos
                            os momentos, sempre com a meta de garantir o bem estar e felicidade dos que são por ela
                            atendidos. Não há quem deixe de se sentir parte integrante desta verdadeira família. No
                            apoio
                            aos idosos e pacientes ela leva o conceito de família tão a sério que a gente se habitua ver
                            a
                            sua própria filha, marido, genro e netos, que inevitavelmente se tornam grandes amigos,
                            ajudando
                            a estabelecer uma comunidade de colaboradores onde prevalece o amor e o calor humano. Ao
                            resgatar valores nobres esquecidos nos tempos de hoje, esta gente transmite uma mensagem de
                            esperança. A Eudesia não poderia escolher um nome melhor para a sua empresa como Dedicar,
                            pois é
                            exatamente isto que esta gente maravilhosa e abençoada faz. Se fosse possível dizer isto,
                            esta é
                            uma empresa que tem alma.`
                },
                {
                    photo: '',
                    name: 'Bernado Autran',
                    occupation: '',
                    text: `Fui muito Feliz com a Dedicar Equipe desde sempre com profissionalismo e carinho com a minha avó. Em todos os momentos me auxiliavam e eram prestativos além de muito humanos com a nossa necessidade. Recomendo sempre! Só me resta agradecer! Muito obrigado!`
                },
                {
                    photo: 'media/page/depositions/carlos_furtado/carlos_furtado.png',
                    name: 'Carlos Furtado',
                    occupation: 'Delegado da PF',
                    text: `Prezados senhores.
                            Gostaria de agradecer imensamente os cuidados dispensados a minha mãe, a sra. Antonieta
                            Furtado,
                            durante os últimos meses de sua vida. A equipe Dedicar foi absolutamente profissional, e fez
                            com
                            que
                            ela se sentisse confortável e amparada, sempre. Os cuidados com os medicamentos, a
                            alimentação,
                            a
                            higiene e, principalmente, a companhia e o carinho, tornaram a vida de minha mãe muito
                            melhor em
                            seus últimos meses. As cuidadoras foram perfeitas em suas funções, muitas vezes indo além de
                            suas
                            obrigações e responsabilidades, sem nunca demonstrar qualquer contrariedade ou má vontade.
                            Serei
                            sempre grato é Dedicar, especialmente á Sra. Eudesia e Claudete, que sempre atendeu
                            prontamente
                            a
                            todos os pedidos e necessidades de minha mãe, provendo sempre as melhores e mais competentes
                            cuidadoras, mesmo quando havia necessidade de substituição. A quem precisar dos serviços de
                            cuidadoras profissionais para idosos, recomendo fortemente a Dedicar.`
                },
                {
                    photo: '',
                    name: 'Maria Campello',
                    occupation: '',
                    text: `Trabalho com a Eudezia, da Dedicar, há 9 anos. Ela me foi indicada por uma vizinha, que teve seu pai assistido até seu falecimento. A Dedicar atende minha irmã, como atendeu minha mãe, com uma equipe que se reveza de 24 em 24 horas. Já indiquei para amigos com necessidades diversas na família : idosos acamados ou com alguma autonomia, ou mesmo não idosos que necessitam cuidados especiais, companhia, atenção com horários de medicação, etc. Cada cliente tem suas particularidades e exigências próprias e a Dedicar está pronta para eventuais trocas na equipe, bem como substituição imediata na falta da cuidadora.`
                },
            ],

        }
    },
    computed: {
        colNumber: function () {
            if (this.$nuxt.$screen !== undefined) {
                if (['ms', 'mm'].some(value => this.$nuxt.$screen.breakpoint.includes(value))) return '1'
                if (['ml', 'sm', 'md'].some(value => this.$nuxt.$screen.breakpoint.includes(value))) return '2'
            }
            return '4'
        }
    }
}
</script>
<template>
    <div class="tw-flex tw-flex-col tw-items-center tw-gap-4 lg:tw-gap-8 tw-mb-16 lg:tw-mb-32">
        <h1 class="tw-text-[#64D9F7] tw-text-4xl tw-font-semibold tw-bg-[#3B3E99]">Depoimentos</h1>
        <div class="tw-gap-2" :style="`
        columns:${colNumber} ; 
        break-inside: avoid;`">
            <div style="-webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;" class="tw-w-full tw-mb-2 tw-p-3 tw-bg-[#24265C] tw-rounded-lg">
                <p class="tw-text-xl tw-font-semibold tw-leading-tight tw-tracking-wider">Paulo Santos</p>
                <p class="tw-text-sm tw-leading-tight tw-mb-2">
                </p>
                <img class="tw-rounded tw-w-full" src="media/page/depositions/paulo_santos/paulo_santos.jpeg" />
                <p class="tw-pt-2 tw-font-medium tw-leading-tight tw-tracking-wider">Gostaria de agradecer o carinho e
                    atenção, da equipe de cuidadoras da minha mãe, Maria de Nazareth, que nos últimos quase 4 anos,
                    cuidaram da minha mãe no CGABEG. As meninas Juliana, Fernanda e Lenilda foram espetaculares! Elas
                    proporcionaram os melhores e finais momentos da vida da minha mãe. Deram muito amor, carinho,
                    ternura e afeto 24 horas pór dia. Transmitiram para minha família uma segurança, tranquilidade e
                    paz durante todos os dias. Vocês foram fundamentais para as nossas vidas. Só tenho a agradecer e
                    elogiar tudo que fizeram po nós e por ela. Muito Obrigado e um carinho eterno!</p>
            </div>
            <div style="-webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;" class="tw-w-full tw-mb-2 tw-p-3 tw-bg-[#24265C] tw-rounded-lg">
                <p class="tw-text-xl tw-font-semibold tw-leading-tight tw-tracking-wider">Helena Simões</p>
                <p class="tw-text-sm tw-leading-tight tw-mb-2">
                </p>
                <img class="tw-rounded tw-w-full" src="media/page/depositions/helena_simões/helena_simões.jpg" />
                <p class="tw-pt-2 tw-font-medium tw-leading-tight tw-tracking-wider">Venho relatar uma história muito
                    especial para minha família. Sou Helena Simões, tenho
                    sessenta
                    e oito anos e ainda tenho mãe . Atualmente, ela está com cento e um anos. Por ter esta idade
                    avançada, precisa de cuidados especiais que somente cuidadoras especializadas podem dar. Há
                    dez
                    anos conheci, através da indicação de uma amiga, a Empresa Dedicar Equipe e, a partir deste
                    período, minha mãe passou a ser cuidada pela equipe desta empresa. Só tenho elogios a fazer.
                    Para começar, pelas coordenadoras Dona Eudesia e Dona Claudete que sempre procuraram nos
                    ajudar
                    em todos os momentos, inclusive quando minha mãe foi morar na Casa especializada no cuidado
                    de
                    idosos. A mudança foi muito difícil para nossa família. Entretanto, esses momentos delicados
                    foram assistidos e confortados por todas as funcionárias da Dedicar Equipe. Atualmente minha
                    mãe
                    continua sendo acompanhada pelas cuidadoras da Empresa que dão muito carinho para ela. Está
                    sempre cheirosa e bem arrumada. Agradecemos a esta equipe que tão bem sabe cuidar com
                    profissionalismo e muito carinho, fazendo jus ao nome DEDICAR EQUIPE.</p>
            </div>
            <div style="-webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;" class="tw-w-full tw-mb-2 tw-p-3 tw-bg-[#24265C] tw-rounded-lg">
                <p class="tw-text-xl tw-font-semibold tw-leading-tight tw-tracking-wider">Viviane Crelier</p>
                <p class="tw-text-sm tw-leading-tight tw-mb-2">
                </p>
                <p class="tw-pt-2 tw-font-medium tw-leading-tight tw-tracking-wider">Contratei a Dedicar em Fev/2019
                    para assistência 24 horas à meu Pai e depois em Nov/2019 para apoio também 24 horas à minha Mãe.
                    Infelizmente em Mai/2020 meu Pai faleceu, mas a Dedicar continua atendendo à minha Mãe, prestando
                    serviço, até a presente data, de forma responsável, com um custo/benefício satisfatório.</p>
                <hr class="tw-my-2">
                <p class="tw-text-xl tw-font-semibold tw-leading-tight tw-tracking-wider">Elivânia</p>
                <p class="tw-text-sm tw-leading-tight tw-mb-2">Cuidadora
                </p>
                <video class="tw-rounded tw-w-full" controls>
                    <source src="media/page/depositions/elivania/elivania.mp4" type="video/mp4">
                </video>
                <p class="tw-py-2 tw-font-medium tw-leading-tight tw-tracking-wider">Cuidadora Elivânia Interagindo com
                    a
                    memória
                    do paciente</p>
                <video class="tw-rounded tw-w-full" controls>
                    <source src="media/page/depositions/simone/memoria.mp4" type="video/mp4">
                </video>
                <hr class="tw-my-2">
                <p class="tw-text-xl tw-font-semibold tw-leading-tight tw-tracking-wider">Simone</p>
                <p class="tw-text-sm tw-leading-tight tw-mb-2">Cuidadora
                </p>
                <video class="tw-rounded tw-w-full" controls>
                    <source src="media/page/depositions/simone/simone.mp4" type="video/mp4">
                </video>
            </div>
            <div style="-webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;" class="tw-w-full tw-mb-2 tw-p-3 tw-bg-[#24265C] tw-rounded-lg">
                <p class="tw-text-xl tw-font-semibold tw-leading-tight tw-tracking-wider">Antonio Augusto Murat</p>
                <p class="tw-text-sm tw-leading-tight tw-mb-2">
                </p>
                <p class="tw-pt-2 tw-font-medium tw-leading-tight tw-tracking-wider">Somos muito gratos pelo serviço
                    prestado pela Equipe Dedicar o atendimento é personalizado, profissional e humanizado. Desejamos
                    continuado sucesso à Sra. Eudesia, CEO da empresa que trabalha eternamente de férias pois gosta
                    muito do que faz.</p>
                <hr class="tw-my-2">
                <p class="tw-text-xl tw-font-semibold tw-leading-tight tw-tracking-wider">Rosemere</p>
                <p class="tw-text-sm tw-leading-tight tw-mb-2">Cuidadora
                </p>
                <video class="tw-rounded tw-w-full" controls>
                    <source src="media/page/depositions/antonio_august_murat/rosemere.mp4" type="video/mp4">
                </video>
                <hr class="tw-my-2">
                <p class="tw-pb-2 tw-font-medium tw-leading-tight tw-tracking-wider">Paciente praticando musicoterapia
                </p>
                <video class="tw-rounded tw-w-full" controls>
                    <source src="media/page/depositions/antonio_august_murat/teclado.mp4" type="video/mp4">
                </video>
            </div>
            <div style="-webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;" class="tw-w-full tw-mb-2 tw-p-3 tw-bg-[#24265C] tw-rounded-lg">
                <p class="tw-text-xl tw-font-semibold tw-leading-tight tw-tracking-wider">José Vieira</p>
                <p class="tw-text-sm tw-leading-tight tw-mb-2">
                </p>
                <p class="tw-pt-2 tw-font-medium tw-leading-tight tw-tracking-wider">A Equipe é muito eficiente e
                    dedicada, eles nos fornecem cuidadoras que tratam nossos pacientes com alta qualidade e confiança
                    total.</p>
                <hr class="tw-my-2">
                <p class="tw-text-xl tw-font-semibold tw-leading-tight tw-tracking-wider">Elizabete</p>
                <p class="tw-text-sm tw-leading-tight tw-mb-2">Cuidadora</p>
                <video class="tw-rounded tw-w-full" controls>
                    <source src="media/page/depositions/jose_vieira/elizabete.mp4" type="video/mp4">
                </video>
                <hr class="tw-my-2">
                <p class="tw-text-xl tw-font-semibold tw-leading-tight tw-tracking-wider">Thereza Castellões</p>
                <p class="tw-text-sm tw-leading-tight tw-mb-2">Paciente</p>
                <video class="tw-rounded tw-w-full" controls>
                    <source src="media/page/depositions/jose_vieira/thereza.mp4" type="video/mp4">
                </video>
            </div>
            <RouteHomeAtomDeposition v-for="(deposition, index) in clientDepositions" :key="index"
                :deposition="deposition" />
        </div>
    </div>
</template>