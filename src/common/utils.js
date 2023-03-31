const u_parseHexPageHide = hex => {
    if (!hex) return '00'
    let bits = ["00", "01", "02", "03",
        "10", "11", "12", "13",
        "20", "21", "22", "23",
        "30", "31", "32", "33"];
    let arr = [];
    let length = hex.length;
    for (let i = 0; i < length; i++) {
        arr.push(bits[parseInt(hex.charAt(i), 16)]);
    }
    let str = arr.join("");
    return str;
}
export const u_pageHide = (index, inverter = false) => {
    if (index === false) return inverter;
    if (index === undefined || index === true) return !inverter;
    let CONFIG = {}
    if (CONFIG.$isNull) {
        CONFIG = sessionStorage["CONFIG"] ? JSON.parse(sessionStorage["CONFIG"]) : {}
    }
    let arr = u_parseHexPageHide(CONFIG.web_page_hide).split("").reverse()
    let level = CONFIG.account_level;
    if (index === true || level == "1") {
        return true
    }
    if (arr[index] == "1") {
        return (level == "1" || level == "2")
    } else if (arr[index] == "2") {
        return (level == "1" || level == "2" || level == "3")
    } else if (arr[index] == "3") {
        if (inverter) {
            return level == "1"
        } else {
            return true;
        }
    } else {
        return inverter
    }
}
// 传入value值找出option中对应的label
export const u_getOptionLabel = (value, options, valueName = 'value', labelName = 'name') => {
    if(!value || !options) return "-"
    const res = options.filter(item=>item[valueName]===value)[0]
    if(!res) return "-"
    return res[labelName] || "-"
}
//格式化MAC
export const u_formatMAC = (mac)=> {
    if(!mac) return mac;
    return mac.match(/[0-9a-f]{2}/ig).join(":").toUpperCase();
}