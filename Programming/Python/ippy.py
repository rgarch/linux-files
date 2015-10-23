#!/usr/bin/python2
import urllib2
import smtplib

ip = urllib2.urlopen("http://wgetip.com/").read().strip()
to = ''
gmail_user = ''
gmail_pwd = ''
smtpserver = smtplib.SMTP("smtp.gmail.com",587)
smtpserver.ehlo()
smtpserver.starttls()
smtpserver.ehlo
smtpserver.login(gmail_user, gmail_pwd)
header = 'To:' + to + '\n' + 'From: ' + gmail_user + '\n' + 'Subject:System IP\n\n'
msg = header + str(ip)
smtpserver.sendmail(gmail_user, to, msg)
smtpserver.close()
