(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{588:function(t,a,s){"use strict";s.r(a);var e=s(24),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"经验记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#经验记录"}},[t._v("#")]),t._v(" 经验记录")]),t._v(" "),s("h1",{attrs:{id:"_1-mac-book-安装homebrew"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-mac-book-安装homebrew"}},[t._v("#")]),t._v(" 1.mac book 安装Homebrew")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/jacktu/p/12868222.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("macbook安装homebrew"),s("OutboundLink")],1),s("br"),t._v("\n网上的那个外国地址已经不可用了,用国内的可以正常")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("/bin/zsh -c "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n")])])]),s("p",[t._v("按照操作即可完成安装。\n我是用的 1:中科大下载器")]),t._v(" "),s("h1",{attrs:{id:"_2-macbook-更改pip路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-macbook-更改pip路径"}},[t._v("#")]),t._v(" 2.macbook 更改pip路径")]),t._v(" "),s("p",[t._v("应用场景")]),t._v(" "),s("p",[t._v("默认mac上已经安装了 python2; 而我又安装了 python3，并使用 python3;")]),t._v(" "),s("p",[t._v("安装了 pip 默认，pip安装的包安装在了 python2上了；")]),t._v(" "),s("p",[t._v("但是我想用 pip把安装的包安装在 python3上 ，所以如下解决方式；")]),t._v(" "),s("p",[t._v("1：在mac上先安装 virtualenv")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" virtualenv\n")])])]),s("p",[t._v("2: 找到 python3的路径；")]),t._v(" "),s("p",[t._v("默认 python2的路径都在 /usr/lib/目录下，但是python3的不在")]),t._v(" "),s("p",[t._v("查找python3路径")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" python3 \n")])])]),s("p",[t._v("3：执行 virtualenv 命令，修改 pip的安装路径 到 python3上")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" virtualenv -p /Library/Frameworks/Python.framework/Versions/3.9/bin/python3 py3env\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" py3env/bin/activate\n")])])]),s("p",[t._v("4：环境修改之后：")]),t._v(" "),s("p",[t._v("查看变量修改是否成功")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("pip -V\n")])])]),s("p",[t._v("pip 1.5.4 from /usr/bin/py3env/lib/python3.4/site-packages (python 3.4)")]),t._v(" "),s("p",[t._v("看到结果： 后面出现了 python3的路径，说明修改成功")]),t._v(" "),s("p",[t._v("5：安装python3包程序")]),t._v(" "),s("p",[t._v("pip install 包名，即可")]),t._v(" "),s("p",[t._v("sudo virtualenv -p /Library/Frameworks/Python.framework/Versions/3.9/bin/python3 py3env\nsource py3env/bin/activate\npip -V\nsudo pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple/")]),t._v(" "),s("h1",{attrs:{id:"_3-绑定github-id到域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-绑定github-id到域名"}},[t._v("#")]),t._v(" 3.绑定github.id到域名")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/liangmingshen/p/9561994.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("实用文章"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);