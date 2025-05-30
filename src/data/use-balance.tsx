import { useTranslation } from "react-i18next";

export const useBalance = () => {
  const [t] = useTranslation();
  return [
    {
      category: "ADVOCACY",
      rows: [
        {
          project: "Aliança pelo Fortalecimento da Sociedade Civil",
          type: t("balance.association"),
          totalAmount: "785.352",
          amount2024: "785.352",
          start: "2024",
          end: "-",
        },
        {
          project: "Fundo Patrimonial USP Diversa",
          type: t("balance.mutualAnualFunding"),
          totalAmount: "5.972.452",
          amount2024: "334.625",
          start: "2023",
          end: "-",
        },
        {
          project: "Serenas",
          type: t("balance.mutualAnualFunding"),
          totalAmount: "1.270.000",
          amount2024: "370.000",
          start: "2024",
          end: "2028",
        },
        {
          project: "Rede A Ponte",
          type: t("balance.mutualAnualFunding"),
          totalAmount: "800.000",
          amount2024: "200.000",
          start: "2024",
          end: "2027",
        },
        {
          project: "Instituto Pacto contra a fome",
          type: t("balance.supProject"),
          totalAmount: "500.000",
          amount2024: "500.000",
          start: "2024",
          end: "2024",
        },
        {
          project: "Pacto pela Democracia",
          type: t("balance.mutualAnualFunding"),
          totalAmount: "600.000",
          amount2024: "200.000",
          start: "2024",
          end: "2027",
        },
        {
          project: "ICCI - Instituto Cultura, Comunicação e Incidência",
          type: t("balance.supProject"),
          totalAmount: "100.000",
          amount2024: "100.000",
          start: "2024",
          end: "2025",
        },
        {
          project: "GIFE",
          type: t("balance.mutualAnualFunding"),
          totalAmount: "1.000.000",
          amount2024: "333.333",
          start: "2024",
          end: "2028",
        },
        {
          project: "Latimpacto",
          type: t("balance.association"),
          totalAmount: "75.347",
          amount2024: "75.347",
          start: "2024",
          end: "-",
        },
        {
          project: "Movimento Por Uma Cultura de Doação - MCD",
          type: t("balance.association"),
          totalAmount: "50.000",
          amount2024: "50.000",
          start: "2024",
          end: "-",
        },
      ],
    },
    {
      category: t("knowledge.name"),
      rows: [
        {
          project: "PIPA",
          type: t("balance.mutualAnualFunding"),
          totalAmount: "240.000",
          amount2024: "120.000",
          start: "2024",
          end: "2026",
        },
        {
          project: "Fundação José Luiz Egydio Setúbal (FJLES)",
          type: t("balance.research"),
          totalAmount: "200.000",
          amount2024: "100.000",
          start: "2024",
          end: "2025",
        },
        {
          project: "DeSJuS CEBRAP",
          type: t("balance.research"),
          totalAmount: "200.000",
          amount2024: "200.000",
          start: "2024",
          end: "2025",
        },
        {
          project: "FundoAgbara",
          type: t("balance.supProject"),
          totalAmount: "900.000",
          amount2024: "300.000",
          start: "2024",
          end: "2026",
          details: "Núcleo de Pesquisa e Memória da Mulher Negra Agbara",
        },
        {
          project: "CEDEC & IEA USP",
          type: "Evento",
          totalAmount: "129.032",
          amount2024: "129.032",
          start: "2024",
          end: "2024",
        },
        {
          project: "Centro de Análise de Liberdade e do Autoritarismo LAUT",
          type: t("balance.supProject"),
          totalAmount: "319.899",
          amount2024: "159.949",
          start: "2024",
          end: "2026",
        },
        {
          project: "Instituto Identidade do Brasil (IDBR)",
          type: t("balance.supProject"),
          totalAmount: "200.000",
          amount2024: "200.000",
          start: "2024",
          end: "2025",
        },
        {
          project: "Instituto Igarapé",
          type: t("balance.supProject"),
          totalAmount: "400.000",
          amount2024: "400.000",
          start: "2024",
          end: "2025",
        },
        {
          project: "More In Common",
          type: t("balance.supProject"),
          totalAmount: "200.000",
          amount2024: "100.000",
          start: "2024",
          end: "2026",
          details:
            'More in Common "Combatendo polarização pela sociedade civil"',
        },
        {
          project: "CRIA IThe Human Project",
          type: "Apoio institucional",
          totalAmount: "2.000.000",
          amount2024: "400.000",
          start: "2022",
          end: "2026",
        },
        {
          project: "Politize Instituto de Educação Política",
          type: 'Projeto "IAgora? Eleições 2024"',
          totalAmount: "50.000",
          amount2024: "50.000",
          start: "2024",
          end: "2024",
        },
        {
          project: "IDIS",
          type: t("balance.association"),
          totalAmount: "50.000",
          amount2024: "50.000",
          start: "2024",
          end: "2024",
        },
        {
          project: "SITAWI Finanças do Bem",
          type: t("balance.research"),
          totalAmount: "25.000",
          amount2024: "25.000",
          start: "2024",
          end: "2024",
          details:
            "Famílias de Alto Patrimônio no Brasil: Investimento de Impacto e Filantropia",
        },
        {
          project: "Praça Atahualpa",
          type: "Projeto autoral",
          totalAmount: "2.184.106",
          amount2024: "454.913",
          start: "2022",
          end: "-",
        },
        {
          project: "Instituto Mar Adentro",
          type: "Projeto",
          totalAmount: "834.958",
          amount2024: "200.733",
          start: "2023",
          end: "2025",
        },
        {
          project: "Coalizão pelo Impacto (ICE)",
          type: t("balance.supProject"),
          totalAmount: "1.650.000",
          amount2024: "525.000",
          start: "2023",
          end: "2026",
          details: "Aceleração de negócios de impacto social",
        },
        {
          project: "Data Privacy",
          type: t("balance.event"),
          totalAmount: "35.000",
          amount2024: "35.000",
          start: "2024",
          end: "2024",
        },
        {
          project: "Yunus",
          type: t("balance.event"),
          totalAmount: "150.000",
          amount2024: "150.000",
          start: "2024",
          end: "2024",
        },
        {
          project: "Desenvola e Não Me Enrola",
          type: t("balance.mutualAnualFunding"),
          totalAmount: "200.000",
          amount2024: "200.000",
          start: "2024",
          end: "2025",
        },
        {
          project: "Instituto Mol",
          type: t("balance.supProject"),
          totalAmount: "75.000",
          amount2024: "75.000",
          start: "2024",
          end: "2025",
        },
        {
          project: "Pró-Saber",
          type: t("balance.mutualAnualFunding"),
          totalAmount: "1.395.505",
          amount2024: "464.930",
          start: "2023",
          end: "2026",
        },
        {
          project: "Nexo Jornal",
          type: t("balance.supProject"),
          totalAmount: "150.000",
          amount2024: "150.000",
          start: "2024",
          end: "2025",
        },
        {
          project: "Uerê",
          type: t("balance.supProject"),
          totalAmount: "195.691",
          amount2024: "72.090",
          start: "2024",
          end: "2025",
        },
        {
          project: "Aliança OCDE/IELS",
          type: "Pesquisa Apoiada",
          totalAmount: "1.950.000",
          amount2024: "150.000",
          start: "2022",
          end: "2025",
        },
        {
          project: "InstitutoAsta",
          type: t("balance.supProject"),
          totalAmount: "50.000",
          amount2024: "50.000",
          start: "2024",
          end: "2025",
        },
        {
          project: "Mamo Filmes",
          type: t("balance.supProject"),
          totalAmount: "50.000",
          amount2024: "50.000",
          start: "2024",
          end: "-",
          details: 'Filme "Muito além do lucro"',
        },
        {
          project: "Maria Sem Vergonha",
          type: t("balance.supProject"),
          totalAmount: "150.000",
          amount2024: "",
          start: "2023",
          end: "2024",
          details: 'Documentário "Apesar De"',
        },
        {
          project: "Maria Farinha Filmes",
          type: t("balance.supProject"),
          totalAmount: "150.000",
          amount2024: "",
          start: "2022",
          end: "2024",
          details: 'Filme "Soltando as Bruxas"',
        },
        {
          project: "Caliandra",
          type: t("balance.supProject"),
          totalAmount: "1.714.545",
          amount2024: "",
          start: "2022",
          end: "2024",
          details: "Projeto Gente Precisa de Gente",
        },
        {
          project: "Stanford Social Innovation",
          type: t("balance.supProject"),
          totalAmount: "180.000",
          amount2024: "180.000",
          start: "2024",
          end: "2025",
          details:
            "Apoio ao Podcast PSIR! realizado pela SSIR Brasil em parceria com a Iniciativa Pipa e apoio institucional para plataforma SSIR Brasil",
        },
      ],
    },
    {
      category: t("bejaLabs.title"),
      rows: [
        {
          project: "Ashoka Brasil",
          type: t("balance.mutualAnualFunding"),
          totalAmount: "1.800.000",
          amount2024: "600.000",
          start: "2024",
          end: "2026",
        },
        {
          project: "InstitutoToriba",
          type: t("balance.mutualAnualFunding"),
          totalAmount: "2.500.000",
          amount2024: "500.000",
          start: "2024",
          end: "2029",
        },
      ],
    },
    {
      category: t("balance.filantropando"),
      rows: [
        {
          project: "Filantropando",
          type: "Projeto autoral",
          totalAmount: "1.557.055",
          amount2024: "1.557.055",
          start: "2024",
          end: "-",
        },
      ],
    },
    {
      category: t("balance.impactInvestment"),
      rows: [
        {
          project: "AssociaçãoTrê",
          type: "Fundo Zunne",
          totalAmount: "400.000",
          amount2024: "",
          start: "2023",
          end: "2027",
          details: "Laboratório para Nova Longevidade",
        },
        {
          project: "AssociaçãoTrê",
          type: "Fundo Zunne 2.0",
          totalAmount: "500.000",
          amount2024: "500.000",
          start: "2024",
          end: "2028",
          details: "Lab de Imaginação e Inovação na Filantropia",
        },
        {
          project: "Positive Ventures",
          type: "FIDC Investimento de Impacto",
          totalAmount: "416.983",
          amount2024: "416.983",
          start: "-",
          end: "-",
        },
        {
          project: "Bemtevi Investimento Social",
          type: "Investimento de Impacto",
          totalAmount: "1.000.000",
          amount2024: "1.000.000",
          start: "-",
          end: "-",
        },
        {
          project: "Yunus Negocios Sociais",
          type: "FIDC Investimento de Impacto",
          totalAmount: "969.342",
          amount2024: "969.342",
          start: "-",
          end: "-",
        },
      ],
    },
    {
      category: t("balance.consulting"),
      rows: [
        {
          project: "Bemtevi eTHP",
          type: "Jornada do Amadurecimento",
          totalAmount: "100.000",
          amount2024: "7.000",
          start: "2023",
          end: "2024",
        },
        {
          project: "Quintessa",
          type: "Aceleração de negócios de impacto social",
          totalAmount: "1.282.000",
          amount2024: "",
          start: "2022",
          end: "2024",
        },
      ],
    },
  ];
};
