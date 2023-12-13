export interface MenuItemTypes {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: string;
  url?: string;
  badge?: {
    variant: string;
    text: string;
  };
  parentKey?: string;
  target?: string;
  children?: MenuItemTypes[];
}

const MENU_ITEMS: MenuItemTypes[] = [
  {
    key: 'navigation',
    label: 'Navigation',
    isTitle: true,
  },
  {
    key: 'dashboard',
    label: 'Dashboards',
    isTitle: false,
    icon: 'ri-home-4-line',
    badge: {
      variant: 'success',
      text: '2',
    },
    children: [
      {
        key: 'dashboard-analytics',
        label: 'Analytics',
        url: '/analytics',
        parentKey: 'dashboard',
      },
      {
        key: 'dashboard-ecommerce',
        label: 'Ecommerce',
        url: '/ecommerce',
        parentKey: 'dashboard',
      }
    ]
  },
  {
    key: 'apps',
    label: 'Apps',
    isTitle: true,
  },
  {
    key: 'apps-calendar',
    label: 'Calendar',
    isTitle: false,
    icon: 'ri-calendar-event-line',
    url: '/apps/calendar',
  },
  {
    key: 'apps-chat',
    label: 'Chat',
    isTitle: false,
    icon: 'ri-message-3-line',
    url: '/apps/chat',
  },
  {
    key: 'apps-email',
    label: 'Email',
    isTitle: false,
    icon: 'ri-mail-line',
    children: [
      {
        key: 'email-inbox',
        label: 'Inbox',
        url: '/apps/email/inbox',
        parentKey: 'apps-email',
      },
      {
        key: 'email-read',
        label: 'Read Email',
        url: '/apps/email/read',
        parentKey: 'apps-email',
      },
    ]
  },
  {
    key: 'apps-tasks',
    label: 'Tasks',
    isTitle: false,
    icon: 'ri-task-line',
    children: [
      {
        key: 'tasks-list',
        label: 'List',
        url: '/apps/tasks/list',
        parentKey: 'apps-tasks',
      },
      {
        key: 'tasks-details',
        label: 'Details',
        url: '/apps/tasks/details',
        parentKey: 'apps-tasks',
      },
    ]
  },
  {
    key: 'apps-kanban',
    label: 'Kanban Board',
    isTitle: false,
    icon: 'ri-list-check-3',
    url: '/apps/kanban',
  },
  {
    key: 'apps-file-manager',
    label: 'File Manager',
    isTitle: false,
    icon: 'ri-folder-2-line',
    url: '/apps/file-manager',
  },
  {
    key: 'custom',
    label: 'Custom',
    isTitle: true,
  },
  {
    key: 'pages',
    label: 'Pages',
    isTitle: false,
    icon: 'ri-pages-line',
    children: [
      {
        key: 'pages-profile',
        label: 'Profile',
        url: '/pages/profile',
        parentKey: 'pages',
      },
      {
        key: 'pages-invoice',
        label: 'Invoice',
        url: '/pages/invoice',
        parentKey: 'pages',
      },
      {
        key: 'pages-faq',
        label: 'FAQ',
        url: '/pages/faq',
        parentKey: 'pages',
      },
      {
        key: 'pages-pricing',
        label: 'Pricing',
        url: '/pages/pricing',
        parentKey: 'pages',
      },
      {
        key: 'pages-maintenance',
        label: 'Maintenance',
        url: '/pages/maintenance',
        parentKey: 'pages',
      },
      {
        key: 'pages-starter',
        label: 'Starter Page',
        url: '/pages/starter',
        parentKey: 'pages',
      },
      {
        key: 'pages-preloader',
        label: 'With Preloader',
        url: '/pages/preloader',
        parentKey: 'pages',
      },
      {
        key: 'pages-timeline',
        label: 'Timeline',
        url: '/pages/timeline',
        parentKey: 'pages',
      },
    ]
  },
  {
    key: 'auth',
    label: 'Auth Pages',
    isTitle: false,
    icon: 'ri-shield-user-line',
    children: [
      {
        key: 'auth-login',
        label: 'Login',
        url: '/auth/login',
        parentKey: 'auth',
      },
      {
        key: 'auth-login2',
        label: 'Login 2',
        url: '/auth/login2',
        parentKey: 'auth',
      },
      {
        key: 'auth-register',
        label: 'Register',
        url: '/auth/register',
        parentKey: 'auth',
      },
      {
        key: 'auth-register2',
        label: 'Register 2',
        url: '/auth/register2',
        parentKey: 'auth',
      },
      {
        key: 'auth-logout',
        label: 'Logout',
        url: '/auth/logout',
        parentKey: 'auth',
      },
      {
        key: 'auth-logout2',
        label: 'Logout 2',
        url: '/auth/logout2',
        parentKey: 'auth',
      },
      {
        key: 'auth-recover-password',
        label: 'Recover Password',
        url: '/auth/recover-password',
        parentKey: 'auth',
      },
      {
        key: 'auth-recover-password2',
        label: 'Recover Password 2',
        url: '/auth/recover-password2',
        parentKey: 'auth',
      },
      {
        key: 'auth-lock-screen',
        label: 'Lock Screen',
        url: '/auth/lock-screen',
        parentKey: 'auth',
      },
      {
        key: 'auth-lock-screen2',
        label: 'Lock Screen 2',
        url: '/auth/lock-screen2',
        parentKey: 'auth',
      },
      {
        key: 'auth-confirm-mail',
        label: 'Confirm Mail',
        url: '/auth/confirm-mail',
        parentKey: 'auth',
      },
      {
        key: 'auth-confirm-mail2',
        label: 'Confirm Mail 2',
        url: '/auth/confirm-mail2',
        parentKey: 'auth',
      },
    ]
  },
  {
    key: 'error',
    label: 'Error Pages',
    isTitle: false,
    icon: 'ri-error-warning-line',
    children: [
      {
        key: 'error-404',
        label: 'Error 404',
        url: '/error-404',
        parentKey: 'pages-error',
      },
      {
        key: 'error-404-alt',
        label: 'Error 404-alt',
        url: '/error-404-alt',
        parentKey: 'pages-error',
      },
      {
        key: 'error-500',
        label: 'Error 500',
        url: '/error-500',
        parentKey: 'pages-error',
      },
    ]
  },
  {
    key: 'components',
    label: 'Components',
    isTitle: true,
  },
  {
    key: 'base-ui',
    label: 'Base UI',
    isTitle: false,
    icon: 'ri-briefcase-line',
    children: [
      {
        key: 'ui-accordions',
        label: 'Accordions',
        url: '/ui/accordions',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-alerts',
        label: 'Alerts',
        url: '/ui/alerts',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-avatars',
        label: 'Avatars',
        url: '/ui/avatars',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-badges',
        label: 'Badges',
        url: '/ui/badges',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-breadcrumb',
        label: 'Breadcrumb',
        url: '/ui/breadcrumb',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-buttons',
        label: 'Buttons',
        url: '/ui/buttons',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-cards',
        label: 'Cards',
        url: '/ui/cards',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-carousel',
        label: 'Carousel',
        url: '/ui/carousel',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-collapse',
        label: 'Collapse',
        url: '/ui/collapse',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-dropdowns',
        label: 'Dropdowns',
        url: '/ui/dropdowns',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-embed-video',
        label: 'Embed Video',
        url: '/ui/embed-video',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-grid',
        label: 'Grid',
        url: '/ui/grid',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-links',
        label: 'Links',
        url: '/ui/links',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-list-group',
        label: 'List Group',
        url: '/ui/list-group',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-modals',
        label: 'modals',
        url: '/ui/modals',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-notifications',
        label: 'Notifications',
        url: '/ui/notifications',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-offcanvas',
        label: 'Offcanvas',
        url: '/ui/offcanvas',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-placeholders',
        label: 'Placeholders',
        url: '/ui/placeholders',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-pagination',
        label: 'Pagination',
        url: '/ui/pagination',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-popovers',
        label: 'Popovers',
        url: '/ui/popovers',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-progress',
        label: 'Progress',
        url: '/ui/progress',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-spinners',
        label: 'Spinners',
        url: '/ui/spinners',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-tabs',
        label: 'Tabs',
        url: '/ui/tabs',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-tooltips',
        label: 'Tooltips',
        url: '/ui/tooltips',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-typography',
        label: 'Typography',
        url: '/ui/typography',
        parentKey: 'base-ui',
      },
      {
        key: 'ui-utilities',
        label: 'Utilities',
        url: '/ui/utilities',
        parentKey: 'base-ui',
      },
    ],
  },
  {
    key: 'extended',
    label: 'Extended UI',
    isTitle: false,
    icon: 'ri-stack-line',
    children: [
      {
        key: 'extended-dragula',
        label: 'Dragula',
        url: '/extended-ui/dragula',
        parentKey: 'extended',
      },
      {
        key: 'extended-range-slider',
        label: 'Range Slider',
        url: '/extended-ui/range-slider',
        parentKey: 'extended',
      },
      {
        key: 'extended-ratings',
        label: 'Ratings',
        url: '/extended-ui/ratings',
        parentKey: 'extended',
      },
      {
        key: 'extended-scrollbar',
        label: 'Scrollbar',
        url: '/extended-ui/scrollbar',
        parentKey: 'extended',
      },
      {
        key: 'extended-scrollspy',
        label: 'Scrollspy',
        url: '/extended-ui/scrollspy',
        parentKey: 'extended',
      },
    ],
  },
  {
    key: 'ui-widgets',
    label: 'Widgets',
    isTitle: false,
    icon: 'ri-pencil-ruler-2-line',
    url: '/ui/widgets',
  },
  {
    key: 'icons',
    label: 'Icons',
    isTitle: false,
    icon: 'ri-service-line',
    children: [
      {
        key: 'icons-remix',
        label: 'Remix icons',
        url: '/ui/icons/remix-icons',
        parentKey: 'icons',
      },
      {
        key: 'icons-Bootstrap',
        label: 'Bootstrap icons',
        url: '/ui/icons/Bootstrap-icons',
        parentKey: 'icons',
      },
    ],
  },
  {
    key: 'charts',
    label: 'Charts',
    isTitle: false,
    icon: 'ri-bar-chart-line',
    children: [
      {
        key: 'apex-charts',
        label: 'Apex Charts',
        url: '/',
        parentKey: 'charts',
        children: [
          {
            key: 'area-apex',
            label: 'Area',
            url: '/ui/apex/area',
            parentKey: 'apex-charts'
          },
          {
            key: 'bar-apex',
            label: 'Bar',
            url: '/ui/apex/bar',
            parentKey: 'apex-charts'
          },
          {
            key: 'bubble-apex',
            label: 'Bubble',
            url: '/ui/apex/bubble',
            parentKey: 'apex-charts'
          },
          {
            key: 'candlestick-apex',
            label: 'Candlestick',
            url: '/ui/apex/candlestick',
            parentKey: 'apex-charts'
          },
          {
            key: 'column-apex',
            label: 'Column',
            url: '/ui/apex/column',
            parentKey: 'apex-charts'
          },
          {
            key: 'heatmap-apex',
            label: 'Heatmap',
            url: '/ui/apex/heatmap',
            parentKey: 'apex-charts'
          },
          {
            key: 'line-apex',
            label: 'Line',
            url: '/ui/apex/line',
            parentKey: 'apex-charts'
          },
          {
            key: 'mixed-apex',
            label: 'Mixed',
            url: '/ui/apex/mixed',
            parentKey: 'apex-charts'
          },
          {
            key: 'timeline-apex',
            label: 'Timeline',
            url: '/ui/apex/timeline',
            parentKey: 'apex-charts'
          },
          {
            key: 'boxplot-apex',
            label: 'Boxplot',
            url: '/ui/apex/boxplot',
            parentKey: 'apex-charts'
          },
          {
            key: 'treemap-apex',
            label: 'Treemap',
            url: '/ui/apex/treemap',
            parentKey: 'apex-charts'
          },
          {
            key: 'pie-apex',
            label: 'Pie',
            url: '/ui/apex/pie',
            parentKey: 'apex-charts'
          },
          {
            key: 'radar-apex',
            label: 'Radar',
            url: '/ui/apex/radar',
            parentKey: 'apex-charts'
          },
          {
            key: 'radialbar-apex',
            label: 'RadialBar',
            url: '/ui/apex/radialbar',
            parentKey: 'apex-charts'
          },
          {
            key: 'scatter-apex',
            label: 'Scatter',
            url: '/ui/apex/scatter',
            parentKey: 'apex-charts'
          },
          {
            key: 'polararea-apex',
            label: 'Polar Area',
            url: '/ui/apex/polararea',
            parentKey: 'apex-charts'
          },
          {
            key: 'sparklines-apex',
            label: 'Sparklines',
            url: '/ui/apex/sparklines',
            parentKey: 'apex-charts'
          },
        ],
      },
      {
        key: 'chartjs-charts',
        label: 'ChartJS',
        url: '/',
        parentKey: 'charts',
        children: [
          {
            key: 'area-chartjs',
            label: 'Area',
            url: '/ui/chartjs/area',
            parentKey: 'chartjs-charts'
          },
          {
            key: 'bar-chartjs',
            label: 'Bar',
            url: '/ui/chartjs/bar',
            parentKey: 'chartjs-charts'
          },
          {
            key: 'line-chartjs',
            label: 'Line',
            url: '/ui/chartjs/line',
            parentKey: 'chartjs-charts'
          },
          {
            key: 'other-chartjs',
            label: 'Other',
            url: '/ui/chartjs/other',
            parentKey: 'chartjs-charts'
          },
        ],
      },
    ],
  },
  {
    key: 'forms',
    label: 'Forms',
    isTitle: false,
    icon: 'ri-survey-line',
    children: [
      {
        key: 'forms-basic-elements',
        label: 'Basic Elements',
        url: '/ui/forms/basic-elements',
        parentKey: 'forms',
      },
      {
        key: 'forms-form-advanced',
        label: 'Form Advanced',
        url: '/ui/forms/form-advanced',
        parentKey: 'forms',
      },
      {
        key: 'forms-validation',
        label: 'Validation',
        url: '/ui/forms/validation',
        parentKey: 'forms',
      },
      {
        key: 'forms-wizard',
        label: 'Wizard',
        url: '/ui/forms/wizard',
        parentKey: 'forms',
      },
      {
        key: 'forms-file-uploads',
        label: 'File Uploads',
        url: '/ui/forms/file-uploads',
        parentKey: 'forms',
      },
      {
        key: 'forms-editors',
        label: 'Editors',
        url: '/ui/forms/editors',
        parentKey: 'forms',
      },
    ],
  },
  {
    key: 'tables',
    label: 'Tables',
    isTitle: false,
    icon: 'ri-table-line',
    children: [
      {
        key: 'tables-basic',
        label: 'Basic Tables',
        url: '/ui/tables/basic-tables',
        parentKey: 'tables',
      },
      {
        key: 'tables-data',
        label: 'Data Tables',
        url: '/ui/tables/data-tables',
        parentKey: 'tables',
      },
    ],
  },
  {
    key: 'maps',
    label: 'Maps',
    isTitle: false,
    icon: 'ri-treasure-map-line',
    children: [
      {
        key: 'maps-google-maps',
        label: 'Google maps',
        url: '/ui/maps/google-maps',
        parentKey: 'maps',
      },
      {
        key: 'maps-vector-maps',
        label: 'Vector maps',
        url: '/ui/maps/vector-maps',
        parentKey: 'maps',
      },
    ],
  },
  {
    key: 'multi-level',
    label: 'Multi Level',
    isTitle: false,
    icon: 'ri-share-line',
    children: [
      {
        key: 'second-level',
        label: 'Second Level',
        url: '/',
        parentKey: 'multi-level',
        children: [
          {
            key: 'second-level-1',
            label: 'Item 1',
            url: '/',
            parentKey: 'second-level'
          },
          {
            key: 'second-level-2',
            label: 'Item 2',
            url: '/',
            parentKey: 'second-level'
          },
        ]
      },
      {
        key: 'third-level',
        label: 'Third Level',
        url: '/',
        parentKey: 'multi-level',
        children: [
          {
            key: 'third-level-1',
            label: 'Item 1',
            url: '/',
            parentKey: 'third-level'
          },
          {
            key: 'third-level-2',
            label: 'Item 2',
            url: '/',
            parentKey: 'third-level',
            children: [
              {
                key: 'third-level-2-1',
                label: 'Item 2.1',
                url: '/',
                parentKey: 'third-level-2'
              },
              {
                key: 'third-level-2-2',
                label: 'Item 2.2',
                url: '/',
                parentKey: 'third-level-2'
              },
            ],
          },
        ],
      },
    ],
  },
];

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: 'dashboard',
    icon: 'ri-home-4-line',
    label: 'Dashboards',
    isTitle: true,
    children: [
      {
        key: 'dashboard-analytics',
        label: 'Analytics',
        url: '/analytics',
        parentKey: 'dashboard',
      },
      {
        key: 'dashboard-ecommerce',
        label: 'Ecommerce',
        url: '/ecommerce',
        parentKey: 'dashboard',
      },
    ]
  },
  {
    key: 'apps',
    icon: 'ri-apps-line',
    label: 'Apps',
    isTitle: true,
    children: [
      {
        key: 'apps-calendar',
        label: 'Calendar',
        url: '/apps/calendar',
        parentKey: 'apps',
      },
      {
        key: 'apps-chat',
        label: 'Chat',
        url: '/apps/chat',
        parentKey: 'apps',
      },
      {
        key: 'apps-email',
        label: 'Email',
        parentKey: 'apps',
        children: [
          {
            key: 'email-inbox',
            label: 'Inbox',
            url: '/apps/email/inbox',
            parentKey: 'apps-email',
          },
          {
            key: 'email-read',
            label: 'Read Email',
            url: '/apps/email/read',
            parentKey: 'apps-email',
          },
        ]
      },
      {
        key: 'apps-tasks',
        label: 'Tasks',
        parentKey: 'apps',
        children: [
          {
            key: 'tasks-list',
            label: 'List',
            url: '/apps/tasks/list',
            parentKey: 'apps-tasks',
          },
          {
            key: 'tasks-details',
            label: 'Details',
            url: '/apps/tasks/details',
            parentKey: 'apps-tasks',
          },
        ]
      },
      {
        key: 'apps-kanban',
        label: 'Kanban',
        url: '/apps/kanban',
        parentKey: 'apps',
      },
      {
        key: 'apps-file-manager',
        label: 'File Manager',
        url: '/apps/chat/file-manager',
        parentKey: 'apps',
      },
    ]
  },
  {
    key: 'pages',
    icon: 'ri-pages-line',
    label: 'Pages',
    isTitle: true,
    children: [
      {
        key: 'pages-auth',
        label: 'Authentication',
        parentKey: 'pages',
        children: [
          {
            key: 'auth-login',
            label: 'Login',
            url: '/auth/login',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-login2',
            label: 'Login 2',
            url: '/auth/login2',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-register',
            label: 'Register',
            url: '/auth/register',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-register2',
            label: 'Register 2',
            url: '/auth/register2',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-logout',
            label: 'Logout',
            url: '/auth/logout',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-logout2',
            label: 'Logout 2',
            url: '/auth/logout2',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-recover-password',
            label: 'Recover Password',
            url: '/auth/recover-password',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-recover-password2',
            label: 'Recover Password 2',
            url: '/auth/recover-password2',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-lock-screen',
            label: 'Lock Screen',
            url: '/auth/lock-screen',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-lock-screen2',
            label: 'Lock Screen 2',
            url: '/auth/lock-screen2',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-confirm-mail',
            label: 'Confirm Mail',
            url: '/auth/confirm-mail',
            parentKey: 'pages-auth',
          },
          {
            key: 'auth-confirm-mail2',
            label: 'Confirm Mail 2',
            url: '/auth/confirm-mail2',
            parentKey: 'pages-auth',
          },
        ],
      },
      {
        key: 'pages-error',
        label: 'Error',
        parentKey: 'pages',
        children: [
          {
            key: 'error-404',
            label: 'Error 404',
            url: '/error-404',
            parentKey: 'pages-error',
          },
          {
            key: 'error-404-alt',
            label: 'Error 404-alt',
            url: 'pages/error/error-404-alt',
            parentKey: 'pages-error',
          },
          {
            key: 'error-500',
            label: 'Error 500',
            url: '/error-500',
            parentKey: 'pages-error',
          },
        ]
      },
      {
        key: 'pages-starter',
        label: 'Starter Page',
        url: '/pages/starter',
        parentKey: 'pages',
      },
      {
        key: 'pages-preloader',
        label: 'With Preloader',
        url: '/pages/preloader',
        parentKey: 'pages',
      },
      {
        key: 'pages-profile',
        label: 'Profile',
        url: '/pages/profile',
        parentKey: 'pages',
      },
      {
        key: 'pages-invoice',
        label: 'Invoice',
        url: '/pages/invoice',
        parentKey: 'pages',
      },
      {
        key: 'pages-faq',
        label: 'FAQ',
        url: '/pages/faq',
        parentKey: 'pages',
      },
      {
        key: 'pages-pricing',
        label: 'Pricing',
        url: '/pages/pricing',
        parentKey: 'pages',
      },
      {
        key: 'pages-maintenance',
        label: 'Maintenance',
        url: '/pages/maintenance',
        parentKey: 'pages',
      },
      {
        key: 'pages-timeline',
        label: 'Timeline',
        url: '/pages/timeline',
        parentKey: 'pages',
      },
    ]
  },
  {
    key: 'ui',
    icon: 'ri-stack-line',
    label: 'Components',
    isTitle: true,
    children: [
      {
        key: 'ui-widgets',
        label: 'Widgets',
        url: '/ui/widgets',
        parentKey: 'ui',
      },
      {
        key: 'base1',
        label: 'Base UI 1',
        parentKey: 'ui',
        children: [
          {
            key: 'ui-accordions',
            label: 'Accordions',
            url: '/ui/accordions',
            parentKey: 'base1',
          },
          {
            key: 'ui-alerts',
            label: 'Alerts',
            url: '/ui/alerts',
            parentKey: 'base1',
          },
          {
            key: 'ui-avatars',
            label: 'Avatars',
            url: '/ui/avatars',
            parentKey: 'base1',
          },
          {
            key: 'ui-badges',
            label: 'Badges',
            url: '/ui/badges',
            parentKey: 'base1',
          },
          {
            key: 'ui-breadcrumb',
            label: 'Breadcrumb',
            url: '/ui/breadcrumb',
            parentKey: 'base1',
          },
          {
            key: 'ui-buttons',
            label: 'Buttons',
            url: '/ui/buttons',
            parentKey: 'base1',
          },
          {
            key: 'ui-cards',
            label: 'Cards',
            url: '/ui/cards',
            parentKey: 'base1',
          },
          {
            key: 'ui-carousel',
            label: 'Carousel',
            url: '/ui/carousel',
            parentKey: 'base1',
          },
          {
            key: 'ui-dropdowns',
            label: 'Dropdowns',
            url: '/ui/dropdowns',
            parentKey: 'base1',
          },
          {
            key: 'ui-embed-video',
            label: 'Embed Video',
            url: '/ui/embed-video',
            parentKey: 'base1',
          },
          {
            key: 'ui-grid',
            label: 'Grid',
            url: '/ui/grid',
            parentKey: 'base1',
          },
          {
            key: 'ui-list-group',
            label: 'List Group',
            url: '/ui/list-group',
            parentKey: 'base1',
          },
          {
            key: 'ui-links',
            label: 'Links',
            url: '/ui/links',
            parentKey: 'base1',
          },
        ],
      },
      {
        key: 'base2',
        label: 'Base UI 2',
        parentKey: 'ui',
        children: [
          {
            key: 'ui-modals',
            label: 'Modals',
            url: '/ui/modals',
            parentKey: 'base2',
          },
          {
            key: 'ui-notifications',
            label: 'Notifications',
            url: '/ui/notifications',
            parentKey: 'base2',
          },
          {
            key: 'ui-offcanvas',
            label: 'Offcanvas',
            url: '/ui/offcanvas',
            parentKey: 'base2',
          },
          {
            key: 'ui-placeholders',
            label: 'Placeholders',
            url: '/ui/placeholders',
            parentKey: 'base2',
          },
          {
            key: 'ui-pagination',
            label: 'Pagination',
            url: '/ui/pagination',
            parentKey: 'base2',
          },
          {
            key: 'ui-popovers',
            label: 'Popovers',
            url: '/ui/popovers',
            parentKey: 'base2',
          },
          {
            key: 'ui-progress',
            label: 'Progress',
            url: '/ui/progress',
            parentKey: 'base2',
          },
          // {
          //   key: 'ui-ribbons',
          //   label: 'Ribbons',
          //   url: '/ui/ribbons',
          //   parentKey: 'base2',
          // },
          {
            key: 'ui-spinners',
            label: 'Spinners',
            url: '/ui/spinners',
            parentKey: 'base2',
          },
          {
            key: 'ui-tabs',
            label: 'Tabs',
            url: '/ui/tabs',
            parentKey: 'base2',
          },
          {
            key: 'ui-tooltips',
            label: 'Tooltips',
            url: '/ui/tooltips',
            parentKey: 'base2',
          },
          {
            key: 'ui-typography',
            label: 'Typography',
            url: '/ui/typography',
            parentKey: 'base2',
          },
          {
            key: 'ui-utilities',
            label: 'Utilities',
            url: '/ui/utilities',
            parentKey: 'base2',
          },
        ],
      },
      {
        key: 'extended',
        label: 'Extended UI',
        parentKey: 'ui',
        children: [
          {
            key: 'extended-dragula',
            label: 'Dragula',
            url: '/extended-ui/dragula',
            parentKey: 'extended',
          },
          {
            key: 'extended-range-slider',
            label: 'Range Slider',
            url: '/extended-ui/range-slider',
            parentKey: 'extended',
          },
          {
            key: 'extended-ratings',
            label: 'Ratings',
            url: '/extended-ui/ratings',
            parentKey: 'extended',
          },
          {
            key: 'extended-scrollbar',
            label: 'Scrollbar',
            url: '/extended-ui/scrollbar',
            parentKey: 'extended',
          },
          {
            key: 'extended-scrollspy',
            label: 'Scrollspy',
            url: '/extended-ui/scrollspy',
            parentKey: 'extended',
          },
        ],
      },
      {
        key: 'forms',
        label: 'Forms',
        parentKey: 'ui',
        children: [
          {
            key: 'forms-basic-elements',
            label: 'Basic Elements',
            url: '/ui/forms/basic-elements',
            parentKey: 'forms',
          },
          {
            key: 'forms-form-advanced',
            label: 'Form Advanced',
            url: '/ui/forms/form-advanced',
            parentKey: 'forms',
          },
          {
            key: 'forms-validation',
            label: 'Validation',
            url: '/ui/forms/validation',
            parentKey: 'forms',
          },
          {
            key: 'forms-wizard',
            label: 'Wizard',
            url: '/ui/forms/wizard',
            parentKey: 'forms',
          },
          {
            key: 'forms-file-uploads',
            label: 'File Uploads',
            url: '/ui/forms/file-uploads',
            parentKey: 'forms',
          },
          {
            key: 'forms-editors',
            label: 'Editors',
            url: '/ui/forms/editors',
            parentKey: 'forms',
          },
        ],
      },
      {
        key: 'charts',
        label: 'Charts',
        parentKey: 'ui',
        children: [
          {
            key: 'apex-charts',
            label: 'Apex Charts',
            parentKey: 'charts',
            children: [
              {
                key: 'area-apex',
                label: 'Area',
                url: '/ui/apex/area',
                parentKey: 'apex-charts'
              },
              {
                key: 'bar-apex',
                label: 'Bar',
                url: '/ui/apex/bar',
                parentKey: 'apex-charts'
              },
              {
                key: 'bubble-apex',
                label: 'Bubble',
                url: '/ui/apex/bubble',
                parentKey: 'apex-charts'
              },
              {
                key: 'candlestick-apex',
                label: 'Candlestick',
                url: '/ui/apex/candlestick',
                parentKey: 'apex-charts'
              },
              {
                key: 'column-apex',
                label: 'Column',
                url: '/ui/apex/column',
                parentKey: 'apex-charts'
              },
              {
                key: 'heatmap-apex',
                label: 'Heatmap',
                url: '/ui/apex/heatmap',
                parentKey: 'apex-charts'
              },
              {
                key: 'line-apex',
                label: 'Line',
                url: '/ui/apex/line',
                parentKey: 'apex-charts'
              },
              {
                key: 'mixed-apex',
                label: 'Mixed',
                url: '/ui/apex/mixed',
                parentKey: 'apex-charts'
              },
              {
                key: 'timeline-apex',
                label: 'Timeline',
                url: '/ui/apex/timeline',
                parentKey: 'apex-charts'
              },
              {
                key: 'boxplot-apex',
                label: 'Boxplot',
                url: '/ui/apex/boxplot',
                parentKey: 'apex-charts'
              },
              {
                key: 'treemap-apex',
                label: 'Treemap',
                url: '/ui/apex/treemap',
                parentKey: 'apex-charts'
              },
              {
                key: 'pie-apex',
                label: 'Pie',
                url: '/ui/apex/pie',
                parentKey: 'apex-charts'
              },
              {
                key: 'radar-apex',
                label: 'Radar',
                url: '/ui/apex/radar',
                parentKey: 'apex-charts'
              },
              {
                key: 'radialbar-apex',
                label: 'RadialBar',
                url: '/ui/apex/radialbar',
                parentKey: 'apex-charts'
              },
              {
                key: 'scatter-apex',
                label: 'Scatter',
                url: '/ui/apex/scatter',
                parentKey: 'apex-charts'
              },
              {
                key: 'polararea-apex',
                label: 'Polar Area',
                url: '/ui/apex/polararea',
                parentKey: 'apex-charts'
              },
              {
                key: 'sparklines-apex',
                label: 'Sparklines',
                url: '/ui/apex/sparklines',
                parentKey: 'apex-charts'
              },
            ],
          },
          {
            key: 'chartjs-charts',
            label: 'ChartJS',
            parentKey: 'charts',
            children: [
              {
                key: 'area-chartjs',
                label: 'Area',
                url: '/ui/chartjs/area',
                parentKey: 'chartjs-charts'
              },
              {
                key: 'bar-chartjs',
                label: 'Bar',
                url: '/ui/chartjs/bar',
                parentKey: 'chartjs-charts'
              },
              {
                key: 'line-chartjs',
                label: 'Line',
                url: '/ui/chartjs/line',
                parentKey: 'chartjs-charts'
              },
              {
                key: 'other-chartjs',
                label: 'Other',
                url: '/ui/chartjs/other',
                parentKey: 'chartjs-charts'
              },
            ],
          },
        ],
      },

      {
        key: 'tables',
        label: 'Tables',
        parentKey: 'ui',
        children: [
          {
            key: 'tables-basic-tables',
            label: 'Basic Tables',
            url: '/ui/tables/basic-tables',
            parentKey: 'tables',
          },
          {
            key: 'tables-data-tables',
            label: 'Data Tables',
            url: '/ui/tables/data-tables',
            parentKey: 'tables',
          },
        ],
      },
      {
        key: 'icons',
        label: 'Icons',
        parentKey: 'ui',
        children: [
          {
            key: 'icons-remix-icons',
            label: 'Remix icons',
            url: '/ui/icons/remix-icons',
            parentKey: 'icons',
          },
          {
            key: 'icons-Bootstrap-icons',
            label: 'Bootstrap icons',
            url: '/ui/icons/Bootstrap-icons',
            parentKey: 'icons',
          },
        ],
      },
      {
        key: 'maps',
        label: 'Maps',
        parentKey: 'ui',
        children: [
          {
            key: 'maps-google-maps',
            label: 'Google maps',
            url: '/ui/maps/google-maps',
            parentKey: 'maps',
          },
          {
            key: 'maps-vector-maps',
            label: 'Vector maps',
            url: '/ui/maps/vector-maps',
            parentKey: 'maps',
          },
        ],
      },
    ]
  },
];

export { MENU_ITEMS, HORIZONTAL_MENU_ITEMS };
