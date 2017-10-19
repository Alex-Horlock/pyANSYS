from subprocess import call
import sys
import os
import paramiko
import select

def submitjob(counter,traileredgesizing,cabinedgesizing, facesizing, numlayerstrailer,flhcabin,flhtrailer,numlayerscabin):
    counterstr = str(counter).zfill(4)
    print "Creating input files: " + counterstr
    flname = 'H:/PartIV/LocalFiles/' + counterstr + 'meshcommands.js'
    s=open('H:/PartIV/LocalFiles/meshtemplate.js').read()
    f=open(flname, 'w')
    f.write(s)
    f.flush()
    f.close()
    f=open(flname,"r")
    contents = f.readlines()
    f.close()
    #Add variables to the mesh.js file for ANSYS Meshing
    contents.insert(1,'var traileredgesizing="'+traileredgesizing+'"\n')
    contents.insert(2,'var cabinedgesizing="'+cabinedgesizing+'"\n')
    #contents.insert(3,'var inletedgesizing="'+inletedgesizing+'"\n')
    #contents.insert(4,'var outletedgesizing="'+outletedgesizing+'"\n')
    #contents.insert(5,'var LHSboundaryedgesizing="'+LHSboundaryedgesizing+'"\n')
    #contents.insert(6,'var RHSboundaryedgesizing="'+RHSboundaryedgesizing+'"\n')
    contents.insert(3,'var facesizing="'+facesizing+'"\n')
    contents.insert(4,'var numlayerstrailer="'+numlayerstrailer+'"\n')
    contents.insert(5,'var flhcabin="'+flhcabin+'"\n')
    contents.insert(6,'var flhtrailer="'+flhtrailer+'"\n')
    contents.insert(7,'var numlayerscabin="'+numlayerscabin+'"\n')
    contents.insert(8,'var growth="1.2"\n')
    contents.insert(9,'var MESHNAME="H:/PartIV/LocalFiles/mesh'+counterstr+'.msh"\n')
    f=open(flname,"w")
    contents="".join(contents)
    f.write(contents)
    f.close()
    #Now write Workbench Journal File
    flname2='H:/PartIV/LocalFiles' + counterstr + 'wbjcommands.wbjn'
    s2=open('H:/PartIV/LocalFiles/wbjtemplate.wbjn').read()
    s2=s2.replace('MESHJSSCRIPT', flname)
    f2=open(flname2, 'w')
    f2.write(s2)
    f2.flush()
    f2.close()
    #Run commands in cmdprompt
    cmdstr2 = 'runwb2 -X -B -R ' + flname2
    cmdstr1 = 'cmd /c ""C:/Program Files/ANSYS Inc/v150/Framework/bin/Win64/runwb2" "-B" "-R" ' + flname2 + '""'
    tocopy = "H:/PartIV/LocalFiles/mesh"+ counterstr +".msh"
    topaste = "/home/tgm2g11/GDP/automeshed/mesh" + counterstr + '.js'
    print "Meshing: " + counterstr
    os.system(cmdstr1)
    #Upload outputted file to Lyceum
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect('lyceum2.soton.ac.uk', username='tgm2g11', password='Polaris3244')
    sftp = ssh.open_sftp()
    print "Uploading file to server: " + counterstr
    sftp.put(tocopy, '/home/tgm2g11/GDP/automeshed/mesh' + counterstr +'.msh')
    sftp.put(flname, topaste)
    sftp.close()
    #Compress mesh file uploaded to Lyceum
    stdin, stdout, stderr = ssh.exec_command("gzip /home/tgm2g11/GDP/automeshed/mesh" + counterstr + '.msh')
    while not stdout.channel.exit_status_ready():
        if stdout.channel.recv_ready():
            rl, wl, xl = select.select([stdout.channel], [], [], 0.0)
            if len(rl) > 0:
                print stdout.channel.recv(1024),
    #Submit job to Lyceum (via qsub command)
    print "Starting job on server: " + counterstr
    stdin, stdout, stderr = ssh.exec_command("module load python && python /home/tgm2g11/GDP/startjob.py " + counterstr)
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
    traileredgesizing="0.001"
    cabinedgesizing = "0.001414"
    facesizing = "0.125"
    numlayerstrailer="6" #Number of Inflation Layers on Trailer y+ = 30
    flhcabin="0.0006878" #y+ 30
    flhtrailer="0.0008784" #y+ 30
    numlayerscabin="4" #y+ 30


    counter = 174

    #submitjob(counter,traileredgesizing,cabinedgesizing, facesizing, numlayerstrailer,flhcabin,flhtrailer,numlayerscabin)

    #Cabin y+   Runs 174-178

    #numlayerscabin = ["8","6", "4", "3", "2"]
    #flhcabin = ["0.0000228", "0.0001146", "0.0006878", "0.0011464", "0.0022928"]
    #for idx in [0,1,2,3,4]:
        #submitjob(counter,traileredgesizing,cabinedgesizing, facesizing, numlayerstrailer,flhcabin[idx],flhtrailer,numlayerscabin[idx])
        #counter=counter+1
    #flhcabin="0.0022928"
    #numlayerscabin="2"


    #Trailer y+ 178-183

    #numlayerstrailer = ["10","8", "6", "5", "5"]
    #flhtrailer = ["0.0000292", "0.0001464", "0.0008784", "0.0014642", "0.0029284"]
    #for idx in [0,1,2,3,4]:
        #submitjob(counter,traileredgesizing, cabinedgesizing, facesizing, numlayerstrailer[idx],flhcabin,flhtrailer[idx],numlayerscabin)
        #counter=counter+1
    #flhtrailer="0.0029284"
    #numlayerstrailer="5"

    

    #Trailer and Cabin y+ 184-188
    
    #for idx in [0,1,2,3,4]:
        #submitjob(counter,traileredgesizing, cabinedgesizing, facesizing, numlayerstrailer[idx],flhcabin[idx],flhtrailer[idx],numlayerscabin[idx])
        #counter=counter+1
    #flhcabin="0.0022928"
    #numlayerscabin="2"
    #flhtrailer="0.0029284"
    #numlayerstrailer="5"

    #Cabin Edge Sizing 189 - 198
    
    cabinedgesizing = ["0.0001768","0.00025", "0.0003536","0.0005", "0.000707", "0.001", "0.001414","0.002","0.00282", "0.004000", "0.005657"]

        #submitjob(counter,traileredgesizing,cabinedgesizing, facesizing, numlayerstrailer,flhcabin,flhtrailer,numlayerscabin)
        #counter = counter+1
    #cabinedgesizing = "0.001414"



    #Trailer Edge Sizing 199-208
    traileredgesizing = ["0.0001768","0.00025", "0.0003536","0.0005", "0.000707", "0.001", "0.001414","0.002","0.00282", "0.004000", "0.005657"]

        #submitjob(counter,traileredgesizing,cabinedgesizing, facesizing, numlayerstrailer,flhcabin,flhtrailer,numlayerscabin)
        #counter = counter+1
    #trailerfacesizing="0.001"


     #Face Sizing 209-220

    
    facesizing = ["0.031250", "0.044194", "0.062500", "0.088388","0.125000", "0.176777", "0.25", "0.353553", "0.5", "0.707107", "1"]


    for idx in [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]:
        submitjob(counter, traileredgesizing[idx], cabinedgesizing[idx], facesizing[idx], numlayerstrailer, flhcabin, flhtrailer, numlayerscabin)
        counter = counter + 1



    
       
if __name__ == "__main__":
    startmeshes()
    Logoff
    os.system("shutdown /l")
