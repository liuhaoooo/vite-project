export const deviceSettings = [
  {
    path: "dhcpSettings",
    name: "dhcpSettings",
    component: () => import("@/views/deviceSettings/dhcpSettings/index.vue"),
  },
  {
    path: "mainDhcpSetting",
    name: "mainDhcpSetting",
    component: () => import("@/views/deviceSettings/dhcpSettings/mainDhcpSetting.vue"),
  },
  {
    path: "multipleDhcpSetting",
    name: "multipleDhcpSetting",
    component: () => import("@/views/deviceSettings/dhcpSettings/multipleDhcpSetting.vue"),
  },
  {
    path: "valnSettings",
    name: "valnSettings",
    component: () => import("@/views/deviceSettings/valnSettings.vue"),
  },
  {
    path: "routeSettings",
    name: "routeSettings",
    component: () => import("@/views/deviceSettings/routeSettings/index.vue"),
  },
  {
    path: "staticRoutingTable",
    name: "staticRoutingTable",
    component: () => import("@/views/deviceSettings/routeSettings/staticRoutingTable.vue"),
  },
  {
    path: "ARPAgingTime",
    name: "ARPAgingTime",
    component: () => import("@/views/deviceSettings/routeSettings/ARPAgingTime.vue"),
  },
  {
    path: "warmControl",
    name: "warmControl",
    component: () => import("@/views/deviceSettings/warmControl.vue"),
  }, {
    path: "vpn",
    name: "vpn",
    component: () => import("@/views/deviceSettings/vpnSettings/index.vue"),
  },
  {
    path: "vpnSettings",
    name: "vpnSettings",
    component: () => import("@/views/deviceSettings/vpnSettings/vpnSettings.vue"),
  },
  {
    path: "greSettings",
    name: "greSettings",
    component: () => import("@/views/deviceSettings/vpnSettings/greSettings.vue"),
  },
  {
    path: "l2tpv3Settings",
    name: "l2tpv3Settings",
    component: () => import("@/views/deviceSettings/vpnSettings/l2tpv3Settings.vue"),
  },
  {
    path: "vxlanSettings",
    name: "vxlanSettings",
    component: () => import("@/views/deviceSettings/vpnSettings/vxlanSettings.vue"),
  },
  {
    path: "ipsecVpn",
    name: "ipsecVpn",
    component: () => import("@/views/deviceSettings/vpnSettings/ipsecVpn.vue"),
  },
  {
    path: "ipsecStatus",
    name: "ipsecStatus",
    component: () => import("@/views/deviceSettings/vpnSettings/ipsecStatus.vue"),
  },
  {
    path: "voiceSettings",
    name: "voiceSettings",
    component: () => import("@/views/deviceSettings/voiceSettings/index.vue"),
  },
  {
    path: "voiceBasicSettings",
    name: "voiceBasicSettings",
    component: () => import("@/views/deviceSettings/voiceSettings/voiceBasicSettings.vue"),
  },
  {
    path: "voiceAdvancedSettings",
    name: "voiceAdvancedSettings",
    component: () => import("@/views/deviceSettings/voiceSettings/voiceAdvancedSettings.vue"),
  },
  {
    path: "voipAdvancedSettings",
    name: "voipAdvancedSettings",
    component: () => import("@/views/deviceSettings/voiceSettings/voipAdvancedSettings.vue"),
  },
  {
    path: "specialKeyCodeSettings",
    name: "specialKeyCodeSettings",
    component: () => import("@/views/deviceSettings/voiceSettings/specialKeyCodeSettings.vue"),
  },
  {
    path: "tr069",
    name: "tr069",
    component: () => import("@/views/deviceSettings/tr069.vue"),
  },
  {
    path: "autoSleepSettings",
    name: "autoSleepSettings",
    component: () => import("@/views/deviceSettings/autoSleepSettings.vue"),
  },
  {
    path: "snmp",
    name: "snmp",
    component: () => import("@/views/deviceSettings/snmp.vue"),
  },
  {
    path: "exchangePlatform",
    name: "exchangePlatform",
    component: () => import("@/views/deviceSettings/exchangePlatform/index.vue"),
  },
  {
    path: "oneNet",
    name: "oneNet",
    component: () => import("@/views/deviceSettings/exchangePlatform/oneNet.vue"),
  },
  {
    path: "mobileDM",
    name: "mobileDM",
    component: () => import("@/views/deviceSettings/exchangePlatform/mobileDM.vue"),
  },
  {
    path: "telecomDM",
    name: "telecomDM",
    component: () => import("@/views/deviceSettings/exchangePlatform/telecomDM.vue"),
  },
  {
    path: "unicomDMP",
    name: "unicomDMP",
    component: () => import("@/views/deviceSettings/exchangePlatform/unicomDMP.vue"),
  },
  {
    path: "mqttSettings",
    name: "mqttSettings",
    component: () => import("@/views/deviceSettings/exchangePlatform/mqttSettings.vue"),
  },
  {
    path: "ipPassthrough",
    name: "ipPassthrough",
    component: () => import("@/views/deviceSettings/ipPassthrough.vue"),
  },
  {
    path: "advancedSettings",
    name: "advancedSettings",
    component: () => import("@/views/deviceSettings/advancedSettings/index.vue"),
  },
  {
    path: "ddns",
    name: "ddns",
    component: () => import("@/views/deviceSettings/advancedSettings/ddns.vue"),
  },
  {
    path: "frequencyBand",
    name: "frequencyBand",
    component: () => import("@/views/deviceSettings/advancedSettings/frequencyBand.vue"),
  },
  {
    path: "localPhysicalCellLocking",
    name: "localPhysicalCellLocking",
    component: () => import("@/views/deviceSettings/advancedSettings/localPhysicalCellLocking.vue"),
  },
  {
    path: "pciLock",
    name: "pciLock",
    component: () => import("@/views/deviceSettings/advancedSettings/pciLock.vue"),
  },
  {
    path: "simUnlock",
    name: "simUnlock",
    component: () => import("@/views/deviceSettings/simUnlock.vue"),
  },
  {
    path: "mesh",
    name: "mesh",
    component: () => import("@/views/deviceSettings/mesh/index.vue"),
  },
  {
    path: "basicSettings",
    name: "basicSettings",
    component: () => import("@/views/deviceSettings/mesh/basicSettings.vue"),
  },
  {
    path: "meshAdvSetting",
    name: "meshAdvSetting",
    component: () => import("@/views/deviceSettings/mesh/meshAdvSetting.vue"),
  },
  {
    path: "meshAction",
    name: "meshAction",
    component: () => import("@/views/deviceSettings/mesh/meshAction.vue"),
  },
  {
    path: "networkingTopology",
    name: "networkingTopology",
    component: () => import("@/views/deviceSettings/mesh/networkingTopology.vue"),
  },
  {
    path: "antennaControl",
    name: "antennaControl",
    component: () => import("@/views/deviceSettings/antennaControl.vue"),
  }
]