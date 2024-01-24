import { GiMoneyStack } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { CiUser, CiBookmarkCheck } from "react-icons/ci";


export const MENU1 = [
    {
        title: '',
        links: [
            {
                img: MdDashboard,
                label: 'Dashboard',
                link: '/manage/dashboard'
            }
        ]
    },
    {
        title: 'Configurations',
        links: [
            {
                img: GiMoneyStack,
                label: 'Formules',
                link: '/manage/formules'
            },
            {
                img: TbReportMoney,
                label: 'Taxes',
                link: '/manage/taxes'
            },

        ]
    },
    {
        title: 'Comptes',
        links: [
            {
                img: CiUser,
                label: 'Utilisateur',
                link: '/accounts/users'
            },
            {
                img: CiBookmarkCheck,
                label: 'Validations',
                link: '/accounts/validations-list'
            },
            {
                img: CiUser,
                label: 'Membres',
                link: '/accounts/membres'
            },


        ]
    }
]

export const SYSTEM_ADMIN_MENU = [
    {
        title: '',
        links: [
            {
                img: CiUser,
                label: 'Utilisateur',
                link: '/accounts/users'
            },
            {
                img: CiBookmarkCheck,
                label: 'Validations',
                link: '/accounts/validations-list'
            },
            {
                img: CiUser,
                label: 'Membres',
                link: '/accounts/membres'
            },
        ]
    }

]
export const BUISNESS_AMDIN_MENU = [
    {
        title: '',
        links: [
            {
                img: GiMoneyStack,
                label: 'Formules',
                link: '/manage/formules'
            },
        ]
    }

]

export const GESTIONNAIRE_DE_TAXE_MENU = [
    {
        title: '',
        links: [
            {
                img: TbReportMoney,
                label: 'Taxes',
                link: '/manage/taxes'
            },
        ]
    }

]

export const REPARTITOR_MENU = [
    {
        title: '',
        links: [
            {
                img: TbReportMoney,
                label: 'Taxes',
                link: '/manage/taxes'
            },
        ]
    }
]


export const MENU2 = [
    {
        title: '',
        links: [
            {
                img: MdDashboard,
                label: 'Dashboard',
                link: '/user/dashboard'
            }
        ]
    },
    {
        title: 'Mon Compte',
        links: [
            {
                img: GiMoneyStack,
                label: 'Formules',
                link: '/user/formules'
            },
            {
                img: TbReportMoney,
                label: 'Operations',
                link: '/user/operations'
            },

        ]
    }
]

