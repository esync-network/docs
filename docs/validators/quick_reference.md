---
sidebar_position: 6
---

# Quick Command Reference

## Start the node

```bash
docker-compose -f validator.docker-compose.yaml up -d
```

## Stop the node

```bash
# 1. kill geth (proper shutdown)
docker exec ecredits_ecs-node_1 killall -INT geth

# 2. shutdown the container
docker-compose -f validator.docker-compose.yaml down
```

## Restart the node

```bash
# 1. kill geth (proper shutdown)
docker exec ecredits_ecs-node_1 killall -INT geth

# 2. restart the container
docker-compose -f validator.docker-compose.yaml restart
```

## Show Logs

```bash
docker logs --tail 10 -f ecredits_ecs-validator_1
```

## Connect to Geth

```bash
docker exec -it ecredits_ecs-validator_1 geth attach
```

## Start Validation


```bash
docker exec -it ecredits_ecs-validator_1 geth attach
personal.unlockAccount("<Address>", "<PW>", 0)
miner.start()
```

or

```bash
docker exec -it ecredits_ecs-validator_1 geth --exec "personal.unlockAccount(\"<Address>\",\"<PW>\",0)" attach
docker exec -it ecredits_ecs-validator_1 geth --exec "miner.start()" 
```

## Vote for another validator

```bash
docker exec -it ecredits_ecs-validator_1 geth attach
clique.propose("0x....", true)
```

or

```bash
docker exec -it ecredits_ecs-validator_1 geth --exec 'clique.propose("0x....", true)' attach
```
## Clean/Reset/Reinitialize the database

```bash
DATADIR=/var/lib/eCredits
docker-compose -f $DATADIR/validator.docker-compose.yaml down

docker run -it -v $DATADIR/genesis.json:/etc/config/genesis.json -v $DATADIR/datadir:/root/.ethereum -e POD_NAME --entrypoint geth ecredits/node:latest removedb

docker-compose -f /var/lib/eCredits/validator.docker-compose.yaml up -d
```

## Import Private Key

```bash
docker exec -it ecredits_ecs-validator_1 geth account import <PrivateKeyFile>
```

## Create a new account

```bash
docker exec -it ecredits_ecs-validator_1 geth account new
```

## Withdraw ECS from your validator

```bash
docker exec -it ecredits_ecs-validator_1 geth attach
eth.sendTransaction({ from: "0x...", to: "0x...", value: 1000000000000000000 })
```
