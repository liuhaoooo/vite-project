export const wifiSettings = [
  {
    path: "wifi24GSettings",
    name: "wifi24GSettings",
    component: () => import('@/views/wifiSettings/wifi24GSettings/index.vue'),
  },
  {
    path: "mainWifiSettings",
    name: "mainWifiSettings",
    component: () => import("@/views/wifiSettings/wifi24GSettings/mainWifiSettings.vue"),
  },
  {
    path: "WifiSettings1",
    name: "WifiSettings1",
    component: () => import("@/views/wifiSettings/wifi24GSettings/WifiSettings1.vue"),
  },
  {
    path: "WifiSettings2",
    name: "WifiSettings2",
    component: () => import("@/views/wifiSettings/wifi24GSettings/WifiSettings2.vue"),
  },
  {
    path: "WifiSettings3",
    name: "WifiSettings3",
    component: () => import("@/views/wifiSettings/wifi24GSettings/WifiSettings3.vue"),
  },
  {
    path: "WifiSettings4",
    name: "WifiSettings4",
    component: () => import("@/views/wifiSettings/wifi24GSettings/WifiSettings4.vue"),
  },
  {
    path: "wifi24GAdvanceSettings",
    name: "wifi24GAdvanceSettings",
    component: () => import('@/views/wifiSettings/wifi24GAdvanceSettings.vue'),
  },
  {
    path: "wifi5GSettings",
    name: "wifi5GSettings",
    component: () => import('@/views/wifiSettings/wifi5GSettings/index.vue'),
  },
  {
    path: "mainWifiSettings_5G",
    name: "mainWifiSettings_5G",
    component: () => import("@/views/wifiSettings/wifi5GSettings/mainWifiSettings.vue"),
  },
  {
    path: "WifiSettings1_5G",
    name: "WifiSettings1_5G",
    component: () => import("@/views/wifiSettings/wifi5GSettings/WifiSettings1.vue"),
  },
  {
    path: "WifiSettings2_5G",
    name: "WifiSettings2_5G",
    component: () => import("@/views/wifiSettings/wifi5GSettings/WifiSettings2.vue"),
  },
  {
    path: "WifiSettings3_5G",
    name: "WifiSettings3_5G",
    component: () => import("@/views/wifiSettings/wifi5GSettings/WifiSettings3.vue"),
  },
  {
    path: "WifiSettings4_5G",
    name: "WifiSettings4_5G",
    component: () => import("@/views/wifiSettings/wifi5GSettings/WifiSettings4.vue"),
  },
  {
    path: "wifi5GAdvanceSettings",
    name: "wifi5GAdvanceSettings",
    component: () => import('@/views/wifiSettings/wifi5GAdvanceSettings/index.vue'),
  },
  {
    path: "advanceSettings",
    name: "advanceSettings",
    component: () => import("@/views/wifiSettings/wifi5GAdvanceSettings/advanceSettings.vue"),
  },
  {
    path: "ptc",
    name: "ptc",
    component: () => import("@/views/wifiSettings/wifi5GAdvanceSettings/ptc.vue"),
  },
  {
    path: "wpsSettings",
    name: "wpsSettings",
    component: () => import('@/views/wifiSettings/wpsSettings/index.vue'),
  },
  {
    path: "wpsSettings24G",
    name: "wpsSettings24G",
    component: () => import("@/views/wifiSettings/wpsSettings/wpsSettings24G.vue"),
  },
  {
    path: "wpsSettings5G",
    name: "wpsSettings5G",
    component: () => import("@/views/wifiSettings/wpsSettings/wpsSettings5G.vue"),
  },
  {
    path: "wifiBlackOrWhiteList",
    name: "wifiBlackOrWhiteList",
    component: () => import('@/views/wifiSettings/wifiBlackOrWhiteList/index.vue'),
  },
  {
    path: "blackWhiteList24G",
    name: "blackWhiteList24G",
    component: () => import("@/views/wifiSettings/wifiBlackOrWhiteList/blackWhiteList24G.vue"),
  },
  {
    path: "blackWhiteList5G",
    name: "blackWhiteList5G",
    component: () => import("@/views/wifiSettings/wifiBlackOrWhiteList/blackWhiteList5G.vue"),
  },
  {
    path: "nfc",
    name: "nfc",
    component: () => import('@/views/wifiSettings/nfc.vue'),
  },
]