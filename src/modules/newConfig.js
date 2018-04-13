let CONFIG = {
    mode: 1, // 1：内网联调模式;2,线上开发模式,
    host: {
        //请求地址
        app: "", //APP业务相关请求地址
        usercenter: "", //用户中心业务相关请求地址
        logs: ""
    },
    url: "", //页面访问路径
    shareInfo: {
        //页面访问路径
        url: "",
        message: "",
        title: "",
        image: ""
    },
    customerServiceUrl: "", //在线客服的URL地址
    customerPhone: "95137", //客服电话
    productId: "1001" //产品ID
};

if (CONFIG.mode == 1) {
    CONFIG.host.app = "http://192.168.1.20:10002/api";
    CONFIG.host.usercenter = "http://192.168.1.20:10002/usercenter";
    CONFIG.host.logs = "http://192.168.1.23:8100/static";
    // CONFIG.host.logs = "http://192.168.1.20:10002/api/static";
    CONFIG.url = "http://192.168.1.23:8100/static";
} else if (CONFIG.mode == 2) {
    CONFIG.host.app = "https://api.sinaif.com/api";
    CONFIG.host.usercenter = "https://api.sinaif.com/usercenter";
    CONFIG.host.logs = "https://api.sinaif.com/api/static";
    CONFIG.url = "https://api.sinaif.com/api/static";
}


export default CONFIG
