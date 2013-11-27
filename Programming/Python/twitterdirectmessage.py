#!/usr/bin/python2
import os
import twitter
import sys
import textwrap
import json
import time

api = twitter.Api(consumer_key='CONSUMER_KEY',
consumer_secret='CONSUMER_SECRET',
access_token_key='ACCESS_TOKEN_KEY',
access_token_secret='ACCESS_TOKEN_SECRET')

directM = api.GetDirectMessages()
dparse = [s.text for s in directM]
output = dparse[0]
print output

while True:
	print "Type S or D: "
	prompt = raw_input(">> ")
	if prompt == "D":
		messages = api.PostDirectMessage(raw_input("message: "), screen_name=(raw_input("screen name: ")))
		print messages.text
	elif prompt == "S":
		status = api.PostUpdate(raw_input("status: "))
		print status.text
	else:
		print "error"
	break

#status = api.PostUpdate(raw_input("status: "))
#print status.text
