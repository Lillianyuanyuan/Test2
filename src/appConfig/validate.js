import Vue from "vue";

export default {
  //=========================form表单的验证===============================
  //用户名验证
  validateUserName(rule, value, callback){
    if (value === '') {
      callback(new Error('请输入用户名，必填！'));
    } else if (!rule.pattern.test(value)) {
      callback(new Error('输入的用户名有误！'));
    } else {
      callback();
    }
  },
  //密码验证
  validatePassword(rule, value, callback){
    if (value === '') {
      callback(new Error('请输入密码，必填！'));
    } else if (!rule.pattern.test(value)) {
      callback(new Error('输入的密码有误！'));
    } else {
      callback();
    }
  },
  validIp(rule, value, callback){
    const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    if (reg.test(value)) {
      callback();
    } else {
      return callback(new Error('IP输入格式不合法！'));
    }
  },

  //1~20个字节,小写英文,数字,’_’,’-’
  validateRequired(rule, value, callback){
      if (rule.required && (value === '')) {
        callback(new Error('必填项！'));
      } else if (!rule.pattern.test(value)) {
        callback(new Error(rule.message));
      } else {
        callback();
      }
  },

  //2~20个字符,非中文
  validateNoChinese(rule, value, callback){
    if (value === '') {
        callback(new Error('必填项！'));
    } else if (!rule.pattern.test(value)) {
        callback(new Error(rule.message));
    } else {
      if((value.length < rule.max) && (value.length > rule.min)){
        callback();
      }else{
        callback(new Error(rule.message));
      }
    }
  },
  //数字，范围
  numberRange(rule, value, callback){
    if (value === '') {
      callback(new Error('必填项！'));
    }else {
      if((value <= rule.max) && (value >= rule.min)){
        callback();
      }else{
        callback(new Error(rule.message));
      }
    }
  },

  //=========================keyup表单的验证============================================
  //只能输入数字、字母、下划线
  numberAlphabet :function(e){
    let el = e.target;
    var re = /[^a-zA-Z0-9_]/g;//判断字符串是否为数字  字母组合
    if (e.keyCode == 37 || e.keyCode == 39) {
      return;
    }else{
      el.value=el.value.replace(re,'');
      return el.value;
    }
  },

}
