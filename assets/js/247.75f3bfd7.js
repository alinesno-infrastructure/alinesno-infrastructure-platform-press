(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{679:function(a,t,e){"use strict";e.r(t);var s=e(14),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"服务容器化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务容器化"}},[a._v("#")]),a._v(" 服务容器化")]),a._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),t("p",[a._v("本文档旨在介绍如何将服务容器化，使其能够在容器环境中运行，并提供相关的配置和部署说明。")]),a._v(" "),t("h2",{attrs:{id:"你将获取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你将获取"}},[a._v("#")]),a._v(" 你将获取")]),a._v(" "),t("ul",[t("li",[a._v("服务容器化的实施方法和步骤")]),a._v(" "),t("li",[a._v("容器环境中的服务配置和部署说明")])]),a._v(" "),t("h2",{attrs:{id:"集成方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集成方式"}},[a._v("#")]),a._v(" 集成方式")]),a._v(" "),t("p",[a._v("本文档介绍了使用 jib-maven-plugin 插件将服务容器化的集成方式，以阿里云镜像仓库为例。")]),a._v(" "),t("h3",{attrs:{id:"配置服务器镜像认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置服务器镜像认证"}},[a._v("#")]),a._v(" 配置服务器镜像认证")]),a._v(" "),t("p",[a._v("在服务器上配置 Docker 登录的镜像仓库认证信息，包括用户名和密码。")]),a._v(" "),t("div",{staticClass:"language-plaintext extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plaintext"}},[t("code",[a._v("REGISTRY_USERNAME=\nREGISTRY_PASSWORD=\n\ndocker login --username=$REGISTRY_USERNAME --password=$REGISTRY_PASSWORD registry.cn-shenzhen.aliyuncs.com\n")])])]),t("h3",{attrs:{id:"容器化打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器化打包"}},[a._v("#")]),a._v(" 容器化打包")]),a._v(" "),t("p",[a._v("使用 jib-maven-plugin 插件进行容器化打包，以下是示例的 Maven 命令：")]),a._v(" "),t("div",{staticClass:"language-plaintext extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plaintext"}},[t("code",[a._v("# 自定义镜像创建和认证\nexport DOCKER_REGISTRY=registry.cn-shenzhen.aliyuncs.com\nexport REGISTRY_NAMESPACE=alinesno-cloud-incubator\n\n# Jenkins 写法\nmvn -B -U -f ${projectName}/pom.xml install package\nmvn -B -U -f ${projectName}/pom.xml clean compile jib:build -Ddocker.registry.name=${REGISTRY_NAMESPACE}\n\n# 本地工程写法\nmvn clean compile jib:build \\\n\t-Ddocker.repository=${DOCKER_REGISTRY} \\\n\t-Ddocker.registry.name=${REGISTRY_NAMESPACE}\n")])])]),t("p",[a._v("如果使用自定义账号名密码的方式，添加如下配置：")]),a._v(" "),t("div",{staticClass:"language-plaintext extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plaintext"}},[t("code",[a._v("export REGISTRY_USERNAME=\nexport REGISTRY_PASSWORD=\n\nmvn -B -U -f ${projectName}/pom.xml clean compile jib:build \\\n    -Djib.to.auth.username=${REGISTRY_USERNAME}  \\\n    -Djib.to.auth.password=${REGISTRY_PASSWORD}\n")])])]),t("h2",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[a._v("#")]),a._v(" 注意事项")]),a._v(" "),t("ul",[t("li",[a._v("在配置服务器镜像认证时，确保用户名和密码的安全性。")]),a._v(" "),t("li",[a._v("在容器化打包时，根据实际情况进行配置，并确保相关依赖和插件的正确性。")]),a._v(" "),t("li",[a._v("在使用 jib-maven-plugin 插件进行容器化打包时，根据需要进行必要的配置和参数传递。")])]),a._v(" "),t("h2",{attrs:{id:"术语和缩略语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#术语和缩略语"}},[a._v("#")]),a._v(" 术语和缩略语")]),a._v(" "),t("ul",[t("li",[a._v("容器化：将服务打包成容器镜像，并通过容器管理平台来管理和运行服务的过程。")]),a._v(" "),t("li",[a._v("Docker：一种开源的容器化平台，用于将应用程序打包成容器并进行部署和管理。")]),a._v(" "),t("li",[a._v("Kubernetes：一种开源的容器编排平台，用于自动化部署、扩展和管理容器化应用程序。")])]),a._v(" "),t("p",[a._v("以上是一个基本的服务容器化规范示例，您可以根据实际需求进行调整和补充。")])])}),[],!1,null,null,null);t.default=r.exports}}]);