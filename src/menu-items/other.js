// assets
import { IconBrandChrome, IconHelp, IconSitemap } from '@tabler/icons';

// constant
const icons = {
    IconBrandChrome,
    IconHelp,
    IconSitemap
};

// ===========================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||=========================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Dashboard',
            type: 'item',
            url: '/sample-page/PatientDashboard/PDashboard',
            icon: icons.IconBrandChrome,
            breadcrumbs: false,
        
        },
        {
            id: 'sample-page',
            title: 'PatientForm',
            type: 'item',
            url: '/sample-page/LableStepper',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'sample-page',
            title: 'Admin',
            type: 'item',
            url: '/sample-page/Admin/admin',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'documentation',
            title: 'Documentation',
            type: 'item',
            url: 'https://codedthemes.gitbook.io/berry/',
            icon: icons.IconHelp,
            external: true,
            target: true
        }
    ]
};

export default other;
