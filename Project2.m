%%% Sub-Project 2: Exploring the effects of discretization
%% Preparation
%clear vars;
%close all;
path(pathdef);
addpath(path,genpath([pwd '/utils/']));
addpath(path,genpath([pwd '/PNAS/meshes']));

%% Experimentation with mesh x23
%G1 = Mesh('off', './PNAS/meshes/x23_sas.off');
G2 = load('./samples/PNAS/x23.mat'); G2 = G2.G;
%for j = 1:2
i = 233; %randi(G2.nV); %generate random starting point, will be different every time
%rng(100); % standardize so get same random number for size of sub-sample
NumPts = 233 %randi(round(G2.nV/20)); %generate random size of subsample (max = 1/10 of total number of vertices)
sample2 = zeros(1,NumPts); %vector that will contain indices of sub-sample
sample2(1) = i;
[D2,S2,Q2] = G2.PerformFastMarching(sample2(1)); % Farthest point sampling for subset of random size "NumPts"
for n = 2:NumPts
    progressbar(n,NumPts);
    m = max(D2);
    [m,Ind] = max(D2);
    sample2(n) = Ind;
    [D2,S2,Q2] = G2.PerformFastMarching(sample2(1:n));
end

%%%create distance matrix for subsample
% Dist2 = zeros(length(sample2));
% for i = 1:length(sample2)
%     for j = 1:length(sample2)
%         Dist2(i,j) = abs(sample2(i) - sample2(j));
%     end
% end
% figure; imagesc(Dist2);
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
[V,F] = PerformGeodesicDelauneyTriangulation(G2,sample2,[]); 
G2.V = V;
G2.F = F;
G2.nF = length(G2.F);
G2.nV = length(G2.V);
figure; G2.draw();

%% Compute New Matrices for G2
G2.E = G2.ComputeEdgeFaceRing(F); %new edge matrix(may be redundant of next step)
[A,E] = ComputeAdjacencyMatrix(G2); %new edge and adjacency matrices
V2E = ComputeV2E(G2); 
F2V = ComputeF2V(G2);

%% Scale so area = 1
[Area2,TriArea2] = ComputeSurfaceArea(G2);
V2 = G2.V;
Vnew2 = V2./(sqrt(Area2));
G2.V = Vnew2;
% n = length(TriArea2);
% for i = 1:n
%     TriArea2(i) = (1/Area2)*TriArea2(i);
% end
% Area2 = sum(TriArea2);

%% calculate new distance matrix
% VforDist2 = zeros(3,length(X23.V));
X23_2 = load('./samples/PNAS/x23.mat'); X23_2 = X23_2.G;
V23 = X23_2.V;
Vnew23 = V23./(sqrt(Area2));
X23_2.V = Vnew23;
% want to keep only the coordinates cooresponding to those in the subsample
for i = 1:length(X23_2.V)
    if i ~= sample2
        X23_2.V(:,i) = Inf;
    end
end
% now calculate distance matrix
% speed up by only to calculating for non-inf entries
Dist2 = zeros(length(X23_2.V));
for i = 1:length(X23_2.V)
    for j = 1:length(X23_2.V)
        Dist2(i,j) = sqrt((X23_2.V(1,i)-X23_2.V(1,j))^2 + (X23_2.V(2,i)-X23_2.V(2,j))^2 + (X23_2.V(3,i)-X23_2.V(3,j))^2);
    end
end

% figure; imagesc(Dist2);

%% Experimenting with cPdist using X23 with updated V
% for i = 1:length(X23_2.V)
%     if X23_2.V(:,i) == Inf
%         X23_2.V(:,i) = 0;
%     end
% end
% Conclusion: no difference evident

%% Using the Normal 
% first compute curvature
[Umin2,Umax2,Cmin2,Cmax2,Cmean2,Cgauss2,Normal2] = G2.ComputeCurvature;
% find the angles between all possible combinations of normals
for i = 1:length(Normal)
    for j = 1:
acos(dot(Normal(1),Normal2(1))/(norm(Normal(1))*norm(Normal2(1))))

%% Experimenting with the Laplacian
[L2,M2] = G2.ComputeLaplacian();

%% To come back to: ComputeVoronoiArea
%use sample for indices, don't need to do fast marching again
%idea: compare voronoi patterns on different sub-samples after scaling mesh
    %Note: Q from fast marching is voronoi decomposition