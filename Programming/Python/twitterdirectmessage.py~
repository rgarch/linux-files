#!/usr/bin/python2
import os
import twitter
import sys
import textwrap
import json
import time

api = twitter.Api(consumer_key='CONSUMER_KEY', consumer_secret='CONSUMER_SECRET', access_token_key='ACCESS_TOKEN_KEY', access_token_secret='ACCESS_TOKEN_SECRET')

directM = api.GetDirectMessages()
dparse = [s.text for s in directM]
output = dparse[0]
print output

messages = api.PostDirectMessage(raw_input("message: "), screen_name=(raw_input("screen name: ")))
print messages.text

#status = api.PostUpdate(raw_input("status: "))
#print status.text
