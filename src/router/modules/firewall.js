export const firewall = [
  {
    path: "dmz",
    name: "dmz",
    component: () => import("@/views/firewall/dmz.vue"),
  },
  {
    path: "portForwarding",
    name: "portForwarding",
    component: () => import("@/views/firewall/portForwarding.vue"),
  },
  {
    path: "filteringRules",
    name: "filteringRules",
    component: () => import("@/views/firewall/filteringRules/index.vue"),
  },
  {
    path: "defaultSettings",
    name: "defaultSettings",
    component: () => import("@/views/firewall/filteringRules/defaultSettings.vue"),
  },
  {
    path: "portFiltering",
    name: "portFiltering",
    component: () => import("@/views/firewall/filteringRules/portFiltering.vue"),
  },
  {
    path: "ipPortFiltering",
    name: "ipPortFiltering",
    component: () => import("@/views/firewall/filteringRules/ipPortFiltering.vue"),
  },
  {
    path: "macFiltering",
    name: "macFiltering",
    component: () => import("@/views/firewall/filteringRules/macFiltering.vue"),
  },
  {
    path: "urlFilter",
    name: "urlFilter",
    component: () => import("@/views/firewall/urlFilter/index.vue"),
  },
  {
    path: "urlFilterDefaultSettings",
    name: "urlFilterDefaultSettings",
    component: () => import("@/views/firewall/urlFilter/defaultSettings.vue"),
  },
  {
    path: "urlFilterSet",
    name: "urlFilterSet",
    component: () => import("@/views/firewall/urlFilter/urlFilter.vue"),
  },
  {
    path: "ipMacBinding",
    name: "ipMacBinding",
    component: () => import("@/views/firewall/ipMacBinding.vue"),
  },
  {
    path: "ddosProtection",
    name: "ddosProtection",
    component: () => import("@/views/firewall/ddosProtection.vue"),
  },
  {
    path: "speedLimit",
    name: "speedLimit",
    component: () => import("@/views/firewall/speedLimit.vue"),
  },
  {
    path: "upnp",
    name: "upnp",
    component: () => import("@/views/firewall/upnp.vue"),
  },
  {
    path: "remoteWebSettings",
    name: "remoteWebSettings",
    component: () => import("@/views/firewall/remoteWebSettings.vue"),
  },
  {
    path: "accessControl",
    name: "accessControl",
    component: () => import("@/views/firewall/accessControl.vue"),
  }
]