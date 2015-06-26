%% this script plots 100 evenly distributed points on the specified mesh
clear vars;
%close all;
path(pathdef);
addpath(path, genpath([pwd '/utils']));

samples_path = './samples/PNAS/';
MeshName = 'x23';
load([samples_path MeshName '.mat']);

NumPts = 100;
rng(100); %locks random generator
samples = zeros(1,NumPts); %vector that will contain the subset of points on mesh
n = randi(G.nV); %randomly generated index of point on mesh

samples(1) = n; %first index of subset is the index number of point chosen from mesh

D = G.PerformFastMarching(samples(1));
for j = 2:NumPts
    %progressbar(j,Numpts);
    m = max(D);
    [m, Ind] = max(D);
    samples(j) = Ind;
    D = G.PerformFastMarching(samples(1:j));
end

%G.ViewFunctionOnMesh(D,struc('mode','native'));
figure;G.draw();
hold on;
scatter3(G.V(1,samples),G.V(2,samples),G.V(3,samples),20,'g','filled');


