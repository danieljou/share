import { TbReportMoney } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";

export const SERVICES = [
    {
        logo: TbReportMoney,
        title: 'Gestion de la taxe ',
        items: [
            'Création de la taxe avec des informations claires et intuitives',
            'Attribution de pourcentages aux différents types de bénéficiaires',
            'Intégration de critères de calcul pour une répartition précise',
        ]
    },
    {
        logo: GiMoneyStack ,
        title: 'Gestion des critères d\'application ',
        items: [
            'Spécification géographique de la zone d\'application',
            'Périodicité de la collecte de la taxe',
            'Fixation du montant total à collecter',
        ]
    },
    {
        logo: GiTakeMyMoney ,
        title: 'Gestion des comptes membres  ',
        items: [
            'Paramétrage et création des comptes des institutions publiques membres',
            'Collecte détaillée d\'informations sur chaque bénéficiaire',
        ]
    },
    {
        logo: GiPayMoney ,
        title: 'Traitement des répartitions des taxes ',
        items: [
            'Remplissage des critères d\'application et ajout des comptes des bénéficiaires',
            'Calcul des montants, génération d\'états, et transfert dans les comptes',
            'Possibilité pour chaque bénéficiaire de consulter, voir et imprimer les opérations sur ses parts de taxes.',
        ]
    },
]