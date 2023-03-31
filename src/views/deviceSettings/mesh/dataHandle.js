import * as vis from "vis-network";
export const DataHandle_createData = (topologyInformation) => {
    topologyInformation = topologyInformation.replace(/'/g, '"')
    topologyInformation = topologyInformation.replace(/\'/g, '\\\\u0022');
    topologyInformation = topologyInformation.replace(/\\\\u0022Pass-phrase\\\\u0022:/g, '\\\\u0022WPAPSK\\\\u0022:');
    topologyInformation = JSON.parse(topologyInformation)['topology information']

    let nodeArr = [], maclist = [];
    for (let i = 0; i < topologyInformation.length; i++) {
        let dev1905Obj = topologyInformation[i]
        let node = {};
        node["devRole"] = get_dev_role_string(dev1905Obj['Device role']);
        node["alMac"] = dev1905Obj['AL MAC'];
        node["hopCount"] = parseInt(dev1905Obj['Distance from controller']);
        node['UplinkAlMac'] = dev1905Obj['Upstream 1905 device'];
        node["wifistaInfo"] = {};
        node["ethstaInfo"] = {};
        maclist.push(dev1905Obj['AL MAC'])

        for (let radIdx = 0; radIdx < dev1905Obj['Radio Info'].length; radIdx++) {
            for (let bssIdx = 0; bssIdx < dev1905Obj['Radio Info'][radIdx]['BSSINFO'].length; bssIdx++) {
                if (dev1905Obj['Radio Info'][radIdx]['BSSINFO'][bssIdx].hasOwnProperty('connected sta info')) {
                    for (let staIdx = 0; staIdx < dev1905Obj['Radio Info'][radIdx]['BSSINFO'][bssIdx]["connected sta info"].length; staIdx++) {
                        let ssid = dev1905Obj['Radio Info'][radIdx]['BSSINFO'][bssIdx]['SSID'];
                        let staMac = dev1905Obj['Radio Info'][radIdx]['BSSINFO'][bssIdx]["connected sta info"][staIdx]['STA MAC address'];
                        if (node["wifistaInfo"].hasOwnProperty(ssid)) {
                            node["wifistaInfo"][ssid].push(staMac);
                        }
                        else {
                            node["wifistaInfo"][ssid] = Array(staMac);
                        }
                    }
                }
            }
        }

        for (let cliIdex = 0; cliIdex < dev1905Obj['Other Clients Info'].length; cliIdex++) {
            if (dev1905Obj['Other Clients Info'][cliIdex].hasOwnProperty('Client Address')) {
                let cliAdd = dev1905Obj['Other Clients Info'][cliIdex]['Client Address'];
                let medium = dev1905Obj['Other Clients Info'][cliIdex]['Medium'];
                if (node["ethstaInfo"].hasOwnProperty(medium)) {
                    node["ethstaInfo"][medium].push(cliAdd);
                }
                else {
                    node["ethstaInfo"][medium] = Array(cliAdd);
                }
            }
        }
        nodeArr.push(node)
    }
    let res = disp_topology_vis(nodeArr)
    return {
        ...res,
        maclist
    }
}
function disp_topology_vis(tree_info) {
    let str = "", numStaPerDev = 0;
    for (let nIdx = 0; nIdx < tree_info.length; nIdx++) {
        if (tree_info[nIdx]['devRole'] == "Agent") {
            let upLinkNodeStr = get_uplink_tree_info(tree_info, tree_info[nIdx]['UplinkAlMac']);
            if (upLinkNodeStr) {
                str += '"' + tree_info[nIdx]['devRole'] + '\n' + "AL_MAC" + ' - ' + tree_info[nIdx]['alMac'] + '"' + '->' + upLinkNodeStr + " ";
            }
        }
        // --------
        for (let ssid in tree_info[nIdx]['wifistaInfo']) {
            for (let staIdx = 0; staIdx < tree_info[nIdx]['wifistaInfo'][ssid].length; staIdx++) {
                let mac1stOctet = parseInt(tree_info[nIdx]['wifistaInfo'][ssid][staIdx].substring(0, 2), 16);
                if (mac1stOctet & 0x02) {
                    continue;
                }
                str += '"STA\nMAC - ' + tree_info[nIdx]['wifistaInfo'][ssid][staIdx] + '\nSSID - ' + ssid + '"' + '->' + '"' + tree_info[nIdx]['devRole'] + '\n' + "AL_MAC" + ' - ' + tree_info[nIdx]['alMac'] + '"' + " ";
                numStaPerDev++;
            }
        }
        // --------
        for (let medium in tree_info[nIdx]['ethstaInfo']) {
            for (let ethstaIdx = 0; ethstaIdx < tree_info[nIdx]['ethstaInfo'][medium].length; ethstaIdx++) {
                let mac1stOctet = parseInt(tree_info[nIdx]['ethstaInfo'][medium][ethstaIdx].substring(0, 2), 16);
                if (mac1stOctet & 0x02) {
                    continue;
                }
                str += '"STA\nMAC - ' + tree_info[nIdx]['ethstaInfo'][medium][ethstaIdx] + '\nMedium - ' + medium + '"' + '->' + '"' + tree_info[nIdx]['devRole'] + '\n' + "AL_MAC" + ' - ' + tree_info[nIdx]['alMac'] + '"' + " ";
                numStaPerDev++;
            }
        }
        //-----------
        if (numStaPerDev == 0 && tree_info.length == 1 &&
            (tree_info[nIdx]['devRole'] == "Controller" ||
                tree_info[nIdx]['devRole'] == "Agent")) {
            str += '"' + tree_info[nIdx]['devRole'] + '\n' + 'AL_MAC' + ' - ' + tree_info[nIdx]['alMac'] + '"' + " ";
        }
    }
    let NewDOTstring = "dinetwork{" + str + "}";
    let parsedData = vis.parseDOTNetwork(NewDOTstring);
    for (let count = 0; count < parsedData.nodes.length; count++) {
        if (parsedData.nodes[count].label.startsWith('Agent')) {
            parsedData.nodes[count].color = 'Orange';
        }
        else if (parsedData.nodes[count].label.startsWith('STA')) {
            parsedData.nodes[count].color = 'Green';
        }
        else {
            parsedData.nodes[count].shape = 'box';
        }
    }
    const data = {
        nodes: parsedData.nodes,
        edges: parsedData.edges
    }
    const options = {
        nodes: {
            borderWidth: 0,
            shadow: {
                enabled: true
            }
        },
        edges: {
            length: 250,
            width: 2,
            color: "#24e420",
            arrows: "to",
        },
        physics: {
            enabled: true,
            barnesHut: {
                damping: 1,
            },
        },
    };
    return { data, options, NewDOTstring }
}
function get_dev_role_string(devRole) {
    switch (parseInt(devRole)) {
        case 1:
            return 'Controller';
        case 2:
            return 'Agent';
        default:
            return 'Not Configured';
    }
}
function get_uplink_tree_info(tree_info, mac) {
    for (let nIdx = 0; nIdx < tree_info.length; nIdx++) {
        if (tree_info[nIdx]['alMac'] == mac) {
            return '"' + tree_info[nIdx]['devRole'] + '\n' + "AL_MAC" + ' - ' + tree_info[nIdx]['alMac'] + '"';
        }
    }
    return "";
}
function set_max_cellspan(o) {
    for (let k in o) {
        let v = o[k];
        if (v instanceof Array) {
            max_cellspan++;
            for (let a_idx = 0; a_idx < v.length; a_idx++) {
                if (((typeof v[a_idx]) == "object") && v[a_idx] != null) {
                    set_max_cellspan(v[a_idx]);
                }
                else {
                    console.log("set_max_cellspan: Incorrect Topology: Array element is not an object!", v[a_idx]);
                }
            }
        }
        else if (((typeof v) == "object") && v != null) {
            set_max_cellspan(v);
        }
    }
}