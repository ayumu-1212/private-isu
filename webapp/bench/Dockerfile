FROM debian:bullseye-slim

# alpのinstall
RUN apt update && apt install -y curl unzip
RUN curl -L -O https://github.com/tkuchiki/alp/releases/download/v1.0.21/alp_linux_amd64.zip
RUN unzip alp_linux_amd64.zip
RUN mv alp /usr/bin/alp && rm -rf alp_linux_amd64.zip

# abのinstall
RUN apt install -y apache2-utils

# k6のinstall
RUN curl -L -O https://github.com/grafana/k6/releases/download/v0.47.0/k6-v0.47.0-linux-amd64.tar.gz
RUN tar -zxvf k6-v0.47.0-linux-amd64.tar.gz
RUN mv k6-v0.47.0-linux-amd64/k6 /usr/bin/k6 && rm -rf k6-v0.47.0-linux-amd64 && rm -rf k6-v0.47.0-linux-amd64.tar.gz
