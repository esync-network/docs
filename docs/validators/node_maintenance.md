---
sidebar_position: 5
---
# Operation and Maintenance
Once your Validator Node is up and running, it's important to keep it that way. To help keep your node running smoothly, please see the following tips and instructions. 

## Updates 
As with any computer system, it's crucial that your node remains up to date and secure. Therefore, please regularly update your node's operating system!

Updates to the eCredits Docker container will be communicated via the community channels like our Elements channel.

### Update via eCredits Script

if you use the ecredits node maintenance script, you can update your node via:

```bash
ecredits
```

It will show you a few options, please select `4` to update your node. The script will download the latest version of the container, will restart
the node and will ask you for your password. Please enter your password to unlock the validator. Once it's up and running, press `6` to check the logs.  

If the logs do not show a new potentially mined block, please try to unlock again and make sure that the address of the account matches with the one of
your validator.

#### Update OS

You should update the operating system on a regular base. If you use debian or ubuntu, you can update your node via:

```bash
sudo apt update && sudo apt upgrade -y
sudo reboot
```

This will update your system and reboot the device. After the reboot, please login, type `ecredits` and select `2` to start mining. The system will ask you for
the password to unlock your account.

### Manual Update

If you do not use the eCredits script, please follow the following steps:

#### Step 1: Update OS

Update all packages of your operating system to the latest version. It depends on the operating system, but for debian based systems such as ubuntu, execute:

```bash
sudo apt update && sudo apt upgrade -y
sudo reboot
```

#### Step 2: Update container version

Modify the docker-compose (/var/lib/eCredits/validator.docker-compose.yaml) file for the validator so that it matches: <https://docs.ecredits.com/files/node-setup/validator.docker-compose.yaml>. Do not forget to set the etherbase address to yours (if you use it).

```bash
sudo nano /var/lib/eCredits/validator.docker-compose.yaml
```

#### Step 3: restart the container

restart the container and check the log files if everything works as expected:  

```bash
docker exec ecredits_ecs-node_1 killall -INT geth
docker-compose -f /var/lib/eCredits/validator.docker-compose.yaml up -d
docker logs --tail 100 -f ecredits_ecs-validator_1
```

#### Step 3.1: database issues or others

when you upgrade from a very old version, there is a chance that your db will be corrupted or another issue occurs. You will recognize that by looking into the transactions
. In such cases, you can stop the container and reset the db via:

```bash
DATADIR=/var/lib/eCredits
docker-compose -f $DATADIR/validator.docker-compose.yaml down

docker run -it -v $DATADIR/genesis.json:/etc/config/genesis.json -v $DATADIR/datadir:/root/.ethereum -e POD_NAME --entrypoint geth ecredits/node:latest removedb

docker-compose -f /var/lib/eCredits/validator.docker-compose.yaml up -d
```

#### Step 4: unlock account and start mining

```bash
docker exec -it ecredits_ecs-validator_1 geth attach
```

within geth:

```javascript
personal.unlockAccount("<Address>", "<PW>", 0)
miner.start()
```

#### Step 5: Verify if your node runs as expected

check the log files if everything works as expected:  

```bash
docker logs --tail 100 -f ecredits_ecs-validator_1
```


## Monitoring
As your Validator Node is part of the eCredits community and is a crucial element of the entire ecosystem, it's important that you keep it up and validating as much as possible. To do so - and to recognize if, for example, a power outage stopped your validating process - we suggest establishing proper monitoring for your node.

To do so, you can:
1. Monitor the blockchain if your node has recently validated a block
2. Monitor the Geth metrics of the Docker container
3. Monitor the hardware you're running the node on

### Monitor the blockchain
The blockchain provides access to information that is available via the RPC endpoints. As the eCredits Blockchain is based on Ethereum, you can use the Ethereum RPC libraries to connect to the node.

You can query the RPC endpoint on your own node to collect this information and verify if your node had validated a block within the last 300 validated blocks.

If so, your node is validating as it should.

We also recommend you monitor the uptime via the blockchain RPC endpoints and check if your Validator Node has validated a block recently. This will show you if it's still running properly, or if you should take action if it's not fast and reliable as it should be. 

### Monitor your node
If activated, your node also directly provides metrics in prometheus format that you can monitor and process. To activate these metric endpoints, be sure to have the following options in you Docker-compose file:

```yaml
- --metrics
- --metrics.addr 0.0.0.0
- --metrics.expensive
```

:::info

Please be sure to allow port 6060/TCP on your node's firewall so you can access the metrics!

:::

More information about those metrics can be found [here](https://geth.ethereum.org/docs/monitoring/metrics).

## Voting
You can vote for other validators to be added or expelled from the group of validators. This will happen if others want to join, as they need to have the majority of validators vote for them in order to join the group.

To vote for a validator to be accepted, you can invoke the following command:

```bash
docker exec -it ecredits_ecs-validator_1 geth attach
clique.propose("0x....", true)
```

or

```bash
docker exec -it ecredits_ecs-validator_1 geth --exec 'clique.propose("0x....", true)' attach
```

Sometimes a validator needs to be removed from the group as it's no longer validating or no longer wishes to run a node.
To remove a validator from the network you can run the following command:

```bash
docker exec -it ecredits_ecs-validator_1 geth attach
clique.propose("0x....", false)
```

or

```bash
docker exec -it ecredits_ecs-validator_1 geth --exec 'clique.propose("0x....", false)' attach
```

## Backup

Backing up your keystore file is essential for safeguarding your valuable cryptographic keys. In the event of data loss, hardware failure, or security breaches, having a secure backup ensures that you can regain access to your encrypted information and digital assets. By maintaining a reliable backup, you protect yourself from potential catastrophic consequences and ensure the continuity and security of your digital presence.

### How can I backup my keystore file?

1. **Making local copy of keystore**

    Access the validator's terminal, follow these steps:
    Press Ctrl + Alt + T to open the terminal.

    ```bash
    cd /var/lib/eCredits/datadir/

    sudo bash

    cd keystore

    ls

    exit
    ```

    Record the filename from the output.

    Example: `UTC--2021-10-11T15-23-03.0123456789--0123456789abcdef0123456789abcdef12345678`

    A keystore file is typically associated with blockchain-based systems and is used to store private keys securely.  
    Let's break down the example filename:  
    - **UTC--:** This is a prefix that indicates the file is following the Universal Time Coordinated (UTC) format. It helps in identifying the timestamp 
    format of the file.  
    - **2021-10-11T15-23-03.0123456789:** This part represents the date and time when the keystore file was created or generated. In the example, it shows October 11, 2021, at 15:23:03, with milliseconds represented by 0123456789.  
    - **--:** This is a separator in the filename, which helps separate the timestamp from the next part.  
    - **0123456789abcdef0123456789abcdef12345678:** This part is the unique identifier for the keystore file. It's the wallet address of the wallet the keystore is holding.

    To ensure a local backup of the keystore file, execute the following command to copy the keystore file:

    ```bash
    sudo cp -R /var/lib/eCredits/datadir/keystore/<filename> ~/
    ```

    Replace "filename" with the keystore file name.

2. **Preparing keystore file for back up**

    To ensure a successful backup of the file, it is crucial to set the correct ownership.
    You can grant the proper ownership to the keystore file by executing the following command:

    ```bash
    sudo chown <username> <filename>
    ```

    Replace "filename" with the keystore file name.

3. **Back up of keystore file**

    For creating a secure backup of the keystore file from your Validator Node, you can utilize SCP (Secure Copy Protocol):

    SCP provides a reliable and straightforward way to copy the keystore file between your validator and backup machine while ensuring secure file  
    transfer through SSH (Secure Shell). To learn more about SCP and its functionalities, you can find additional information at the following
    link: <https://linux.die.net/man/1/scp>

    To initiate the keystore file transfer from the Validator Node to your backup machine, please follow these steps:

    On your backup machine, open Command Prompt or PowerShell. You can do this by:

    - Command Prompt: Press Windows 'Key + R' to open the Run dialog, type 'cmd', and press Enter.
    - PowerShell: Press Windows 'Key + X', then select "Windows PowerShell" from the menu.

    Utilize the following command to copy the keystore file from the validator to the backup machine:

    ```bash
    scp <username>@<validator_ip>:~/<filename> path/to/destination/folder
    ```

    To proceed with the keystore file backup, substitute the following placeholders with your specific information:

    - Replace "username" with your validator username.
    - Replace "validator_ip" with the IP address of your validator.
    - Replace "filename" with the actual keystore file name that you wish to back up.
    - Modify "/path/to/destination/folder" to the desired folder location on the backup machine where you want to save the file.  
	
	:::info
    Make sure the file is backed up on your backup machine!
    :::

### How can I restore my keystore file?

1. **Restoring the keystore file to validator**

   Restoring your keystore file is a straightforward process. Ensure you have a backup of your keystore file and simply follow these steps to successfully restore it:

	:::info
	Before proceeding with any SSH-related tasks, ensure that OpenSSH-Server is installed on your validator. If it's not installed, you can use the
	following commands to install it:

    ```bash
    sudo apt update

    sudo apt install openssh-server
    ```

	:::

	On your backup machine where your keystore file is located, open Command Prompt, Terminal or PowerShell and use the following command to copy the key to
    your validator:

    ```bash
    scp /path/to/source/<filename> <username>@<validator_ip>:~
    ```

    Type your password.

2. **Relocating keystore file to right place**

    Your keystore file is copied to `/home/<username>/`.

    Copy back keystore file to the `/var/lib/eCredits/datadir/keystore` location by following these steps:

    ```bash
    cd /var/lib/eCredits/datadir

    sudo bash

    cd keystore

    sudo cp /home/<username>/<filename> /var/lib/eCredits/datadir/keystore
    ```

   After copying the keystore file back to your Validator on right location, you can use the `ls` command to check if the file has been successfully copied.