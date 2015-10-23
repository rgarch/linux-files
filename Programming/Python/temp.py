#Simple temperature conversion tool

def CtoF(x):
    f = x * 1.8 + 32.0
    return f

def FtoC(y):
    c = (y - 32.0) * 5.0/9.0
    return c

number = float(raw_input("temperature> "))
metric = raw_input("(C)elsius or (F)ahrenheit?> ")

if metric.endswith("C"):
    print CtoF(number)
elif metric.endswith("F"):
    print FtoC(number)
else:
    print "You must use 'C' or 'F' for your temperature choice."

