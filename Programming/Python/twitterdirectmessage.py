#!/usr/bin/python2.4
import os
import twitter
import sys
import textwrap
import json
import time

api = twitter.Api(consumer_key='CONSUMER_KEY', consumer_secret='CONSUMER_SECRET', access_token_key='ACCESS_TOKEN_KEY', access_token_secret='ACCESS_TOKEN_SECRET')

messages = api.PostDirectMessage(raw_input("Twitter ID: "), raw_input("direct message: "))
print messages.text
