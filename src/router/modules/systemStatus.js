export const systemStatus = [
  {
    path: 'network_status',
    name: 'network_status',
    component: () => import('@/views/systemStatus/network_status.vue'),
  },
  {
    path: "deviceInformation",
    name: "deviceInformation",
    component: () => import('@/views/systemStatus/deviceInformation.vue'),
  },
  {
    path: "wanInformation",
    name: "wanInformation",
    component: () => import("@/views/systemStatus/wanInformation.vue"),
  },
  {
    path: "dhcpInformation",
    name: "dhcpInformation",
    component: () => import("@/views/systemStatus/dhcpInformation.vue"),
  },
  {
    path: "wifi24GInformation",
    name: "wifi24GInformation",
    component: () => import("@/views/systemStatus/wifi24GInformation.vue"),
  },
  {
    path: "wifi5GInformation",
    name: "wifi5GInformation",
    component: () => import("@/views/systemStatus/wifi5GInformation.vue"),
  },
  {
    path: "detectionInformation",
    name: "detectionInformation",
    component: () => import("@/views/systemStatus/detectionInformation.vue"),
  }
]