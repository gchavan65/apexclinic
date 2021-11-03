import React, { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
// sample page routing
const LableStepper = Loadable(lazy(() => import('views/sample-page/LableStepper')));
const Admin = Loadable(lazy(() => import('views/sample-page/admin/Admin')));
const DetailPage = Loadable(lazy(() => import('views/sample-page/admin/DetailPage')));
const PDashboard = Loadable(lazy(() => import('views/sample-page/PatientDashboard/PDashboard')));
const VirtualForm = Loadable(lazy(() => import('views/sample-page/PatientDashboard/Vertualconsult/VirtualForm')));

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },

        {
            path: '/sample-page/LableStepper',
            element: <LableStepper />
        },
        {
            path: '/sample-page/admin/Admin',
            element: <Admin />
        },
        {
            path: '/sample-page/admin/DetailPage',
            element: <DetailPage />
        },
        {
            path: '/sample-page/PatientDashboard/PDashboard',
            element: <PDashboard />
        },
        {
            path: '/sample-page/PatientDashboard/Vertualconsult/VirtualForm',
            element: <VirtualForm />
        },
    ]
};

export default MainRoutes;
