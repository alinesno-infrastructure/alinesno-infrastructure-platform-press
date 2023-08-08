(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{551:function(s,a,t){"use strict";t.r(a);var r=t(8),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"集成非root账号运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成非root账号运行"}},[s._v("#")]),s._v(" 集成非root账号运行")]),s._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[s._v("本文档介绍了如何将系统配置为非root账号运行，以降低系统受到攻击的风险，并限制对系统资源的访问权限。")]),s._v(" "),a("h2",{attrs:{id:"你将获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你将获取"}},[s._v("#")]),s._v(" 你将获取")]),s._v(" "),a("ul",[a("li",[s._v("非root账号运行的配置")]),s._v(" "),a("li",[s._v("系统资源访问权限的限制")])]),s._v(" "),a("h2",{attrs:{id:"集成方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成方式"}},[s._v("#")]),s._v(" 集成方式")]),s._v(" "),a("p",[s._v("为了将系统配置为非root账号运行，可以按照以下步骤进行配置：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("在Dockerfile中添加以下配置，以创建并配置非root用户：")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" openjdk:11.0.16-jdk-slim")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ARG")]),s._v(" user=alinesno")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ARG")]),s._v(" logger_dir=alinesno-running-logger")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ARG")]),s._v(" logger_csp=logs/csp")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ARG")]),s._v(" upload_files_dir=alinesno-upload-files")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" useradd --create-home --no-log-init --shell /bin/bash "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" adduser "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v(" sudo")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" chown -R "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v(" /home/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir /home/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${logger_dir}")]),s._v(" && chown -R "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v(" /home/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${logger_dir}")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir /home/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${upload_files_dir}")]),s._v(" && chown -R "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v(" /home/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${upload_files_dir}")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir -p /home/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${logger_csp}")]),s._v(" && chown -R "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v(" /home/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${logger_csp}")])]),s._v("\n")])])]),a("p",[s._v("这些配置将在镜像中创建一个名为"),a("code",[s._v("alinesno")]),s._v("的非root用户，并为其分配sudo权限。还创建了一些目录并将其所有权分配给该用户。")])]),s._v(" "),a("li",[a("p",[s._v("在应用程序的相关配置文件中，添加以下配置，以指定使用非root用户运行容器：")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("docker.user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("alinesno"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("docker.user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("p",[s._v("这将告诉容器在运行时使用"),a("code",[s._v("alinesno")]),s._v("用户来执行应用程序。")])])]),s._v(" "),a("p",[s._v("请根据自己的系统和应用程序的需求，进行相应的配置和调整。")]),s._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("非root账号运行可以提高系统的安全性，但在配置时需要谨慎操作，确保用户具有足够的权限来执行所需的操作。")])]),s._v(" "),a("li",[a("p",[s._v("在为非root用户分配sudo权限时，请谨慎选择哪些操作可以由该用户执行，并确保只授予必要的权限。")])]),s._v(" "),a("li",[a("p",[s._v("非root账号可能会受到一些限制，例如无法访问某些系统资源或执行某些特权操作。请确保在配置非root账号运行时，考虑到应用程序的需求和限制。")])])]),s._v(" "),a("h2",{attrs:{id:"术语和缩略语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#术语和缩略语"}},[s._v("#")]),s._v(" 术语和缩略语")]),s._v(" "),a("ul",[a("li",[s._v("root账号：具有系统最高权限的账号。")])]),s._v(" "),a("h2",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[s._v("#")]),s._v(" 其它")]),s._v(" "),a("ul",[a("li",[s._v("无")])])])}),[],!1,null,null,null);a.default=e.exports}}]);