const domhost = "/api/webEms/";
export const base = {
  data() {
    return {
      isNet: false , // true 本地调试      false 部署服务端,
      language:{},
    }
  },
  methods: {
    //利用此函数，登陆超时返回登陆页
    timeOuthandle(url) {
      var _this = this;
      _this.$http.post(url + 'public/systemTime', "")
        .then(function (response) {
          if (response.data.state == 2) {
            // _this.$toast.center('warn.png',response.data.msg)
            _this.$router.push("/");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    host(url) {
      if (this.isNet) {
        return domhost + url;
      } else {
        return '/webEms/' + url;
      }
    },
    //消息弹框--1s消失
    dialog(msg,type){
      var pThis=this;
      pThis.$message({
        showClose: true,
        duration:1500,
        offset:320,
        message: msg,
        type: type
      });
    },
    //告警级别
    alarmLevel(sign){
      if(sign==1){
        return "紧急告警"
      }else if(sign==2){
        return "主要告警"
      }else if(sign==3){
        return "次要告警"
      }else if(sign==4){
        return "提示告警"
      }else{
        return "无"
      }
    },
    //告警类别
    alarmType(sign){
      if(sign==1){
        return "设备告警"
      }else if(sign==2){
        return "通信告警"
      }else if(sign==3){
        return "维护告警"
      }else if(sign==4){
        return "电源告警"
      }else{
        return "无"
      }
    },
    //告警状态
    alarmState(sign){
      if(sign==0){
        return "未确认"
      }else if(sign==1){
        return "已确认"
      }else{
        return ""
      }
    },
    //告警内容
    alarmContent(content){
      var pThis=this;
      if(content==''){return pThis.common.language[content]}
      if(content.indexOf('alarm_info') != -1){
        // if(content.indexOf(':') !=-1){
        //   var str="";
        //   var index=content.split(':');
        //   //console.log(index)
        //   // str= pThis.common.language([index[0]);
        // }else{
        return pThis.common.language[content]
        // }
      }else{
        return content;
      }
    },
    //毫秒转日期
    secondChangeDate(time){
      if(!time){return ""}
      var date=new Date(parseInt(time));
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      if(month<=9){month="0"+month}
      if(day<=9){day="0"+day}
      if(hour<=9){hour="0"+hour}
      if(minute<=9){minute="0"+minute}
      if(second<=9){second="0"+second}
      var haomiao=year+"-"+month+'-'+day+" "+hour+":"+minute+":"+second;
      return haomiao;
    },
    jsToFormDate(val){
      // let formData = new FormData();
      // for (var i in obj) {
      //     formData.append(i, obj[i])
      // }
      // return formData;
      let formData = new FormData();
      for (let i in val) {
        isArray(val[i], i);
      }
      function isArray(array, key) {
        if (array == undefined || typeof array == "function") {
          return false;
        }
        if (typeof array != "object") {
          formData.append(key, array);
        } else if (array instanceof Array) {
          if (array.length == 0) {
            formData.append(`${key}`, "");
          } else {
            for (let i in array) {
              for (let j in array[i]) {
                isArray(array[i][j], `${key}[${i}].${j}`);
              }
            }
          }
        } else {
          let arr = Object.keys(array);
          if (arr.indexOf("uid") == -1) {
            for (let j in array) {
              isArray(array[j], `${key}.${j}`);
            }
          } else {
            formData.append(`${key}`, array);
          }
        }
      }
      return formData;
    },
    ////method_end/////
  },

  /* ***路由跳转判断是否登录****/
  beforeRouteLeave  (to, from, next) {
    /*let _this = this;
    //let num =JSON.parse(sessionStorage.getItem('headermenu'));
    if (to.path == '/') {
     // sessionStorage.removeItem('logindata');
      next();
    } else {
      let logindata = sessionStorage.getItem('logindata');
      if (logindata) {
        this.$ajax.post(this.host('public/systemTime'),'')
          .then((response) => {
            //console.log(response.data)
            if (response.data.state == 2) {
              $(".header-ico li").find("a").removeClass("router-link-active");
              $(".header-ico li").removeClass("current");
              $(".header-ico li").eq(num).addClass('current');
              let backjson={"state":response.data.state,"msg":response.data.msg};
              _this.backLogin(backjson);
              sessionStorage.setItem('headermenu',num);
              //this.$router.push("/");
            }else if(response.data.state == 1){
              next();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        next({ path: '/' });
      }
    };
    //next();*/
    next();
  },
};
