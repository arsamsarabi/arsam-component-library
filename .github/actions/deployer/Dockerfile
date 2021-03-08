FROM debian:9.5-slim

ADD ./scripts/deployer.sh /deployer.sh
RUN chmod +x /deployer.sh
ENTRYPOINT ["/deployer.sh"]
