export const sms = [
  {
    path: "inbox",
    name: "inbox",
    component: () => import("@/views/sms/inbox.vue"),
  },
  {
    path: "outbox",
    name: "outbox",
    component: () => import("@/views/sms/outbox.vue"),
  },
  {
    path: "smsSettings",
    name: "smsSettings",
    component: () => import("@/views/sms/smsSettings.vue"),
  }
]