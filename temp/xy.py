import math

def isInt(num):
  return round(float(num)) == float(num)

# 615:x=59, y=12;
# 183:  x=29, y=10;
# 1743: x=121, y=14;
# 847:  x=57, y=12;

# j = 183
# j = 615
# j = 1743
# j = 847
j = 7
b = bin(j)
c = str(b)
# print(c)
# print(len(c))
i = len(c) - 2


def checkXandY(y, a):
  d = 0b1
  # print(d)
  nd = d << y
  x = math.sqrt(nd-a)
  if(isInt(x)):
    print (int(x), y)
  
  if(y < 50):
    checkXandY(y+1, a)

print(checkXandY(i, j))