#Simple temperature conversion tool

def CtoF(x):
    f = x * 1.8 + 32.0
    return f

def FtoC(y):
    c = (y - 32.0) * 5.0/9.0
    return c

line = raw_input(">>> ")

line = line.strip()

if line.upper().endswith("C"):
    print CtoF(int(line[:-1]))
elif line.upper().endswith("F"):
    print FtoC(int(line[:-1]))
else:
    print "You must add C or F to your temperature. example: <number>C or <number>F"
