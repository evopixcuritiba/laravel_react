import {
    faHome,
    faImage
} from "@fortawesome/free-solid-svg-icons"


const menus = [
    {
        type: 'nav',
        route: '/',
        title: 'Dashboard',
        icon: faHome
    },
    {
        type: 'collapse',
        title: 'Galeria',
        icon: faImage,
        children: [
            {
                route: '/',
                title: 'Dashboard'
            },
            {
                route: '/page2',
                title: 'Pagina 2'
            }
        ]
    },
    {
        type: 'collapse',
        title: 'Outro Item',
        icon: faImage,
        children: [
            {
                route: '/xyz',
                title: 'Opção'
            },
            {
                route: '/xra',
                title: 'Opção 2'
            }
        ]
    }
]

export default menus
