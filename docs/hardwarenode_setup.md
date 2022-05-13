# eCredits Hardware Node Setup

Congratulations to your new eCredits node! This node is already preconfigured with software, but you still have to maintain the node and run through the setup process. 
This documentation should guide you through the process, but please also make sure to check the [**Node Setup**](node_setup.md#ecredits-node-setup) and [Maintenance](node_maintenance.md#Node-Maintenance) sections.

!> **Note: You are solely responsible for your node. We do not provide any support for eCredits nodes. This includes 
but is not limited to support for setting up, maintaining or updating eCredits nodes. It's your own responsibility to 
take care of the node and it's security, keeping it up to date and to participate in the community.**

## Login Data

The standard username and password for the node is:

- Username: `ecredits`
- Password: `The peoples currency!`

The standard keyboard layout for the node is english. If you have e.g. a german keyboard, it means that you have to enter z instead of y.
You can find a picture of the keyboard layout at: <https://en.wikipedia.org/wiki/Keyboard_layout#/media/File:Qwerty.svg>

## OS Configuration

Once you are logged in to the node, you should at first configure the system so it fits your needs:

1.) Change keyboard layout (general keyboard layout and the login keyboard layout)
2.) Connect WLAN or LAN and make sure that the internet connection works
3.) Change the default password by opening a terminal and type `passwd`
4.) Update the system by opening a terminal and execute `sudo apt update && sudo apt upgrade -y`. The system will ask you if you want to restart docker - select yes.
5.) execute `sed -i -e 's/\r$//' /usr/local/bin/ecredits_update` which fixes a potential issue in the script that some users faced.

## Setup eCredits Node

The hardware node sold via the official eCredits webshop has a preinstalled command that allows you to perform the operations on the node.

```bash
ecredits
```

This command updates itself, downloads the required files and starts the validator:

```text
********************************************************************************
*                     eCredits Node Control Panel                              *
********************************************************************************
 Node state: ecredits_ecs-validator_1 | Up Less than a second
--------------------------------------------------------------------------------

 1) Node status
 2) Update
 3) Set etherbase
 4) Create account
 5) Start mining
 6) Start node
 7) Stop node
 8) Reinitialize
 9) Reset database
10) Show logs
11) Help
12) Exit
Existing eCredits setup identified. Please choose an option:
```

Please select option *5*. The system will guide you through the process, will ask you to create a new public address (if you dont have one), to set a password and will ask you to start mining, showing something like:

```text
Your new key was generated

Public address of the key:   0x0215414CEF8F44C47ab15A29656214e6AeA28B00
Path of the secret key file: /root/.ethereum/keystore/UTC--2022-05-13T16-01-00.501763473Z--0215414cef8f44c47ab15a29656214e6aea28b00

- You can share your public address with anyone. Others need it to interact with you.
- You must NEVER share the secret key with anyone! The key controls access to your funds!
- You must BACKUP your key file! Without the key, it's impossible to access account funds!
- You must REMEMBER your password! Without the password, it's impossible to decrypt the key!

To start the mining, please provide the public Account address (e.g. 0xTODO0000ENTER000YOUR000ADDRESS000HERE000):
```

The public account address is the one shown in line 3 of the output, so in the sample above, it would be `0x0215414CEF8F44C47ab15A29656214e6AeA28B00`.  
This is the address of your validator and the one that you need to send the community or the SCE if you apply to become a validator.  

Once this is done, please send your application to the SCE/community. Once your validator is accepted, it will start mining. You can check the status by using *10* (Show logs).

## Further Information

In case of any issues, please check:
* [**Node Setup**](node_setup.md#ecredits-node-setup)
* [Maintenance](node_maintenance.md#Node-Maintenance)