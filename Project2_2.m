%%% Sub-Project 2: Exploring the effects of discretization
%% Preparation
%clear vars;
%close all;
path(pathdef);
addpath(path,genpath([pwd '/utils/']));
addpath(path,genpath([pwd '/PNAS/meshes']));

%% Experimentation with mesh x23
%G1 = Mesh('off', './PNAS/meshes/x23_sas.off');
G = load('./samples/PNAS/j01.mat'); G = G.G;
%for j = 1:2
i = randi(G.nV); %generate random starting point, will be different every time
%rng(100); % standardize so get same random number for size of sub-sample
NumPts = 50; %randi(round(G.nV/20)); %generate random size of subsample (max = 1/10 of total number of vertices)
sample = zeros(1,NumPts); %vector that will contain indices of sub-sample
sample(1) = i;
[D,S,Q] = G.PerformFastMarching(sample(1)); % Farthest point sampling for subset of random size "NumPts"
for n = 2:NumPts
    progressbar(n,NumPts);
    m = max(D);
    [m,Ind] = max(D);
    sample(n) = Ind;
    [D,S,Q] = G.PerformFastMarching(sample(1:n));
end

%%%create distance matrix for subsample
% Dist = zeros(length(sample));
% for i = 1:length(sample)
%     for j = 1:length(sample)
%         Dist(i,j) = abs(sample(i) - sample(j));
%     end
% end
% figure; imagesc(Dist);
%end
%%%extract two closest neighbors for each vertex
%%%begin by sorting each column smallest to largest
% for i = 1:length(Dist)
%     Distsort(:,i) = sort(Dist(:,i));
% end
% %%%want the indices of two closest neighbors
% %Ind will be a matrix whos columns represent index, first, and second closest neighbor respectively
% Ind = zeros(3,length(Dist));
% for x = 1:length(Dist)
%     y = min(find(Dist(:,x)==Distsort(2,x)));
%     z = min(find(Dist(:,x)==Distsort(3,x)));
%     Ind(1,x) = x;
%     Ind(2,x) = y;
%     Ind(3,x) = z;
% end
%% Want to draw mesh using only these points
[V,F] = PerformGeodesicDelauneyTriangulation(G,sample,[]); 
G.V = V;
G.F = F;
G.nF = length(G.F);
G.nV = length(G.V);
figure; G.draw();

%% Compute New Matrices for G2
G.E = G.ComputeEdgeFaceRing(F); %new edge matrix(may be redundant of next step)
[A,E] = ComputeAdjacencyMatrix(G); %new edge and adjacency matrices
V2E = ComputeV2E(G); 
F2V = ComputeF2V(G);

%% Scale so area = 1
[Area,TriArea] = ComputeSurfaceArea(G);
V = G.V;
Vnew = V./(sqrt(Area));
G.V = Vnew;

% n = length(TriArea);
% for i = 1:n
%     TriArea(i) = (1/Area)*TriArea(i);
% end
% Area = sum(TriArea);

%% calculate new distance matrix
% VforDist2 = zeros(3,length(X23.V));
X23 = load('./samples/PNAS/x23.mat'); X23 = X23.G;
V23 = X23.V;
Vnew23 = V23./(sqrt(Area));
X23.V = Vnew23;
% want to keep only the coordinates cooresponding to those in the subsample
for i = 1:length(X23.V)
    if i ~= sample
        X23.V(:,i) = Inf;
    end
end
% now calculate distance matrix
% speed up by only to calculating for non-inf entries
Dist = zeros(length(X23.V));
for i = 1:length(X23.V)
    for j = 1:length(X23.V)
%         if X23.V(:,i) ~= Inf
            Dist(i,j) = sqrt((X23.V(1,i)-X23.V(1,j))^2 + (X23.V(2,i)-X23.V(2,j))^2 + (X23.V(3,i)-X23.V(3,j))^2);
%         else
%            Dist(i,j) = Inf;
%         end
    end
end

% figure; imagesc(Dist);

%% Experimenting with cPdist using X23 with updated V
% for i = 1:length(X23.V)
%     if X23.V(:,i) == Inf
%         X23.V(:,i) = 0;
%     end
% end
% Conclusion: no difference evident

%% Using the Normal 
% first compute curvature
[Umin,Umax,Cmin,Cmax,Cmean,Cgauss,Normal] = G.ComputeCurvature;

%% Experimenting with the Laplacian
[L,M] = G.ComputeLaplacian();