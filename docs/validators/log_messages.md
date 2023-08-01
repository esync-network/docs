---
sidebar_position: 7
---

# Log Messages

This section describes some of the log messages of the validator and what they mean:

- `Commit new sealing work`: The validator assembled a new block and commits it to the network.  
- `Imported new chain segment`: New blocks were downloaded from the network and added to the blockchain.
- `Unindexed transactions`: The node maintains an index of transactions for faster access. This log message means that there are transactions which are not yet indexed.
- `🔨 mined potential block`: The validator potentially mined a block (potentially, because it must be accepted by all validators).
- `Deep froze chain segment`: Ancient chain segments are moved out of the active database into immutable append-only files.
- `🔗 block reached canonical chain`: The block is now on the canonical chain. There could be reorgs which results in temporary forks. The canonical chain is the fork that is accepted by all validators.
- `Self-blocking signing requested`: A speciality in the consensus algorithm. Basically, all validators start to work on a block, but those who do currently not have the mining slot will add a small delay to it. If a node creates a block without a slot, it must miss the next slot and the delay will be extended and this message will popup.
- `Block sealing failed err="signed recently, must wait for others"`: The validator signed a block recently and now must wait for the other validators to seal blocks.
- `Snapshot extension registration failed`: Someone tried to connect to your node, but it failed (because of different configuration), which is fine.