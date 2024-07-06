(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{624:function(a,t,s){"use strict";s.r(t);var e=s(9),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"实体生成表映射"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实体生成表映射"}},[a._v("#")]),a._v(" 实体生成表映射")]),a._v(" "),t("blockquote",[t("p",[a._v("此处集成actable二次开发库"),t("a",{attrs:{href:"https://gitee.com/landonniao/mybatis-enhance",target:"_blank",rel:"noopener noreferrer"}},[a._v("打开"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),t("p",[a._v("实体生成表映射是指通过MyBatis-Plus库将Java实体类映射为数据库表结构的过程。通过这个过程，我们可以方便地创建和管理数据库表，避免手动编写SQL语句创建表的繁琐工作。")]),a._v(" "),t("h2",{attrs:{id:"你将获取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你将获取"}},[a._v("#")]),a._v(" 你将获取")]),a._v(" "),t("p",[a._v("通过实体生成表映射，你将获得以下好处：")]),a._v(" "),t("ul",[t("li",[a._v("自动创建数据库表结构，无需手动编写SQL语句")]),a._v(" "),t("li",[a._v("实体类与数据库表结构的一一对应关系，方便维护和管理")]),a._v(" "),t("li",[a._v("支持数据库表的自动更新，无需手动修改表结构")])]),a._v(" "),t("h2",{attrs:{id:"集成方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集成方式"}},[a._v("#")]),a._v(" 集成方式")]),a._v(" "),t("p",[a._v("要实现实体生成表映射，我们可以使用"),t("code",[a._v("actable")]),a._v("库来辅助完成。下面是集成的具体步骤：")]),a._v(" "),t("ol",[t("li",[a._v("在Spring Boot启动类上添加"),t("code",[a._v("@EnableActable")]),a._v("注解，启用"),t("code",[a._v("actable")]),a._v("库：")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@SpringBootApplication")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@EnableActable")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Application")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SpringApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Application")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("在"),t("code",[a._v("application.yaml")]),a._v("配置文件中添加"),t("code",[a._v("actable")]),a._v("的相关配置：")])]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("actable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("table")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("auto")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" update\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("model")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("pack")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" com.alinesno.infra.base.starter.entity\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" mysql\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("index")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("prefix")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" alinesno_base_starter_idx_\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("unique")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("prefix")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" alinesno_base_starter_uni_\n")])])]),t("p",[a._v("配置说明:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("actable.table.auto")]),a._v("配置项用于指定表的自动更新策略")]),a._v(" "),t("li",[t("code",[a._v("actable.model.pack")]),a._v("配置项用于指定实体类的包名")]),a._v(" "),t("li",[t("code",[a._v("actable.database.type")]),a._v("配置项用于指定数据库类型")]),a._v(" "),t("li",[t("code",[a._v("actable.index.prefix")]),a._v("和"),t("code",[a._v("actable.unique.prefix")]),a._v("配置项用于指定索引和唯一约束的前缀。")])]),a._v(" "),t("h2",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[a._v("#")]),a._v(" 注意事项")]),a._v(" "),t("p",[a._v("在使用实体生成表映射功能时，需要注意以下事项：")]),a._v(" "),t("ul",[t("li",[a._v("具体查看Actable官方的集成文档"),t("a",{attrs:{href:"https://www.yuque.com/sunchenbin/actable/nfz097",target:"_blank",rel:"noopener noreferrer"}},[a._v("使用参考"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("实体类需要使用"),t("code",[a._v("@TableName")]),a._v("注解指定对应的数据库表名")]),a._v(" "),t("li",[a._v("实体类的字段需要使用"),t("code",[a._v("@TableField")]),a._v("注解指定对应的数据库列名")]),a._v(" "),t("li",[a._v("实体类需要继承"),t("code",[a._v("BaseEntity")]),a._v("类，以获得一些通用字段和方法")]),a._v(" "),t("li",[a._v("实体类对应的数据库表会根据实体类的定义自动创建或更新，但不会删除已有的表或字段")])]),a._v(" "),t("h2",{attrs:{id:"术语和缩略语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#术语和缩略语"}},[a._v("#")]),a._v(" 术语和缩略语")]),a._v(" "),t("ul",[t("li",[a._v("MyBatis-Plus: 一个持久层框架，扩展了MyBatis的功能，提供了更便捷的数据库操作方式")]),a._v(" "),t("li",[a._v("实体类: Java中用于表示数据库表的对象，包含了表的结构和字段信息")]),a._v(" "),t("li",[a._v("数据库表: 数据库中用于存储数据的数据结构，由多个字段组成")]),a._v(" "),t("li",[a._v("SQL: 结构化查询语言，用于和数据库进行交互的语言")])]),a._v(" "),t("h2",{attrs:{id:"其它"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[a._v("#")]),a._v(" 其它")]),a._v(" "),t("ul",[t("li",[a._v("无")])])])}),[],!1,null,null,null);t.default=n.exports}}]);