(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{824:function(v,_,t){"use strict";t.r(_);var a=t(14),r=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"nginx-反向代理规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nginx-反向代理规范"}},[v._v("#")]),v._v(" Nginx 反向代理规范")]),v._v(" "),_("h2",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),_("p",[v._v("本规范定义了 Nginx 反向代理的配置规范，包括配置目录规范、文件命名规范、日志存储规范、日志存储策略规范以及日志生成规范。")]),v._v(" "),_("h2",{attrs:{id:"目录规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#目录规范"}},[v._v("#")]),v._v(" 目录规范")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("所有 Nginx 配置文件应存放在指定的目录中，推荐使用 "),_("code",[v._v("conf.d")]),v._v(" 目录。")])]),v._v(" "),_("li",[_("p",[v._v("配置文件应按照域名进行命名，格式为 "),_("code",[v._v("域名.conf")]),v._v("，例如："),_("code",[v._v("portal.infra.linesno.com.conf")]),v._v("。")])]),v._v(" "),_("li",[_("p",[v._v("配置文件应具有有意义的名称，以便于管理和维护。")])])]),v._v(" "),_("h2",{attrs:{id:"文件命名规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文件命名规范"}},[v._v("#")]),v._v(" 文件命名规范")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("配置文件的名称应包含域名信息，以便于识别和管理。")])]),v._v(" "),_("li",[_("p",[v._v("文件名应使用小写字母，可包含数字和连字符。")])]),v._v(" "),_("li",[_("p",[v._v("推荐使用域名的完整形式作为文件名，避免使用缩写或简化形式。")])])]),v._v(" "),_("h2",{attrs:{id:"日志存储规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#日志存储规范"}},[v._v("#")]),v._v(" 日志存储规范")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("Nginx 日志文件应存储在指定的目录中，推荐使用 "),_("code",[v._v("/var/log/nginx/")]),v._v(" 目录。")])]),v._v(" "),_("li",[_("p",[v._v("日志文件名应具有有意义的名称，以便于识别和管理。")])]),v._v(" "),_("li",[_("p",[v._v("推荐按照域名和日期进行命名，格式为 "),_("code",[v._v("域名-日期.log")]),v._v("，例如："),_("code",[v._v("portal.infra.linesno.com-2023-08-08.log")]),v._v("。")])])]),v._v(" "),_("h2",{attrs:{id:"日志存储策略规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#日志存储策略规范"}},[v._v("#")]),v._v(" 日志存储策略规范")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("推荐根据实际需求设置日志的存储周期，避免日志文件过大。")])]),v._v(" "),_("li",[_("p",[v._v("定期进行日志文件的归档和压缩，以节省存储空间。")])]),v._v(" "),_("li",[_("p",[v._v("可以考虑使用日志切割工具，如 logrotate，来自动管理日志文件的大小和数量。")])])]),v._v(" "),_("h2",{attrs:{id:"日志生成规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#日志生成规范"}},[v._v("#")]),v._v(" 日志生成规范")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("配置文件中应启用合适的日志格式，以记录有用的信息。")])]),v._v(" "),_("li",[_("p",[v._v("推荐使用包含时间戳、客户端IP、请求方法、请求路径等关键信息的日志格式。")])]),v._v(" "),_("li",[_("p",[v._v("可以根据需求自定义日志格式，以满足特定的日志分析和监控需求。")])]),v._v(" "),_("li",[_("p",[v._v("推荐启用访问日志和错误日志，方便排查问题和分析访问情况。")])])]),v._v(" "),_("h2",{attrs:{id:"注意事项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[v._v("#")]),v._v(" 注意事项")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("在配置反向代理时，确保配置文件的正确性和完整性，避免语法错误和配置冲突。")])]),v._v(" "),_("li",[_("p",[v._v("在配置日志存储时，确保日志文件的权限和存储空间的可用性。")])]),v._v(" "),_("li",[_("p",[v._v("根据实际需求和系统资源，合理设置日志存储周期和日志文件的数量。")])]),v._v(" "),_("li",[_("p",[v._v("定期检查和维护日志文件，确保日志的完整性和可用性。")])])]),v._v(" "),_("h2",{attrs:{id:"术语和缩略语"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#术语和缩略语"}},[v._v("#")]),v._v(" 术语和缩略语")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Nginx：一款高性能的 Web 服务器和反向代理服务器。")])]),v._v(" "),_("li",[_("p",[v._v("IP：Internet Protocol，互联网协议。")])]),v._v(" "),_("li",[_("p",[v._v("URL：Uniform Resource Locator，统一资源定位符。")])]),v._v(" "),_("li",[_("p",[v._v("DNS：Domain Name System，域名系统。")])]),v._v(" "),_("li",[_("p",[v._v("SSL/TLS：Secure Sockets Layer/Transport Layer Security，安全套接层/传输层安全。")])]),v._v(" "),_("li",[_("p",[v._v("HTTP：Hypertext Transfer Protocol，超文本传输协议。")])]),v._v(" "),_("li",[_("p",[v._v("HTTPS：HTTP Secure，安全的 HTTP。")])]),v._v(" "),_("li",[_("p",[v._v("IP地址：Internet Protocol Address，互联网协议地址。")])])]),v._v(" "),_("p",[v._v("以上是一个基本的 Nginx 反向代理规范示例，您可以根据实际需求进行调整和补充。")])])}),[],!1,null,null,null);_.default=r.exports}}]);