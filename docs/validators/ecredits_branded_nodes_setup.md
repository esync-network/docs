---
sidebar_position: 3
---
# Branded Node Setup

:::info

This information only applies to nodes that have been bought in our [eCredits Web Shop](https://shop.ecredits.com)!

:::

Congratulations on your new eCredits Validator Node! This node is already preconfigured with software, but you still must maintain the node and run through the setup process. 
This documentation should guide you through the process, but please also make sure to check the [Node Setup](personal_node_setup.md#node-setup) and [Maintenance](node_maintenance.md) sections.

:::warning

You are solely responsible for your Validator Node. We do not provide any support for eCredits Validator Nodes. This includes 
but is not limited to support for setting up, maintaining, or updating eCredits Validator Nodes. It's your responsibility to 
take care of the node and it's security, keeping it up to date, and to participate in the community.

:::

## Login Data

The standard username and password for the node is:

- Username: `ecredits`
- Password: `The peoples currency!`

:::info 

The standard keyboard layout for the node is English. If you have a German style keyboard, the 'z' and 'y' keys are reversed. You can find a picture of the keyboard layout at: <https://en.wikipedia.org/wiki/Keyboard_layout#/media/File:Qwerty.svg>

:::

## OS Configuration

After the first login, please do the basic operating system configuration:

1. Change keyboard layout (general keyboard layout and the login keyboard layout)
2. Connect WLAN or LAN and ensure that the internet connection works
3. Change the default password by opening a terminal and type "passwd"
4. Update the system by opening a terminal and execute "sudo apt update && sudo apt upgrade -y". The system will ask you if you want to restart docker - select "yes".
5. execute "sudo sed -i -e 's/\r$//' /usr/local/bin/ecredits" which fixes a potential issue in the script.

## Setup eCredits Node

The hardware node sold via the official eCredits Web Shop has a pre-installed command that allows you to perform the operations on the node. Open a terminal and execute:

```{.bash .copy}
ecredits
```

This command updates itself, downloads the required files, and starts the validator:

```shell
********************************************************************************
*                     eCredits Node Control Panel                              *
********************************************************************************
 Node state: ecredits_ecs-validator_1 | Up Less than a second
--------------------------------------------------------------------------------

 1) Set etherbase
 2) Start mining
 3) Node status
 4) Update
 5) List wallets
 6) Show logs
 7) Create additional account
 8) Stop node
 9) Start node
10) Erase and Reinitialize
11) Reset database
12) Help
13) Exit
Existing eCredits setup identified. Please choose an option:
```

Please select option **2**. The system will guide you through the process, will ask you to create a new public address (if you dont have one), to set a password, will ask you if you want to use the etherbase address and will finally ask you to start mining. 

:::info

If you want to use a separate account for your rewards, please set the etherbase address by using option **1** to the address of your wallet. By doing that, all rewards (transaction costs) that your validator receives will be added to this configured address.

:::

Once the system creates the key, it will ask you for the public Account address:

```{shell linenums="1" hl_lines="3"}
Your new key was generated

Public address of the key:   0x0215414CEF8F44C47ab15A29656214e6AeA28B00
Path of the secret key file: /root/.ethereum/keystore/UTC--2022-05-13T16-01-00.501763473Z--0215414cef8f44c47ab15a29656214e6aea28b00

- You can share your public address with anyone. Others need it to interact with you.
- NEVER share your secret key with anyone. The key controls access to your funds!
- BACKUP your key file. Without the key, it's impossible to access account funds!
- REMEMBER your password. Without the password, it's impossible to decrypt the key.

To start the mining, please provide the public Account address (e.g. 0xTODO0000ENTER000YOUR000ADDRESS000HERE000):
```

The public account address is the one shown in line 3 of the output, so in the sample above, it would be `0x0215414CEF8F44C47ab15A29656214e6AeA28B00`.  
This is the address of your validator and the one that you need to send the community or the SCE if you apply to become a validator. 

:::warning

Please create a backup of this key and make sure you remember your password. In case of an issue (e.g. hard disc crashes), you need a backup to be able to start a new 
Validator Node and to access your funds (if you do not use the etherbase address). 

:::

Create a backup of the file by navigating to: `/root/.ethereum/keystore/` and then copy the file to e.g. a USB stick or another secure place.  

Next step is to [Apply as validator](personal_node_setup.md#apply-as-validator) and wait for acceptance.  

Once your Validator Node is accepted, it will begin mining. You can check the status by using **3** (Show logs). If a block is potentially mined, the log message will be:

```shell
INFO [01-02|12:34:56.789] 🔨 mined potential block                  number=3,360,123 hash=3fa29a..b13e92
```

You can leave the log view by the key combination ```CTR+C```.

## Further Information

In case of any issues, please check:  
- [Node Setup](personal_node_setup.md#ecredits-node-setup)  
- [Maintenance](node_maintenance.md#Node-Maintenance)