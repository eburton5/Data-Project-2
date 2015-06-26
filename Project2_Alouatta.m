%% Goal of this script: calculate the cP distance between submeshes (size 400 pts) from genus Saimiri

%% Preparation
%clear all; 
% close all;
path(pathdef);
addpath(path,genpath([pwd '/utils/']));
addpath(path,genpath([pwd '../MeshLabfiles/Alouatta']));

%%  Set Parameters for later
options.FeatureType = 'ConfMax';
options.NumDensityPnts = 100;
options.AngleIncrement = 0.05;
options.NumFeatureMatch = 4;
options.GaussMinMatch = 'on';

%% Prepare meshes
Alouatta = cell(1,10);
% Load Alouatta seniculus species
Alouatta{1} = Mesh('off','../MeshLabfiles/Alouatta/USNM-281673_M755.off'); %% note: hand-edited this one, followed same routine
Alouatta{2} = Mesh('off','../MeshLabfiles/Alouatta/USNM-281741_M757.off'); 
Alouatta{3} = Mesh('off','../MeshLabfiles/Alouatta/USNM-281658_M753.off');
Alouatta{4} = Mesh('off','../MeshLabfiles/Alouatta/USNM-281758_M761.off');
Alouatta{5} = Mesh('off','../MeshLabfiles/Alouatta/USNM-123517_M751.off'); 
Alouatta{6} = Mesh('off','../MeshLabfiles/Alouatta/SBU-NAl13_M994.off');
Alouatta{7} = Mesh('off','../MeshLabfiles/Alouatta/USNM-281751_M759.off');
% Load Alouatta palliata aequatorialis species
Alouatta{8} = Mesh('off','../MeshLabfiles/Alouatta/USNM-284782_M1081.off');
Alouatta{9} = Mesh('off','../MeshLabfiles/Alouatta/USNM-171063_M1082.off');
Alouatta{10} = Mesh('off','../MeshLabfiles/Alouatta/USNM-290601_M1083.off');
% Convert to .mat files
for j = 1:10
    Alouatta{j}.ComputeMidEdgeUniformization(options); % beginning of midedge uniformization addition
    Alouatta{j}.Nf = Alouatta{j}.ComputeFaceNormals;
    Alouatta{j}.Nv = Alouatta{j}.F2V'*Alouatta{j}.Nf';
    Alouatta{j}.Nv = Alouatta{j}.Nv'*diag(1./sqrt(sum((Alouatta{j}.Nv').^2,1)));
    Alouatta{j}.Aux.LB = Alouatta{j}.ComputeCotanLaplacian; 
    %Saimiri{j} = Mesh(Saimiri{j}); % end of midedge uniformization addition
end
save('Alouatta_mesh.mat', 'Alouatta'); %these can be resued forever

NumPts = 400;
rng('shuffle');

% preallocations for speed
i = zeros(1,10);
DAlo = cell(1,10);
subV = cell(1,10);
subF = cell(1,10);
Alo = cell(1,10);

for j = 1:10 
    i(j) = randi(Alouatta{j}.nV); % generate random starting point, will be different every time
    % get subsampled mesh
    subV{j} = Alouatta{j}.GeodesicFarthestPointSampling(NumPts,i(j));
    [subV{j},subF{j}] = PerformGeodesicDelauneyTriangulation(Alouatta{j},subV{j},[]); % Create new mesh for subsample
    Alo{j} = Mesh('VF',subV{j},subF{j});
    % compute uniformization for subsampled mesh
    [Alo{j}.Aux.Area, Alo{j}.Aux.Center] = Alo{j}.Centralize('ScaleArea');
    [~,TriAreas] = Alo{j}.ComputeSurfaceArea;
    Alo{j}.Aux.VertArea = (TriAreas'*Alo{j}.F2V)/3;
    DAlo{j} = Alo{j}.ComputeCPMS().ComputeUniformization(struct('method','LSCM','boundary_conditions','disc'));
%     Sai{j}.ComputeMidEdgeUniformization(options); % beginning of midedge uniformization addition
%     Sai{j}.Nf = Sai{j}.ComputeFaceNormals;
%     Sai{j}.Nv = Sai{j}.F2V'*Sai{j}.Nf';
%     Sai{j}.Nv = Sai{j}.Nv'*diag(1./sqrt(sum((Sai{j}.Nv').^2,1)));
%     Sai{j}.Aux.LB = Sai{j}.ComputeCotanLaplacian; 
%     Saimiri{j} = Mesh(Sai{j}); % end of midedge uniformization addition
    Alo{j}.Aux.UniformizationV = DAlo{j}.V;
%%%     Estimate conformal factor using area distortion
    [~,AG] = Alo{j}.ComputeSurfaceArea;
    [~,DG] = DAlo{j}.ComputeSurfaceArea;
    Alo{j}.Aux.Conf = (AG./DG)'*DAlo{j}.F2V/3;
%%%     set the G.Aux.Conf to 0 on the boundary
    [Alo{j}.BV,Alo{j}.BE] = Alo{j}.FindBoundaries();
    Alo{j}.Aux.Conf(Alo{j}.BV) = 0;

%%%     keep features on the original fine mesh for the downsampled mesh
    TREE = kdtree_build(Alo{j}.V');
    Alo{j}.Aux.ConfMaxInds = kdtree_nearest_neighbor(TREE, Alouatta{j}.V(:,Alouatta{j}.Aux.ConfMaxInds)');
    %% similarly, find nearest neighbors of
    %%%% G.Aux.ADMaxInds, G.Aux.GaussMaxInds, G.Aux.GaussMinInds
    Alo{j}.Aux.ADMaxInds = kdtree_nearest_neighbor(TREE, Alouatta{j}.V(:,Alouatta{j}.Aux.ADMaxInds)');
    Alo{j}.Aux.GaussMaxInds = kdtree_nearest_neighbor(TREE, Alouatta{j}.V(:,Alouatta{j}.Aux.GaussMaxInds)');
    Alo{j}.Aux.GaussMinInds = kdtree_nearest_neighbor(TREE, Alouatta{j}.V(:,Alouatta{j}.Aux.GaussMinInds)');

    %%% finding density points
    minds = [Alo{j}.Aux.GaussMaxInds;Alo{j}.Aux.GaussMinInds;Alo{j}.Aux.ConfMaxInds];
    minds = unique(minds);
    Alo{j}.Aux.DensityPnts = Alo{j}.GeodesicFarthestPointSampling(Alo{j}.nV,minds);
end

%% Create cP distance matrix
cPDist_Alouatta = zeros(10);
rslt = cell(10);
for i = 1:10
    for j = 1:10
        rslt{i,j} = ComputeContinuousProcrustes3(Alo{i},Alo{j}); 
        cPDist_Alouatta(i,j) = rslt{i,j}.cPdist;
    end
end

%% save meshes and distance matrix
save('cPDist_Alouatta.mat', 'cPDist_Saimiri');
save('Alo.mat','Alo');