import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '首页',
    icon: 'home-outline',
    children: [
      {
        title: '电子商务',
        icon: 'shopping-cart-outline',
        link: '/pages/dashboard',
        home: true,
      },
      {
        title: '系统概览',
        icon: 'home-outline',
        link: '/pages/iot-dashboard',
      },
      {
        title: 'MESH拓扑',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '现场组态',
        icon: 'square-outline',
        link: '/pages/iot/topo/topo-list',
      },
    ],
  },
  {
    title: '设备管理',
    icon: 'square-outline',
    children: [
      {
        title: '设备管理',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '产品管理',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '告警管理',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '告警级别',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '规则引擎',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: '报表统计',
    icon: 'book-outline',
    children: [
      {
        title: '历史数据',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: '通知中心',
    icon: 'email-outline',
    children: [
      {
        title: '通知模板',
        icon: 'clipboard-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '通知配置',
        icon: 'settings-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '通知记录',
        icon: 'message-square-outline',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: '系统设置',
    icon: 'settings-outline',
    children: [
      {
        title: '租户管理',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '用户管理',
        icon: 'people-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '角色管理',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '菜单管理',
        icon: 'menu-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '字典管理',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '系统参数',
        icon: 'options-outline',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: '运维',
    group: true,
  },
  {
    title: '工单管理',
    icon: 'github-outline',
    children: [
      {
        title: '工单管理',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '工作排班',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '巡检打卡',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '定期保养',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: '资产管理',
    icon: 'github-outline',
    children: [
      {
        title: '台账管理',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '出库入库',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '备件管理',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: '服务支持',
    icon: 'book-outline',
    children: [
      {
        title: '知识库',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '维护指导',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '客户档案',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '设备档案',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: '系统日志',
    icon: 'book-outline',
    children: [
      {
        title: '登录日志',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
      {
        title: '操作日志',
        icon: 'square-outline',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: '例子',
    group: true,
  },
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
