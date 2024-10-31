(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{564:function(a,t,s){"use strict";s.r(t);var e=s(14),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"hive安装文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hive安装文档"}},[a._v("#")]),a._v(" Hive安装文档")]),a._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),t("p",[a._v("本文提供了在CentOS 7上安装和配置Apache Hive的指南。其中包括安装Java JDK、下载和解压Hive、配置Hive元数据存储和启动Hive的步骤。建议进行更详细的配置和安全性设置，并与Hadoop集群集成以进行数据处理和查询。")]),a._v(" "),t("h2",{attrs:{id:"你将获得"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你将获得"}},[a._v("#")]),a._v(" 你将获得")]),a._v(" "),t("ul",[t("li",[a._v("安装Java JDK")]),a._v(" "),t("li",[a._v("下载和解压Hive")]),a._v(" "),t("li",[a._v("配置Hive元数据存储")]),a._v(" "),t("li",[a._v("启动Hive")])]),a._v(" "),t("h2",{attrs:{id:"步骤1-准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤1-准备工作"}},[a._v("#")]),a._v(" 步骤1：准备工作")]),a._v(" "),t("p",[a._v("在开始安装之前，请确保满足以下先决条件：")]),a._v(" "),t("ul",[t("li",[a._v("CentOS 7操作系统")]),a._v(" "),t("li",[a._v("Java JDK 8或更高版本")]),a._v(" "),t("li",[a._v("Hadoop集群已安装和运行（Hive依赖于Hadoop）")])]),a._v(" "),t("ol",[t("li",[t("p",[a._v("确保服务器满足以下要求：")]),a._v(" "),t("ul",[t("li",[a._v("内存：建议每个Hive节点至少具有8GB的内存。")]),a._v(" "),t("li",[a._v("存储：根据预期的数据存储需求，为Hive节点提供足够的磁盘空间。")]),a._v(" "),t("li",[a._v("CPU：建议每个Hive节点具有多个CPU核心以处理并行计算任务。")]),a._v(" "),t("li",[a._v("网络：确保服务器具有足够的网络带宽和稳定的网络连接。")])])]),a._v(" "),t("li",[t("p",[a._v("将用户"),t("code",[a._v("alinesno")]),a._v("添加到sudoers文件中，以便具有root权限。")])])]),a._v(" "),t("h2",{attrs:{id:"步骤2-安装java-jdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤2-安装java-jdk"}},[a._v("#")]),a._v(" 步骤2：安装Java JDK")]),a._v(" "),t("p",[a._v("Hive需要Java JDK来运行。按照以下步骤安装Java JDK：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("打开终端并执行以下命令以安装Java JDK：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo yum install java-8-openjdk-devel\n")])])])]),a._v(" "),t("li",[t("p",[a._v("安装完成后，验证Java JDK是否正确安装：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("java -version\n")])])]),t("p",[a._v("应该显示Java版本信息。")])])]),a._v(" "),t("h2",{attrs:{id:"步骤3-下载和解压hive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤3-下载和解压hive"}},[a._v("#")]),a._v(" 步骤3：下载和解压Hive")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("打开终端并执行以下命令以下载Hive：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("wget https://downloads.apache.org/hive/hive-3.1.2/apache-hive-3.1.2-bin.tar.gz\n")])])])]),a._v(" "),t("li",[t("p",[a._v("解压下载的文件：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tar -xzf apache-hive-3.1.2-bin.tar.gz\n")])])])]),a._v(" "),t("li",[t("p",[a._v("将解压后的Hive文件夹移动到适当的位置：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo mv apache-hive-3.1.2-bin /usr/local/hive\n")])])])]),a._v(" "),t("li",[t("p",[a._v("配置Hive环境变量：")]),a._v(" "),t("p",[a._v("打开"),t("code",[a._v("~/.bashrc")]),a._v("文件并添加以下行：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("export HIVE_HOME=/usr/local/hive\nexport PATH=$PATH:$HIVE_HOME/bin\n")])])]),t("p",[a._v("保存并关闭文件。")])]),a._v(" "),t("li",[t("p",[a._v("执行以下命令使环境变量生效：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("source ~/.bashrc\n")])])])])]),a._v(" "),t("h2",{attrs:{id:"步骤4-配置hive元数据存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤4-配置hive元数据存储"}},[a._v("#")]),a._v(" 步骤4：配置Hive元数据存储")]),a._v(" "),t("p",[a._v("Hive需要一个元数据存储来存储表结构和其他元数据。您可以选择使用内嵌的Derby数据库或外部的MySQL数据库作为元数据存储。")]),a._v(" "),t("h3",{attrs:{id:"使用内嵌的derby数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用内嵌的derby数据库"}},[a._v("#")]),a._v(" 使用内嵌的Derby数据库")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("打开Hive配置目录：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd /usr/local/hive/conf\n")])])])]),a._v(" "),t("li",[t("p",[a._v("复制模板文件：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cp hive-default.xml.template hive-site.xml\n")])])])]),a._v(" "),t("li",[t("p",[a._v("打开"),t("code",[a._v("hive-site.xml")]),a._v("文件并添加以下内容：")]),a._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("configuration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("javax.jdo.option.ConnectionURL"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("jdbc:derby:;databaseName=/usr/local/hive/metastore_db;create=true"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("JDBC connect string for a JDBC metastore."),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("property")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("javax.jdo.option.DriverName"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.apache.derby.jdbc.EmbeddedDriver"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Driver class name for a JDBC metastore."),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("property")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("configuration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),t("p",[a._v("保存并关闭文件。")])])]),a._v(" "),t("h3",{attrs:{id:"使用外部的mysql数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用外部的mysql数据库"}},[a._v("#")]),a._v(" 使用外部的MySQL数据库")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("安装MySQL数据库：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo yum install mysql-server\n")])])])]),a._v(" "),t("li",[t("p",[a._v("启动MySQL服务：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo systemctl start mysqld\n")])])])]),a._v(" "),t("li",[t("p",[a._v("配置MySQL数据库：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo mysql_secure_installation\n")])])]),t("p",[a._v("按照提示设置MySQL的root密码和其他安全选项。")])]),a._v(" "),t("li",[t("p",[a._v("创建Hive元数据数据库：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo mysql -u root -p\n")])])]),t("p",[a._v("在MySQL命令行中执行以下命令：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" hive"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("USER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'hiveuser'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'localhost'")]),a._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALL")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" hive"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'hiveuser'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'localhost'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nFLUSH "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("将"),t("code",[a._v("password")]),a._v("替换为实际的密码。")])]),a._v(" "),t("li",[t("p",[a._v("打开Hive配置目录：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd /usr/local/hive/conf\n")])])])]),a._v(" "),t("li",[t("p",[a._v("复制模板文件：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cp hive-default.xml.template hive-site.xml\n")])])])]),a._v(" "),t("li",[t("p",[a._v("打开"),t("code",[a._v("hive-site.xml")]),a._v("文件并添加以下内容：")]),a._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("configuration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("javax.jdo.option.ConnectionURL"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("jdbc:mysql://localhost/hive?createDatabaseIfNotExist=true"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("JDBC connect string for a JDBC metastore."),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("property")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("javax.jdo.option.ConnectionDriverName"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("com.mysql.jdbc.Driver"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Driver class name for a JDBC metastore."),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("property")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("javax.jdo.option.ConnectionUserName"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("hiveuser"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Username to use against metastore database"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("property")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("javax.jdo.option.ConnectionPassword"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("password"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Password to use against metastore database"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("property")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("configuration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),t("p",[a._v("将"),t("code",[a._v("password")]),a._v("替换为实际的密码。")]),a._v(" "),t("p",[a._v("保存并关闭文件。")])])]),a._v(" "),t("h2",{attrs:{id:"步骤5-启动hive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤5-启动hive"}},[a._v("#")]),a._v(" 步骤5：启动Hive")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("初始化Hive元数据存储：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("schematool -dbType derby -initSchema\n")])])]),t("p",[a._v("如果使用外部的MySQL数据库，请使用以下命令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("schematool -dbType mysql -initSchema\n")])])])]),a._v(" "),t("li",[t("p",[a._v("启动Hive服务：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("hive --service metastore &\nhive --service hiveserver2 &\n")])])]),t("p",[a._v("第一个命令启动Hive元数据服务，第二个命令启动Hive服务器。")])]),a._v(" "),t("li",[t("p",[a._v("验证Hive是否正常运行：")]),a._v(" "),t("p",[a._v("打开终端并执行以下命令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("hive\n")])])]),t("p",[a._v("应该能够进入Hive命令行界面。")])])]),a._v(" "),t("h2",{attrs:{id:"结论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[a._v("#")]),a._v(" 结论")]),a._v(" "),t("p",[a._v("恭喜！您已成功安装和配置了Apache Hive。现在您可以使用Hive进行数据处理和查询。请注意，这只是一个简单的安装文档示例，实际安装和配置过程可能因环境和需求而有所不同。建议参考Hive官方文档和其他资源以获取更详细的指南和最佳实践。")])])}),[],!1,null,null,null);t.default=n.exports}}]);