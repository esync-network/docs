# FAQ

## How to transfer ECS from the account of the validator?

You must attach to the Geth process and then execute:

```
eth.sendTransaction({
    from: "0x...",
    to: "0x...",
    value: 1000000000000000000
})
```

The value is in wei, so the value above equals to 1 ECS (18 decimals).

Another option is to configure the etherbase address. If you set this to the address of your eWallet, the fees your validator collects will be added to the address you configured as etherbase. You will not see a transaction on the blockchain, but you will see that the value in your eWallet goes up. You can e.g. create a second address in your eWallet that you only use for collecting the fees of the validator. By doing it that way, you will separate your validator income from your daily usage. once there are enough funds on it, you simply transfer it from this account to your main account.

## To which wallet will my rewards go?

Your rewards will go to one of two possible options:

1. If you have set an **etherbase** account via the control script menu or manually in your ```validator.docker-compose.yaml``` file, your rewards will directly go to this wallet.
2. If you haven't set up any etherbase account, your rewards will go to the public account of the node.

:::info

For ease of use, we suggest you use your eCredits wallet address or a sub-account of it as etherbase account.

:::

## What is the public account?
The public account of your node is the account that is used to sign the blocks. It's also the account that you need to provide to the SCE to register as validator or to the community so that the validators can vote for you. It will also identify your node within the network.

## What should I do when my validator needs to be offline for a while?
As the network depends on the validators doing their work, it's crucial, that they are constantly online.

* If you need to go offline for a short while, please let us know in the validators [elements channel](https://matrix.to/#/#ecredits-validators:matrix.org).
* If you need to go offline for an extended period of time, also please let us also know via the [elements channel](https://matrix.to/#/#ecredits-validators:matrix.org). For stability reasons the community might decide to remove your node from the validators list during that time. If so, you will need to be added again once you're back, so please also report back in the [elements channel](https://matrix.to/#/#ecredits-validators:matrix.org).

## Where can I get help when I have issues?
If you have issues, please connect with our community on the [elements channel](https://matrix.to/#/#ecredits-validators:matrix.org). They are happy to help.

## Where can I get the control script for my node?
The control script is only available on the branded nodes bought from the [eCredits Web Shop](https://shop.ecredits.com).

## What does "Erase and reinitialize" in the branded nodes control script mean?
This setting is intended to completely remove and do a clean setup of your node in case it has any major issues that can't be solved otherwise.

:::warning

Please be aware that this option will also delete the keystore on the node. Thus, you need to re-import your public account wallet after the node has been newly setup.

:::

## Do you know an easy and secure way for remote control of my validator?

The preferred way is to use ssh (secure shell). If you are not familiar with ssh, just search for "ssh introduction" or "ssh basics" in your preferred search engine.

## What does validating a transaction depend on? Is random or determined by a system?

eCredits uses Proof-of-Authority (PoA) as consensus algorithm. This consensus algorithm also determines who the next validator is. In a perfect scenario, where all validators are online, every validator will validate the same number of blocks. So, if there are 100.000 blocks validated and 1.000 validators, every validator should have mined 100 blocks (if everything works perfectly).

## How high is the block reward?

The block reward is the sum of all transaction fees that were paid for the transactions in the block.

## Am I allowed to run multiple validators?

The SCE will only vote for one validator per user to ensure that the system is decentralized as much as possible. However, if the 
community votes for your validator you can also have multiple validators.

## Where can I buy a branded node?
Please go to our [eCredits Web Shop](https://shop.ecredits.com).

## What does the block explorer show?

This page <https://explorer.esync.network/address/0x050c4bea6019E59dB716d3455d4d271B39E95197/validations> contains information about an address on the blockchain. In this example, this is the address of a validator (there are blocks in the "Blocks validated" tab). As this is a standard address on the blockchain, you can send ECS to and from this address. The tab "blocks validated" contains all blocks that have been validated by this address, therefore:

- Balance: The number of ECS on this address (currently 0.00042 ECS)
- Tokens: If you send a token to this address, you will see it there (there are currently no tokens on the chain, only the ACT, which is not transferable)
- Transactions: All transactions from and to this address
- Transfers: Of tokens from and to this address
- Gas Used: The total transaction fees this address has paid
- Last Balance Update: The last block that changed the balance of this address (in case of a Validator Node address, the last mined block)

## Why are there transactions with less than a 0.1% fee?

The eWallet App and most of the eCredits systems use a fee of 0.1% per transaction. This 0.1% is currently not a "hard limit", meaning that someone could use a different fee. There are different reasons why this is possible. The system does currently not force the 0.1%, but those transactions will be preferred and are better integrated into the system (e.g. ACT rewards etc.). 

## What addresses exists and how can I change the public address of my validator?

A validator can have two addresses:
- **Validator address**. Mandatory. This is the address your validator uses to mine blocks. It is generated as part of the setup process, and you should not replace it with another address. Keep the key for the address on the node for security reasons and make sure that you have a backup of the keyfile.
- **Etherbase address** Optional. This address will receive all transaction fees (rewards) of the validator. This address can be replaced, e.g. with an eWallet address. One way is to create a separate address in the eWallet where you will see how much ECS the validator has already earned.

The etherbase address can be set as described here: [node setup](/validators/node_setup#start-the-ecredits-node), or by using the eCredits script (type "ecredits" and then select "3")

If you want to replace the public address of the node, you must either generate a new account (which creates a keyfile) or create the required keyfile on your own, put in the right directory (same as where your current keyfile is), restart the container and instead of unlocking the old account, you unlock the new one. However, it also means that you must re-apply as validator, because the new address will not be part of the approved validators and you will get an "unauthorized signer" error.

## The "Coin Balance History" of the Block Explorer shows a negative balance change (-xx ECS) for my validator. How is that possible?

This is a very unlikely case, but it can happen because of a "reorg" of the blockchain. The Block Explorer shows a list of forked blocks (reorgs). This list contains the block;
<https://explorer.esync.network/block/0x1e456896528757b777c0b5498853b61fc5de6db9dd49d762c8175b466ee05cb7/transactions>
which was created by two validators at the same time, but only this one survived:
<https://explorer.esync.network/block/6905166/transactions>

This block contains a transaction of 1500 ECS * 0.1% fee = ~1.5 ECS. The validation of the block resulted in a +1.49999 ... for the account. The reorg cleaned it up, and therefore the same amount was removed.

Such scenarios are known as "double-spend attack", which exist for most of the blockchains, and which is also the reasons why it is suggested to wait for one, three, or six confirmations, based on the size of the transaction. If you wait for six confirmations (six blocks), you can be 99.99% certain that a transaction is truly "valid" and complete (also called "time to finality").

If there is a reorg, the blockchain basically splits in half. So at the same time, there are two valid forks of the blockchain, but only one will survive. If the validator wants to send these ECS somewhere, then it happens within this fork. If this fork "survives", the transaction is valid. If the fork does not "survive", also the transaction will be invalid, as if it never happened.

As an example, the following scenario can happen:  
Blockchain forks in two:  

- Fork A: Validator X has 100 ECS
- Fork B: Validator X has 150 ECS

Let's assume Validator X sends 150 ECS somewhere. If this happens on Fork A, the transaction will fail (invalid balance). If it happens on Fork B, the transaction is fine and is added to the blockchain. However, after one to two blocks, one of the forks will survive which means that all validators will follow this fork of the blockchain. If this "accepted fork" is Fork A, then the transaction initiated by Validator X simply does not exist on the chain, as if it never happened (X will still have 100 ECS). If the "accepted fork" is Fork B, the transaction is valid the 150 ECS are transferred.

Forks are usually resolved after one to two additional blocks. So, if a transaction is added to block one and confirmed by blocks two and three, the time passed in total is up to 15 seconds. (Block time is 5 seconds, thus 3x5s = 15s).

## How do I know if my node is already updated to the current version? Is there a command to run to see the current version?

Yes, you can check the version of the container by executing `docker ps`. If you want to change the version, edit the validator.docker-compose.yaml file.

## Is it possible to run the validator on a Windows machine?

Yes. Docker also runs on Windows machines, therefore the eSync Network Validator Node can also run on Windows. Windows users sometimes report issues with the DNS resolving within Docker. In that case, you can fix it by adding the following line to the docker-compose file:

```yaml
    dns:
      - 1.1.1.1
```

Please also check if your local time is correct (NTP) and that the port 30303 is open outbound.