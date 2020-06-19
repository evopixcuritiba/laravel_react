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
                route: '/page2',
                title: 'Pagina 2'
            },
            {
                route: '/page2',
                title: 'Pagina 3'
            }
        ]
    }
]

export default menus
