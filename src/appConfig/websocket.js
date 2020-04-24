// socket功能
//import SockJS from "sockjs-client";
//import Stomp from "stompjs";

//界面引入方式：import { connectionSocket } from "./appConfig/websocket.js";
//function connectionSocket(){
    //websocketUrl连接地址
    //let url = 'http://' +'192.168.100.77:8080' + '/webEms/webServer';

    //let url = 'http://192.168.100.77:9090/websocket/webEms/webServer'; //联调时先写死的URL，部署到服务器上时需要改
    //let url = '/webServer'; //联调时先写死的URL，部署到服务器上时需要改
    //var socket = new SockJS(url);
    // 获取STOMP子协议的客户端对象
    //var stompClient = Stomp.over(socket);
   // var stompClient = Stomp.client('ws://192.168.100.77:8080/webEms/webServer');
//}

//export default{  stompClient: {}};