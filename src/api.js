import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8081',
});

const mobileType =  ()=>{
  var u= navigator.userAgent.toLowerCase()
  if (/(iphone|ipad|ipod|ios|macos|mac)/i.test(u)) { //判断iPhone|iPad|iPod|iOS
          // if(/(qq)/i.test(u)) return 'ios'
          // else if(/()/i.test(u)) alert('iOS的微信')
          if(/(ctclient)/i.test(u)) return '4'
          else return '1'
      } 
      else if (/(android)/i.test(u)) {  //判断Android
          // if(/(qq)/i.test(u)) alert('android的qq')
          // else if(/(wexin)/i.test(u)) alert('android的微信')
          if(/(ctclient)/i.test(u)) return '5'
          else return '2'
      } 
      else return '3'
}
const data = {
  telephone: window.sessionStorage.getItem('telephone'),
  mobileType: mobileType()
}
export default {
  checkSecurity: {
    realName: () => http({ method: 'post', url: '/yjzd/yzwh', data }),
    fiveNumbers: () => http({ method: 'post', url: '/yjzd/yzwh', data }),
    checkFlow: () => http({ method: 'post', url: '/yjzd/lljc', data }),
    //余额预警
    toBePayFees:() => http({ method: 'post', url: '/yjzd/djfy', data }),
    // 
    balanceWarning: () => http({ method: 'post', url: '/yjzd/yeyj', data }),
    myPackage: () => http({ method: 'post', url: '/yjzd/wdtc', data }),
    returnFee: () => http({ method: 'post', url: '/yjzd/wdff', data }),
    increment: () => http({ method: 'post', url: '/yjzd/zzyw', data }),
    checkNationalRoaming: () => http({ method: 'post', url: '/yjzd/gmjc', data }),
    checkBroadband: () => http({ method: 'post', url: '/yjzd/kdjc', data }),
    check5G: () => http({ method: 'post', url: '/yjzd/hyztjc', data }),
    myStarLevel: () => http({ method: 'post', url: '/yjzd/wdxj', data }),
    myIntegral: () => http({ method: 'post', url: '/yjzd/wdjf', data }),
    integralDue: () => http({ method: 'post', url: '/yjzd/nddqjf', data }),

  }
}