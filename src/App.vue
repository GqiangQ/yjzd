<template>
  <div id="app">
    <!-- 初始加载 -->
    <div v-if="loading" class="box" id="box1">
      <div class="yjzd-box">
        <div class="zd-all-top" id="top_checking">
          <div class="zd-all-top-img"></div>
          <p id="checking-title">正在诊断您的号码：<span class="telephone">{{ telephone }}</span></p>
        </div>
      </div>
      <div class="zd-all-bot" style="height: 15.3em;overflow: auto;/* display: none; */" id="top_checkSecurity">
        <!-- 安全检测 -->
        <div class="zd-bot-list">
          <div class="bot-title" id="top_checkSecurity_title">
            <p class="left">安全检测</p>
            <p class="right" v-if="checking.includes('安全检测')">诊断中</p>
            <p class="right" v-else-if="checked.includes('安全检测')">已诊断</p>
            <p class="right" v-else>待诊断</p>
          </div>
          <div class="bot-desc-box" id="error">
            <!-- 实名认证 -->
            <div class="bot-desc" id="top_checkSecurity_realName" style="display: flex;">
              <p>实名认证</p>
              <i v-if="checking.includes('实名认证')" class="icon-load"></i>
              <i v-else-if="checkerror.includes('实名认证')" class="icon-error"></i>
              <i v-else class="icon-succes"></i>
            </div>
            <!-- 一证五号 -->
            <div class="bot-desc" id="top_checkSecurity_fiveNumbers" style="display: flex;">
              <p>一证五号</p>
              <i v-if="checking.includes('一证五号')" class="icon-load"></i>
              <i v-else-if="checkerror.includes('一证五号')" class="icon-error"></i>
              <i v-else class="icon-succes"></i>
            </div>
          </div>
        </div>
        <!-- 流量检测 -->
        <div class="zd-bot-list">
          <div class="bot-title" id="top_checkFlow_title">
            <p class="left">流量检测</p>
            <p class="right" v-if="checking.includes('流量检测')">诊断中</p>
            <p class="right" v-else-if="checked.includes('流量检测')">已诊断</p>
            <p class="right" v-else>待诊断</p>
          </div>
          <div class="bot-desc-box">
            <div class="bot-desc" id="top_checkFlow_flowExceedAmount" style="display: flex;">
              <p>流量超出</p>
              <i v-if="checking.includes('流量超出')" class="icon-load"></i>
              <i v-else-if="checkerror.includes('流量超出')" class="icon-error"></i>
              <i v-else class="icon-succes"></i>
            </div>
            <div class="bot-desc" id="top_checkFlow_dxFlowPkg">
              <p>定向流量包</p>
              <i v-if="checking.includes('定向流量包')" class="icon-load"></i>
              <i v-else-if="checkerror.includes('定向流量包')" class="icon-error"></i>
              <i v-else class="icon-succes"></i>
            </div>
            <div class="bot-desc" id="top_checkFlow_otherFlowPkg">
              <p>其他流量包</p>
              <i v-if="checking.includes('其他流量包')" class="icon-load"></i>
              <i v-else-if="checkerror.includes('其他流量包')" class="icon-error"></i>
              <i v-else class="icon-succes"></i>
            </div>
          </div>
        </div>
        <!-- 话费检测 -->
        <div class="zd-bot-list">
          <div class="bot-title" id="top_checkCost_title">
            <p class="left">话费检测</p>
            <p class="right" v-if="checking.includes('话费检测')">诊断中</p>
            <p class="right" v-else-if="checked.includes('话费检测')">已诊断</p>
            <p class="right" v-else>待诊断</p>
          </div>
          <div class="bot-desc-box">
            <div class="bot-desc" id="top_checkCost_toBePayFees" style="display: flex;">
              <p>待缴费用</p>
              <i v-if="checking.includes('待缴费用')" class="icon-load"></i>
              <i v-else-if="checkerror.includes('待缴费用')" class="icon-error"></i>
              <i v-else class="icon-succes"></i>
            </div>
            <div class="bot-desc" id="top_checkCost_balanceWarning" style="display: flex;">
              <p>余额预警</p>
              <i v-if="checking.includes('余额预警')" class="icon-load"></i>
              <i v-else-if="checkerror.includes('余额预警')" class="icon-error"></i>
              <i v-else class="icon-succes"></i>
            </div>
            <div class="bot-desc" id="top_checkCost_myPackage" style="display: flex;">
              <p>我的套餐</p>
              <i v-if="checking.includes('我的套餐')" class="icon-load"></i>
              <i v-else-if="checkerror.includes('我的套餐')" class="icon-error"></i>
              <i v-else class="icon-succes"></i>
            </div>
          </div>
        </div>
        <!-- 返费检测 -->
        <div class="zd-bot-list">
          <div class="bot-title" id="top_checkRefund_title">
            <p class="left">返费检测</p>
            <p class="right" v-if="checking.includes('返费检测')">诊断中</p>
            <p class="right" v-else-if="checked.includes('返费检测')">已诊断</p>
            <p class="right" v-else>待诊断</p>
          </div>
          <div class="bot-desc-box">
            <div class="bot-desc" id="top_checkRefund_returnFee" style="display: flex;">
              <p>我的返费</p>
              <i v-if="checking.includes('我的返费')" class="icon-load"></i>
              <i v-else-if="checkerror.includes('我的返费')" class="icon-error"></i>
              <i v-else class="icon-succes"></i>
            </div>
          </div>
        </div>
        <!-- 增值检测 -->
        <div class="zd-bot-list">
          <div class="bot-title" id="top_checkIncrement_title">
            <p class="left">增值检测</p>
            <p class="right" v-if="checking.includes('增值检测')">诊断中</p>
            <p class="right" v-else-if="checked.includes('增值检测')">已诊断</p>
            <p class="right" v-else>待诊断</p>
          </div>
          <div class="bot-desc-box">
            <div class="bot-desc" id="top_checkIncrement_increment" style="display: flex;">
              <p>增值业务</p>
              <i v-if="checking.includes('增值业务')" class="icon-load"></i>
              <i v-else-if="checkerror.includes('增值业务')" class="icon-error"></i>
              <i v-else class="icon-succes"></i>
            </div>
          </div>
        </div>
        <!-- 国漫检测 -->
        <div class="zd-bot-list">
          <div class="bot-title" id="top_checkNationalRoaming_title">
            <p class="left">国漫检测</p>
            <p class="right" v-if="checking.includes('国漫检测')">诊断中</p>
            <p class="right" v-else-if="checked.includes('国漫检测')">已诊断</p>
            <p class="right" v-else>待诊断</p>
          </div>
          <div class="bot-desc-box">
            <div class="bot-desc" id="top_checkNationalRoaming_gmVoice" style="display: flex;">
              <p>国际港澳台语音及漫游检测</p>
              <i v-if="checking.includes('国际港澳台语音及漫游检测')" class="icon-load"></i>
              <i v-else-if="checkerror.includes('国际港澳台语音及漫游检测')" class="icon-error"></i>
              <i v-else class="icon-succes"></i>
            </div>
            <div class="bot-desc" id="top_checkNationalRoaming_gmData">
              <p>国际港澳台（上网）漫游检测</p>
              <i v-if="checking.includes('国际港澳台（上网）漫游检测')" class="icon-load"></i>
              <i v-else-if="checkerror.includes('国际港澳台（上网）漫游检测')" class="icon-error"></i>
              <i v-else class="icon-succes"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="box" id="box2">
      <div class="top-zd-box" id="top_checking-ed" style="display: block;">
        <!-- 诊断结果展示 -->
        <div id="check-result">
          <p class="phone">我的号码：<span class="telephone">{{ telephone }}</span></p>
          <!-- 优 -->
          <div id="top1" style="display: none;">
            <div class="zd-midle">
              <h2>优</h2>
              <p>账户使用情况</p>
            </div>
            <div class="zd-control">
              <p>钱都去哪了？历史账单告诉你</p>
              <a class="btn" href="" style="display: none;">查看账单</a>
            </div>
          </div>
          <!-- 良缴费 -->
          <div id="top2" style="display: block;">
            <div class="zd-midle">
              <h2>良</h2>
              <p>账户使用情况</p>
            </div>
            <!-- 流量 -->
            <div class="zd-control" id="top21" style="display: flex;">
              <p>流量阈值预警？不怕 → </p>
              <a class="btn" href="" style="display: none;">立即充值</a>
            </div>
            <!-- 5g -->
            <div class="zd-control" id="top22">
              <p>套餐使用不爽？立即办理5G升级包</p>
              <a class="btn" href="" style="display: none;">去办理</a>
            </div>
            <!-- 花费 -->
            <div class="zd-control" id="top23">
              <p>话费余额不足？不怕 → </p>
              <a class="btn" href="" style="display: none;">立即充值</a>
            </div>
          </div>
          
          <div class="zd-more">
            <p>上滑查看详情</p>
            <img src="./img/scroll-more.png" alt="">
          </div>
        </div>
      </div>
      <div class="zd-all-top" id="top_checking-bittom" style="display: none;">
        <div class="zd-all-top-img"></div>
        <p id="checking-title">正在诊断您的号码：<span class="telephone">153****3782</span></p>
      </div>
      <div class="top-zd-fix-out" style="display: none;">
        <div class="top-zd-fix">
          <div>
            <p>我的号码：<span class="telephone">153****3782</span></p>
            <p id="p">账户使用情况：<span id="top-status">良</span></p>
          </div>
          <span id="top-buttom">
          <a href="">立即充值</a>
        </span>
        </div>
      </div>
      <div class="list-content" id="checking-content">
        <!-- 安全检测 -->
        <div class="list-box  on" id="checkSecurity">
          <div class="list-title">
            <div class="left">
              <i class="icon-anjx"></i>
              <p>安全检测</p>
            </div>
            <div v-if="checking.includes('安全检测')" class="right">
              <div class="load"><i class="icon-load"></i>
                <p>诊断中</p></div>
            </div>
            <div v-else class="right">
              <div class="desc"><i class="icon-succes"></i>
                <p>无异常/共2项</p></div>
              <div class="more" @click="close.checkSecurity = !close.checkSecurity"><p>
                {{ close.checkSecurity ? '收起' : '展开' }}</p> <i
                :class="close.checkSecurity? 'icon-close': 'icon-open'"></i></div>
            </div>
          </div>
          <div class="list-bot" v-show="close.checkSecurity">
            <div class="list-remark " id="checkSecurity_realName">
              <template v-if="checking.includes('实名认证')">
                <div class="title"><p>实名认证：</p> <i class="icon-load"></i></div>
              </template>
              <template v-else>
                <!-- 成功 -->
                <template v-if="msg.checkSecurity.realName.error">
                  <div class="title error"><p>实名认证：</p> <i class="icon-error"></i></div>
                  <div v-if="msg.checkSecurity.realName.error" class="desc"><p>无法获取用户数据，请稍后再试</p>
                    <span class="btn-bg"> 重试 </span></div>
                </template>
                <template v-else-if="msg.checkSecurity.realName.data">
                  <div class="title"><p>实名认证：</p> <i class="icon-succes"></i></div>
                  <div class="desc"><p>您的号码已实名</p></div>
                </template>
                <template v-else>
                  <div class="title error"><p>实名认证：</p> <i class="icon-error"></i></div>
                  <div v-if="msg.checkSecurity.realName.error" class="desc"><p>您的号码未实名</p><a
                    v-if="msg.checkSecurity.realName.buttonName" :href='msg.checkSecurity.realName.buttonUrl'
                    class="btn-bg">{{ msg.checkSecurity.realName.buttonName }}</a></div>
                </template>
              </template>
            </div>
            <div class="list-remark " id="checkSecurity_fiveNumbers">
              <template v-if="checking.includes('一证五号')">
                <div class="title"><p>一证五号：</p> <i class="icon-load"></i></div>
              </template>
              <template v-else>
                <template v-if='msg.checkSecurity.fiveNumbers.error'>
                  <div class="title error"><p>一证五号：</p> <i class="icon-error"></i></div>
                  <div v-if="msg.checkSecurity.realName.error" class="desc"><p>无法获取用户数据，请稍后再试</p>
                    <span class="btn-bg"> 重试 </span></div>
                </template>
                <template v-else>
                  <div class="title "><p>一证五号：</p> <i class='icon-succes'></i></div>
                  <div class="desc"><p>您还可以办理<span>{{ msg.checkSecurity.realName.data }}</span>个号码</p></div>
                </template>
              </template>
            </div>
          </div>
        </div>
        <!-- 流量检测 -->
        <div class="list-box" id="checkFlow">
          <div class="list-title">
            <div class="left">
              <i class="icon-lljc"></i>
              <p>流量检测</p>
            </div>
            <div class="right" v-if="msg.checkFlow.error">
              <div class="desc"><i class="icon-error"></i>
                <p>数据获取失败</p></div>
              <div class="btn"><p>重试</p></div>
            </div>
            <div v-if="checking.includes('流量检测')" class="right">
              <div class="load"><i class="icon-load"></i>
                <p>诊断中</p></div>
            </div>
            <div v-else class="right">
              <div class="desc"><i class="icon-succes"></i>
                <p>无异常/共3项</p></div>
              <div class="more" @click="close.checkFlow = !close.checkFlow"><p>{{ close.checkFlow ? '收起' : '展开' }}</p>
                <i :class="close.checkFlow? 'icon-close': 'icon-open'"></i></div>
            </div>
          </div>
          <div v-show="close.checkFlow" class="list-bot on">
            <div class="list-remark ">
              <div class="title" :class="{'error':msg.checkFlow.flowExceedAmount>0}"><p>流量超出：</p> <i
                :class="msg.checkFlow.flowExceedAmount>0? 'icon-error':'icon-succes'"></i></div>
              <div class="desc"><p>您无流量超出</p></div>
            </div>
            <div class="list-remark ">
              <div class="title"><p class="">定向流量包：</p> <i class="icon-succes"></i></div>
              <div class="desc" v-if="msg.checkFlow.dxFlowPkg.length === 0"><p>无定向流量包</p></div>
              <div class="desc" v-else style="display:block;"><p v-for="i in msg.checkFlow.dxFlowPkg" :key="i">
                {{ i }}</p></div>
            </div>
            <div class="list-remark ">
              <div class="title"><p class="">其他流量包：</p> <i class="icon-succes"></i></div>
              <div class="desc" v-if="msg.checkFlow.otherFlowPkg.length === 0"><p>无其他流量包</p></div>
              <div class="desc" v-else style="display:block;"><p v-for="i in msg.checkFlow.otherFlowPkg" :key="i">
                {{ i }}</p></div>
            </div>
          </div>
        </div>
        <!-- 话费检测 -->
        <div class="list-box" id="checkCost">
          <div class="list-title">
            <div class="left">
              <i class="icon-hfjc"></i>
              <p>话费检测</p>
            </div>
            <div class="right" v-if="msg.checkFlow.error">
              <div class="desc"><i class="icon-error"></i>
                <p>数据获取失败</p></div>
              <div class="btn"><p>重试</p></div>
            </div>
            <div v-if="checking.includes('话费检测')" class="right">
              <div class="load"><i class="icon-load"></i>
                <p>诊断中</p></div>
            </div>
            <div class="right">
              <div class="desc"><i class="icon-succes"></i>
                <p>无异常/共3项</p></div>
              <div class="more" @click="close.checkCost = !close.checkCost"><p>{{ close.checkCost ? '收起' : '展开' }}</p>
                <i :class="close.checkCost? 'icon-close': 'icon-open'"></i></div>
            </div>
          </div>
          <div v-show="close.checkCost" class="list-bot on">
            <!-- 待缴费用 -->
            <div class="list-remark ">
              <template v-if="checking.includes('待缴费用')">
                <div class="title"><p>待缴费用：</p> <i class="icon-load"></i></div>
              </template>
              <template v-else-if="msg.checkCost.amountOverDue.error">
                <div class="title error"><p>待缴费用:</p> <i class="icon-error"></i></div>
                <div v-if="msg.checkSecurity.realName.error" class="desc"><p>无法获取用户数据，请稍后再试</p><span
                  class="btn-bg"> 重试 </span></div>
              </template>
              <template v-else>
                <div class="title"><p>待缴费用:</p> <i class="icon-succes"></i></div>
                <div class="desc"><p>您本月无待缴费用</p><a
                  href="https://wapact.189.cn:9001/5g_search/chargeResult.html?shopid=20001" class="btn-bg"> 余额查询 </a>
                </div>
              </template>
            </div>
            <!-- 余额预警： -->
            <div class="list-remark ">
              <template v-if="checking.includes('余额预警')">
                <div class="title"><p>余额预警：</p> <i class="icon-load"></i></div>
              </template>
              <template v-else-if="msg.checkCost.realBalance.error">
                <div class="title error"><p>余额预警:</p> <i class="icon-error"></i></div>
                <div v-if="msg.checkCost.realBalance.error" class="desc"><p>无法获取用户数据，请稍后再试</p><span
                  class="btn-bg"> 重试 </span></div>
              </template>
              <template v-else>
                <div class="title" :class="msg.checkCost.realBalance<0?'error':''"><p>余额预警:</p> <i
                  :class="msg.checkCost.realBalance<0?'icon-error':'icon-succes'"></i></div>
                <div class="desc">
                  <p>{{ msg.checkCost.realBalance > 0 ? '您的账户使用正常' : '您的余额不足10元，建议尽快充值' }}</p>
                  <a href="https://wapact.189.cn:9001/5g_search/chargeResult.html?shopid=20001" class="btn-bg"> 余额查询 </a>
                </div>
              </template>
            </div>
            <div class="list-remark ">
              <template v-if="checking.includes('我的套餐')">
                <div class="title"><p>我的套餐：</p> <i class="icon-load"></i></div>
              </template>
              <template v-else-if="msg.checkCost.prodOfferName.error">
                <div class="title error"><p>我的套餐:</p> <i class="icon-error"></i></div>
                <div v-if="msg.checkCost.prodOfferName.error" class="desc"><p>无法获取用户数据，请稍后再试</p><span
                  class="btn-bg"> 重试 </span></div>
              </template>
              <template v-else>
                <div class="title"><p>我的套餐:</p> <i class="icon-succes"></i></div>
                <div class="desc"><p>{{ msg.checkCost.prodOfferName.data }}</p></div>
              </template>
            </div>
          </div>
        </div>
        <!-- 返费检测 -->
        <div class="list-box" id="checkRefund">
          <div class="list-title">
            <div class="left">
              <i class="icon-ffjc"></i>
              <p>返费检测</p>
            </div>
            <div v-if="checking.includes('返费检测')" class="right">
              <div class="load"><i class="icon-load"></i>
                <p>诊断中</p></div>
            </div>
            <div class="right" v-else-if="msg.checkRefund.error">
              <div class="desc"><i class="icon-error"></i>
                <p>数据获取失败</p></div>
              <div class="btn"><p>重试</p></div>
            </div>
            <div v-else class="right">
              <div class="desc"><i class="icon-succes"></i>
                <p>无异常/共1项</p></div>
              <div class="more" @click="close.checkRefund = !close.checkRefund"><p>
                {{ close.checkRefund ? '收起' : '展开' }}</p> <i :class="close.checkRefund? 'icon-close': 'icon-open'"></i>
              </div>
            </div>
          </div>
          <div v-show="close.checkRefund" class="list-bot on">
            <div class="list-remark " id="checkRefund_returnFee">
              <div class="title ">
                <p class="">我的返费：</p>
                <i class="icon-succes"></i>
              </div>
              <div class="desc">
                <div class="remark" v-if="msg.checkRefund.length === 0"><p>近期无返费</p></div>
                <div class="remark" v-if="msg.checkRefund.length === 0"><p v-for="item in msg.checkRefund" :key="item">
                  {{ item }}</p></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 增值检测 -->
        <div class="list-box" id="checkIncrement">
          <div class="list-title">
            <div class="left">
              <i class="icon-zzjc"></i>
              <p>增值检测</p>
            </div>
            <div v-if="checking.includes('增值检测')" class="right">
              <div class="load"><i class="icon-load"></i>
                <p>诊断中</p></div>
            </div>
            <div class="right" v-else-if="msg.checkFlow.error">
              <div class="desc"><i class="icon-error"></i>
                <p>数据获取失败</p></div>
              <div class="btn"><p>重试</p></div>
            </div>
            <div v-else class="right">
              <div class="desc"><i class="icon-succes"></i>
                <p>无异常/共1项</p></div>
              <div class="more" @click="close.checkIncrement = !close.checkIncrement"><p>
                {{ close.checkIncrement ? '收起' : '展开' }}</p> <i
                :class="close.checkIncrement? 'icon-close': 'icon-open'"></i></div>
            </div>
          </div>
          <div v-show="close.checkIncrement" class="list-bot on">
            <div class="list-remark " id="checkIncrement_increment">
              <div class="title "><p class="">增值业务：</p><i class="icon-succes"></i></div>
              <div class="desc">
                <div class="remark" v-if="msg.checkIncrement.data.length"><p v-for="item in msg.checkIncrement.data"
                                                                             :key="item">{{ item }}</p></div>
                <div class="remark" v-else><p>近期无办理</p></div>
              </div>
            </div>
          </div>
        </div>
        <!--国漫检测  -->
        <div class="list-box" id="checkNationalRoaming">
          <div class="list-title">
            <div class="left">
              <i class="icon-gmjc"></i>
              <p>国漫检测</p>
            </div>
            <div v-if="checking.includes('增值检测')" class="right">
              <div class="load"><i class="icon-load"></i>
                <p>诊断中</p>
              </div>
            </div>
            <div class="right" v-else-if="msg.checkNationalRoaming.error">
              <div class="desc"><i class="icon-error"></i>
                <p>数据获取失败</p></div>
              <div class="btn"><p>重试</p></div>
            </div>
            <div v-else class="right">
              <div class="desc"><i class="icon-succes"></i>
                <p>无异常/共1项</p>
              </div>
              <div class="more" @click="close.checkNationalRoaming = !close.checkNationalRoaming">
                <p>{{ close.checkNationalRoaming ? '收起' : '展开' }}</p>
                <i :class="close.checkNationalRoaming? 'icon-close': 'icon-open'"></i>
              </div>
            </div>
          </div>
          <div v-show="close.checkNationalRoaming" class="list-bot on">
            <div class="list-remark ">
              <div class="title "><p class="">国际港澳台语音及漫游检测:</p> <i class="icon-succes"></i></div>
              <div class="desc"><p>{{ msg.checkNationalRoaming.voice ? '您已开通' : '您未开通' }}</p></div>
            </div>
            <div class="list-remark ">
              <div class="title "><p class="">国际港澳台（上网）漫游检测::</p> <i class="icon-succes"></i></div>
              <div class="desc"><p>{{ msg.checkNationalRoaming.data ? '您已开通' : '您未开通' }}</p></div>
            </div>
          </div>
        </div>
      
      <!-- 宽带检测 -->
      <div class="list-box on" id="checkBroadband">
        <div class="list-title">
          <div class="left">
            <i class="icon-kdjc"></i>
            <p>宽带检测</p>
          </div>
          <div v-if="checking.includes('增值检测')" class="right">
            <div class="load"><i class="icon-load"></i>
              <p>诊断中</p></div>
          </div>
          <div class="right" v-else-if="msg.checkBroadband.error">
            <div class="desc"><i class="icon-error"></i>
              <p>数据获取失败</p></div>
            <div class="btn"><p>重试</p></div>
          </div>
          <div v-else class="right">
            <div class="desc"><i class="icon-succes"></i>
              <p>无异常/共1项</p></div>
            <div class="more" @click="close.checkBroadband = !close.checkBroadband"><p>
              {{ close.checkBroadband ? '收起' : '展开' }}</p> <i
              :class="close.checkBroadband? 'icon-close': 'icon-open'"></i></div>
          </div>
        </div>
        <div v-show="close.checkBroadband" class="list-bot on" id="checkBroadband_serialNumber">
          <div class="list-remark " v-if="msg.checkBroadband.data.length===0">
            <div class="title "><p class="">我的账户:</p><i class="icon-succes"></i></div>
            <div class="desc"><p>您名下无宽带账户</p></div>
          </div>
          <template v-else>
            <div v-for="item in msg.checkBroadband" :key="item">
              <div class="list-remark ">
                <div class="title "><p class="">我的账户:</p> <i class="icon-succes"></i></div>
                <div class="desc"><p>您的宽带账户是{{ item.serialNumber }}</p></div>
              </div>
              <div class="list-remark ">
                <div class="title error">
                  <p class="">我的欠费：</p>
                  <i class="icon-error"></i>
                </div>
                <div class="desc">
                  <p>您的宽带账户{{ item.serialNumber }}欠费<span>{{ item.amountOverDue }}</span>元</p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <!-- 5G检测 -->
      <div class="list-box on" id="check5G">
        <div class="list-title">
          <div class="left">
            <i class="icon-5Gjc"></i>
            <p>5G检测</p>
          </div>
          <div v-if="checking.includes('5G检测')" class="right"><div class="load"> <i class="icon-load"></i><p>诊断中</p> </div></div>
          <div class="right" v-else-if="msg.check5G.error" >
            <div class="desc"><i class="icon-error"></i><p>数据获取失败</p></div>
            <div class="btn"><p>重试</p></div>
          </div>
          <div v-else class="right"><div class="desc"> <i class="icon-succes"></i> <p>无异常/共1项</p> </div> <div class="more" @click="close.check5G = !close.check5G"> <p>{{close.check5G? '收起':'展开'}}</p> <i :class="close.check5G? 'icon-close': 'icon-open'"></i> </div></div>
        </div>
        <div v-show="close.check5G" class="list-bot on">
          <div class="list-remark " id="check5G_detection5G">
            <div class="title" :class="{'error':!msg.check5G.data}">
              <p class="">会员状态检测:</p>
              <i :class="msg.check5G.data?'icon-succes':'icon-error'" ></i>
            </div>
            <div class="desc">
              <p>{{msg.check5G.data? '您已是5G会员':'您还未升级5G'}}</p> <a v-if="msg.check5G.buttonName" :href="msg.check5G.buttonUrl" class="btn-bg">{{msg.check5G.buttonName}}</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 、权益检测 -->
      <div class="list-box on" id="checkLegalRight">
        <div class="list-title">
          <div class="left">
            <i class="icon-qyjc"></i>
            <p>权益检测</p>
          </div>
           <div v-if="checking.includes('权益检测')" class="right"><div class="load"> <i class="icon-load"></i><p>诊断中</p> </div></div>
          <div class="right" v-else-if="msg.check5G.error" >
            <div class="desc"><i class="icon-error"></i><p>数据获取失败</p></div>
            <div class="btn"><p>重试</p></div>
          </div>
          <div v-else class="right"><div class="desc"> <i class="icon-succes"></i> <p>无异常/共3项</p> </div> <div class="more" @click="close.check5G = !close.check5G"> <p>{{close.check5G? '收起':'展开'}}</p> <i :class="close.check5G? 'icon-close': 'icon-open'"></i> </div></div>
        </div>
        <div class="list-bot">
          <!-- 我的星级 -->
          <div class="list-remark " id="checkLegalRight_myStarLevel">
            <template v-if="msg.checkLegalRight.myStarLevel.error">
                <div class="title error"><p>我的星级:</p> <i class="icon-error"></i></div>
                <div class="desc"><p>无法获取用户数据，请稍后再试</p><span
                  class="btn-bg">重试</span></div>
              </template>
            <template v-else>
              <div class="title "><p class="">我的星级:</p><i class="icon-succes"></i></div><div class="desc"><p>{{msg.checkLegalRight.myStarLevel.data}}</p></div>
            </template>
          </div>
          <!-- 我的积分 -->
          <div class="list-remark " id="checkLegalRight_myIntegral">
            <template v-if="msg.checkLegalRight.myIntegral.error">
                <div class="title error"><p>我的积分:</p> <i class="icon-error"></i></div>
                <div class="desc"><p>无法获取用户数据，请稍后再试</p><span
                  class="btn-bg">重试</span></div>
              </template>
            <template v-else>
              <div class="title "><p class="">我的积分:</p><i class="icon-succes"></i></div><div class="desc"><p>您当前积分为<span>{{msg.checkLegalRight.myIntegral.data}}</span>分</p></div>
            </template>
          </div>
          <!-- 年底到期积分 -->
          <div class="list-remark " id="checkLegalRight_integralDue">
            <template v-if="checking.includes('年底到期积分')">
                <div class="title"><p>年底到期积分:</p> <i class="icon-load"></i></div>
            </template>
            <template v-else-if="msg.checkLegalRight.integralDue.error">
                <div class="title error"><p>年底到期积分:</p> <i class="icon-error"></i></div>
                <div class="desc"><p>无法获取用户数据，请稍后再试</p><span
                  class="btn-bg">重试</span></div>
            </template>
            <template v-else>
              <div class="title" :class="{'error':msg.checkLegalRight.integralDue.data>0}" ><p class="">年底到期积分:</p><i :class="msg.checkLegalRight.integralDue.data>0?'icon-error':'icon-succes'"></i></div>
              <div class="desc">
                <p>您年底到期积分为<span>{{msg.checkLegalRight.integralDue.data}}</span>分</p>
                <a v-if="msg.checkLegalRight.integralDue.buttonName" :href="msg.checkLegalRight.integralDue.buttonUrl" class="btn-bg">{{msg.checkLegalRight.integralDue.buttonName}}</a>
              </div>
            </template>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
  data() {
    return {
      start: true,
      loading: false,
      checking: '',
      checked: '流量检测',
      checkerror: '年底到期积分',
      telephone: '',
      msg: {
        checkSecurity: {
          realName: {error: true, data: false},
          fiveNumbers: {error: true, data: 5}
        },
        checkFlow: {
          error: false,
          flowExceedAmount: 0,
          dxFlowPkg: [1, 2, 3, 4],
          otherFlowPkg: []
        },
        checkCost: {
          amountOverDue: {
            error: true,
            data: 0
          },
          // 预警
          realBalance: {
            error: true,
            data: 20
          },
          // 套餐
          prodOfferName: {
            error: true,
            data: 'xx'
          }
        },
        // 返费
        checkRefund: {
          error: false
        },
        //增值
        checkIncrement: {
          error: false,
          data: []
        },
        //国漫
        checkNationalRoaming: {
          error: false,
          voice: true,
          data: true
        },
        // 宽带
        checkBroadband: {
          error: false,
          data: []
        },
        check5G: {
          error: false,
          data: true,
        },
        //权益
        checkLegalRight:{
          myStarLevel: {
            error:false,
            data:'xxx'
          },
          myIntegral:{
            error:false,
            data:'30'
          },
          integralDue:{
            error:false,
            data: 300
          }
        }
        
      },
      close: {
        checkSecurity: false,
        checkFlow: false,
        checkCost: false,
        checkRefund: false,
        checkIncrement: false,
        checkNationalRoaming: false,
        checkBroadband: false,
        check5G: false,
        checkLegalRight: false
      }
    }
  },
  created() {
    const telephone = window.sessionStorage.getItem('telephone')
    this.telephone = telephone && telephone.replace(/(\d{3})\d*(\d{4})/, "$1****$2")
    this.realName()
  },
  methods: {
    // 安全 实名认证
    realName() {
      this.checking ='安全检测-实名认证' 
      this.$api.checkSecurity.realName().then(res => {
        if(res.code === 0){
          this.msg.checkFlow.fiveNumbers.data = res.data.result
        }else{
        this.msg.checkSecurity.fiveNumbers.error = true
        }
      }).finally(() => {
        this.checking=''
        this.start && this.fiveNumbers()
      })
    },
    // 一证五号
    fiveNumbers() {
      this.checking = '安全检测-一证五号'
      this.$api.checkSecurity.fiveNumbers().then(res => {
        if(res.code === 0){
          this.msg.checkSecurity.fiveNumbers.data = res.data.validNum
        }else{
        this.msg.checkSecurity.fiveNumbers.error = true
        }
      }).finally(() => {
        this.checking=''
        this.start && this.checkFlow()
      })
    },
    // 流量检测
    checkFlow(){
      this.checking = '流量检测'
      this.$api.checkSecurity.checkFlow().then(res => {
        if(res.code === 0){
          this.checkFlow.flowExceedAmount = res.data.flowExceedAmount
          this.checkFlow.dxFlowPkg = res.data.dxFlowPkg || []
          this.checkFlow.otherFlowPkg = res.data.otherFlowPkg || []
        } else{
        this.msg.checkFlow.error = true
        }
      }).finally(() => {
        this.checking=''
        this.start && this.toBePayFees()
      })
    },
    // 代缴费用
    toBePayFees(){
      this.checking = '话费检测-代缴费用'
      this.$api.checkSecurity.toBePayFees().then(res => {
        if(res.code === 0){
          this.checkCost.amountOverDue.data = res.data.amountOverDue
        } else{
        this.msg.checkCost.amountOverDue.error = true
        }
      }).finally(() => {
        this.checking=''
        this.start && this.fiveNumbers()
      })
    },
    //余额预警
    toBePayFees(){
      this.checking = '话费检测-余额预警'
      this.$api.checkSecurity.toBePayFees().then(res => {
        if(res.code === 0){
          this.checkCost.realBalance.data = res.data.realBalance
        } else{
        this.msg.checkCost.realBalance.error = true
        }
      }).finally(() => {
        this.checking=''
        this.start && this.fiveNumbers()
      })
    },
    //余额预警
    toBePayFees(){
      this.checking = '话费检测-余额预警'
      this.$api.checkSecurity.toBePayFees().then(res => {
        if(res.code === 0){
          this.checkCost.realBalance.data = res.data.realBalance
        } else{
        this.msg.checkCost.realBalance.error = true
        }
      }).finally(() => {
        this.checking=''
        this.start && this.fiveNumbers()
      })
    }
  }
}
</script>

<style lang="scss">
html {
  font-size: 20.5px;
}

.list-content .list-box .list-bot, .list-box {
  display: block;
}

.icon-close {
  display: block;
  width: 1rem;
  height: 1rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAALCAYAAAByF90EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyREUyN0RFMkUyQzExMUVBODU2N0ZGN0M4MUQ3NzkzMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyREUyN0RFM0UyQzExMUVBODU2N0ZGN0M4MUQ3NzkzMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJERTI3REUwRTJDMTExRUE4NTY3RkY3QzgxRDc3OTMxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJERTI3REUxRTJDMTExRUE4NTY3RkY3QzgxRDc3OTMxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UD2ccgAAAHZJREFUeNqczMEJgDAMhWEbXECsB11CV3DMzGL30BE8iDOYQwIiNX364IccwheYuSqslYJ0eE9UQKKUpEXvX1BUYNJcjABk01yMAGTWXIwAZNdcjADE5mIEIm9YMow+IDlsNMygAURyWC919Q04QeSJNdJ6CTAAYUovvfo4uDYAAAAASUVORK5CYII=) center center no-repeat;
  background-size: 0.45rem auto;
  transform: rotate(0deg);
  transition: all ease-in-out 0.1s;
}

.icon-open {
  display: block;
  width: 1rem;
  height: 1rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAALCAYAAAByF90EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyREUyN0RFMkUyQzExMUVBODU2N0ZGN0M4MUQ3NzkzMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyREUyN0RFM0UyQzExMUVBODU2N0ZGN0M4MUQ3NzkzMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJERTI3REUwRTJDMTExRUE4NTY3RkY3QzgxRDc3OTMxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJERTI3REUxRTJDMTExRUE4NTY3RkY3QzgxRDc3OTMxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UD2ccgAAAHZJREFUeNqczMEJgDAMhWEbXECsB11CV3DMzGL30BE8iDOYQwIiNX364IccwheYuSqslYJ0eE9UQKKUpEXvX1BUYNJcjABk01yMAGTWXIwAZNdcjADE5mIEIm9YMow+IDlsNMygAURyWC919Q04QeSJNdJ6CTAAYUovvfo4uDYAAAAASUVORK5CYII=) center center no-repeat;
  background-size: 0.45rem auto;
  transform: rotate(180deg);
  transition: all ease-in-out 0.1s;
}

.list-content .list-box .list-bot .list-remark > div.desc > span[class*= 'btn-bg'] {
  display: block;
  width: 3rem;
  height: 1.2rem;
  border-radius: 0.2rem;
  border: solid 1px #007aff;
  font-size: 0.55rem;
  font-weight: normal;
  line-height: 1.2rem;
  color: #007aff;
  text-align: center;
  margin-left: 0.55rem;
  background-color: aliceblue;
}

.list-content .list-box .list-bot.on {
  background-color: #fafafa;
  padding: 0.35rem 0.65rem 0.35rem 2rem;
  display: block;
}
</style>
