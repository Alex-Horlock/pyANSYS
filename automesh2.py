from subprocess import call
import sys
import os
import paramiko
import select

def submitjob(counter,facesizing,wheelfacesizing,domainfacesizing,groundfacesizing,flhcab,numlayerscab,flhtrailer,numlayerstrailer):
    counterstr = str(counter).zfill(4)
    print "Creating input files: " + counterstr
    flname = 'H:/' + counterstr + 'meshcommands.js'
    s=open('H:/meshtemplate.js').read()
    f=open(flname, 'w')
    f.write(s)
    f.flush()
    f.close()
    f=open(flname,"r")
    contents = f.readlines()
    f.close()
    #Add variables to the mesh.js file for ANSYS Meshing
    contents.insert(1,'var facesizing="'+facesizing+'"\n')
    contents.insert(6,'var wheelfacesizing="'+wheelfacesizing+'"\n')
    contents.insert(7,'var domainfacesizing="'+domainfacesizing+'"\n')
    contents.insert(8,'var groundfacesizing="'+groundfacesizing+'"\n')
    contents.insert(9,'var flhtrailer="'+flhtrailer+'"\n')
    contents.insert(10,'var numlayerstrailer="'+numlayerstrailer+'"\n')
    contents.insert(11,'var flhcab="'+flhcab+'"\n')
    contents.insert(12,'var numlayerscab="'+numlayerscab+'"\n')
    contents.insert(13,'var growth="1.2"\n')
    contents.insert(14,'var MESHNAME="H:\mesh'+counterstr+'.msh"\n')
    f=open(flname,"w")
    contents="".join(contents)
    f.write(contents)
    f.close()
    #Now write Workbench Journal File
    flname2='H:/' + counterstr + 'wbjcommands.wbjn'
    s2=open('H:/wbjtemplate.wbjn').read()
    s2=s2.replace('MESHJSSCRIPT', flname)
    f2=open(flname2, 'w')
    f2.write(s2)
    f2.flush()
    f2.close()
    #Run commands in cmdprompt
    cmdstr2 = 'runwb2 -X -B -R ' + flname2
    cmdstr1 = 'cmd /c ""C:/Program Files/ANSYS Inc/v150/Framework/bin/Win64/runwb2" "-B" "-R" ' + flname2 + '""'
    tocopy = "H:\mesh"+ counterstr +".msh"
    topaste = "/home/tms1g10/automeshed/mesh" + counterstr + '.js'
    print "Meshing: " + counterstr
    os.system(cmdstr1)
    #Upload outputted file to Lyceum
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect('lyceum2.soton.ac.uk', username='tms1g10', password='Ta4h7bkp')
    sftp = ssh.open_sftp()
    print "Uploading file to server: " + counterstr
    sftp.put(tocopy, '/home/tms1g10/automeshed/mesh' + counterstr +'.msh')
    sftp.put(flname, topaste)
    sftp.close()
    #Compress mesh file uploaded to Lyceum
    stdin, stdout, stderr = ssh.exec_command("gzip /home/tms1g10/automeshed/mesh" + counterstr + '.msh')
    while not stdout.channel.exit_status_ready():
        if stdout.channel.recv_ready():
            rl, wl, xl = select.select([stdout.channel], [], [], 0.0)
            if len(rl) > 0:
                print stdout.channel.recv(1024),
    #Submit job to Lyceum (via qsub command)
    print "Starting job on server: " + counterstr
    stdin, stdout, stderr = ssh.exec_command("module load python && python startjob.py " + counterstr)
    while not stdout.channel.exit_status_ready():
        if stdout.channel.recv_ready():
            rl, wl, xl = select.select([stdout.channel], [], [], 0.0)
            if len(rl) > 0:
                print stdout.channel.recv(1024),
    ssh.close()
    #Delete the local mesh file, wbjn and mesh.js files
    os.remove(tocopy)
    os.remove(flname2)
    os.remove(flname)

def startmeshes():
    # Set y+=100
    flhtrailer = "0.0029284"
    numlayerstrailer = "7"
    flhcab = "0.0022928"
    numlayerscab = "2"
    #
    groundfacesizing = "0.05" #Fixed - confirmed
    domainfacesizing = "0.25" #Should probably vary
    wheelfacesizing = "0.005" #Fixed - confirmed
    #
    #Try with domain set at 0.25
    facesizing = ["0.4","0.2","0.1","0.05","0.025","0.0125","0.00625"]
    wheelsizing = ["0.01","0.005"]
    counter = 300
    for idx,face in enumerate(facesizing):
        for idx2,wheel in enumerate(wheelsizing):
            submitjob(counter,face,wheel,domainfacesizing,groundfacesizing,flhcab,numlayerscab,flhtrailer,numlayerstrailer)
            counter = counter+1

    domainsizing = ["0.5","0.25","0.1"] #to test
    
    

    #counter = 261

    #for idx in [0,1,2,3,4,5,6,7]: #261-268
    #    submitjob(counter,nonblfacesizing[idx],"0.01",wheelfacesizing,domainfacesizing,groundfacesizing,flhcab,numlayerscab,flhtrailer,numlayerstrailer)
    #    counter = counter + 1

    #for idx in [0,1,2,3,4,5,6,7]: #269-276
    #    submitjob(counter,nonblfacesizing[idx],"0.007071",wheelfacesizing,domainfacesizing,groundfacesizing,flhcab,numlayerscab,flhtrailer,numlayerstrailer)
    #    counter = counter + 1

    #for idx in [0,1,2,3,4,5,6,7]: #277-284
    #    submitjob(counter,nonblfacesizing[idx],"0.005",wheelfacesizing,domainfacesizing,groundfacesizing,flhcab,numlayerscab,flhtrailer,numlayerstrailer)
    #    counter = counter + 1
    

if __name__ == "__main__":
    startmeshes()
    #Logoff
    os.system("shutdown /l")