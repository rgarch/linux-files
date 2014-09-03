#!/usr/bin/python2
import urllib2
import datetime

ip = urllib2.urlopen("http://curlmyip.com").read().strip()

print ip
