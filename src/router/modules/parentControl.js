export const parentControl = [
    {
        path: "parent",
        name: "parent",
        component: () => import("@/views/parentControl/parentMode.vue"),
    },
    {
        path: "urlLimit",
        name: "urlLimit",
        component: () => import("@/views/parentControl/urlLimit.vue"),
    },
    {
        path: "timeLimit",
        name: "timeLimit",
        component: () => import("@/views/parentControl/timeLimit.vue"),
    },
    {
        path: "limitSpeed",
        name: "limitSpeed",
        component: () => import("@/views/parentControl/limitSpeed.vue"),
    }
]