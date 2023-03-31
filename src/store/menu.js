import { defineStore } from 'pinia'
import { u_pageHide } from '@/common/utils'
export const useMenuStore = defineStore('menu', {
    state: () => {
        return {
            CONFIG: {},
            loopInfo: {},
            HideInfo: {}
        }
    },
    getters: {
        // 1、2级菜单
        menu_level_1_2() {
            let CONFIG = {
                ...this.CONFIG,
                ...this.loopInfo
            }
            let data = [
                // 首页状态信息
                {
                    name: "systemStatus",
                    show: true,
                    title: "MENU_info_head",
                    icon: "icon-home",
                    children: [
                        {
                            name: "deviceInformation",
                            show: true,
                            title: "MENU_info_version",
                        },
                        {
                            name: "wanInformation",
                            show: true,
                            title: "MENU_info_wan",
                        },
                        {
                            name: "dhcpInformation",
                            show: true,
                            title: "MENU_info_dhcp",
                        },
                        {
                            name: "wifi24GInformation",
                            show: true,
                            title: "MENU_info_wifi24",
                        },
                        {
                            name: "wifi5GInformation",
                            show: true,
                            title: "MENU_info_wifi5",
                        },
                        {
                            name: "detectionInformation",
                            show: CONFIG.account_level == "1",
                            title: "MENU_info_checkInfo",
                        },
                    ]
                },
                // 网络功能
                {
                    name: "internetFunction",
                    show: u_pageHide(60, true),
                    title: "MENU_setting_wan",
                    icon: "icon-network",
                    children: [
                        {
                            show: true,
                            name: "networkSetting",
                            title: "TAB_advance_networkSet",
                        },
                        {
                            show: CONFIG.network_mode != '2',
                            name: "apnSetting",
                            title: "DOC_apn_setting",
                        },
                        {
                            show: CONFIG.network_mode != '2',
                            name: "simFuction",
                            title: "TAB_basic_simSet",
                        },
                        {
                            show: CONFIG.network_mode != '2' && ((CONFIG.account_level == "1") || (CONFIG.current_card_type == "1" && CONFIG.esim_show == "1")),
                            name: "esimManage",
                            title: "TAB_basic_esimManage",
                        },
                        {
                            show: CONFIG.network_mode != '2' && u_pageHide(18),
                            name: "displaySolution",
                            title: "TAB_basic_displaySolution",
                        },
                        {
                            show: CONFIG.network_mode != '2' && CONFIG.account_level != "3",
                            name: "sliceConfiguration",
                            title: "TAB_basic_sliceConfiguration",
                        },
                        {
                            show: CONFIG.network_mode != '2' && CONFIG.account_level == "1",
                            name: "cellHandoverpenalty",
                            title: "TAB_basic_cellPunishment",
                        },
                        {
                            show: CONFIG.network_mode != '2' && u_pageHide(79),
                            name: "ueConfiguration",
                            title: "TAB_basic_ueConfig",
                        },
                        {
                            show: u_pageHide(94, true),
                            name: "trafficSetting",
                            title: "DOC_lbl_trafficRestriction",
                        },
                    ]
                },
                // WiFi设置
                {
                    name: "wifiSettings",
                    show: true,
                    title: "MENU_settingWifi_head",
                    icon: "icon-wifi",
                    children: [
                        {
                            name: "wifi24GSettings",
                            show: true,
                            title: "MENU_settingWifi_wifi",
                        },
                        {
                            name: "wifi24GAdvanceSettings",
                            show: true,
                            title: "MENU_settingWifi_wifiAdvance",
                        },
                        {
                            name: "wifi5GSettings",
                            show: true,
                            title: "MENU_settingWifi_wifi5g",
                        },
                        {
                            name: "wifi5GAdvanceSettings",
                            show: true,
                            title: "MENU_settingWifi_wifi5gAdvance",
                        },
                        {
                            name: "wpsSettings",
                            show: true,
                            title: "wirelessconfightml_tab_menu_wps",
                        },
                        {
                            name: "wifiBlackOrWhiteList",
                            show: u_pageHide(56),
                            title: "wirelessconfightml_tab_menu_wifiList",
                        },
                        {
                            name: "nfc",
                            show: u_pageHide(125),
                            title: "DOC_lbl_nfc",
                        },
                    ]
                },
                // 设备配置
                {
                    name: "deviceSettings",
                    show: true,
                    title: "HELP_head_wizardDevice",
                    icon: "icon-device",
                    children: [
                        {
                            name: "dhcpSettings",
                            title: "MENU_setting_dhcp",
                            show: CONFIG.network_mode != "7"
                        }, {
                            title: "MENU_setting_vlan",
                            name: "valnSettings",
                            show: u_pageHide(116)
                        }, {
                            title: "MENU_setting_route",
                            name: "routeSettings",
                            show: u_pageHide(68, true),
                        },
                        {
                            title: "DOC_lbl_warmControl",
                            name: "warmControl",
                            show: u_pageHide(124)
                        },
                        {
                            title: "MENU_vpn_head",
                            name: "vpn",
                            show: u_pageHide(31)
                        }, {
                            title: "MENU_setting_voiceSettings",
                            name: "voiceSettings",
                            show: u_pageHide(100),
                        }, {
                            title: "TAB_advance_tr069",
                            name: "tr069",
                            show: u_pageHide(41) || CONFIG.account_level != "3"
                        }, {
                            title: "DOC_lbl_sleepSettings",
                            name: "autoSleepSettings",
                            show: CONFIG.account_level == "1"
                        }, {
                            title: "TAB_advance_snmp",
                            name: "snmp",
                            show: u_pageHide(120)
                        }, {
                            title: "TAB_advance_exchange",
                            name: "exchangePlatform",
                            show: (u_pageHide(32) || u_pageHide(53) || u_pageHide(54) || u_pageHide(96) || u_pageHide(108)),
                        }, {
                            title: "TAB_sys_ipPass",
                            name: "ipPassthrough",
                            show: u_pageHide(29)
                        }, {
                            title: "MENU_setting_advanced",
                            name: "advancedSettings",
                            show: u_pageHide(49) && (CONFIG.account_level == "1" || CONFIG.network_mode != "2"),
                        }, {
                            title: "MENU_setting_simlock",
                            name: "simUnlock",
                            show: u_pageHide(97)
                        }, {
                            title: "MENU_mesh",
                            name: "mesh",
                            show: u_pageHide(95),
                        }, {
                            title: "DOC_antenna_antennaControl",
                            name: "antennaControl",
                            show: u_pageHide(142)
                        },
                    ]
                },
                // 短信
                {
                    name: "SMS",
                    show: u_pageHide(107) && CONFIG.sim_status == '1',
                    title: "DOC_sms_smsTitle",
                    icon: "icon-sms",
                    children: [
                        {
                            title: "MENU_sms_inbox",
                            name: "inbox",
                            show: CONFIG.smsSw == "1"
                        }, {
                            title: "MENU_sms_outbox",
                            name: "outbox",
                            show: CONFIG.smsSw == "1"
                        }, {
                            title: "MENU_sms_smsSetting",
                            name: "smsSettings",
                        }
                    ]
                },
                // 防火墙
                {
                    name: "firewall",
                    show: CONFIG.network_mode != "2" && CONFIG.network_mode != "7",
                    title: "HELP_head_wizardFirewall",
                    icon: "icon-security",
                    children: [
                        {
                            title: "DMZ",
                            name: "dmz",
                            show: u_pageHide(61, true),
                        }, {
                            title: "MENU_fw_portForward",
                            name: "portForwarding",
                        }, {
                            title: "MENU_fw_filters",
                            name: "filteringRules",
                            show: u_pageHide(62, true),
                        }, {
                            title: "MENU_fw_urlFilter",
                            name: "urlFilter",
                            show: u_pageHide(63, true),
                        }, {
                            title: "MENU_fw_ipMacBinding",
                            name: "ipMacBinding",
                            show: u_pageHide(64, true),
                        },
                        {
                            title: "MENU_fw_ddosProtection",
                            name: "ddosProtection",
                            show: u_pageHide(67, true),
                        }, {
                            title: "MENU_fw_speedLimit",
                            name: "speedLimit",
                            show: u_pageHide(38)
                        }, {
                            title: "MENU_fw_upnp",
                            name: "upnp",
                            show: u_pageHide(39)
                        }, {
                            title: "MENU_fw_remotewebportsetting",
                            name: "remoteWebSettings",
                            show: u_pageHide(85, true),
                        }, {
                            title: "MENU_fw_accessControl",
                            name: "accessControl",
                            show: u_pageHide(118, true),
                        }
                    ]
                },
                // 家长控制
                {
                    name: "parentControl",
                    show: u_pageHide(153),
                    title: "DOC_lbl_parentControl",
                    icon: "icon-kongzhi",
                    children: [
                        {
                            title: "DOC_lbl_parent",
                            name: "parent",
                        }, {
                            title: "DOC_lbl_urlLimit",
                            name: "urlLimit",
                            show: CONFIG.parentControlSwitch == "1",
                        }, {
                            title: "DOC_lbl_timeLimit",
                            name: "timeLimit",
                            show: CONFIG.parentControlSwitch == "1",
                        }, {
                            title: "DOC_lbl_limitSpeed",
                            name: "limitSpeed",
                            show: CONFIG.parentControlSwitch == "1",
                        }
                    ]
                },
                // 系统设置
                {
                    name: "management",
                    show: true,
                    title: "HELP_head_wizardManage",
                    icon: "icon-system",
                    children: [
                        {
                            title: "MENU_sys_settings",
                            name: "systemSettings",
                        }, {
                            title: "MENU_sys_intelligent",
                            name: "smartSettings",
                            show: u_pageHide(143),
                        }, {
                            title: "MENU_sys_sysLog",
                            name: "systemLog",
                            show: u_pageHide(70, true),
                        }, {
                            title: "MENU_sys_exportLog",
                            name: "exportLog",
                            show: u_pageHide(71, true),
                        }, {
                            title: "MENU_sys_logInfo",
                            name: "lOGInformation",
                            show: CONFIG.account_level != "3"
                        }, {
                            show: u_pageHide(72, true),
                            title: "DOC_btn_update1",
                            name: "systemUpgrade",
                        }, {
                            title: "MENU_sys_sysAutoUpgrade",
                            name: "systemAutoUpgrade",
                            show: u_pageHide(40)
                        }, {
                            title: "MENU_sys_configUpdate",
                            name: "configUpgrade",
                            show: CONFIG.account_level == "1" && CONFIG.build_type == "debug"
                        }, {
                            title: "MENU_sys_at",
                            name: "atCommand",
                            show: CONFIG.account_level == "1"
                        }, {
                            title: "MENU_sys_networkTools",
                            name: "networkTools",
                            show: u_pageHide(73, true),
                        },
                        {
                            title: "MENU_sys_help",
                            name: "help",
                            show: true,
                        }
                    ]
                }
            ]
            let res = JSON.parse(JSON.stringify(data))
            return createRoute(res)
        },
        // 3级菜单
        menu_level_3() {
            let CONFIG = {
                ...this.CONFIG,
                ...this.HideInfo
            }
            let data = {
                "networkSetting": [{
                    show: u_pageHide(84, true) && CONFIG.network_mode != '2',
                    name: "networkMode",
                    title: "DOC_lbl_netMode",
                }, {
                    show: CONFIG.network_mode != '2',
                    name: "networkConfiguration",
                    title: "DOC_lbl_netSetting",
                }, {
                    show: u_pageHide(44) && CONFIG.network_mode != '2',
                    name: "plmnScan",
                    title: "DOC_lbl_plmnscan",
                }, {
                    show: u_pageHide(52),
                    name: "wanMode",
                    title: "DOC_lte_networkMode",
                }, {
                    show: u_pageHide(93, true),
                    name: "linkdetection",
                    title: "DOC_lbl_wanLinkSetting",
                }],
                "apnSetting": [{
                    name: "mainApn",
                    title: "DOC_apn_setting_apn",
                }, {
                    show: u_pageHide(15),
                    name: "multipleApnSettings",
                    title: "DOC_apn_settingMultiApn",
                }],
                "simFuction": [{
                    name: "pinCode",
                    title: "DOC_lbl_pinCode",
                }, {
                    show: CONFIG.esim_show == "1" || u_pageHide(17),
                    name: "simSwitch",
                    title: "DOC_lbl_simChange",
                }],
                "ueConfiguration": [{
                    name: "ueCapabilityConfig",
                    title: "TAB_basic_uePowerConfig",
                }, {
                    name: "otherConfiguration",
                    title: "TAB_basic_otherConfig",
                }],
                "wifi24GSettings": [{
                    name: "mainWifiSettings",
                    show: true,
                    title: "wirelessconfightml_tab_menu_item41",
                }, {
                    name: "WifiSettings1",
                    show: u_pageHide(19),
                    title: "wirelessconfightml_tab_menu_item12",
                }, {
                    name: "WifiSettings2",
                    show: u_pageHide(20),
                    title: "wirelessconfightml_tab_menu_item13",
                }, {
                    name: "WifiSettings3",
                    show: u_pageHide(21),
                    title: "wirelessconfightml_tab_menu_item14",
                }, {
                    name: "WifiSettings4",
                    show: u_pageHide(22),
                    title: "wirelessconfightml_tab_menu_item15",
                }],
                "wifi5GSettings": [{
                    name: "mainWifiSettings_5G",
                    show: true,
                    title: "wirelessconfightml_tab_menu_item41",
                }, {
                    name: "WifiSettings1_5G",
                    show: u_pageHide(23),
                    title: "wirelessconfightml_tab_menu_item12",
                }, {
                    name: "WifiSettings2_5G",
                    show: u_pageHide(24),
                    title: "wirelessconfightml_tab_menu_item13",
                }, {
                    name: "WifiSettings3_5G",
                    show: u_pageHide(25),
                    title: "wirelessconfightml_tab_menu_item14",
                }, {
                    name: "WifiSettings4_5G",
                    show: u_pageHide(26),
                    title: "wirelessconfightml_tab_menu_item15",
                }],
                "wifi5GAdvanceSettings": [{
                    name: "advanceSettings",
                    show: true,
                    title: "MENU_settingWifi_wifi5gAdvance",
                }, {
                    name: "ptc",
                    show: CONFIG.account_level == '1',
                    title: "WiFi-5G TPC",
                }],
                "wpsSettings": [{
                    name: "wpsSettings24G",
                    show: true,
                    title: "wirelessconfightml_tab_menu_wps_24",
                }, {
                    name: "wpsSettings5G",
                    show: true,
                    title: "wirelessconfightml_tab_menu_wps_5",
                }],
                "wifiBlackOrWhiteList": [{
                    name: "blackWhiteList24G",
                    show: true,
                    title: "wirelessconfightml_tab_menu_wifiList24",
                }, {
                    name: "blackWhiteList5G",
                    show: true,
                    title: "wirelessconfightml_tab_menu_wifiList5",
                }],
                "dhcpSettings": [{
                    name: "mainDhcpSetting",
                    title: "networkconfightml_tab_menu_item1",
                }, {
                    name: "multipleDhcpSetting",
                    title: "networkconfightml_tab_menu_item2",
                    show: u_pageHide(137)
                }],
                "routeSettings": [{
                    name: "staticRoutingTable",
                    title: "TAB_route_routingTable",
                }, {
                    title: "TAB_route_arpTime",
                    name: "ARPAgingTime",
                    show: u_pageHide(30)
                }],
                "vpn": [{
                    name: "vpnSettings",
                    title: "MENU_vpn_head",
                    show: u_pageHide(31)
                }, {
                    title: "MENU_vpn_gre",
                    name: "greSettings",
                    show: u_pageHide(45)
                }, {
                    title: "MENU_vpn_l2tpv3",
                    name: "l2tpv3Settings",
                    show: u_pageHide(57)
                }, {
                    title: "MENU_vpn_vxlan",
                    name: "vxlanSettings",
                    show: u_pageHide(83)
                }, {
                    title: "MENU_vpn_ipSec",
                    name: "ipsecVpn",
                    show: u_pageHide(55)
                }, {
                    title: "DOC_vpn_ipsecStatus",
                    name: "ipsecStatus",
                    show: u_pageHide(55)
                }],
                "voiceSettings": [{
                    title: "TAB_sys_voiceBaseSetting",
                    name: "voiceBasicSettings",
                    show: u_pageHide(100)
                }, {
                    title: "TAB_voice_voiceAdvanced",
                    name: "voiceAdvancedSettings",
                    show: u_pageHide(99)
                }, {
                    title: "TAB_voice_voipAdvancedSettings",
                    name: "voipAdvancedSettings",
                    show: u_pageHide(102)
                }, {
                    title: "TAB_voice_voipCallCipher",
                    name: "specialKeyCodeSettings",
                    show: u_pageHide(103)
                }],
                "exchangePlatform": [{
                    title: "OneNET",
                    name: "oneNet",
                    show: u_pageHide(32)
                }, {
                    title: "DOC_tr069_mobileDM",
                    name: "mobileDM",
                    show: u_pageHide(53)
                }, {
                    title: "DOC_tr069_teleDM",
                    name: "telecomDM",
                    show: u_pageHide(54)
                }, {
                    title: "DOC_tr069_linkDMP",
                    name: "unicomDMP",
                    show: u_pageHide(96)
                }, {
                    title: "DOC_lbl_mqttSettings",
                    name: "mqttSettings",
                    show: u_pageHide(108)
                }],
                "advancedSettings": [{
                    title: "DOC_lbl_ddns",
                    name: "ddns",
                    show: u_pageHide(33)
                },
                {
                    title: "TAB_advance_lockFreq",
                    name: "frequencyBand",
                    show: u_pageHide(36) && CONFIG.network_mode != '2'
                }, {
                    title: "TAB_advance_lockPhyCell",
                    name: "localPhysicalCellLocking",
                    show: u_pageHide(37) && CONFIG.network_mode != '2'
                }, {
                    title: "TAB_advance_ecgiLock",
                    name: "pciLock",
                    show: u_pageHide(98)
                }],
                "mesh": [{
                    title: "DOC_snmp_basicSettings",
                    name: "basicSettings",
                    show: u_pageHide(193)
                }, {
                    title: "meshAdvSetting",
                    name: "meshAdvSetting",
                    show: u_pageHide(194)
                }, {
                    title: "meshAction",
                    name: "meshAction",
                    show: u_pageHide(195)
                }, {
                    title: "DOC_meshSetting_title5",
                    name: "networkingTopology",
                    show: u_pageHide(196)
                }],
                "filteringRules": [{
                    title: "TAB_fw_defaultSetting",
                    name: "defaultSettings",
                }, {
                    title: "TAB_fw_portFiltering",
                    name: "portFiltering",
                }, {
                    title: "TAB_fw_ipPortFiltering",
                    name: "ipPortFiltering",
                }, {
                    title: "DOC_title_addMacFiltering",
                    name: "macFiltering",
                }],
                "urlFilter": [{
                    title: "TAB_fw_defaultSetting",
                    name: "urlFilterDefaultSettings",
                }, {
                    title: "MENU_fw_urlFilter",
                    name: "urlFilterSet",
                }],
                "systemSettings": [{
                    title: "MENU_sys_settings",
                    name: "sysSet",
                    show: true
                }, {
                    title: "TAB_sys_changePasswd",
                    name: "changePassword",
                    show: true
                }, {
                    title: "TAB_sys_changeUsername",
                    name: "changeUsername",
                    show: CONFIG.account_level != "3"
                },
                {
                    title: "TAB_sys_timeSetting",
                    name: "timeSettings",
                    show: u_pageHide(74, true),
                }, {
                    title: "TAB_timeSetting_dstSettings",
                    name: "dstSettings",
                    show: u_pageHide(117),
                }, {
                    title: "TAB_sys_exportOrLoadConfig",
                    name: "importORExportConfiguration",
                    show: u_pageHide(42) && CONFIG.build_type == "debug",
                }, {
                    title: "DOC_registerStatus_item7",
                    name: "telnetSwitch",
                    show: CONFIG.account_level == "1" && CONFIG.build_type == "debug"
                }, {
                    title: "TAB_sys_modemlogSwitch",
                    name: "modulelogSwitch",
                    show: CONFIG.account_level == "1"
                }, {
                    title: "TAB_sys_adbSwitch",
                    name: "adbSwitch",
                    show: CONFIG.account_level == "1"
                }, {
                    title: "TAB_sys_NETPAS",
                    name: "sfpIpaSwitch",
                    show: u_pageHide(150)
                }, {
                    title: "TAB_sys_commlogBackup",
                    name: "commlogBackupSetting",
                    show: CONFIG.account_level == "1"
                }, {
                    title: "TAB_sys_sysUnormalRebootSwitch",
                    name: "abnormalAutomaticRestartSwitch",
                    show: CONFIG.account_level == "1"
                }, {
                    title: "TAB_sys_tr069Log",
                    name: "tr069LogSwitch",
                    show: u_pageHide(46)
                }, {
                    title: "TAB_sys_yoctoLog",
                    name: "yoctoLogSwitch",
                    show: u_pageHide(51)
                }, {
                    title: "TAB_module_update",
                    name: "moduleUpdate",
                    show: CONFIG.account_level == "1"
                }, {
                    title: "Nf Conntrack Max",
                    name: "nf_conntrack",
                    show: CONFIG.Hide_nf_conntrack == "1"
                }],
                "smartSettings": [{
                    title: "MENU_sys_timeToRestart",
                    name: "intelligentrestart",
                    show: u_pageHide(69, true),
                }, {
                    title: "MENU_sys_intelligentLightsOut",
                    name: "intelligentLightsOut",
                    show: u_pageHide(144),
                }],
                "networkTools": [{
                    title: "TAB_tools_ping",
                    name: "ping",
                }, {
                    title: "TAB_tools_tcpdump",
                    name: "tcpdump",
                }, {
                    title: "TAB_tools_trace",
                    name: "trace",
                }, {
                    title: "MENU_sys_remote_packet_capture_setting",
                    name: "remotePacketsCapture",
                    show: u_pageHide(43)
                }]
            }
            let newData = {}
            for (let key in data) {
                let item = data[key]?.filter(item => item.show === true || item.show === undefined) || []
                newData[key] = item
            }
            return newData
        }
    },
    actions: {

    },
    //   数据持久化
    persist: {
        enabled: true,
        strategies: [
            {
                storage: localStorage,
                paths: ['CONFIG']
            }
        ]
    }
})

function createRoute(r) {
    let newPage = [];
    for (let n in r) {
        let c = r[n].children, newChild = [];
        if (!!c && c.length > 0) {
            newChild = createRoute(c);
        }
        if (r[n].children != undefined) {
            r[n]["children"] = newChild;
        }
        if (r[n]?.children === undefined || r[n]?.children.length > 0) {
            if (r[n]?.show === true || r[n]?.show === undefined) {
                newPage.push(r[n]);
            }
        }
    }
    return newPage;
}