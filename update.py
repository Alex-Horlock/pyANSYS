import paramiko
import datetime
import time

while True:
	f = open('H:/test.txt','w')
	f.write(str(datetime.datetime.now())) # python will convert \n to os.linesep
	f.close()
	ssh = paramiko.SSHClient()
	ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
	ssh.connect('lyceum2.soton.ac.uk', username='tms1g10', password='Ta4h7bkp')
	sftp = ssh.open_sftp()
	print "Updating: " + str(datetime.datetime.now())
	sftp.put('H:/test.txt', '/home/tms1g10/update.txt')
	time.sleep(60)