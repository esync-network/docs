# eCredits Metamask

eCredits is fully compatible with Ethereum and therefore, also Metamask can be used as wallet. The following table 
contains the required settings as well as an EIP-3085 compatible add button, which allows you, to add eCredits 
to Metamask.

## Metamask Settings

<table>
<tr><th align="left" width=250>Setting</th><th width=250>eCredits MainNet</th><th width=250>eCredits TestNet</th></tr>
<tr><th align="left">RPC URL</th><td>https://rpc.ecredits.com</td><td>https://rpc.tst.ecredits.com</td></tr>
<tr><th align="left">ChainID</th><td>63000</td><td>63001</td></tr>
<tr><th align="left">Symbol</th><td>ECS</td><td>ECS</td></tr>
<tr><th align="left">Block Explorer URL</th><td><a href="https://explorer.ecredits.com">https://explorer.ecredits.com</a></td><td><a href="https://explorer.tst.ecredits.com">https://explorer.tst.ecredits.com</a></td></tr>
<tr><th align="left">Add</th><td><button href="#" onclick="addMainNet()">Add eCredits MainNet</button></td><td><button href="#" onclick="addTestNet()">Add eCredits TestNet</button></td></tr>
</table>

## Use Ledger Hardware Wallet

There is currently no app available for Ledger devices, but you can use the Ethereum app with Metamask to connect 
to the eCredits network. The usage of Metamask and Ledger hardware wallets  is described at <https://metmask.io> or
<https://www.ledger.com/metamask>.

To use your Ledger device with Metamask and eCredits, please follow these steps:

**Prerequisites**
 
1. Update Ledger Live App
2. Update the Firmware of your Ledger device 
3. Update the Ethereum app
4. Install Metamask
5. Connect Metamask with eCredits network (see above)
6. Open Ethereum App in your Ledger device and enable **blind signing** in the settings
7. For **Chrome**, **Brave**, **Edge** or other chrome based browsers: Go to: Settings > Advanced Settings > check "Use Ledger Live"

**Connect Hardware Wallet**

1. Make sure that **Ledger Live App** is **closed**.
2. Open Ethereum App **before** clicking the "Connect Hardware Wallet" button in Metamask
3. Click "Connect Hardware Wallet" in Metamask

If you have any issues, check <https://support.ledger.com/hc/en-us/articles/360020871157-Solving-a-MetaMask-connection-issue> for more information.
