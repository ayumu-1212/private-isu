FROM alpine:latest

# alpのinstall
RUN apk add curl unzip
RUN curl -L -O https://github.com/tkuchiki/alp/releases/download/v1.0.21/alp_linux_amd64.zip
RUN unzip alp_linux_amd64.zip
RUN mv alp /usr/bin/alp && rm -rf alp_linux_amd64.zip

# abのinstall
RUN apk add apache2-utils
