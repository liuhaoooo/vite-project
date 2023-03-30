import { createI18n } from 'vue-i18n'
import el_cn from 'element-plus/dist/locale/zh-cn.mjs'
import el_en from 'element-plus/dist/locale/en.mjs'
import en from "./en";
import cn from "./cn";
import po from "./po";
import th from "./th";
import el from "./el";

const message = {
    cn: {
        ...cn,
        ...el_cn
    },
    en: {
        ...en,
        ...el_en
    },
    po: {
        ...po,
        ...el_en
    },
    th: {
        ...th,
        ...el_en
    },
    el: {
        ...el,
        ...el_en
    },
};

const i18n = createI18n({
    locale: 'cn', // 设置语言类型
    legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
    globalInjection: true, // 全局注册$t方法
    messages: message,
})

export default i18n