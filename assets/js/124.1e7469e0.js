(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{539:function(t,a,s){"use strict";s.r(a);var r=s(14),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"巡检上报服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#巡检上报服务"}},[t._v("#")]),t._v(" 巡检上报服务")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("巡检上报服务是一种用于将系统的巡检结果上报到指定接口的服务。通过集成巡检上报服务，可以实现自动化地将巡检结果发送到指定的接口，以便进行后续的处理和分析。")]),t._v(" "),a("h2",{attrs:{id:"针对人群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对人群"}},[t._v("#")]),t._v(" 针对人群")]),t._v(" "),a("p",[t._v("本文档适用于开发人员和系统管理员，他们希望通过集成巡检上报服务来自动上报系统的巡检结果，并实现后续的处理和分析。")]),t._v(" "),a("h2",{attrs:{id:"使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),a("p",[t._v("巡检上报服务适用于以下场景：")]),t._v(" "),a("ul",[a("li",[t._v("自动化地将系统的巡检结果上报到指定的接口。")]),t._v(" "),a("li",[t._v("实现巡检结果的集中管理和分析。")]),t._v(" "),a("li",[t._v("根据巡检结果进行故障排查和性能优化。")])]),t._v(" "),a("h2",{attrs:{id:"集成方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成方式"}},[t._v("#")]),t._v(" 集成方式")]),t._v(" "),a("p",[t._v("本文档介绍了通过 Jenkinsfile 和 Ansible 集成配置巡检上报服务的方法，并提供了具体的配置示例。")]),t._v(" "),a("ol",[a("li",[t._v("配置参数变量")])]),t._v(" "),a("p",[t._v("在集成过程中，需要定义一些参数变量，示例代码如下：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("PROJECT_NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'巡检名称'")]),t._v("\nPROJECT_DESC "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'操作备注'")]),t._v("\nBUSINESS_TYPE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'类型'")]),t._v("\n")])])]),a("p",[t._v("请根据实际情况修改以上参数的值。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("集成巡检监控")])]),t._v(" "),a("p",[t._v("在集成过程中，使用 curl 命令调用巡检上报服务的接口，示例代码如下：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" PUT "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'巡检地址'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User-Key: 接入密钥'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: multipart/form-data'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-F")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pluginFile=@\"${WORKSPACE}/url_status.json\"'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-F")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'algorithm={"name":"${PROJECT_DESC}","runStatus":"${currentBuild.currentResult}","nameCode":"${PROJECT_NAME}","totalTime":"${currentBuild.durationString}","busType":"${BUSINESS_TYPE}"}\'')]),t._v("\n")])])]),a("p",[t._v("请将以下参数替换为实际的值：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("巡检地址")]),t._v("：巡检上报服务的接口地址。")]),t._v(" "),a("li",[a("code",[t._v("接入密钥")]),t._v("：用于认证和授权访问巡检上报服务的密钥。")]),t._v(" "),a("li",[a("code",[t._v("url_status.json")]),t._v("：用于上报巡检结果的文件路径。")]),t._v(" "),a("li",[a("code",[t._v("${PROJECT_DESC}")]),t._v("：操作备注。")]),t._v(" "),a("li",[a("code",[t._v("${currentBuild.currentResult}")]),t._v("：当前构建的结果状态。")]),t._v(" "),a("li",[a("code",[t._v("${PROJECT_NAME}")]),t._v("：巡检名称。")]),t._v(" "),a("li",[a("code",[t._v("${currentBuild.durationString}")]),t._v("：当前构建的持续时间。")]),t._v(" "),a("li",[a("code",[t._v("${BUSINESS_TYPE}")]),t._v("：巡检类型。")])]),t._v(" "),a("p",[t._v("请确保以上参数的值与实际情况相符，并根据需要进行相应的调整。")]),t._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("ul",[a("li",[t._v("确保巡检上报服务的接口地址和密钥等信息正确配置。")]),t._v(" "),a("li",[t._v("集成过程中可能需要对 Jenkinsfile 进行相应的修改。")]),t._v(" "),a("li",[t._v("在集成完成后，确保巡检上报服务能够正确接收和处理上报的巡检结果。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);