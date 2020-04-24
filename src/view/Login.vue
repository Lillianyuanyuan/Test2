<template>
  <div class="login">
     <div class="login_box">
          <div class="logo">
              <img src="../assets/img/new_login.png">
          </div>
          <el-form ref="loginForm" :model="loginForm" label-width="80px" :rules="rules">
            <el-form-item prop="username">
              <span class="icon icon-username"></span>
              <el-input
                v-model="loginForm.username"
                @keyup.native="validate.numberAlphabet($event)"
                placeholder = "用户名"
                style="background-color:transparent;"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <span class="icon icon-password"></span>
              <el-input type="password" v-model="loginForm.password"
                        auto-complete="off"
                        placeholder = "密码"></el-input>
            </el-form-item>
            <div class="errorTip">
               <p>{{errorMsg}}</p><!--  <p>请输入用户名和密码</p> -->
            </div>
            <el-form-item>
               <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            </el-form-item>
          </el-form>
     </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username:'',
        password:'',
      },
      errorMsg:'',
      rules: {
        username:[
            { required: true, message: '请输入用户名!',trigger: 'blur' },
            { validator: this.validate.validateUsername,pattern: /^[a-zA-Z0-9]{3,15}$/,trigger: 'blur',}
        ],
        password: [
          { required: true, message: '请输入密码!'},
            //modify by zhangyy: 必须包含数字、字母、特殊字符(~!@#$%^&*_-)(8~18位)
           // { validator: this.validate.validatePassword,pattern: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*_-])[\da-zA-Z~!@#$%^&*_-]{6,18}$/,trigger: 'blur'}

          { validator: this.validate.validatePassword,pattern: /^[a-zA-Z0-9~!@#$%^&*_-]{6,18}$/,trigger: 'blur'}

        ]
      }
    }
  },
  mounted(){
      this.keyupSubmit();
      ////yyyy//////////
      //this.submitFormAdminLogin(); //需要登录界面的话把此代码屏蔽掉
  },
  methods:{
      keyupSubmit(){
        document.onkeydown=e=>{
          let _key=window.event.keyCode;
          if(_key===13){
            this.submitForm('loginForm')
          }
        }
      },
      submitForm(formName) {
          var pThis=this;
          pThis.$refs[formName].validate((valid) => {
              if (valid) {
                var obj={
                    username:jQuery.base64.encode(pThis.loginForm.username),   //base64加密
                    password:jQuery.base64.encode(pThis.loginForm.password),  //base64加密
                };
                // var obj={
                //     username:jQuery.base64.encode('hhh'),   //base64加密
                //     password:jQuery.base64.encode('admin@123'),  //base64加密
                // };
                var parse=pThis.jsToFormDate(obj);

                pThis.$http.post(pThis.host("login/submitVue"),parse).then(function(res){
                    //console.log("~~~~~~~~~~~~~~~~~loginsubmit~~~res.body~~~~~~~~~~~~~~~~~~~"); console.log(res.body);
                    if(res.status===200){
                        if(res.body.msg === "success"){
                            this.$store.commit('setCurrentUserOnline', res.body.data);
                            //console.log("~~~~~~~~~~~~~~~~~login~~this.$store.state~~~~~~~~~~~~~~~~~~~~~~~~~");
                            //console.log(this.$store.state);
                            sessionStorage.setItem('store', JSON.stringify(this.$store.state))
                            pThis.$router.push({ path:'/home'}) //登录成功
                        }
                        else{
                          this.errorMsg = res.body.msg ;
                        }
                    }
                    else{
                         this.errorMsg = "服务器响应超时或其他未知错误";
                    }
                })

              } else {
                  console.log('error submit!!');
                  return false;
              }
          });
      },
      //用admin 888888直接登录进去
      submitFormAdminLogin() {
          this.submitForm('loginForm');
      },

  }
}
</script>
<style lang="less">
.login{
  width:100%;
  height:100%;
  background:url('../assets/img/login_bg.png') no-repeat 0% 0%;
}
.logo{
  text-align:center;
  margin-bottom:40px;
}
 .login_box{
    width:470px;
    height:400px;
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-200px;
    margin-left:-230px;
    .el-form-item__content{
      width:100%;
      margin-left:0!important;
    }
    .el-input{
      width:100%;
    }
    .el-input__inner{
      border:1px solid #009ec1;
      padding-left:50px;
      color:#fff;
      background-color:#004a6a!important;
      font-size:18px;
      height:50px!important;
    }
   .el-button{
     display:inline-block;
     width:100%!important;
     font-size:24px!important;
     background-color: #00afcf;
     height:50px!important;
   }
   /*position: relative;*/
   .icon{
     width:23px;
     height:25px;
     display:inline-block;
     position: absolute;
     left:15px;
     top:13px;
     z-index:99;
     &.icon-username{
       background:url('../assets/img/loginUserName.png') no-repeat 0% 0%;
     }
     &.icon-password{
       background:url('../assets/img/loginUserPassword.png') no-repeat 0% 0%;
     }
   }
}
.el-form-item{
  margin-bottom:25px;
}
.errorTip{
  text-align:center;
  color:#FE465B;
  font-size:12px;
  height:40px;

}

 .el-form .el-form-item.is-success .el-input__inner,.el-form .el-form-item.is-success .el-input__inner:focus,
.el-form .el-form-item.is-success .el-textarea__inner,.el-form .el-form-item.is-success .el-textarea__inner:focus{
      border-color:#009ec1!important;
 }




</style>
