(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{381:function(t,v,_){"use strict";_.r(v);var d=_(8),e=Object(d.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"服务规划"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务规划"}},[t._v("#")]),t._v(" 服务规划")]),t._v(" "),v("h2",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),v("h2",{attrs:{id:"工程规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工程规范"}},[t._v("#")]),t._v(" 工程规范")]),t._v(" "),v("p",[t._v("为了更好的适配工程结构，这里约定工程结构如下，假设工程模块为"),v("code",[t._v("demo")]),t._v("，则定义工程结构如下:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),v("th",[t._v("模块")]),t._v(" "),v("th",[t._v("作用")]),t._v(" "),v("th",[t._v("范围")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",[t._v("demo-facade")]),t._v(" "),v("td",[t._v("对外依赖工程包")]),t._v(" "),v("td",[t._v("接口和引用")]),t._v(" "),v("td",[t._v("工程结构的规范为了更好的进行工程管理")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",[t._v("demo-common")]),t._v(" "),v("td",[t._v("公共包")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),v("td",[t._v("demo-domain")]),t._v(" "),v("td",[t._v("领域工程服务")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),v("td",[t._v("demo-api")]),t._v(" "),v("td",[t._v("对外提供接口")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),v("td",[t._v("demo-adapter")]),t._v(" "),v("td",[t._v("适配层")]),t._v(" "),v("td",[t._v("引用第三方和各个协议的适配")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),v("td",[t._v("demo-client")]),t._v(" "),v("td",[t._v("对外接口引用层")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),v("td",[t._v("demo-boot")]),t._v(" "),v("td",[t._v("启动服务")]),t._v(" "),v("td",[t._v("配置管理")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),v("td",[t._v("demo-admin")]),t._v(" "),v("td",[t._v("前端UI管理端")]),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("p",[t._v("在工程规范中，以下是对于每个模块后缀的含义解释：")]),t._v(" "),v("ol",[v("li",[v("code",[t._v("facade")]),t._v("：表示门面（Facade），用于提供对外的接口和服务。它作为模块对外的统一入口，隐藏了内部复杂的实现细节，提供简单易用的接口供其他模块调用。")]),t._v(" "),v("li",[v("code",[t._v("domain")]),t._v("：表示领域（Domain），用于定义模块的核心领域模型和业务逻辑。在该模块中，通常包含了实体类、值对象、领域服务等与领域相关的代码。")]),t._v(" "),v("li",[v("code",[t._v("api")]),t._v("：表示接口（API），用于定义模块对外暴露的接口。在该模块中，通常包含了接口类、DTO（数据传输对象）等与外部交互的代码。")]),t._v(" "),v("li",[v("code",[t._v("adapter")]),t._v("：表示适配器（Adapter），用于与外部系统进行交互和适配。在该模块中，通常包含了与外部系统的接口实现、数据转换、适配器等代码。")]),t._v(" "),v("li",[v("code",[t._v("client")]),t._v("：表示客户端（Client），用于与模块进行交互的客户端代码。在该模块中，通常包含了调用模块提供的接口、处理响应结果等与客户端交互相关的代码。")]),t._v(" "),v("li",[v("code",[t._v("boot")]),t._v("：表示启动（Boot），用于处理模块的启动逻辑。在该模块中，通常包含了初始化、配置加载、依赖注入等启动过程的代码。")])]),t._v(" "),v("p",[t._v("这些模块后缀的含义可以帮助开发人员更好地理解每个模块的作用和职责，同时也有助于工程的组织和管理。")]),t._v(" "),v("h2",{attrs:{id:"产品列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#产品列表"}},[t._v("#")]),t._v(" 产品列表")]),t._v(" "),v("h3",{attrs:{id:"端口规划"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#端口规划"}},[t._v("#")]),t._v(" 端口规划")]),t._v(" "),v("p",[t._v("端口使用docker的net配置内部网络或者k8s的内部端口，列出的端口号分配表格：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),v("th",[t._v("服务")]),t._v(" "),v("th",[t._v("端口范围")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",[t._v("基础服务")]),t._v(" "),v("td",[t._v("30100 - 30199")]),t._v(" "),v("td",[t._v("基础服务的端口范围，用于内部部署")]),t._v(" "),v("td",[t._v("工程结构的规范为了更好的进行工程管理")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",[t._v("数据服务")]),t._v(" "),v("td",[t._v("30200 - 30299")]),t._v(" "),v("td",[t._v("数据服务")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),v("td",[t._v("智能服务")]),t._v(" "),v("td",[t._v("30300 - 30399")]),t._v(" "),v("td",[t._v("智能服务")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),v("td",[t._v("智能服务")]),t._v(" "),v("td",[t._v("30400 - 30499")]),t._v(" "),v("td",[t._v("智能服务")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),v("td",[t._v("业务服务")]),t._v(" "),v("td",[t._v("30500 - 30599")]),t._v(" "),v("td",[t._v("业务服务")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),v("td",[t._v("运营服务")]),t._v(" "),v("td",[t._v("30600 - 30699")]),t._v(" "),v("td",[t._v("运营服务")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),v("td",[t._v("平台")]),t._v(" "),v("td",[t._v("27001")]),t._v(" "),v("td",[t._v("整体平台的入口，这个是唯一的端口号，其它不能占用")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("p",[t._v("根据上述表格，你可以根据服务的序号和描述来分配相应的端口号。请注意，在实际使用时，确保遵循相关的网络通信标准和安全性要求。")]),t._v(" "),v("h3",{attrs:{id:"服务规划-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务规划-2"}},[t._v("#")]),t._v(" 服务规划")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("序号")]),t._v(" "),v("th",[t._v("模块")]),t._v(" "),v("th",[t._v("服务")]),t._v(" "),v("th",[t._v("模块名称")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("端口")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("核心框架")]),t._v(" "),v("td",[t._v("01. 核心开发框架")]),t._v(" "),v("td",[t._v("alinesno-infra-common")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("02. 前端开发框架（桌面）")]),t._v(" "),v("td",[t._v("alinesno-infra-ui")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("03. 前端开发框架（移动）")]),t._v(" "),v("td",[t._v("alinesno-infra-app")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("基础服务")]),t._v(" "),v("td",[t._v("01. 权限配置服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-authority")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30100")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("02. 代码生成器")]),t._v(" "),v("td",[t._v("alinesno-infra-base-init")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30101")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("7")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("03. 分布式配置服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-config")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30102")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("8")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("04. 事务消息服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-message")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30103")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("9")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("05. 通知管理服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-notices")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30104")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("10")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("06. 存储管理服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-storage")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30105")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("11")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("07. 单点登陆服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-sso")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30106")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("12")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("08. 网关配置服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-gateway")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30107")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("13")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("09. 安全验证码服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-validate")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30108")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("14")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("10. IM消息服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-im")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30109")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("15")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("11. 邮箱管理服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-email")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30110")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("16")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("12. 文档搜索服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-document")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30111")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("17")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("13. 分布式ID服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-id")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30112")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("18")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("14. 敏感词过滤服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-sensitive")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30113")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("19")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("15. 支付服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-pay")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30114")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("20")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("16. 会员服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-member")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30115")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("21")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("17. 内容服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-cms")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30116")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("22")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("18. 商城服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-shop")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30117")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("23")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("19. 流程中心服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-workflow")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30118")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("24")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("20. 文档查看服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-fileshow")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30119")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("25")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("21. 基设平台管理服务")]),t._v(" "),v("td",[t._v("alinesno-infra-base-platform")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30120")]),t._v(" "),v("td",[t._v("单独管理和监控，定位于管理员")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("27")]),t._v(" "),v("td",[t._v("数据服务")]),t._v(" "),v("td",[t._v("01. 主数据服务")]),t._v(" "),v("td",[t._v("alinesno-infra-data-mdm")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30200")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("28")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("02. 数据上报服务")]),t._v(" "),v("td",[t._v("alinesno-infra-data-report")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30201")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("29")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("03. 数据集成服务")]),t._v(" "),v("td",[t._v("alinesno-infra-data-kettle")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30202")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("30")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("04. 数据开发服务")]),t._v(" "),v("td",[t._v("alinesno-infra-data-dolphinscheduler")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30203")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("31")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("05. 实时计算服务")]),t._v(" "),v("td",[t._v("alinesno-infra-data-flink")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30204")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("32")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("06. 数据安全服务")]),t._v(" "),v("td",[t._v("alinesno-infra-data-security")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30205")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("33")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("07. 数据质量服务")]),t._v(" "),v("td",[t._v("alinesno-infra-data-quarity")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30206")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("34")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("08. 数据总线服务")]),t._v(" "),v("td",[t._v("alinesno-infra-data-bus")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30207")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("35")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("09. 数据资产服务")]),t._v(" "),v("td",[t._v("alinesno-infra-data-assets")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30208")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("36")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("10. 数据算法服务")]),t._v(" "),v("td",[t._v("alinesno-infra-data-algorithm")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30209")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("38")]),t._v(" "),v("td",[t._v("智能服务")]),t._v(" "),v("td",[t._v("01. OCR视觉识别服务")]),t._v(" "),v("td",[t._v("alinesno-infra-ai-ocr")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30300")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("39")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("02. 自然语言识别服务")]),t._v(" "),v("td",[t._v("alinesno-infra-ai-nlp")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30301")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("40")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("03. GPT推理服务")]),t._v(" "),v("td",[t._v("alinesno-infra-ai-gpt")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30302")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("41")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("04. 流媒体识别服务")]),t._v(" "),v("td",[t._v("alinesno-infra-ai-media")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30303")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("43")]),t._v(" "),v("td",[t._v("运维服务")]),t._v(" "),v("td",[t._v("01. 自动化任务服务（业务自动运维服务）")]),t._v(" "),v("td",[t._v("alinesno-infra-ops-scheduler")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30400")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("44")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("02. 分布式日志服务")]),t._v(" "),v("td",[t._v("alinesno-infra-ops-logger")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30401")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("45")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("03. 分布式链路跟踪服务")]),t._v(" "),v("td",[t._v("alinesno-infra-ops-telemetry")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30402")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("46")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("04. 持续集成服务")]),t._v(" "),v("td",[t._v("alinesno-infra-ops-cicd")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30403")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("47")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("05. 容器管理服务")]),t._v(" "),v("td",[t._v("alinesno-infra-ops-container")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30404")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("48")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("06. 监控预警服务")]),t._v(" "),v("td",[t._v("alinesno-infra-ops-watcher")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30405")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("57")]),t._v(" "),v("td",[t._v("业务服务")]),t._v(" "),v("td",[t._v("01. 商品秒杀服务")]),t._v(" "),v("td",[t._v("alinesno-infra-bus-limit")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30500")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("58")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("02. 实时推荐服务")]),t._v(" "),v("td",[t._v("alinesno-infra-bus-recommend")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30501")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("59")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("03. 实时画像服务")]),t._v(" "),v("td",[t._v("alinesno-infra-bus-profiling")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30502")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("60")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("04. 无代码开发服务")]),t._v(" "),v("td",[t._v("alinesno-infra-bus-nocode")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30503")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("50")]),t._v(" "),v("td",[t._v("运营服务")]),t._v(" "),v("td",[t._v("01. 基设平台服务")]),t._v(" "),v("td",[t._v("alinesno-infra-plat-saas")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30600")]),t._v(" "),v("td",[t._v("添加架构排版服务")])]),t._v(" "),v("tr",[v("td",[t._v("51")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("02. 安全感触服务")]),t._v(" "),v("td",[t._v("alinesno-infra-plat-security")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30601")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("52")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("03. 智能运营大脑服务")]),t._v(" "),v("td",[t._v("alinesno-infra-plat-brain")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30602")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("53")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("04. AI模型管理服务")]),t._v(" "),v("td",[t._v("alinesno-infra-plat-model")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30603")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("54")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("05. 移动终端服务")]),t._v(" "),v("td",[t._v("alinesno-infra-plat-app")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30604")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"其它"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),v("ul",[v("li",[t._v("无")])])])}),[],!1,null,null,null);v.default=e.exports}}]);