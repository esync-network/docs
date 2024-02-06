---
sidebar_position: 3
---
# Node Setup

This document describes all necessary steps to setup an eSync Network Validator Node to participate in the eSync Network network. The intended audience for this documentation are administrators, developers, and other interested people who wish to run a node.

:::warning

You are solely responsible for your Validator Node. We do not provide any support for eSync Network Validator Nodes. This includes but is not limited to support for setting up, maintaining, or updating eSync Network Validator Nodes. It's your responsibility to take care of the node and it's security, keeping it up to date, and to participate in the community.

:::

## Prerequisites

To setup and run an eSync Network node, a basic understanding of Linux, Docker, and Bash is 
required. The examples provided are based on Ubuntu Server 20.04 LTS. 

### Hardware Requirements

For Validator and Full Nodes, we suggest to choose a setup with the following properties:  
 
 - **Very fast and reliable SSDs**: Please make sure that you are using a system which utilizes SSDs. You should also make sure that there are premium SSDs in use, and preferably NVMe.
 - **A large amount of RAM**: 16GB RAM is the absolute minimum configuration, and we suggest 64GB for optimal performance, while 32GB is sufficient for a node at the time of writing. 
 - **Fast and extensible storage**: Minimum storage requirements are 1TB, and you should make sure that you can grow the space at a later time should you wish to run a full sync node. 

**Minimum requirements**:  

 - **CPU**: 4 cores / 8 threads, 2.8 GHz or faster, 64-bit
 - **RAM**: 32 GB RAM
 - **HDD**: 1 TB NVMe SSD
 - **GPU**: No strict requirements

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

A Linux x86_64 machine with running Docker daemon and installed Docker-compose binaries. You can install 
Docker and Docker-compose as advised at <https://docs.docker.com/engine/install/> and <https://docs.docker.com/compose/install/>.

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

## Setup

### Preparing machine

#### Install Docker and Docker-compose

Please install Docker and Docker-compose as described at <https://docs.docker.com/engine/install/> and <https://docs.docker.com/compose/install/>.  
For Ubuntu, you can simply use:

```
sudo apt-get update && sudo apt install docker docker-compose
```

#### Configure Docker

Add user to Docker group.

`sudo usermod -aG docker $USER`

#### Secure Docker

We strongly recommend to not running the container without any additional hardening measures. To do so please review the respective [OWASP Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html) and apply appropriate measures.

#### Create directory for chain data

Create a directory for storing the chain. This directory can be a subdirectory on the same physical OS device or (better) a volume on a separate disk. This directory will be used as working directory for the Geth process.

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

#### Download the Docker image

The eCredits docker image can be found at: <https://hub.docker.com/r/ecredits/node>  
You can pull the Docker image via:

`docker pull ecredits/node`

### Start the eCredits node

#### Start Validator Node

A Validator Node validates transactions and will receive a reward for this work. The reward itself is automatically granted to the node's 
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

    :::warning

    **Make sure you backup your keys regularly!**
    
    *It is important to backup the given password **AND** the **keystore** folder in the mapped **datadir** volume of the Docker-compose file as it contains the generated, encrypted key. Only the combination of both allows you to recover the validator key as the encrypted private key is stored there.*

    :::

    
    b. Import existing account

    To import an account from e.g. private key you can use the command below:

    `docker exec -it ecredits_ecs-validator_1 geth account import <PrivateKeyFile>`

    where `<PrivateKeyFile>` is a text file containing the private key. Also, here you must provide a password for account encryption.

    The generated output looks like:

    ```
    Your new account is locked with a password. Please give a password. Do not forget this password.
    Passphrase:
    Repeat passphrase:
    Address: 0x...
    ```

2. Connect to eCredits client IPC endpoint

    `docker exec -it ecredits_ecs-validator_1 geth attach`

3. Enter the following commands in order to start mining

    * Unlock Account
  
    `personal.unlockAccount("<Address>", "<PW>", 0)`

    `<Address>` is the account address in **0x** format. The `<PW>` is the password from previous step given during account creation/import.

    Example: `personal.unlockAccount("0x...", "mySecret", 0)`

   * Start the mining with

    `miner.start()`

4. Validate that mining is working by checking the logs: 

   `docker logs -f --tail=10 ecredits_ecs-validator_1`

:::info

Your validator can only participate in mining once the majority of the other validators have voted for your validator to become part of consensus.

:::

### Apply as validator

Each validator must be accepted by a majority of the existing validators. This 
majority must be achieved either by:

- Validator Nodes: more than 50%
- Supervalidator Nodes: more than 75%

If you are a member of the SCE or you bought a node at the [eCredits Web Shop](https://shop.ecredits.com), you can apply via mail at <support@ecredits.com>. Please fill out the following information
and send it to support:

```text
User ID (your email address in eCredits system): 
Validator address: 
Elements username: 
Validator up and running: yes/no
Hardware requirements fulfilled: yes/no
```

- User ID: the email address you use in the eCredits system to login to the Web Portal or the eWallet.
- Validator address: the address of your validator that you generated and will need to unlock your validator.
- Element username including the server (e.g. @matrix.org): Element is a secure messenger. There is an eCredits space (<https://matrix.to/#/#ecredits:matrix.org>) there with a private channel for validators which is used as a fast communication channel so that the users can help each other and updates are promoted and potential downtimes of validators are reduced as much as possible.
- Validator up and running: It is important that the validator is already setup and running. Thus, we explicitly ask you if it is done.
- Hardware requirements fulfilled: Please let us know if you fulfill the requirements.

As alternative, you can communicate to other validators and convince them to accept your node as 
a validator in the network.

:::warning

It is your responsibility to keep your node up to date. We will publish updates in the elements channel, and you will also see it in Docker hub. Please note that 
the SCE or the community could decide to vote for the removal of a node if there are too many downtimes or the node is not regularly updated and maintained.

:::
