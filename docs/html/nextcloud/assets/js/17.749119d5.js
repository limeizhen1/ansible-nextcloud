(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{204:function(e,t,n){"use strict";n.r(t);var r=n(0),a=Object(r.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parameters","aria-hidden":"true"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),n("p",[e._v('The Nextcloud deployment package contains a sequence software (referred to as "components") required for Nextcloud to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.')]),e._v(" "),n("h2",{attrs:{id:"path"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#path","aria-hidden":"true"}},[e._v("#")]),e._v(" Path")]),e._v(" "),n("h3",{attrs:{id:"nextcloud"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nextcloud","aria-hidden":"true"}},[e._v("#")]),e._v(" Nextcloud")]),e._v(" "),n("p",[e._v("Nextcloud installation directory: "),n("em",[e._v("/data/wwwroot/nextcloud")]),n("br"),e._v("\nNextcloud configuration file: * /data/wwwroot/nextcloud/config/config.php*")]),e._v(" "),n("h3",{attrs:{id:"php"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#php","aria-hidden":"true"}},[e._v("#")]),e._v(" PHP")]),e._v(" "),n("p",[e._v("PHP configuration file: "),n("em",[e._v("/etc/php.ini")]),n("br"),e._v("\nPHP Modules configurations directory: "),n("em",[e._v("/etc/php.d")])]),e._v(" "),n("h3",{attrs:{id:"apache"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apache","aria-hidden":"true"}},[e._v("#")]),e._v(" Apache")]),e._v(" "),n("p",[e._v("Nextcloud on LAMP, the Web Server is Apache")]),e._v(" "),n("p",[e._v("Apache vhost configuration file: "),n("em",[e._v("/etc/httpd/conf.d/vhost.conf")]),n("br"),e._v("\nApache main configuration file: "),n("em",[e._v("/etc/httpd/conf/httpd.conf")]),n("br"),e._v("\nApache logs file: "),n("em",[e._v("/var/log/httpd")]),n("br"),e._v("\nApache module configuration file: "),n("em",[e._v("/etc/httpd/conf.modules.d/00-base.conf")])]),e._v(" "),n("h3",{attrs:{id:"nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[e._v("#")]),e._v(" Nginx")]),e._v(" "),n("p",[e._v("Nextcloud on LEMP, the Web Server is Nginx")]),e._v(" "),n("p",[e._v("Nginx vhost configuration file: "),n("em",[e._v("/etc/nginx/sites-available/default.conf")]),n("br"),e._v("\nNginx main configuration file: "),n("em",[e._v("/etc/nginx/nginx.conf")]),n("br"),e._v("\nNginx logs file: "),n("em",[e._v("/var/log/nginx/")])]),e._v(" "),n("h3",{attrs:{id:"mysql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[e._v("#")]),e._v(" MYSQL")]),e._v(" "),n("p",[e._v("MySQL installation directory: "),n("em",[e._v("/usr/local/mysql")]),n("br"),e._v("\nMySQL data directory: "),n("em",[e._v("/data/mysql")]),n("br"),e._v("\nMySQL configuration file: "),n("em",[e._v("/etc/my.cnf")]),n("br"),e._v("\nMySQL Web Management URL: "),n("em",[e._v("http://Internet IP/phpmyadmin")]),e._v(", "),n("router-link",{attrs:{to:"/stack-accounts.html"}},[e._v("get credential")])],1),e._v(" "),n("h3",{attrs:{id:"phpmyadmin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#phpmyadmin","aria-hidden":"true"}},[e._v("#")]),e._v(" phpMyAdmin")]),e._v(" "),n("p",[e._v("phpMyAdmin installation directory: "),n("em",[e._v("/data/apps/phpmyadmin")]),n("br"),e._v("\nphpMyAdmin configuration file: "),n("em",[e._v("/data/apps/phpmyadmin/config.inc.php")]),n("br"),e._v("\nphpMyAdmin vhost configuration file: "),n("em",[e._v("/etc/httpd/conf.d/phpMyAdmin.conf")]),e._v(" or "),n("em",[e._v("/etc/nginx/php.conf")])]),e._v(" "),n("h3",{attrs:{id:"redis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[e._v("#")]),e._v(" Redis")]),e._v(" "),n("p",[e._v("Redis configuration file: "),n("em",[e._v("/etc/redis.conf")]),n("br"),e._v("\nRedis data directory: "),n("em",[e._v("/var/lib/redis")]),n("br"),e._v("\nRedis logs file: "),n("em",[e._v("/var/log/redis/redis.log")])]),e._v(" "),n("h3",{attrs:{id:"docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),n("p",[e._v("OnlyOffice Document Server on Docker included in this stack")]),e._v(" "),n("h2",{attrs:{id:"ports"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ports","aria-hidden":"true"}},[e._v("#")]),e._v(" Ports")]),e._v(" "),n("p",[e._v("You can control(open or shut down) ports by "),n("strong",[n("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security Group Setting"),n("OutboundLink")],1)]),e._v(" of your Cloud Server whether the port can be accessed from Internet.")]),e._v(" "),n("p",[e._v("These ports should be opened for this application:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Name")]),e._v(" "),n("th",[e._v("Number")]),e._v(" "),n("th",[e._v("Use")]),e._v(" "),n("th",[e._v("Necessity")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("MySQL")]),e._v(" "),n("td",[e._v("3306")]),e._v(" "),n("td",[e._v("Remote connect MySQL")]),e._v(" "),n("td",[e._v("Optional")])]),e._v(" "),n("tr",[n("td",[e._v("HTTP")]),e._v(" "),n("td",[e._v("80")]),e._v(" "),n("td",[e._v("HTTP requests for Nextcloud")]),e._v(" "),n("td",[e._v("Required")])]),e._v(" "),n("tr",[n("td",[e._v("HTTPS")]),e._v(" "),n("td",[e._v("443")]),e._v(" "),n("td",[e._v("HTTPS requests Nextcloud")]),e._v(" "),n("td",[e._v("Optional")])]),e._v(" "),n("tr",[n("td",[e._v("Docker")]),e._v(" "),n("td",[e._v("8080")]),e._v(" "),n("td",[e._v("OnlyOffice Document Server on Docker")]),e._v(" "),n("td",[e._v("Optional")])])])]),e._v(" "),n("h2",{attrs:{id:"version"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#version","aria-hidden":"true"}},[e._v("#")]),e._v(" Version")]),e._v(" "),n("p",[e._v("You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# Linux Version\nlsb_release -a\n\n# PHP Version\nphp -v\n\n# List Installed PHP Modules\nphp -m\n\n# Apache version on Centos\nhttpd -v\n\n# Apache version on Ubuntu\napache2 -v\n\n# List Installed Apache Modules\napachectl -M\n\n# Nginx version\nnginx -v\n\n# List Installed Nginx Modules\nnginx -V\n\n# MySQL version:\nmysql -V\n\n# Redis version\nredis-server -v\n\n# Dokcer:\ndocker --version\n")])])])])},[],!1,null,null,null);t.default=a.exports}}]);