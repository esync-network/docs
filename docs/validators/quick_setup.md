---
sidebar_position: 2
---
# Quick-Setup

The following contains a quick walkthrough of the installation of a **Validator** Node. The general process applies for all node types, you just have to use the respecive docker-compose file for your node type.

:::info

Please ensure you meet all [prerequisites](/validators/personal_node_setup.md#prerequisites) for running a node!

:::

## Preparation (Updates & Docker)

Please install docker as described at <https://docs.docker.com/engine/install/>. For 
Ubuntu, you can also simply use:

```bash
sudo apt update && sudo apt install docker docker-compose
sudo usermod -aG docker $USER
```

## Node Setup

```bash
datadir='/var/lib/eCredits/'
sudo mkdir -p $datadir/datadir/geth
cd $datadir
wget https://docs.ecredits.com/files/node-setup/genesis.json
wget https://docs.ecredits.com/files/node-setup/validator.docker-compose.yaml
```

:::info

If you want to use a separate account for your rewards, please update etherbase address before you continue (see below). If not, please make sure to remove the commented lines from the docker-compose file.

:::

## Start Node

```bash
docker-compose -f validator.docker-compose.yaml up -d
docker exec -it ecredits_ecs-validator_1 geth account new
# check log files if node is connected and is in sync
docker logs --tail 10 -f ecredits_ecs-validator_1
```

## Start Validation

Your validator must be accepted by the community or the SCE. If you are a member of the SCE, you can apply via mail 
at <support@ecredits.com>. Please provide your user id (email address) and the address of the validator (0x,etc.).  

```bash
docker exec -it ecredits_ecs-validator_1 geth attach
```

Within Geth:

```javascript
personal.unlockAccount("<Address>", "<PW>", 0)
miner.start()
```

Example:
```javascript
personal.unlockAccount("0x...", "mySecret", 0)
```