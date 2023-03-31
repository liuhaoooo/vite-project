import { ref } from "vue";

export function useAutoLoading(defaultLoading = false) {
    const loading = ref(defaultLoading);
    function run(requestPromise) {
        loading.value = true;
        return requestPromise.finally(() => {
            loading.value = false;
        });
    }
    return [loading, run];
}