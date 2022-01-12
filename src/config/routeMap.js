import Loadable from 'react-loadable';
import Loading from '@/components/Loading'
const Dashboard = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/pages/dashboard'),loading: Loading});
const Guide = Loadable({loader: () => import(/*webpackChunkName:'Guide'*/'@/pages/guide'),loading: Loading});
const Explanation = Loadable({loader: () => import(/*webpackChunkName:'Explanation'*/'@/pages/permission'),loading: Loading});
const AdminPage = Loadable({loader: () => import(/*webpackChunkName:'AdminPage'*/'@/pages/permission/adminPage'),loading: Loading});
const GuestPage = Loadable({loader: () => import(/*webpackChunkName:'GuestPage'*/'@/pages/permission/guestPage'),loading: Loading});
const EditorPage = Loadable({loader: () => import(/*webpackChunkName:'EditorPage'*/'@/pages/permission/editorPage'),loading: Loading});
const RichTextEditor = Loadable({loader: () => import(/*webpackChunkName:'RichTextEditor'*/'@/pages/components-demo/richTextEditor'),loading: Loading});
const Markdown = Loadable({loader: () => import(/*webpackChunkName:'Markdown'*/'@/pages/components-demo/Markdown'),loading: Loading});
const Draggable = Loadable({loader: () => import(/*webpackChunkName:'Draggable'*/'@/pages/components-demo/draggable'),loading: Loading});
const KeyboardChart = Loadable({loader: () => import(/*webpackChunkName:'KeyboardChart'*/'@/pages/charts/keyboard'),loading: Loading});
const LineChart = Loadable({loader: () => import(/*webpackChunkName:'LineChart'*/'@/pages/charts/line'),loading: Loading});
const MixChart = Loadable({loader: () => import(/*webpackChunkName:'MixChart'*/'@/pages/charts/mixChart'),loading: Loading});
const Menu1_1 = Loadable({loader: () => import(/*webpackChunkName:'Menu1_1'*/'@/pages/nested/menu1/menu1-1'),loading: Loading});
const Menu1_2_1 = Loadable({loader: () => import(/*webpackChunkName:'Menu1_2_1'*/'@/pages/nested/menu1/menu1-2/menu1-2-1'),loading: Loading});
const Table = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/pages/table'),loading: Loading});
const ExportExcel = Loadable({loader: () => import(/*webpackChunkName:'ExportExcel'*/'@/pages/excel/exportExcel'),loading: Loading});
const UploadExcel = Loadable({ loader: () => import(/*webpackChunkName:'UploadExcel'*/'@/pages/excel/uploadExcel'),loading: Loading });
const Zip = Loadable({loader: () => import(/*webpackChunkName:'Zip'*/'@/pages/zip'),loading: Loading});
const Clipboard = Loadable({loader: () => import(/*webpackChunkName:'Clipboard'*/'@/pages/clipboard'),loading: Loading});
const Error404 = Loadable({loader: () => import(/*webpackChunkName:'Error404'*/'@/pages/error/404'),loading: Loading});
const User = Loadable({loader: () => import(/*webpackChunkName:'User'*/'@/pages/user'),loading: Loading});
const Bug = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/pages/bug'),loading: Loading});

export default [
  { path: "/dashboard", component: Dashboard, roles: ["admin","editor","guest"] },
  { path: "/guide", component: Guide, roles: ["admin","editor"] },
  { path: "/permission/explanation", component: Explanation, roles: ["admin"] },
  { path: "/permission/adminPage", component: AdminPage, roles: ["admin"] },
  { path: "/permission/guestPage", component: GuestPage, roles: ["guest"] },
  { path: "/permission/editorPage", component: EditorPage, roles: ["editor"] },
  { path: "/components/richTextEditor", component: RichTextEditor, roles: ["admin","editor"] },
  { path: "/components/Markdown", component: Markdown, roles: ["admin","editor"] },
  { path: "/components/draggable", component: Draggable, roles: ["admin","editor"] },
  { path: "/charts/keyboard", component: KeyboardChart, roles: ["admin","editor"] },
  { path: "/charts/line", component: LineChart, roles: ["admin","editor"] },
  { path: "/charts/mix-chart", component: MixChart, roles: ["admin","editor"] },
  { path: "/nested/menu1/menu1-1", component: Menu1_1, roles: ["admin","editor"] },
  { path: "/nested/menu1/menu1-2/menu1-2-1", component: Menu1_2_1, roles: ["admin","editor"] },
  { path: "/table", component: Table, roles: ["admin","editor"] },
  { path: "/excel/export", component: ExportExcel, roles: ["admin","editor"] },
  { path: "/excel/upload", component: UploadExcel, roles: ["admin","editor"] },
  { path: "/zip", component: Zip, roles: ["admin","editor"] },
  { path: "/clipboard", component: Clipboard, roles: ["admin","editor"] },
  { path: "/user", component: User, roles: ["admin"] },
  { path: "/bug", component: Bug, roles: ["admin"] },
  { path: "/error/404", component: Error404 },
];
