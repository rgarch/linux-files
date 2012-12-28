from datetime import datetime
now = datetime.now()
current_year = now.year
current_month = now.month
current_day = now.day
current_hour = now.hour
current_minute = now.minute
current_second = now.second
print "date[" + str(current_day) + "/" + str(current_month) + "/" + str(current_year)+ "] time[" + str(current_hour) + ":" + str(current_minute) + ":" + str(current_second) + "]"
