# DOCKERFILE A USAR
```
FROM ubuntu:bionic
RUN  apt-get update &&\
apt-get install -y nodejs  npm git  python3.9 &&\
apt-get clean &&\
git clone https://github.com/NormanVC/pruebabackend
    cd pruebabackend && npm install
EXPOSE 3000
ENTRYPOINT ["node","index.js"]
