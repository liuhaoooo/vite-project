export const management = [
  {
    path: "systemSettings",
    name: "systemSettings",
    component: () => import("@/views/management/systemSettings/index.vue"),
  },
  {
    path: "sysSet",
    name: "sysSet",
    component: () => import("@/views/management/systemSettings/sysSet.vue"),
  },
  {
    path: "changePassword",
    name: "changePassword",
    component: () => import("@/views/management/systemSettings/changePassword.vue"),
  },
  {
    path: "changeUsername",
    name: "changeUsername",
    component: () => import("@/views/management/systemSettings/changeUsername.vue"),
  },
  {
    path: "timeSettings",
    name: "timeSettings",
    component: () => import("@/views/management/systemSettings/timeSettings.vue"),
  },
  {
    path: "dstSettings",
    name: "dstSettings",
    component: () => import("@/views/management/systemSettings/dstSettings.vue"),
  },
  {
    path: "importORExportConfiguration",
    name: "importORExportConfiguration",
    component: () => import("@/views/management/systemSettings/importORExportConfiguration.vue"),
  },
  {
    path: "telnetSwitch",
    name: "telnetSwitch",
    component: () => import("@/views/management/systemSettings/telnetSwitch.vue"),
  },
  {
    path: "modulelogSwitch",
    name: "modulelogSwitch",
    component: () => import("@/views/management/systemSettings/modulelogSwitch.vue"),
  },
  {
    path: "adbSwitch",
    name: "adbSwitch",
    component: () => import("@/views/management/systemSettings/adbSwitch.vue"),
  },
  {
    path: "sfpIpaSwitch",
    name: "sfpIpaSwitch",
    component: () => import("@/views/management/systemSettings/sfpIpaSwitch.vue"),
  },
  {
    path: "commlogBackupSetting",
    name: "commlogBackupSetting",
    component: () => import("@/views/management/systemSettings/commlogBackupSetting.vue"),
  },
  {
    path: "abnormalAutomaticRestartSwitch",
    name: "abnormalAutomaticRestartSwitch",
    component: () => import("@/views/management/systemSettings/abnormalAutomaticRestartSwitch.vue"),
  },
  {
    path: "tr069LogSwitch",
    name: "tr069LogSwitch",
    component: () => import("@/views/management/systemSettings/tr069LogSwitch.vue"),
  },
  {
    path: "yoctoLogSwitch",
    name: "yoctoLogSwitch",
    component: () => import("@/views/management/systemSettings/yoctoLogSwitch.vue"),
  },
  {
    path: "moduleUpdate",
    name: "moduleUpdate",
    component: () => import("@/views/management/systemSettings/moduleUpdate.vue"),
  },
  {
    path: "nf_conntrack",
    name: "nf_conntrack",
    component: () => import("@/views/management/systemSettings/nf_conntrack.vue"),
  },
  {
    path: "smartSettings",
    name: "smartSettings",
    component: () => import("@/views/management/smartSettings/index.vue"),
  },
  {
    path: "intelligentrestart",
    name: "intelligentrestart",
    component: () => import("@/views/management/smartSettings/intelligentrestart.vue"),
  },
  {
    path: "intelligentLightsOut",
    name: "intelligentLightsOut",
    component: () => import("@/views/management/smartSettings/intelligentLightsOut.vue"),
  },
  {
    path: "systemLog",
    name: "systemLog",
    component: () => import("@/views/management/systemLog.vue"),
  },
  {
    path: "exportLog",
    name: "exportLog",
    component: () => import("@/views/management/exportLog.vue"),
  },
  {
    path: "lOGInformation",
    name: "lOGInformation",
    component: () => import("@/views/management/lOGInformation.vue"),
  },
  {
    path: "systemUpgrade",
    name: "systemUpgrade",
    component: () => import("@/views/management/systemUpgrade.vue"),
  },
  {
    path: "systemAutoUpgrade",
    name: "systemAutoUpgrade",
    component: () => import("@/views/management/systemAutoUpgrade.vue"),
  },
  {
    path: "configUpgrade",
    name: "configUpgrade",
    component: () => import("@/views/management/configUpgrade.vue"),
  },
  {
    path: "atCommand",
    name: "atCommand",
    component: () => import("@/views/management/atCommand.vue"),
  },
  {
    path: "networkTools",
    name: "networkTools",
    component: () => import("@/views/management/networkTools/index.vue"),
  },
  {
    path: "ping",
    name: "ping",
    component: () => import("@/views/management/networkTools/ping.vue"),
  },
  {
    path: "tcpdump",
    name: "tcpdump",
    component: () => import("@/views/management/networkTools/tcpdump.vue"),
  },
  {
    path: "trace",
    name: "trace",
    component: () => import("@/views/management/networkTools/trace.vue"),
  },
  {
    path: "remotePacketsCapture",
    name: "remotePacketsCapture",
    component: () => import("@/views/management/networkTools/remotePacketsCapture.vue"),
  },
  {
    path: "help",
    name: "help",
    component: () => import("@/views/management/help.vue"),
  }
]