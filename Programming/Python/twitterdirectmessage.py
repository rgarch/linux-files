#!/usr/bin/python2
import os
import twitter
import sys
import textwrap
import json
import time
from datetime import datetime

now = datetime.now()
current_hour = now.hour
current_minute = now.minute
current_second = now.second

api = twitter.Api(
consumer_key='', 
consumer_secret='', 
access_token_key='', 
access_token_secret=''
)

directM = api.GetDirectMessages()
dparse = [s.text for s in directM]
out = "| " + dparse[3] + " |\n\n| " + dparse[2] + " |\n\n| "+ dparse[1] + " |\n\n| " + dparse[0] + " |"
print out + "\n\n["+str(current_hour)+":"+str(current_minute)+":"+str(current_second)+"]"

while True:
    prompt = raw_input("> ")
    if prompt == "D":
        messages = api.PostDirectMessage(raw_input("message: "), screen_name=(raw_input("screen name: ")))
        print "  | "+messages.text+" |"
    elif prompt == "S":
        status = api.PostUpdate(raw_input("twitter update: "))
        print "  | "+status.text+" |"
    else:
        print "[exit]"
    break

