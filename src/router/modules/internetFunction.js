export const internetFunction = [
  {
    path: "networkSetting",
    name: "networkSetting",
    component: () => import('@/views/internetFunction/networkSetting/index.vue'),
  },
  {
    path: "networkMode",
    name: "networkMode",
    component: () => import("@/views/internetFunction/networkSetting/networkMode.vue"),
  },
  {
    path: "networkConfiguration",
    name: "networkConfiguration",
    component: () => import("@/views/internetFunction/networkSetting/networkConfiguration.vue"),
  },
  {
    path: "plmnScan",
    name: "plmnScan",
    component: () => import("@/views/internetFunction/networkSetting/plmnScan.vue"),
  },
  {
    path: "wanMode",
    name: "wanMode",
    component: () => import("@/views/internetFunction/networkSetting/wanMode.vue"),
  },
  {
    path: "linkdetection",
    name: "linkdetection",
    component: () => import("@/views/internetFunction/networkSetting/linkdetection.vue"),
  },
  {
    path: "apnSetting",
    name: "apnSetting",
    component: () => import('@/views/internetFunction/apnSetting/index.vue'),
  },
  {
    path: "mainApn",
    name: "mainApn",
    component: () => import("@/views/internetFunction/apnSetting/mainApn.vue"),
  },
  {
    path: "multipleApnSettings",
    name: "multipleApnSettings",
    component: () => import("@/views/internetFunction/apnSetting/multipleApnSettings.vue"),
  },
  {
    path: "simFuction",
    name: "simFuction",
    component: () => import('@/views/internetFunction/simFuction/index.vue'),
  },
  {
    path: "pinCode",
    name: "pinCode",
    component: () => import("@/views/internetFunction/simFuction/pinCode.vue"),
  },
  {
    path: "simSwitch",
    name: "simSwitch",
    component: () => import("@/views/internetFunction/simFuction/simSwitch.vue"),
  },
  {
    path: "esimManage",
    name: "esimManage",
    component: () => import('@/views/internetFunction/esimManage.vue'),
  },
  {
    path: "displaySolution",
    name: "displaySolution",
    component: () => import('@/views/internetFunction/displaySolution.vue'),
  },
  {
    path: "sliceConfiguration",
    name: "sliceConfiguration",
    component: () => import('@/views/internetFunction/sliceConfiguration.vue'),
  },
  {
    path: "cellHandoverpenalty",
    name: "cellHandoverpenalty",
    component: () => import('@/views/internetFunction/cellHandoverpenalty.vue'),
  },
  {
    path: "ueConfiguration",
    name: "ueConfiguration",
    component: () => import('@/views/internetFunction/ueConfiguration/index.vue'),
  },
  {
    path: "ueCapabilityConfig",
    name: "ueCapabilityConfig",
    component: () => import("@/views/internetFunction/ueConfiguration/ueCapabilityConfig.vue"),
  }, {
    path: "otherConfiguration",
    name: "otherConfiguration",
    component: () => import("@/views/internetFunction/ueConfiguration/otherConfiguration.vue"),
  },
  {
    path: "trafficSetting",
    name: "trafficSetting",
    component: () => import('@/views/internetFunction/trafficSetting.vue'),
  },
]