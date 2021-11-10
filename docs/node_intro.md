# Introduction to eCredits Nodes

There are several types of nodes in the eCredits system:  
 - Validator Nodes
 - Full Nodes
 - Light Nodes
 - Archive Nodes

This document serves the purpose of describing the workings of the different node types, and should get you started with having your own node up and running. Some nodes require different and more complex steps, which are also outlined in this document.

## eCredits Nodes and their functionality

eCredits is a decentralised blockchain, which is operated by the users and their different nodes. For eCredits to work in a decentralised fashion, it needs a distributed network of nodes that can verify blocks and transaction data. Clients are needed to run nodes. The term node refers to software, which is also sometimes called "client". 

These nodes can be operated in the different environments, which are: 

 - [MainNet](https://explorer.ecredits.com)
 - [TestNet](https://explorer.tst.ecredits.com)
 

The different environments have the role of ensuring the continuous operation of the eCredits network, as experimental features will be deployed to TestNet. Only fully tested features will be available at the MainNet.

Most people will want to run a node for the MainNet, as this refers to the live system of eCredits.


### Validator Nodes

Validator nodes are full nodes that also create and distribute new blocks into the system. These nodes can be operated by anyone, but validator nodes must be accepted either by the community or by the SCE. Validators can apply to be accepted as validator. This application can be done via <support@ecredits.com>. There is theoretically no hard limit of nodes. The maximum validator node amount however is defined by the governance body of the SCE, which in turn vote with their validators. 

Validator properties:
 - Creating and distributing new blocks
 - Everything a full node does

### Full Nodes

Full Nodes are validating blocks, signing transactions and ensuring the decentralisation of the system. Anyone is free to run a full node. It is suggested for service operators or businesses building on top of the eCredits blockchain to operate their own full node, in order to familiarise themselves with the system and to connect and test their services against their own nodes first. 

Full Node properties:
 - Full nodes provide data on request and are providing the network
 - They store the full blockchain data
 - They participate in block validation and verify blocks and states
 - All states can be derived from full nodes

It is further suggested for service operators to run multiple nodes, especially if they are creating and maintaining services on top of the eCredits platform. A suggested setup would be to run a node in staging, and one node in production environment, to be informed about upcoming changes to the overall system and to be able to test existing code and smart contracts against possible updates.

Full nodes allow operators to interact with the eCredits blockchain in a trustless manner. Every new block that gets created is validated. Full Nodes are only limited to seeing the current state of the blockchain (not previous or past states - they are available if you run an archive node). A full node also allows broadcasting transactions to the network.

Full nodes can be initially synced in two ways: 

The default is "snap sync" in which not all past transactions are verified. Instead only block headers are verified for their proofs and state data for recent blocks is downloaded and verified against recent block headers. Once this synchronisation is complete the node operates just like a "full sync" node.

A "full sync" node on the other hand processes all transactions in all past blocks. This is more trustless as it ensures that validators did not conspire in the past to create invalid blocks, but it also requires significantly more resources (both CPU and storage). The advantage of a fully synced node is that it stores "everything", which also includes historical states (for example: if you want to query account balances as specific block heights of the past). They can be useful for use cases such as block explorers, audit servers and for fraud prevention.

*Caution! If you are planning to run a fully synced node you need to factor in specific hardware requirements, and very long synchronisation times. Please see the dedicated chapter on hardware requirements for a detailed description.*

### Light Nodes

Light nodes are a type of node with a much lower footprint than full nodes. They do not verify the full blockchain data but only the block headers which require much less storage and CPU. Blockchain data is then downloaded on demand and verified against the information contained in the block headers. Therefore, they are as secure as full nodes as long as a majority of validators did not create invalid blocks in the past. Light nodes can also be running on mobile and embedded systems. However due to their on-demand downloads they are slower in processing user requests, hence they should not be used for nodes with a lot of usage.

Light nodes require other nodes in the network to be run in LES server mode in order to function. Developers which develop applications using light nodes should also run some LES server nodes to help with the burden.

Light node properties:
 - Light nodes store only the header chain and request everything else from full nodes
 - They can verify the validity of data against state roots in the block headers
 - They can be run on "weak" hardware such as mobile phones

### Archive Nodes

Archive nodes are only needed if one wants to check every single state of an account at any given block height. An archive node stores all states and allows you to query them. Because this node stores all the data, it also needs more disc space - 2TB+ is recommended.

Archive node properties:
 - Stores everything kept in the full node
 - Builds and keeps an archive of historical states