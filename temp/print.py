import os
 
def printer(filename):
    printername = r"/D:\\A340\hpLaser"
    cmd = "print " + printername + " " + filename
    print "print cmd:", cmd
    if not os.system(cmd):
        print "printing..."
    else:
        print "some error occurs."
if __name__ == "__main__":
    filename = raw_input("Please input your filename:\n")
    printer(filename)