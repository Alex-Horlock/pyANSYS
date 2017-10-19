#!/bin/bash
#PBS -l walltime=24:00:00
#PBS -l nodes=1:ppn=16
cd $PBS_O_WORKDIR
nprocs=`wc -l $PBS_NODEFILE | awk '{ print $1 }'`
#Copy relevant cas/dat files from Iridis
scp iridis:/scratch/tms1g10/results/RUN1/casdat/RUN1-RUN2.cas.gz /home/tms1g10/GDP/3D/
scp iridis:/scratch/tms1g10/results/RUN1/casdat/RUN1-RUN2.dat.gz /home/tms1g10/GDP/3D/
ssh iridis rm /scratch/tms1g10/results/RUN1/casdat/RUN1-RUN2.cas.gz
ssh iridis rm /scratch/tms1g10/results/RUN1/casdat/RUN1-RUN2.dat.gz
#Load Fluent
module load fluent/15.0
#Run Journal File
fluent 3ddp -t$nprocs -gu -i /home/tms1g10/GDP/3D/RUN1-RUN3.jou > /home/tms1g10/GDP/3D/RUN1-RUN3.out
if [ "RUN2" -ne "0" ]
then
		ssh iridis rm /scratch/tms1g10/results/RUN1/RUN1YZ-RUN2.gif
		ssh iridis rm /scratch/tms1g10/results/RUN1/RUN1XY-RUN2.gif
		scp iridis:/scratch/tms1g10/results/RUN1/img/RUN1YZveluns*jpg /home/tms1g10/GDP/3D/
		scp iridis:/scratch/tms1g10/results/RUN1/img/RUN1XYveluns*jpg /home/tms1g10/GDP/3D/
fi
#GIF file
module load imagemagick
convert /home/tms1g10/GDP/3D/RUN1YZveluns*jpg -delay 100 /home/tms1g10/GDP/3D/RUN1YZ-RUN3.gif
convert /home/tms1g10/GDP/3D/RUN1XYveluns*jpg -delay 100 /home/tms1g10/GDP/3D/RUN1XY-RUN3.gif
scp /home/tms1g10/GDP/3D/RUN1YZ-RUN3.gif iridis:/scratch/tms1g10/results/RUN1/
scp /home/tms1g10/GDP/3D/RUN1XY-RUN3.gif iridis:/scratch/tms1g10/results/RUN1/
rm /home/tms1g10/GDP/3D/RUN1YZ-RUN3.gif
rm /home/tms1g10/GDP/3D/RUN1XY-RUN3.gif
#Clean case and data up
rm /home/tms1g10/GDP/3D/RUN1-RUN2.cas.gz
rm /home/tms1g10/GDP/3D/RUN1-RUN2.dat.gz
#Analyse results
module load numpy
python compareruns2.py RUN1 RUN3 RUN5 >> /home/tms1g10/GDP/3D/RUN1-resultsRUN3.txt
#Compress files
gzip /home/tms1g10/GDP/3D/RUN1-RUN3.cas
gzip /home/tms1g10/GDP/3D/RUN1-RUN3.dat
scp /home/tms1g10/GDP/3D/RUN1-RUN3.cas.gz iridis:/scratch/tms1g10/results/RUN1/casdat/
scp /home/tms1g10/GDP/3D/RUN1-RUN3.dat.gz iridis:/scratch/tms1g10/results/RUN1/casdat/
rm /home/tms1g10/GDP/3D/RUN1-RUN3.cas.gz
rm /home/tms1g10/GDP/3D/RUN1-RUN3.dat.gz
#Make new .gif
scp /home/tms1g10/GDP/3D/RUN1*jpg iridis:/scratch/tms1g10/results/RUN1/img/
rm /home/tms1g10/GDP/3D/RUN1*jpg
#Submit Next Job
qsub /home/tms1g10/GDP/3D/RUN1-RUN4.run
