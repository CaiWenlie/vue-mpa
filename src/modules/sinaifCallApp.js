/**
 * 此对象标识的值是伪协议系统
 * 直接方法调取即可
 */
// remove的垫片
(function(arr) {
	arr.forEach(function(item) {
		if (item.hasOwnProperty("remove")) {
			return;
		}
		Object.defineProperty(item, "remove", {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function remove() {
				this.parentNode.removeChild(this);
			}
		});
	});
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
const SINAIF = {
	//利用链接与app进行无数据的交互
	appurl: "hsinaif://",
	callApp: function(urls, data) {
		var firstis = true;
		var url = this.appurl + encodeURIComponent(urls);
		if (urls) {
			if (typeof urls != "string") {
				console.error("请输入String类型");
				return;
			}
		}
		if (data) {
			if (typeof data != "object") {
				console.error("请输入Object类型");
				return;
			} else {
				for (var key in data) {
					if (data.hasOwnProperty(key)) {
						if (firstis) {
							url +=
								"?" + key + "=" + encodeURIComponent(data[key]);
							firstis = false;
						} else {
							url +=
								"&" + key + "=" + encodeURIComponent(data[key]);
						}
					}
				}
			}
		}
		console.log(url);
		var iframe = document.createElement("iframe");
		iframe.style.width = "1px";
		iframe.style.height = "1px";
		iframe.style.display = "none";
		iframe.src = url;
		document.body.appendChild(iframe);
		setTimeout(function() {
			iframe.remove();
		}, 100);
	},
	//格式化参数校验
	formatDate: data => {
		for (var key in data) {
			// console.log(data[key])
			if (data[key] == "" || data[key] == " " || data[key] == undefined) {
				var ht = "参数" + key + "有误";
				console.error(ht);
				return;
			}
		}
	},
	registerAction: function(action) {
		let length = this.callBackAction.length;
		let actionName = "callBackAction" + this.callBackAction.length;
		this.callBackAction.push({
			name: actionName
		});
		this[actionName] = action;
		if (window.actionName) {
			console.error("该方法已注册！");
			return;
		} else {
			window[actionName] = action;
			return actionName;
		}
	},
	//展示原生的加载效果
	loadingShow: function() {
		this.callApp("loadingShow");
	},
	//关闭原生的加载效果
	loadingClose: function() {
		this.callApp("loadingClose");
	},
	//ajax错误
	openError: function() {
		this.callApp("openError");
	},
	//打开新的窗口hsinaif://openWin
	openWin: function(data) {
		for (var key in data) {
			// console.log(data[key])
			if (
				data[key] === "" ||
				data[key] === " " ||
				data[key] === undefined
			) {
				var ht = "参数" + key + "有误";
				console.error(ht);
				return;
			}
		}
		this.callApp("openWin", data);
	},
	//打开一个全屏的窗口 hsinaif://openFullWin
	openFullWin: function(data) {
		for (var key in data) {
			// console.log(data[key])
			if (
				data[key] === "" ||
				data[key] === " " ||
				data[key] === undefined
			) {
				var ht = "参数" + key + "有误";
				console.error(ht);
				return;
			}
		}
		this.callApp("openFullWin", data);
	},
	//打开一个确定的dailog hsinaif://openDailog
	openDailog: function(data) {
		for (var key in data) {
			// console.log(data[key])
			if (data[key] == "" || data[key] == " " || data[key] == undefined) {
				var ht = "参数" + key + "有误";
				console.error(ht);
				return;
			}
		}
		this.callApp("openDailog", data);
	},
	//进行分享 hsinaif://share
	share: function(data) {
		for (var key in data) {
			// console.log(data[key])
			if (data[key] == "" || data[key] == " " || data[key] == undefined) {
				var ht = "参数" + key + "有误";
				console.error(ht);
				return;
			}
		}
		this.callApp("share", data);
	},
	//这个同一个界面打开一个连接，标题跟着改 hsianif://openItem
	openItem: function(data) {
		for (var key in data) {
			// console.log(data[key])
			if (data[key] == "" || data[key] == " " || data[key] == undefined) {
				var ht = "参数" + key + "有误";
				console.error(ht);
				return;
			}
		}
		this.callApp("openItem", data);
	},
	//检查更新   hsinaif://checkVersion
	checkVersion: function() {
		this.callApp("checkVersion");
	},
	toSupport: function() {
		this.callApp("toSupport");
	},
	// 关闭窗口 hsinaif://closeItem
	closeItem: function() {
		this.callApp("closeItem");
	},
	followWechat: function() {
		this.callApp("followWechat");
	},
	//设置界面的标题 hsinaif://setTitle
	setTitle: function(data) {
		for (var key in data) {
			// console.log(data[key])
			if (data[key] == "" || data[key] == " " || data[key] == undefined) {
				var ht = "参数" + key + "有误";
				console.error(ht);
				return;
			}
		}
		this.callApp("setTitle", data);
	},
	//html5做token判断，如果没有token 或者 ajax数据返回的错误码判断，进而发出该协议 hsinaif://login
	login: function() {
		this.callApp("login");
	},
	//hsinaif://openBackWin
	openBackWin: function(data) {
		for (var key in data) {
			// console.log(data[key])
			if (data[key] == "" || data[key] == " " || data[key] == undefined) {
				var ht = "参数" + key + "有误";
				console.error(ht);
				return;
			}
		}
		this.callApp("openBackWin", data);
	},
	//联系关闭两个界面  hsinaif://closeBackItem
	closeBackItem: function() {
		this.callApp("closeBackItem");
	},
	//客户端在当前界面展示网络加载错误，hsinaif://openError
	openError: function() {
		this.callApp("openError");
	},
	//打开微信 hsinaif://openWeChat
	openWeChat: function() {
		this.callApp("openWeChat");
	},
	toFeedback: function() {
		this.callApp("toFeedback");
	},

	//调用原生银行卡扫描功能
	scanningBankCard: function(action) {
		let length = this.callBackAction.length;
		let actionName = "callBackAction" + this.callBackAction.length;
		this.callBackAction.push({
			name: actionName
		});
		this[actionName] = action;
		data.callbackname = actionName;
		this.callApp("scanningBankCard");
	},
	// /弹出 title的内容 和 “取消” 菜单 hsinaif://downPic
	downPic: function(data) {
		for (var key in data) {
			// console.log(data[key])
			if (data[key] == "" || data[key] == " " || data[key] == undefined) {
				var ht = "参数" + key + "有误";
				console.error(ht);
				return;
			}
		}
		this.callApp("downPic", data);
	},
	downFile: function(data) {
		for (var key in data) {
			// console.log(data[key])
			if (data[key] == "" || data[key] == " " || data[key] == undefined) {
				var ht = "参数" + key + "有误";
				console.error(ht);
				return;
			}
		}
		this.callApp("downFile", data);
	},
	setToken: function(data) {
		window.token = data;
	},
	/**
	 * @param {*需要请求的链接地址} url
	 * @param {*请求数据} data
	 * @param {*回调函数} action
	 */
	requestData: function(url, data, action) {
		//
		data.url = url;
		data.callbackname = this.registerAction(action);
		this.formatDate(data);
		this.callApp("requestData", data);
	},
	callBackAction: [],
	putDate: function() {},
	//调用原生查询开户进度
	queryProgress: function() {
		this.callApp("queryProgress");
	},
	//原生提交用户升级申请
	updateProduct: function() {
		this.callApp("updateProduct");
	},
	//原生查询首页销户状态
	cancelAccount: function(action) {
		//后面跟上毁掉函数名
		let data = {};
		data.callbackname = this.registerAction(action);
		this.callApp("cancelAccount", data);
	},
	//原生返回首页状态数据给H5
	getHomeData: function(action) {
		//后面跟上毁掉函数名
		let data = {};
		data.callbackname = this.registerAction(action);
		this.callApp("getHomeData", data);
	},
	//原生发起还款
	repaymentMoney: function(data, action) {
		//后面跟上毁掉函数名
		//data type  (1表示一次性结清 2表示逾期)
		data.callbackname = this.registerAction(action);
		this.formatDate(data);
		this.callApp("repaymentMoney", data);
	},
	//原生发起还款
	repaymentMoney: function(data, action) {
		//后面跟上毁掉函数名
		//data type  (1表示一次性结清 2表示逾期)
		data.callbackname = this.registerAction(action);
		this.formatDate(data);
		this.callApp("repaymentMoney", data);
	},
	//原生重新查询首页状态展示对应界面
	queryStatus: function() {
		this.callApp("queryStatus");
	},
	//弹出选择提现用途
	selectCashPurpose: function(action) {
		//后面跟上毁掉函数名
		//data type  (1表示一次性结清 2表示逾期)
		let data = {};
		data.callbackname = this.registerAction(action);
		this.formatDate(data);
		this.callApp("selectCashPurpose", data);
	},
	//跳转身份证步骤
	openIdcardStep: function(data) {
		//后面跟上毁掉函数名
		//data type  (1表示一次性结清 2表示逾期)
		this.formatDate(data);

		this.callApp("selectCashPurpose", data);
	},
	//打开手机设置
	mobileSetting: function() {
		//后面跟上毁掉函数名
		//data type  (1表示一次性结清 2表示逾期)
		this.callApp("mobileSetting");
	},
	//原生发起拉卡拉借款请求(有还V1.1)
	withdrawMoney: function(data) {
		//后面跟上毁掉函数名
		this.formatDate(data);
		this.callApp("withdrawMoney", data);
	},
	//原生弹出选择信用卡(有还V1.1)
	selectCreditCard: function(action) {
		//后面跟上毁掉函数名
		//data type  (1表示一次性结清 2表示逾期)
		data.callbackname = this.registerAction(action);
		this.formatDate(data);
		this.callApp("selectCreditCard", data);
	},
	//跳转原生添加信用卡页面(有还V1.1)
	addCreditCard: function(action) {
		//后面跟上毁掉函数名
		//data type  (1表示一次性结清 2表示逾期)
		data.callbackname = this.registerAction(action);
		this.formatDate(data);

		this.callApp("addCreditCard", data);
	},
	//原生发送短信验证码-创建借款方案(有还V1.1)
	sendCode: function(action) {
		//后面跟上毁掉函数名
		//data type  (1表示一次性结清 2表示逾期)
		let data = {};
		data.callbackname = this.registerAction(action);
		this.formatDate(data);
		this.callApp("sendCode", data);
	},
	//原生弹出Toast提示(有还V1.1)
	toast: function(data) {
		//后面跟上毁掉函数名
		//data type  (1表示一次性结清 2表示逾期)
		this.formatDate(data);
		this.callApp("toast", data);
	},
	//跳转原生修改银行卡界面(有还V1.1)
	modifyBankCard: function(action) {
		//后面跟上
		//毁掉函数名
		let data = {};
		data.callbackname = this.registerAction(action);
		this.formatDate(data);
		this.callApp("modifyBankCard", data);
	},
	//跳转原生重新修改资料界面(注:有借1.1.6需求改动)
	applyAgain: function() {
		//后面跟上
		//毁掉函数名
		this.callApp("applyAgain");
	},
	//跳转原生重新修改资料界面(注:有借1.1.6需求改动)
	applyAgain: function() {
		//后面跟上
		//毁掉函数名
		this.callApp("applyAgain");
	},
	//重新查询首页状态
	timeFinish: function() {
		//后面跟上
		//毁掉函数名
		this.callApp("timeFinish");
	},
	//调用原生借款逻辑包括输入交易密码和发起借款请求
	borrowMoney: function(data) {
		//后面跟上
		//毁掉函数名
		this.formatDate(data);
		this.callApp("borrowMoney", data);
	},
	//跳转原生提额页面
	raiseQuota: function() {
		this.callApp("raiseQuota");
  },
  //checkPushPermission 是否开启有借消息推送
  checkPushPermission:function(){
    this.callApp("checkPushPermission");
  },
  //hsinaif://openAccountStep 跳转开户流程
  openAccountStep:function(){
    this.callApp("openAccountStep");
  },
  //hsinaif://createBorrowPlan  跳转原生创建借款方案
  createBorrowPlan:function(){
    this.callApp("createBorrowPlan");
  }
};





//临时的js  添加
//js 添加js要注意的路径的问题最好是绝对地址
function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {
      //IE
      script.onreadystatechange = function () {
          if (script.readyState == "loaded" || script.readyState == "complete") {
              script.onreadystatechange = null;
              callback();
          }
      };
  } else {
      //Others
      script.onload = function () {
          callback();
      };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
//js添加方法
function loadScriptString(code) {
  var scripts = document.createElement("script");
  scripts.type = "text/javascript";
  try {
      scripts.appendChild(document.createTextNode(code));
  } catch (ex) {
      scripts.text = code;
  }
  document.getElementsByTagName("head")[0].appendChild(scripts);
}





window.setToken = function(data) {
	window.token = data;
};
if(window.location.hostname=="192.168.1.20"||window.location.hostname=="192.168.8.65"){
  if(window.location.hostname=="192.168.8.65"){
    loadScript("http://192.168.8.65:1993/youhuan/code/dist/js/socket.io.js", function () {
      //window.location.reload(true);
      // socket.on('connect', function () { console.log('在请求了')});
      loadScriptString("(function(){ try { var socket = io.connect('http://192.168.8.65:1993'); socket.on('system', function (obj, userCount, type) { console.log('5'); window.location.reload();}); } catch (e) { alert(e) } })()");;
    });
  }else {
    loadScript("http://192.168.8.65:1993/youhuan/code/dist/js/socket.io.js",function(){
      console.log("空")
    });
  }
  loadScript("http://192.168.8.65:1993/youhuan/code/dist/js/shake.js", function () {
      console.log('获取页面信息');
  });
  window.sendData = function(data, callbackname) {

    try {
      var socket = io.connect('http://192.168.8.65:1993');
      socket.emit('postData', data, window.location.href);
    } catch (e) {
      console.log(e)
    }

    if (typeof callbackname == "string") {
      SINAIF[callbackname](data);
    } else {
      callbackname(data);
    }
  };
}else {
  window.sendData = function(data, callbackname) {
    if (typeof callbackname == "string") {
      SINAIF[callbackname](data);
    } else {
      callbackname(data);
    }
  };
}


export default SINAIF
