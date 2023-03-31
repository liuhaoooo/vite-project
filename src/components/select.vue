<template>
    <el-select v-model="selectedValue" v-bind="selectProps" @change="handleChange">
        <el-option v-for="option in showOptions" :key="option.value" v-bind="option"></el-option>
    </el-select>
</template>
  
<script>
import { ref, computed, watch } from 'vue'
export default {
    props: {
        value: {
            type: [String, Number, Array],
            default: ''
        },
        options: {
            type: Array,
            default: () => []
        },
        ...ElSelect.props // 将所有 ElSelect 的属性作为组件的 props
    },
    setup(props, { emit }) {
        const selectedValue = ref(props.value)

        watch(selectedValue, (val) => {
            emit('update:value', val)
        })

        const handleChange = (value) => {
            selectedValue.value = value
            emit('change', value)
        }

        // 过滤掉 value 和 options
        const selectProps = computed(() => {
            const { value, options, ...rest } = props
            return rest
        })

        const showOptions = computed(() => {
            const { options } = props
            let rest = options?.filter(item => item.hide === undefined || !item.hide)
            return rest
        })

        return {
            selectedValue,
            handleChange,
            selectProps,
            showOptions
        }
    }
}
</script>
  