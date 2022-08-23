# eCredits Node Setup

This document describes all necessary steps to setup an eCredits node to participate in the eCredits blockchain network. The intended audience for this documentation are administrators, developers and other interested people who want to run a node.

!> **Note: You are solely responsible for your node. We do not provide any support for eCredits nodes. This includes 
but is not limited to support for setting up, maintaining or updating eCredits nodes. It's your own responsibility to 
take care of the node and it's security, keeping it up to date and to participate in the community.**

## Prerequisites

To setup and run an eCredits node, a basic understanding of Linux, docker & bash is 
required. The examples provided are based on Ubuntu Server 20.04 LTS. 

### Hardware Requirements

For Validator and Full Nodes, we are suggesting to choose a setup which has the following properties:  
 - **Very fast and reliable SSDs**: Please make sure that you are using a system which utilizes SSDs. You should also make sure that there are premium SSDs in use, and preferably NVMe.
 - **A large number of RAM**: 16GB RAM is the absolute minimum configuration, and we are suggesting 64GB for optimal performance, while 32GB is sufficient for a node at the time of writing.
 - **Fast and extensible storage**: minimum storage requirements are 1TB, and you should make sure that you can grow the space at a later time, should you want to run a full sync node. 

**Minimum requirements**:  
 - **CPU**: 4 cores / 8 threads, 2.8 GHz or faster, 64-bit
 - **RAM**: 32 GB RAM
 - **HDD**: 1 TB NVMe SSD
 - **GPU**: no strict requirements

Example cloud virtual machines are:

| Cloud Provider  | Virtual Machine Size              |
|-----------------|-----------------------------------|
| Microsoft Azure | Standard_D8_v4 or Standard_D8s_v4 |
| Amazon AWS      | t3.2xlarge                        |
| Google Cloud    | e2-standard-8                     |

### Connectivity Recommendations

The nodes should be connected through an "always on" internet connection (broadband and not LTE). We recommend 
a dedicated network connection with at least 8 Mbit up/down.

### Required Software 

Linux x86_64 machine with running docker daemon and installed docker-compose binaries. You can install 
docker and docker-compose as advised at <https://docs.docker.com/engine/install/> and <https://docs.docker.com/compose/install/>.

For Ubuntu, you can simply use:

```bash
sudo apt install docker docker-compose
```

### Firewall Settings

In case you use a firewall, please make sure to open the following ports:  

**Incoming** (Internet -> ECS node):
 - Discovery: 30303 TCP/UDP
 - RPC (optional): 8545 TCP/UDP
 - Metrics (optional): 6060 TCP/UDP

**Outgoing** (ECS node -> Internet): 
 - GETH: 30303 TCP/UDP
 - The following are in general needed for internet access/time synchronization:
   - DNS (optional): 53 TCP/UDP
   - HTTP/HTTPS (optional): 80, 443 RCP
   - NTP (optional): 123 TCP/UDP

## Quick-Setup

The following contains a quick walkthrough of the installation of a **validator** node. The general process applies for all node types, you just have to use the respecive docker-compose file for your node type. More information can be found in the next chapter.

### Preparation (Updates & Docker)

Please install docker as described at <https://docs.docker.com/engine/install/>. For 
Ubuntu, you can also simply use:

```bash
sudo apt update && sudo apt install docker docker-compose
sudo usermod -aG docker $USER
```

### Node Setup

```bash
datadir='/var/lib/eCredits/'
sudo mkdir -p $datadir/datadir/geth
cd $datadir
wget https://docs.ecredits.com/files/node-setup/genesis.json
wget https://docs.ecredits.com/files/node-setup/validator.docker-compose.yaml
```

?> If you want to use a separate account for your rewards, please update etherbase address before you continue (see below). If not, please make sure to remove the commented lines from the docker-compose file.

### Start Node

```bash
docker-compose -f validator.docker-compose.yaml up -d
docker exec -it ecredits_ecs-validator_1 geth account new
# check log files if node is connected and is in sync
docker logs --tail 10 -f ecredits_ecs-validator_1
```

### Start Validation

Your validator must be accepted by the community or the SCE. If you are a member of the SCE, you can apply via mail 
at <support@ecredits.com>. Please provide your user id (email address) and the address of the validator (0x....).  

```bash
docker exec -it ecredits_ecs-validator_1 geth attach
```

within geth:

```javascript
personal.unlockAccount("<Address>", "<PW>", 0)
miner.start()
```

Example:
```javascript
personal.unlockAccount("0x...", "mySecret", 0)
```

## Setup

### Preparing machine

#### Install docker and docker-compose

Please install docker and docker-compose as described at <https://docs.docker.com/engine/install/> and <https://docs.docker.com/compose/install/>. \
For Ubuntu, you can simply use:

```
sudo apt-get update && sudo apt install docker docker-compose
```

#### Configure docker

Add user to docker group.

`sudo usermod -aG docker $USER`

#### Secure docker

We strongly recommend to not running the container without any additional hardening measures. To do so please review the respective [OWASP Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html) and apply appropriate measures.

#### Create directory for chain data

Create a directory for storing the chain. This directory can be a subdirectory on the same physical OS device or (better) a volume on a separate disk. This directory will be used as working directory for the geth process.

Store the directory path in a variable for later use. The recommended path is `/var/lib/eCredits`, but feel free to use whatever fits best for you:

```bash
datadir='/var/lib/eCredits/'
mkdir -p $datadir/datadir/geth
```

#### Create nodes list and genesis file

```bash
cd $datadir
wget https://docs.ecredits.com/files/node-setup/genesis.json
wget https://docs.ecredits.com/files/node-setup/archive-node.docker-compose.yaml
wget https://docs.ecredits.com/files/node-setup/full-node.docker-compose.yaml
wget https://docs.ecredits.com/files/node-setup/light-node.docker-compose.yaml
wget https://docs.ecredits.com/files/node-setup/validator.docker-compose.yaml
```

#### Download the docker image

The eCredits docker image can be found at: <https://hub.docker.com/r/ecredits/node>  
You can pull the docker image via:

`docker pull ecredits/node`

### Start the eCredits node

#### Start Validator node

A validator node validates transactions and will receive a reward for this work. The reward itself is automatically granted to the nodes 
public address. eCredits allows to configure a separate address to collect those fees. To use this feature, edit the validator.docker-compose.yaml (e.g. via `sudo nano validator.docker-compose.yaml`). 
Uncomment `- ETHERBASE` in the `environment:` section as well as `--miner.etherbase 0xTODO0000ENTER000YOUR000ADDRESS000HERE000` in the `entrypoint:` 
section. Please replace `0xTODO0000ENTER000YOUR000ADDRESS000HERE000` with your address. If you do not want to use this feature, remove the commented lines from the validator.docker-compose.yaml.

Run the following command to start the validator:

`docker-compose -f validator.docker-compose.yaml up -d`

Check the status of the validator via:

`docker logs --tail 10 -f ecredits_ecs-validator_1`

#### Connect to IPC endpoint to unlock account for signing and start mining:

1. Create a new or import an existing account for block signing

    See https://geth.ethereum.org/docs/interface/managing-your-accounts

    a. Create a new account

    To create a new account run (you need to provide a password for account encryption): 

    `docker exec -it ecredits_ecs-validator_1 geth account new`

    ```
    Your new account is locked with a password. Please give a password. Do not forget this password.
    Password:
    Repeat password:

    Your new key was generated

    Public address of the key:   0x....
    ```

    **Make sure you backup your keys regularly!**

    *It is important to backup the given password **AND** the **keystore** folder in the mapped **datadir** volume of the docker-compose file as it contains the generated, encrypted key. Only the combination of both allows you to recover the validator key as the encrypted private key is stored there.*

    b. Import existing account

    To import an account from e.g. private key you can use the command below:

    `docker exec -it ecredits_ecs-validator_1 geth account import <PrivateKeyFile>`

    where `<PrivateKeyFile>` is a text file containing the private key. Also, here you need to provide a password for account encryption.

    The generated output looks like below:

    ```
    Your new account is locked with a password. Please give a password. Do not forget this password.
    Passphrase:
    Repeat passphrase:
    Address: 0x...
    ```

2. Connect to eCredits client IPC endpoint

    `docker exec -it ecredits_ecs-validator_1 geth attach`

3. Enter the following commands in order to start the mining

    * Unlock Account
  
    `personal.unlockAccount("<Address>", "<PW>", 0)`

    `<Address>` is the account address in **0x** format. The `<PW>` is the password from previous step given during account creation/import.

    Example: `personal.unlockAccount("0x...", "mySecret", 0)`

   * Start the mining with

    `miner.start()`

4. Validate that mining is working by checking the logs: 

   `docker logs -f --tail=10 ecredits_ecs-validator_1`

?> NOTE: your validator can only participate in mining once the majority of the other validators have voted for your validator to become part of consensus.

### Apply as validator

Each validator must be accepted by a majority of the existing validators. This 
majority must be achieved either by:

- Validator Nodes: more 50%
- Supervalidator Nodes: more than 75%

If you are a member of the SCE or you bought a node at the eCredits webshop, you can apply via mail at <support@ecredits.com>. Please fill out the following information
and send it to the support:

```text
User ID (your email address in eCredits system): 
Validator address: 
Elements username: 
Validator up and running: yes/no
Hardware requirements fulfilled: yes/no
```

- User ID: is the email address you use in the eCredits system to login to the webportal or the eWallet.
- Validator address: is the address of your validator that you generated and that you need to unlock your validator.
- Element username: Element is a secure messenger. There is an eCredits space (<https://matrix.to/#/#ecredits:matrix.org>) with a private channel for validators which is used as a fast communication channel so that the users can help each other and that it is ensured that updates are promoted and potential downtimes of validators are reduced as much as possible.
- Validator up and running: It is important that the validator is already setup and running. Thats why we ask you explicitly if that is done.
- Hardware requirements fulfilled: Please let us know if you fulfill the requirements.

As alternative, you can communicate to other validators and convince them to accept your node as 
a validator in the network.

!> It is your responsibility to keep your node up to date. We will publish updates in the elements channel and you will also see it in docker hub. Please note that 
the SCE or the community could decide to vote for the removal of a node if there are too many downtimes or the node is not regularaly updated and maintained.

### Run a Full-Node

Run the following command to start the node:

`docker-compose -f full-node.docker-compose.yaml up -d`


## Monitoring

The docker image is based on official geth and supports all parameters of the parent geth. It is recommended to use the standard parameters included in the docker-compose file, however for example below **metrics** can be omitted if you do not want to use for your node the monitoring capabilities provided by geth.

- --metrics
- --metrics.addr 0.0.0.0
- --metrics.expensive
