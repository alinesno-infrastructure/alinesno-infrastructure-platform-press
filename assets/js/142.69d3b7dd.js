(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{556:function(s,a,t){"use strict";t.r(a);var e=t(14),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-安装指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-安装指南"}},[s._v("#")]),s._v(" MySQL 安装指南")]),s._v(" "),a("p",[s._v("本文提供了在CentOS 7上安装MySQL 8的详细步骤和说明。")]),s._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),a("p",[s._v("在开始安装之前，请确保您已满足以下要求：")]),s._v(" "),a("ul",[a("li",[s._v("运行CentOS 7操作系统的服务器或虚拟机")]),s._v(" "),a("li",[s._v("具有管理员权限的用户")]),s._v(" "),a("li",[s._v("稳定的网络连接")])]),s._v(" "),a("h2",{attrs:{id:"步骤-1-更新系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤-1-更新系统"}},[s._v("#")]),s._v(" 步骤 1：更新系统")]),s._v(" "),a("p",[s._v("在安装MySQL之前，首先更新系统以获取最新的软件包和安全补丁。执行以下命令：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum update "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])])]),a("h2",{attrs:{id:"步骤-2-添加mysql-yum存储库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤-2-添加mysql-yum存储库"}},[s._v("#")]),s._v(" 步骤 2：添加MySQL Yum存储库")]),s._v(" "),a("p",[s._v("MySQL官方提供了一个Yum存储库，用于安装最新版本的MySQL。执行以下命令添加MySQL Yum存储库：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Uvh")]),s._v(" https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm\n")])])]),a("h2",{attrs:{id:"步骤-3-安装mysql服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤-3-安装mysql服务器"}},[s._v("#")]),s._v(" 步骤 3：安装MySQL服务器")]),s._v(" "),a("p",[s._v("现在，可以使用Yum包管理器安装MySQL服务器。执行以下命令：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])])]),a("p",[s._v("安装过程中，系统将自动下载和安装MySQL服务器及其依赖项。")]),s._v(" "),a("h2",{attrs:{id:"步骤-4-启动mysql服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤-4-启动mysql服务"}},[s._v("#")]),s._v(" 步骤 4：启动MySQL服务")]),s._v(" "),a("p",[s._v("安装完成后，启动MySQL服务并将其设置为开机自启动。执行以下命令：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start mysqld\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" mysqld\n")])])]),a("p",[s._v("MySQL服务将启动，并在系统重启后自动启动。")]),s._v(" "),a("h2",{attrs:{id:"步骤-5-获取初始密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤-5-获取初始密码"}},[s._v("#")]),s._v(" 步骤 5：获取初始密码")]),s._v(" "),a("p",[s._v("安装MySQL后，系统会生成一个初始密码。您需要获取此密码以进行后续配置。执行以下命令：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'temporary password'")]),s._v(" /var/log/mysqld.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $NF}'")]),s._v("\n")])])]),a("p",[s._v("记录下输出的初始密码，稍后将用到。")]),s._v(" "),a("h2",{attrs:{id:"步骤-6-设置mysql-root密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤-6-设置mysql-root密码"}},[s._v("#")]),s._v(" 步骤 6：设置MySQL root密码")]),s._v(" "),a("p",[s._v("登录MySQL并设置新的root密码。执行以下命令：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mysql_secure_installation\n")])])]),a("p",[s._v("按照提示进行操作，包括输入初始密码、设置新密码、删除匿名用户、禁止远程root登录等。")]),s._v(" "),a("h2",{attrs:{id:"步骤-7-验证mysql安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤-7-验证mysql安装"}},[s._v("#")]),s._v(" 步骤 7：验证MySQL安装")]),s._v(" "),a("p",[s._v("使用新设置的root密码登录MySQL，并验证安装是否成功。执行以下命令：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n")])])]),a("p",[s._v("输入您设置的新密码后，应该能够成功登录到MySQL服务器。")]),s._v(" "),a("h2",{attrs:{id:"配置mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置mysql"}},[s._v("#")]),s._v(" 配置MySQL")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("编辑MySQL配置文件：使用文本编辑器打开MySQL的配置文件"),a("code",[s._v("/etc/my.cnf")]),s._v("，根据需求进行配置调整。例如，您可以修改"),a("code",[s._v("max_connections")]),s._v("参数来限制同时连接到MySQL的最大客户端数量。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/my.cnf\n")])])])]),s._v(" "),a("li",[a("p",[s._v("重新启动MySQL服务：在修改配置文件后，重新启动MySQL服务使更改生效。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart mysqld\n")])])])]),s._v(" "),a("li",[a("p",[s._v("调整内存和缓冲区设置：根据服务器的可用内存和数据库负载情况，调整MySQL的内存和缓冲区设置。您可以修改"),a("code",[s._v("innodb_buffer_pool_size")]),s._v("参数来调整InnoDB缓冲池的大小，以提高性能。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/my.cnf\n")])])])]),s._v(" "),a("li",[a("p",[s._v("监控和日志记录：启用MySQL的监控和日志记录功能，以便及时发现和解决潜在的问题。您可以配置慢查询日志、错误日志和访问日志等。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/my.cnf\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"安全性设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全性设置"}},[s._v("#")]),s._v(" 安全性设置")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("创建新的MySQL用户：避免使用root用户进行常规操作，创建一个新的MySQL用户，并为其分配适当的权限。使用以下命令登录MySQL并创建新用户：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n")])])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'new_user'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'new_user'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nFLUSH "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("将"),a("code",[s._v("new_user")]),s._v("替换为新用户的用户名，将"),a("code",[s._v("password")]),s._v("替换为用户的密码。")])]),s._v(" "),a("li",[a("p",[s._v("禁止远程root登录：为了增强安全性，禁止远程主机使用root账号登录MySQL。编辑MySQL配置文件"),a("code",[s._v("/etc/my.cnf")]),s._v("，添加以下行：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/my.cnf\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[mysqld]\nskip-networking\n")])])]),a("p",[s._v("保存并关闭文件后，重新启动MySQL服务。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart mysqld\n")])])])]),s._v(" "),a("li",[a("p",[s._v("防火墙设置：如果您的服务器上启用了防火墙，确保打开MySQL服务所使用的端口（默认为3306）以允许远程访问。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--zone")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("/tcp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--reload")]),s._v("\n")])])])])]),s._v(" "),a("p",[s._v("这些是一些常见的配置和安全性设置建议，可以根据您的具体需求进行调整和扩展。请注意，在进行任何更改之前，请备份重要的MySQL数据和配置文件。")]),s._v(" "),a("h2",{attrs:{id:"结论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[s._v("#")]),s._v(" 结论")]),s._v(" "),a("p",[s._v("恭喜！您已成功在CentOS 7上安装MySQL 8。您现在可以使用MySQL来创建和管理数据库。")]),s._v(" "),a("p",[s._v("如果您需要进一步配置和优化MySQL服务器，可以参考MySQL官方文档和其他资源。")])])}),[],!1,null,null,null);a.default=r.exports}}]);