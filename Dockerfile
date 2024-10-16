# Node.js 이미지 
FROM node:20-alpine as build

# 작업 디렉토리 /app
WORKDIR /app

# 컨테이너에 package.json, package-lock.json 복사
COPY package*.json ./

# npm install
RUN npm install

COPY . .

# Next.js 빌드
RUN npm run build

# nginx 이미지 생성
FROM nginx

# 오픈할 포트 3000
EXPOSE 3000

# default.conf를 /etc/nginx/conf.d/ 내부의 default.conf에 복사
COPY ./default.conf /etc/nginx/conf.d/default.conf

# next.js 빌드 결과물을 /usr/share/nginx/html에 복사
COPY --from=build app/out /usr/share/nginx/html