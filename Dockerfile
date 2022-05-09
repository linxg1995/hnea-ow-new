# 1.使用 nodejs 14
FROM node:14.17.0-stretch

# 2.构建 app 工作空间
RUN mkdir -p /home/app
WORKDIR /home/app

# 3.将当前目录下的所有文件拷贝到 image 的 /home/app 下
COPY . /home/app

# 4.淘宝镜像仓库安装依赖
# RUN npm install --registry=https://registry.npm.taobao.org
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install

# 5.打包
RUN npm run build

# 6.暴露端口 3000
EXPOSE 3000

# 7.启动
# CMD npm run dev
CMD npm run start


# 使用教程
# 打包镜像：docker build -t ssr .
# 启动容器：docker run -itd --name ssr -p 3000:3000 ssr
# 进入容器：docker exec -it ssr /bin/bash
# 查看日志：docker logs --tail=1000 ssr