import { iconDashboard } from "../../../shared/ui/icons/sidebarIcon/iconDashboard"
import { iconManage } from "../../../shared/ui/icons/sidebarIcon/iconManage"
import { iconSettings } from "../../../shared/ui/icons/sidebarIcon/iconSettings"
import { iconTask } from "../../../shared/ui/icons/sidebarIcon/iconTask"
import { iconTimer } from "../../../shared/ui/icons/sidebarIcon/iconTimer"

export const MENU = [
  {
    icon: iconDashboard,
    link: "/",
    name: "Dashboard",
  },
  {
    icon: iconTask,
    link: "tasks",
    name: "Tasks",
  },
  {
    icon: iconTimer,
    link: "timer",
    name: "Timer",
  },
  {
    icon: iconManage,
    link: "time-management",
    name: "Time management",
  },
  {
    icon: iconSettings,
    link: "settings",
    name: "Settings",
  },
]
