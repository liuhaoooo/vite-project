import { i18n } from '@/i18n.js'
export const validate = {
    // 手机号
    v_phone(rule, value, callback) {
        _required(rule, value, callback)
        const reg = /^[\d\+]\d{1,30}$/;
        if (!reg.test(value)) {
            rule.message = rule.labelName + i18n.t('CHECK_format_formatError')
            return callback(rule.message)
        } else {
            return callback();
        }
    },
    // 判断字符串长度
    v_len(rule, value, callback) {
        _required(rule, value, callback)
        if (value.length < rule.min || value.length > rule.max) {
            if (rule.min == rule.max) {
                rule.message = i18n.t("CHECK_format_length1", { min: rule.min })
            } else {
                rule.message = i18n.t("CHECK_format_length", { min: rule.min, max: rule.max })
            }
            return callback(rule.message)
        } else {
            return callback();
        }
    },
    //校验范围
    v_range(rule, value, callback) {
        _required(rule, value, callback)
        const reg = /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/;//整数，含0
        if (+value < rule.min || +value > rule.max || !reg.test(value)) {
            rule.message = i18n.t("CHECK_format_digitScope", { min: rule.min, max: rule.max })
            return callback(rule.message);
        } else {
            return callback();
        }
    },
}
function _required(rule, value, callback) {
    if (!rule.required && value === "") {
        return callback();
    } else if (value === "") {
        rule.message = rule.labelName + i18n.t('CHECK_required_noEmpty')
        return callback(rule.message);
    }
}