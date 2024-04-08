import bastaodeervas from "../assets/images/BastaoDeErvas.jpeg";
import banhodeervas from "../assets/images/BanhoDeErvas.jpeg";
import escaldapes from "../assets/images/EscaldaPes.jpeg";

const produtoData = {
  produtos: [
    {
      nome: "Bastão de Ervas",
      slug: "bastao-de-ervas",
      imagem: bastaodeervas,
      descricao:
        "Inspirado na tradição ancestral, este bastão de ervas é para se conectar com as vibrações da lunação, auxiliando na prática de autocuidado.",
      instrucoes: [
        "Ascenda a parte superior do bastão até produzir fumaça.",
        "Mantenha uma distância segura de 30cm do corpo.",
        "Faça movimentos livres para limpar a energia.",
        "Use um prato de apoio que suporte fogo.",
        "Repouse o bastão no prato e aguarde a chama cessar.",
      ],
      ritual: [
        "Escolha um espaço seguro.",
        "Defina sua intenção.",
        "Concentre-se nas energias positivas.",
        "Acenda com uma vela.",
        "Use uma pena ou leque para direcionar a fumaça.",
      ],
      notas_importantes: [
        "Mantenha fora do alcance de crianças.",
        "Não ingerir e utilize em locais ventilados.",
        "Não deixe aceso desacompanhado.",
        "Não molhar e armazenar em local seco.",
      ],
    },
    {
      nome: "Banho de Ervas",
      slug: "banho-de-ervas",
      imagem: banhodeervas,
      descricao:
        "O banho de ervas quatro luas celebra a harmonia entre você e a energia lunar, proporcionando uma experiência única de bem-estar.",
      instrucoes: [
        "Ferva 1/2 litro de água e desligue o fogo.",
        "Adicione o sachê à água quente e deixe infusionar.",
        "Após o banho de higiene, use a infusão.",
        "Opção de enxaguar com água limpa após o uso.",
        "Realize o descarte do sachê após o uso.",
      ],
      ritual: [
        "Dedique tempo ao autocuidado.",
        "Relaxe ao som de uma música suave.",
        "Acenda um incenso ou vela aromática.",
        "Concentre-se na intenção durante o banho.",
      ],
      notas_importantes: [
        "Cuidado para prevenir acidentes.",
        "Mantenha fora do alcance de crianças.",
        "Não ingerir e armazenar em local seco.",
        "Atenção à temperatura da água antes de usar.",
      ],
    },
    {
      nome: "Escalda Pés",
      slug: "escalda-pes",
      imagem: escaldapes,
      descricao:
        "O seu escalda pés traz a tradição ancestral de aproveitar as energias das lunações, com ervas selecionadas para o autocuidado e conexão.",
      instrucoes: [
        "Encha uma bacia com água quente.",
        "Adicione duas colheres do escalda pés por litro de água.",
        "Deixe infusionar até que esteja agradável.",
        "Imersão dos pés por no mínimo 15 minutos.",
        "Seque bem e mantenha os pés aquecidos após o uso.",
      ],
      ritual: [
        "Reserve um momento para autocuidado e relaxamento.",
        "Ouça música suave e acenda um incenso ou vela.",
        "Concentre-se na intenção do ritual durante o uso.",
      ],
      notas_importantes: [
        "Cuidado ao manusear para prevenir acidentes.",
        "Mantenha fora do alcance de crianças e animais.",
        "Não ingerir e armazenar em local seco.",
        "Não ferver o sachê, adicione na água já fervida.",
      ],
    },
  ],
};

export default produtoData;
