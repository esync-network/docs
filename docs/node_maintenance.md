# Node Maintenance

Please make sure to regularly update your node and make sure that you run the latest version. This is a quick guide how to update your node.

## Step 1: Update OS

Update all packages of your operating system to the latest version. It depends on the operating system, but for debian based systems such as ubuntu, execute:

```bash
sudo apt update && sudo apt upgrade -y
sudo reboot
```

## Step 2: Update container version

Modify the docker-compose (/var/lib/eCredits/validator.docker-compose.yaml) file for the validator so that it matches: <https://docs.ecredits.com/files/node-setup/validator.docker-compose.yaml>. Do not forget to set the etherbase address to yours (if you use it).

## Step 3: restart the container

restart the container and check the log files if everything works as expected:  

```bash
docker-compose -f /var/lib/eCredits/validator.docker-compose.yaml up -d
docker logs --tail 100 -f ecredits_ecs-validator_1
```

## Step 3.1: database issue

when you upgrade from a very old version, there is a chance that your db will be corrupted. In such cases, you can stop the container and reset the db via:

```bash
$DATADIR=/var/lib/eCredits
docker-compose -f $DATADIR/validator.docker-compose.yaml down

docker run -it -v $DATADIR/genesis.json:/etc/config/genesis.json -v $DATADIR/datadir:/root/.ethereum -e POD_NAME --entrypoint geth ecredits/node:latest removedb

docker-compose -f /var/lib/eCredits/validator.docker-compose.yaml up -d
```

## Step 4: unlock account and start mining

```bash
docker exec -it ecredits_ecs-validator_1 geth attach
```

within geth:

```javascript
personal.unlockAccount("<Address>", "<PW>", 0)
miner.start()
```

## Step 5: Verify if your node runs as expected

check the log files if everything works as expected:  

```bash
docker logs --tail 100 -f ecredits_ecs-validator_1
```
