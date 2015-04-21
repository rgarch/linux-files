#!/usr/bin/python2
import urllib2
import smtplib
from datetime import datetime
# Optional 
#now = datetime.now()
#current_hour = now.hour
#current_minute = now.minute
#current_second = now.second
#time = str(current_hour)+":"+str(current_minute)+":"+str(current_second)

ip = urllib2.urlopen("http://curlmyip.com").read().strip()
to = 'EMAIL'
gmail_user = 'EMAIL'
gmail_pwd = 'PASSWORD'
smtpserver = smtplib.SMTP("smtp.gmail.com",587)
smtpserver.ehlo()
smtpserver.starttls()
smtpserver.ehlo
smtpserver.login(gmail_user, gmail_pwd)
header = 'To:' + to + '\n' + 'From: ' + gmail_user + '\n' + 'Subject:System IP\n\n'
msg = header+str(ip) 
smtpserver.sendmail(gmail_user, to, msg)
smtpserver.close()
