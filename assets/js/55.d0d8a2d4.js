(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{591:function(s,a,t){"use strict";t.r(a);var e=t(24),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mac安装mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac安装mysql"}},[s._v("#")]),s._v(" mac安装mysql")]),s._v(" "),t("h2",{attrs:{id:"一-mac安装mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-mac安装mysql"}},[s._v("#")]),s._v(" 一.mac安装mysql.")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/qq_42006613/article/details/111773038",target:"_blank",rel:"noopener noreferrer"}},[s._v("m1芯片的mac的mysql安装"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("上面就是下载mysql客户端,并且一通安装,唯一需要注意的就是,在Configuration那步,选下边的,然后输入密码.")]),s._v(" "),t("p",[s._v("安装完成后,配置环境变量")]),s._v(" "),t("p",[s._v("打开终端切换至根目录 编辑.bash_profile")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~ \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ./.bash_profile\n")])])]),t("p",[s._v("按i键选择insert模式，加入这两行代码")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/usr/local/mysql/bin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/usr/local/mysql/support-files\n")])])]),t("p",[s._v("按esc输出':wq'推出")]),s._v(" "),t("p",[s._v("刷新环境变量")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bash_profile \n")])])]),t("p",[s._v("测试运行是否成功,控制台输入下面的指令,回车,输入密码,打印出mysql信息.")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mysql -u root -p\n")])])]),t("p",[s._v("最后的最后要注意")]),s._v(" "),t("p",[s._v("如果关闭终端在运行mysql 命令没有成功的话，是因为Mac终端在启动时没有自动刷新环境变量要在执行以下操作")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("vim ~/.zshrc\nsource ~/.bash_profile\n")])])]),t("p",[s._v("esc :wq 退出即可\n————————————————")])])}),[],!1,null,null,null);a.default=n.exports}}]);