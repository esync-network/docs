# Webshop Plugins

The eCredits webshop plugins are ready made addins for popular webshops that you can use to accept eCredits. These plugins
are available for:

- WooCommerce: <https://wordpress.org/plugins/ecredits/>
- Magento: <https://marketplace.magento.com/thepeoplessce-ecredits.html>
- Prestashop <https://addons.prestashop.com/en/payments-gateways-prestashop-modules/88595-ecredits.html>

## Prerequisites

Please make sure to have the following ready before you start the installation of the eCredits webshop plugin:

- A Merchant account with an active merchant subscription
- A configured online store (via the eCredits Web Portal)
- Installed and configured eWallet for the Merchant Account

## Install the Magento Plugin

1. Login to the admin panel of Magento
2. Navigate to "Find Partners & Extensions"

<img src="/img/developers/webshop-addins/magento_1.png" class="imgcenter" />

3. Click on "View Magento Marketplace"

<img src="/img/developers/webshop-addins/magento_2.png" class="imgcenter"/>

4. Search for eCredits on the Magento Marketplace

<img src="/img/developers/webshop-addins/magento_3.png" class="imgcenter"/>

5. Add extension to cart

<img src="/img/developers/webshop-addins/magento_4.png" class="imgcenter"/>

6. Proceed to "Checkout"

<img src="/img/developers/webshop-addins/magento_5.png" class="imgcenter"/>

7. After redirect click "Install" button

<img src="/img/developers/webshop-addins/magento_6.png" class="imgcenter"/>

8. Follow the installation process

<img src="/img/developers/webshop-addins/magento_7.png" class="imgcenter"/>

9.  Navigate to "Configuration"

<img src="/img/developers/webshop-addins/magento_8.png" class="imgcenter"/>

10. Navigate to "Sales" then select "Payment Methods"

<img src="/img/developers/webshop-addins/magento_9.png" class="imgcenter"/>

11. Configure and save the extension

<img src="/img/developers/webshop-addins/magento_10.png" class="imgcenter"/>

- Login to your business profile at <https://portal.ecredits.com/>

<img src="/img/developers/webshop-addins/portal_1.png" class="imgcenter"/>

- Navigate to "Web Widget" and generate a new API key. (The key is displayed and you can directly copy it. Copy it to any editor of your choice. The key can be deleted and replaced with another key in the future. In case you lose the key, simply generate a new one using the button again. Once a Key is generated, don't forget to add your webhook to your online-store.)

<img src="/img/developers/webshop-addins/portal_2.png" class="imgcenter"/>

- Click "Add Webhook" and configure the URL of your webhook. The URL is shown in Magento. You may amend the webhook by deleting it, and add a new one later in case of error.

<img src="/img/developers/webshop-addins/portal_3.png" class="imgcenter"/>  
<img src="/img/developers/webshop-addins/portal_4.png" class="imgcenter"/>

- Navigate to "Business Settings - Stores", click the details of your online store and navigate to "Webshop Config"

<img src="/img/developers/webshop-addins/portal_5.png" class="imgcenter"/>

- Copy the IDs 1:1 into the config of the plugin in your store's configuration section
 
<img src="/img/developers/webshop-addins/magento_10.png" class="imgcenter"/>

- Click "Save"

## Install the Prestashop Plugin

To learn about the official documentation of Prestashop, you can find the information here: <https://www.youtube.com/watch?v=nG3VSMQ593s&t=125s/>.  

1. Navigate to Module manager, after that you will need to get the module eCredits. You will be able to find module on the Prestashop Addons Marketplace (<https://addons.prestashop.com/en//>).

<img src="/img/developers/webshop-addins/prestashop_1.png" class="imgcenter"/>

2. Search for the module "eCredits"

<img src="/img/developers/webshop-addins/prestashop_2.png" class="imgcenter"/>

3. Click the "Free" button

<img src="/img/developers/webshop-addins/prestashop_3.png" class="imgcenter"/>

4. Click "Download"

<img src="/img/developers/webshop-addins/prestashop_4.png" class="imgcenter"/>

5. Fill in the modal information

<img src="/img/developers/webshop-addins/prestashop_5.png" class="imgcenter"/>

6. Select your version and begin downloading the module. 

<img src="/img/developers/webshop-addins/prestashop_6.png" class="imgcenter"/>

### Install and enable eCredits module

Next is the installation of the module and basic setup to allow it to work on the store.

1. Open the Module Manager in Prestashop admin panel.
2. Click on Upload a module.

<img src="/img/developers/webshop-addins/prestashop_7.png" class="imgcenter"/>

3. Drag and drop or use finder to select the module's .zip file.

<img src="/img/developers/webshop-addins/prestashop_8.png" class="imgcenter"/>

4. After installation click the **"Configure"** button.

<img src="/img/developers/webshop-addins/prestashop_9.png" class="imgcenter"/>

5. Enter the API Information:

- Login to your Business Profile at <https://portal.ecredits.com/>

<img src="/img/developers/webshop-addins/portal_1.png" class="imgcenter"/>

- Navigate to "Web Widget" and generate a new API key. (The key is displayed and you can directly copy it. Copy it to any editor of your choice. The key can be deleted and replaced with another key in the future. In case you lose the key, simply generate a new one using the Button again. Once a Key is generated, do not forget to add your webhook to your online store.)

<img src="/img/developers/webshop-addins/portal_2.png" class="imgcenter"/>

- Click "Add Webhook" and configure the URL of your webhook. The URL for Prestashop is: `https://yourshop.com/index.php?fc=module&module=ecredits&controller=webhook`. Please replace "yourshop.com" with your URL.

<img src="/img/developers/webshop-addins/portal_3.png" class="imgcenter"/>  
<img src="/img/developers/webshop-addins/portal_4.png" class="imgcenter"/>

- Navigate to "Business Settings - Stores", click the details of your online store and navigate to "Webshop Config"

<img src="/img/developers/webshop-addins/portal_5.png" class="imgcenter"/>

- Copy the IDs 1:1 into the config of the plugin in your store's configuration section

<img src="/img/developers/webshop-addins/prestashop_10.png" class="imgcenter"/>

- Click "Save"

6. Enable EUR as currency and check the eCredits option checkbox. Click "Save".

<img src="/img/developers/webshop-addins/prestashop_11.png" class="imgcenter"/>

## Install the WooCommerce Plugin

1. Login to the admin panel of your Wordpress installation.
2. Navigate to "Plugins".

<img src="/img/developers/webshop-addins/woocommerce_1.png" class="imgcenter"/>

3. Search for eCredits and click "Install now".

<img src="/img/developers/webshop-addins/woocommerce_2.png" class="imgcenter"/>

4. Activate the plugin after installation by pressing "Activate" button.

<img src="/img/developers/webshop-addins/woocommerce_3.png" class="imgcenter"/>

5. Navigate to "WooCommerce" settings, choose "Payment" and enable and manage the method (eCredits).

<img src="/img/developers/webshop-addins/woocommerce_4.png" class="imgcenter"/>

6. Enter the API Information:

- Login to your Business Profile at <https://portal.ecredits.com/>

<img src="/img/developers/webshop-addins/portal_1.png" class="imgcenter"/>

- Navigate to "Web Widget" and generate a new API key. (The key is displayed and you can directly copy it. Copy it to any editor of your choice. The key can be deleted and replaced with another key in the future. In case you lose the key, simply generate a new one using the Button again. Once a Key is generated, don't forget to add your webhook to your online store.)

<img src="/img/developers/webshop-addins/portal_2.png" class="imgcenter"/>

- Click "Add Webhook" and configure the URL of your webhook. The URL for WooCommerce is: `https://yourshop.com/index.php?fc=module&module=ecredits&controller=webhook`. Please replace "yourshop.com" with your URL.

<img src="/img/developers/webshop-addins/portal_3.png" class="imgcenter"/>  
<img src="/img/developers/webshop-addins/portal_4.png" class="imgcenter"/>

- Navigate to "Business Settings - Stores", click the details of your online store and navigate to "Webshop Config"

<img src="/img/developers/webshop-addins/portal_5.png" class="imgcenter"/>

- Copy the IDs 1:1 into the config of the plugin in your store's configuration section

<img src="/img/developers/webshop-addins/woocommerce_5.png" class="imgcenter"/>

- Click "Save"