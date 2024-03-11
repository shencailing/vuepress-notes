(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{472:function(t,a,r){"use strict";r.r(a);var n=r(10),s=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器"}},[t._v("#")]),t._v(" 服务器")]),t._v(" "),a("h2",{attrs:{id:"服务器上安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器上安装nginx"}},[t._v("#")]),t._v(" 服务器上安装nginx")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("nginx 下载地址,点击跳转"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"安装前环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装前环境准备"}},[t._v("#")]),t._v(" 安装前环境准备")]),t._v(" "),a("p",[a("code",[t._v("yum update")])]),t._v(" "),a("h3",{attrs:{id:"gcc编译环境-所以-在mini-centos中需要安装编译环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gcc编译环境-所以-在mini-centos中需要安装编译环境"}},[t._v("#")]),t._v(" gcc编译环境，所以，在mini centos中需要安装编译环境")]),t._v(" "),a("p",[a("code",[t._v("yum -y install gcc-c++")])]),t._v(" "),a("h3",{attrs:{id:"nginx的http模块需要使用pcre来解析正则表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx的http模块需要使用pcre来解析正则表达式"}},[t._v("#")]),t._v(" Nginx的http模块需要使用pcre来解析正则表达式")]),t._v(" "),a("p",[a("code",[t._v("yum -y install pcre pcre-devel")])]),t._v(" "),a("h3",{attrs:{id:"依赖的解压包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖的解压包"}},[t._v("#")]),t._v(" 依赖的解压包")]),t._v(" "),a("p",[a("code",[t._v("yum -y install zlib zlib-devel")])]),t._v(" "),a("h3",{attrs:{id:"openssl安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openssl安装"}},[t._v("#")]),t._v(" openssl安装")]),t._v(" "),a("p",[a("code",[t._v("yum install -y openssl openssl-devel")])]),t._v(" "),a("h3",{attrs:{id:"安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx"}},[t._v("#")]),t._v(" 安装nginx")]),t._v(" "),a("ol",[a("li",[a("h4",{attrs:{id:"设置nginx的安装目录-我安装到-usr-local-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置nginx的安装目录-我安装到-usr-local-nginx"}},[t._v("#")]),t._v(" 设置nginx的安装目录(我安装到 /usr/local/nginx)")]),t._v(" "),a("p",[a("code",[t._v("cd /usr/local")])]),t._v(" "),a("p",[a("code",[t._v("mkdir nginx")])])]),t._v(" "),a("li",[a("h4",{attrs:{id:"使用xftp上传源码包-nginx-1-14-2-tar-gz-到-虚拟机-root-目录-可以是其他目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用xftp上传源码包-nginx-1-14-2-tar-gz-到-虚拟机-root-目录-可以是其他目录"}},[t._v("#")]),t._v(" 使用Xftp上传源码包 nginx-1.14.2.tar.gz 到 虚拟机 /root 目录 (可以是其他目录)")])]),t._v(" "),a("li",[a("h4",{attrs:{id:"解压nginx文件到当前目录-我的是-root"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压nginx文件到当前目录-我的是-root"}},[t._v("#")]),t._v(" 解压nginx文件到当前目录 (我的是 /root)")]),t._v(" "),a("p",[a("code",[t._v("tar -zxvf nginx-1.14.2.tar.gz")])])]),t._v(" "),a("li",[a("h4",{attrs:{id:"编译-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译-安装"}},[t._v("#")]),t._v(" 编译，安装")]),t._v(" "),a("p",[a("code",[t._v("cd nginx-1.14.2")])])])]),t._v(" "),a("h4",{attrs:{id:"以下3条命令都在-root-nginx-1-14-2-目录下执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以下3条命令都在-root-nginx-1-14-2-目录下执行"}},[t._v("#")]),t._v(" 以下3条命令都在 /root/nginx-1.14.2 目录下执行")]),t._v(" "),a("h4",{attrs:{id:"_1-指定安装目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-指定安装目录"}},[t._v("#")]),t._v(" 1:指定安装目录")]),t._v(" "),a("p",[a("code",[t._v("./configure --prefix=/usr/local/nginx")])]),t._v(" "),a("h4",{attrs:{id:"_2-编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-编译"}},[t._v("#")]),t._v(" 2:编译")]),t._v(" "),a("p",[t._v("make")]),t._v(" "),a("h4",{attrs:{id:"_3-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装"}},[t._v("#")]),t._v(" 3:安装")]),t._v(" "),a("p",[a("code",[t._v("make install")])]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("h4",{attrs:{id:"切换到安装目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换到安装目录"}},[t._v("#")]),t._v(" 切换到安装目录")]),t._v(" "),a("p",[a("code",[t._v("cd /usr/local/nginx")])])]),t._v(" "),a("li",[a("h4",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),a("p",[a("code",[t._v("cd sbin")])]),t._v(" "),a("p",[a("code",[t._v("./nginx")]),t._v("    ## 启动")]),t._v(" "),a("p",[a("code",[t._v("./nginx -s reload")]),t._v(" ## 重加载")]),t._v(" "),a("p",[a("code",[t._v("./nginx -s quit")]),t._v("  ## 此方式停止步骤是待nginx进程处理任务完毕进行停止")]),t._v(" "),a("p",[a("code",[t._v("./nginx -s stop")]),t._v("  ## 此方式相当于先查出nginx进程id再使用kill命令强制杀掉进程")])]),t._v(" "),a("li",[a("h4",{attrs:{id:"开放端口80"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开放端口80"}},[t._v("#")]),t._v(" 开放端口80")]),t._v(" "),a("p",[a("code",[t._v("firewall-cmd --zone=public --add-port=80/tcp --permanent")])])]),t._v(" "),a("li",[a("h4",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),a("p",[t._v("浏览器中直接输入  "),a("a",{attrs:{href:"http://xn--ip-tx5di3ni80c:80",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://虚拟机ip:80"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("h4",{attrs:{id:"windows版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows版"}},[t._v("#")]),t._v(" windows版")]),t._v(" "),a("p",[a("code",[t._v("start nginx.exe")]),t._v("      //启动")]),t._v(" "),a("p",[a("code",[t._v("nginx.exe -s stop")]),t._v("     //停止nginx")]),t._v(" "),a("p",[a("code",[t._v("nginx.exe -s reload")]),t._v("   //重新加载nginx")]),t._v(" "),a("p",[a("code",[t._v("nginx.exe -s quit")]),t._v("     //退出nginx")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);