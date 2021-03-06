# FAQ

#### Nextcloud support multi-language?

Yes.

#### What is the relationship between Nextcloud and ownCloud?

Nextcloud is a branch project started by ownCloud inventor Frank Karlitschek and a dozen experienced open source entrepreneurs and engineers, similar to the relationship between MariaDB and MySQL.


#### What is the default character set?

UTF-8

#### Does Nextcloud provide a client?

Yes, includes: Nextcloud Desktop Client, Nextcloud Android App, Nextcloud iOS App

#### Nextcloud can integrate external storage?

Yes.

#### How can Nextcloud view & edit file online?

You should complete the [OnlyOffice setting](/solution-more.md#nextcloud-preview-and-edit) on your Nextcloud.

#### What the difference between the Nextcloud(LAMP) and Nextcloud(LEMP) ?

LAMP is using Apache as Web Server for your Nextcloud.  
LEMP is using Nginx as Web Server for your Nextcloud.

#### Can I use the RDS of Cloud Provider for Nextcloud?

You can use the RDS for Nextcloud if you need, and just need to modify the [database configuration](/stack-components.html#nextcloud) section in the wp-config.php

#### Where is the database connection configuration of Nextcloud?

Database configuration information is in *config.php* in the [Nextcloud installation directory](/stack-components.md#nextcloud)

#### If there is no domain name, can I deploy Nextcloud?

Yes, access Nextcloud by *http://Internet IP*

#### What is the password for the database root user?

The password is stored in the server related file: `/credentials/password.txt`

#### Is there a web-base GUI database management tool?

Yes, phpMyAdmin is on it, access by *http://Internet IP/phpmyadmin*

#### How to disable phpMyAdmin access?

Edit the  [phpMyAdmin configuration file](/stack-components.md#phpmyadmin), replace `Require all granted` with `Require ip 192.160.1.0`, then restart Apache service.

#### Can I configure this Nextcloud if I don't understand the Linux command?

Yes, you can use GUI tool WinSCP to start Nextcloud, no commands.

#### Do I need to change the owner(group) for the files which I upload by SFTP?

No, you don't need to change them because LAMP/LNMP was set to change automatically.

#### How to modify the path of Nextcloud?

Example application's path is: */data/wwwroot/nextcloud*, you can modify it by [vhost configuration file](/stack-components.md#apache)

#### How to delete 9Panel?

Please delete all files in 9Panel */data/apps/9panel* and keep an empty 9Panel folder

#### How to change the permissions of filesystem?

Change owner(group) or permissions like below:

```shell
#for Nextcloud(LAMP)
chown -R apache.apache /data/wwwroot
#for Nextcloud(LEMP)
chown -R nginx.nginx /data/wwwroot


find /data/wwwroot -type d -exec chmod 750 {} \;
find /data/wwwroot -type f -exec chmod 640 {} \;
```

#### Can I deploy multiple sites on the Nextcloud(LAMP) or Nextcloud(LEMP) ?

Websoft9 Nextcloud stack supports the deployment of multiple applications (websites), but different environments have different operating methods.

* [Add new site on Nextcloud on LAMP](https://support.websoft9.com/docs/lamp/solution-deployment.html#deploy-second-application)
* [Add new site on Nextcloud on LEMP](https://support.websoft9.com/docs/lnmp/solution-deployment.html#deploy-second-application)


#### What's the difference between Deployment and Installation?

- Deployment is a process of installing and configuring a series of software to the server in a different order, which is a complex system engineering.  
- Installation is the process of starting the initial wizard to complete configuration after the application is prepared.  
- Installation is simpler than deployment. 

#### What's Cloud Platform?

Cloud platform refers to platform manufacturers that provide cloud computing services, such as: **Azure, AWS, Alibaba Cloud, HUAWEI CLOUD, Tencent Cloud**, etc.

#### What is the difference between Instance, Cloud Server, Virtual Machine, ECS, EC2, CVM, and VM?

No difference. All refer to cloud servers. They are the different terminology used by manufacturers.