import { systemStatus } from './systemStatus'
import { internetFunction } from './internetFunction'
import { wifiSettings } from './wifiSettings'
import { deviceSettings } from './deviceSettings'
import { sms } from './sms'
import { firewall } from './firewall'
import { parentControl } from './parentControl'
import { management } from './management'
export const homeRouter = [
    ...systemStatus,
    ...internetFunction,
    ...wifiSettings,
    ...deviceSettings,
    ...sms,
    ...firewall,
    ...parentControl,
    ...management
]