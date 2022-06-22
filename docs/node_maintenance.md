# Node Maintenance

Please make sure to regularly update your node and make sure that you run the latest version. This is a quick guide how to update your node.

## Update via eCredits Script

if you use the ecredits node maintenance script, you can update your node via:

```bash
ecredits
```

It will show you a few options, please select `2` to update your node. The script will download the latest version of the container, will restart
the node and will ask you for your password. Please enter your password to unlock the validator. Once it's up and running, press `10` to check the logs.  

If the logs do not show a new potentially mined block, please try to unlock again and make sure that the address of the account matches with the one of
your validator.

### Update OS

You should update the operating system on a regular base via:

```bash
sudo apt update && sudo apt upgrade -y
sudo reboot
```

This will update your system and reboot the device. After the reboot, please login, type `ecredits` and select `5` to start mining. The system will ask you for
the password to unlock your account.

## Manual Update

If you do not use the eCredits script, please follow the following steps:

### Step 1: Update OS

Update all packages of your operating system to the latest version. It depends on the operating system, but for debian based systems such as ubuntu, execute:

```bash
sudo apt update && sudo apt upgrade -y
sudo reboot
```

### Step 2: Update container version

Modify the docker-compose (/var/lib/eCredits/validator.docker-compose.yaml) file for the validator so that it matches: <https://docs.ecredits.com/files/node-setup/validator.docker-compose.yaml>. Do not forget to set the etherbase address to yours (if you use it).

```bash
sudo nano /var/lib/eCredits/validator.docker-compose.yaml
```

### Step 3: restart the container

restart the container and check the log files if everything works as expected:  

```bash
docker-compose -f /var/lib/eCredits/validator.docker-compose.yaml up -d
docker logs --tail 100 -f ecredits_ecs-validator_1
```

### Step 3.1: database issues or others

when you upgrade from a very old version, there is a chance that your db will be corrupted or another issue occurs. You will recognize that by looking into the transactions
. In such cases, you can stop the container and reset the db via:

```bash
DATADIR=/var/lib/eCredits
docker-compose -f $DATADIR/validator.docker-compose.yaml down

docker run -it -v $DATADIR/genesis.json:/etc/config/genesis.json -v $DATADIR/datadir:/root/.ethereum -e POD_NAME --entrypoint geth ecredits/node:latest removedb

docker-compose -f /var/lib/eCredits/validator.docker-compose.yaml up -d
```

### Step 4: unlock account and start mining

```bash
docker exec -it ecredits_ecs-validator_1 geth attach
```

within geth:

```javascript
personal.unlockAccount("<Address>", "<PW>", 0)
miner.start()
```

### Step 5: Verify if your node runs as expected

check the log files if everything works as expected:  

```bash
docker logs --tail 100 -f ecredits_ecs-validator_1
```
