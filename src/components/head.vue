<template>
  <div id="head">
    <div class="head-left head-item">
        <div class="status-bottom">
          <!-- 移动信号 -->
          <!-- <div v-if="loopInfo.wanMode!='2'&&loopInfo.wanMode!='6'">
            <div v-show="!mixin_loading" class="signal-icon" :style="{'background-image':'url('+require('@/assets/images/icon/'+signal_icon)+')'}"></div>
            <i class="el-icon-loading" v-show="mixin_loading"></i>
            <span>{{loopInfo.network_type_str}}</span>
          </div> -->
          <!-- SIM卡状态 -->
          <!-- <div v-if="loopInfo.wanMode!='2'&&loopInfo.wanMode!='6'">
            <i class="icon-luyin" v-show="!mixin_loading" :class="loopInfo.sim_status=='1'?'green-color':'red-color'"></i>
            <i class="el-icon-loading" v-show="mixin_loading"></i>
            <span>{{loopInfo.current_card_type=='1'?$t('PROMPT_status_innerSIM'):'SIM'}}</span>
          </div> -->
          <!-- AT -->
          <!-- <div>
            <i class="icon-luyin" v-show="!mixin_loading" :class="loopInfo.modem_assert=='1'||loopInfo.modem_at=='1'?'red-color':'green-color'"></i>
            <i class="el-icon-loading" v-show="mixin_loading"></i>
            <span>AT</span>
          </div> -->
          <!-- wifi状态 -->
          <!-- <div :title="wifi2gState?$t('DOC_status_enabled'):$t('DOC_status_disabled')">
            <i class="icon-signal4" v-show="!mixin_loading" :class="wifi2gState?'green-color':'red-color'"></i>
            <i class="el-icon-loading" v-show="mixin_loading"></i>
            <span>2.4G Wi-Fi</span>
          </div>
          <div :title="wifi5gState?$t('DOC_status_enabled'):$t('DOC_status_disabled')">
            <i class="icon-signal4" v-show="!mixin_loading" :class="wifi5gState?'green-color':'red-color'"></i>
            <i class="el-icon-loading" v-show="mixin_loading"></i>
            <span>5.8G Wi-Fi</span>
          </div> -->
          <!-- 数据连接状态 -->
          <!-- <div>
            <i v-show="!mixin_loading" v-if="networkSwitch.enable=='0'" class="icon-ai36"></i>
            <i v-show="!mixin_loading" v-else-if="networkSwitch.enable=='1'" class="icon-ai36 green-color"></i>
            <i v-show="!mixin_loading" v-else class="el-icon-monitor green-color"></i>
            <i class="el-icon-loading" v-show="mixin_loading"></i>
            <span v-show="!mixin_loading">{{networkSwitch.title}}</span>
            <span v-show="mixin_loading">{{$t("loading")}}</span>
          </div> -->
          <!-- 未读短信 -->
          <!-- <div :title="$t('DOC_sms_smsTitle')" style="cursor: pointer;" v-if="unreadTotal>0 && CONFIG.smsSw=='1' && $Hide(107)" @click="toSms">
            <el-badge :value="unreadTotal" class="item">
              <i class="el-icon-chat-dot-round red-color"></i>
            </el-badge>
          </div> -->
        </div>
    </div>
    <div class="head-mid head-item">通则康威服务系统</div>
    <div class="head-right head-item"></div>
  </div>
</template>
<style lang="scss">
    #head{
        width: 100%;
        height: 58px;
        display: flex;
        align-items: flex-end;
        >.head-item{
            flex: 1;
            background-size: cover;
            background-position: center;
        }
        >.head-left{
            height: 50px;
            background-image: url(../assets/images/background/header_left_bg.png);
            background-position-x: right;
            >.status-bottom{
                min-height: 40PX;
                @include my-flex(space-between);

                >div {
                    @include my-flex();
                    align-items: flex-end;
                    margin-right: 15px;
                    color: #666;
                    font-size: 1rem;
                    height: 22px;

                    >span {
                        margin-left: 5px;
                    }

                    >i {
                        font-size: 1.1rem;
                    }
                }

                .signal-icon {
                    width: 1.2rem;
                    height: 1.2rem;
                    background-repeat: no-repeat;
                    background-position: center top;
                    background-size: cover;
                }

                .icon-ai36 {
                    font-size: 1.1rem;
                    font-weight: bold;
                }

                .red-color {
                    color: var(--error-color);
                }

                .green-color {
                    color: var(--success-color);
                }
            }
        }
        >.head-mid{
            color: #333;
            height: 58px;
            line-height: 58px;
            font-size: 22px;
            background-image: url(../assets/images/background/header_mid_bg.png);
        }
        >.head-right{
            height: 50px;
            background-image: url(../assets/images/background/header_right_bg.png);
            background-position-x: left;
        }
    }
</style>