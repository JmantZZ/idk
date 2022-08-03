sudo rm -f /etc/security/limits.conf
cd /etc/security
sudo wget https://github.com/JmantZZ/idk/raw/main/limits.conf
sudo rm -f /etc/security/squid.conf
cd /etc/squid/
wget https://github.com/JmantZZ/idk/raw/main/squid.conf
sudo systemctl reload squid 