(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{604:function(a,s,t){"use strict";t.r(s);var e=t(24),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"arthas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arthas"}},[a._v("#")]),a._v(" ARTHAS")]),a._v(" "),t("h2",{attrs:{id:"一-常用操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-常用操作"}},[a._v("#")]),a._v(" 一.常用操作")]),a._v(" "),t("h3",{attrs:{id:"_1-快捷操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-快捷操作"}},[a._v("#")]),a._v(" 1.快捷操作")]),a._v(" "),t("p",[a._v("idea下载插件,arthas idea,这个东西可以直接的生成语句.")]),a._v(" "),t("h3",{attrs:{id:"_2-watch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-watch"}},[a._v("#")]),a._v(" 2.watch")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("watch")]),a._v(" class14.Code05_UnionFind"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$UnionFind")]),a._v(" * "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{params,returnObj,throwExp}'")]),a._v("  -n "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("  -x "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" \n")])])]),t("p",[a._v("这个语句可以定制查看:入参,返回值,异常信息.-n是指监听次数,-x是指入参以及返回值层数,出于内存原因,最大4层,")]),a._v(" "),t("h3",{attrs:{id:"_3-trace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-trace"}},[a._v("#")]),a._v(" 3.trace")]),a._v(" "),t("p",[a._v("这个主要可以看程序调用链,以及执行时间,这个时间是算上了arthas运行时间的,会比实际时间大一点点,但是可以忽略.")]),a._v(" "),t("h2",{attrs:{id:"二-arthas-热替换文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-arthas-热替换文件"}},[a._v("#")]),a._v(" 二.arthas 热替换文件")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("先提交编译后的class文件到服务器上的路径,为了保险起见,我们直接创建一个自己的.注意,这是服务器操作,不是arthas操作")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /tmp/myfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n//上传文件到刚才的路径\n")])])])]),a._v(" "),t("li",[t("p",[a._v("进入arthas,选择pid进入我们的进程.")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("java -jar /usr/local/bin/arthas.jar\n")])])])]),a._v(" "),t("li",[t("p",[a._v("使用redefine来热替换")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("redefine /tmp/myfile/上传的文件名\n")])])])]),a._v(" "),t("li",[t("p",[a._v("注意事项")]),a._v(" "),t("ul",[t("li",[a._v("这个redefine,实际是替换的运行时内存,class并没有变,所以一重启服务就会失效了.")]),a._v(" "),t("li",[a._v("替换的文件,只能做简单修改,不能增加方法,否则提示失败.")]),a._v(" "),t("li",[a._v("watch等方法会有问题.不能watch.")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);