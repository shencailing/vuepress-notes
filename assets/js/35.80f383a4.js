(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{364:function(t,e,a){t.exports=a.p+"assets/img/DockerDesktop.cee061a9.png"},365:function(t,e,a){t.exports=a.p+"assets/img/docker-settings-disk-image-location.825a4cc2.png"},469:function(t,e,a){"use strict";a.r(e);var r=a(10),o=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" docker")]),t._v(" "),e("h2",{attrs:{id:"docker基础信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker基础信息"}},[t._v("#")]),t._v(" docker基础信息")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击跳转到官网"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("下载安装 Docker Desktop 界面如图:"),e("img",{attrs:{src:a(364),alt:"image"}})]),t._v(" "),e("li",[t._v("设置:"),e("img",{attrs:{src:a(365),alt:"image"}})]),t._v(" "),e("li",[t._v("可参考的docker项目："),e("a",{attrs:{href:"https://gitee.com/shen-cailing/nginx-docker",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击跳转到对应项目仓库"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("font",{attrs:{color:"#d50000"}},[t._v("*")]),t._v("重要的文件："),e("code",[t._v("docker-compose.yml")])],1),t._v(" "),e("li",[t._v("自己今天使用过的一些命令")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("序号")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("docker-compose up -d")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("和"),e("code",[t._v("docker-compose.yml")]),t._v("文件同级的位置下启动整个服务；-d可以在后台运行")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("docker ps -a")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("查看所有的docker")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("docker exec -it <container_id_or_name> sh")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("进入对应的docker下")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("docker stop <container_id>")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("停止当前容器，停止一个容器")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("docker-compose down")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("停止，停止多个容器")])])])]),t._v(" "),e("h2",{attrs:{id:"使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),e("h3",{attrs:{id:"docker-已经在运行-并且你修改了-docker-compose-文件-可以按照以下步骤更新容器和服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-已经在运行-并且你修改了-docker-compose-文件-可以按照以下步骤更新容器和服务"}},[t._v("#")]),t._v(" Docker 已经在运行，并且你修改了 Docker Compose 文件，可以按照以下步骤更新容器和服务：")]),t._v(" "),e("h4",{attrs:{id:"_1保存修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1保存修改"}},[t._v("#")]),t._v(" 1保存修改：")]),t._v(" "),e("p",[t._v("在你的 Docker Compose 文件所在的目录，保存你对文件的修改。")]),t._v(" "),e("h4",{attrs:{id:"_2重新构建镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2重新构建镜像"}},[t._v("#")]),t._v(" 2重新构建镜像：")]),t._v(" "),e("p",[t._v("如果你修改了 Dockerfile 或者相关的构建配置，可以使用以下命令重新构建镜像："),e("code",[t._v("docker-compose build")]),t._v("这会重新构建你的服务所需的镜像。\n"),e("code",[t._v("docker-compose build")]),t._v("命令，当你重新构建镜像时，Docker 会尝试重用已经缓存的层次，以减少构建时间。\n但是如果想要“禁用镜像构建缓存，强制 Docker 重新执行每个步骤，确保所有的文件和文件夹都是从头开始初始化的。”执行："),e("code",[t._v("docker build --no-cache -t your-image-name .")]),t._v("(不建议在生产环境中使用)")]),t._v(" "),e("h4",{attrs:{id:"_3更新服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3更新服务"}},[t._v("#")]),t._v(" 3更新服务：")]),t._v(" "),e("p",[t._v("使用以下命令来停止当前正在运行的服务并重新启动："),e("code",[t._v("docker-compose up -d")])]),t._v(" "),e("h4",{attrs:{id:"_4查看更新后的容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4查看更新后的容器"}},[t._v("#")]),t._v(" 4查看更新后的容器：")]),t._v(" "),e("p",[t._v("使用以下命令查看你的容器是否正常运行，并且新的配置是否生效："),e("code",[t._v("docker ps")])])])}),[],!1,null,null,null);e.default=o.exports}}]);