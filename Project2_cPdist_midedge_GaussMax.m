%%Purpose of this script is to compute the cP distance between 10
%%subsampled meshes from the one tooth, starting with a different points of
%%maximum Gaussian curvature for each farthest point sampling iteration

%% Preparation
% clear vars;
% close all;
path(pathdef);
addpath(path,genpath([pwd '/utils/']));
addpath(path,genpath([pwd '/PNAS/meshes']));

%%  Set Parameters for later
options.FeatureType = 'ConfMax';
options.NumDensityPnts = 100;
options.AngleIncrement = 0.05;
options.NumFeatureMatch = 4;
options.GaussMinMatch = 'on';

%% Mesh x23
load('./samples/PNAS/x23.mat'); % a mesh G will be generated
NumPts = 400;
% preallocations for speed
ind = zeros(1,10);
Gs = cell(1,10);
D = cell(1,10);
subV = cell(1,10);
subF = cell(1,10);
rng('shuffle'); % want a different random starting point for every iteration
for j = 1:10 
    ind(j) = G.Aux.GaussMaxInds(j); % use a point of maximum Gaussian curvature for starting index
    % get subsampled mesh
    subV{j} = G.GeodesicFarthestPointSampling(NumPts,ind(j));
    [subV{j},subF{j}] = G.PerformGeodesicDelauneyTriangulation(subV{j},[]); % Create new mesh for subsample
    Gs{j} = Mesh('VF',subV{j},subF{j});
    % compute uniformization for subsampled mesh
    [Gs{j}.Aux.Area, Gs{j}.Aux.Center] = Gs{j}.Centralize('ScaleArea');
    [~,TriAreas] = Gs{j}.ComputeSurfaceArea;
    Gs{j}.Aux.VertArea = (TriAreas'*Gs{j}.F2V)/3;
    D{j} = Gs{j}.ComputeCPMS().ComputeUniformization(struct('method','LSCM','boundary_conditions','disc'));
    Gs{j}.ComputeMidEdgeUniformization(options); 
    Gs{j}.Nf = Gs{j}.ComputeFaceNormals;
    Gs{j}.Nv = Gs{j}.F2V'*Gs{j}.Nf';
    Gs{j}.Nv = Gs{j}.Nv'*diag(1./sqrt(sum((Gs{j}.Nv').^2,1)));
    Gs{j}.Aux.LB = Gs{j}.ComputeCotanLaplacian;
    Gs{j}.Aux.UniformizationV = D{j}.V; 
%%%     Estimate conformal factor using area distortion
    [~,AG] = Gs{j}.ComputeSurfaceArea;
    [~,DG] = D{j}.ComputeSurfaceArea;
    Gs{j}.Aux.Conf = (AG./DG)'*D{j}.F2V/3;
%%%     set the G.Aux.Conf to 0 on the boundary
    [Gs{j}.BV,Gs{j}.BE] = Gs{j}.FindBoundaries();
    Gs{j}.Aux.Conf(Gs{j}.BV) = 0;

%%%     keep features on the original fine mesh for the downsampled mesh
    TREE = kdtree_build(Gs{j}.V');
    Gs{j}.Aux.ConfMaxInds = kdtree_nearest_neighbor(TREE, G.V(:,G.Aux.ConfMaxInds)');
   
    %% similarly, find nearest neighbors of
    %%%% G.Aux.ADMaxInds, G.Aux.GaussMaxInds, G.Aux.GaussMinInds
    Gs{j}.Aux.ADMaxInds = kdtree_nearest_neighbor(TREE, G.V(:,G.Aux.ADMaxInds)');
    Gs{j}.Aux.GaussMaxInds = kdtree_nearest_neighbor(TREE, G.V(:,G.Aux.GaussMaxInds)');
    Gs{j}.Aux.GaussMinInds = kdtree_nearest_neighbor(TREE, G.V(:,G.Aux.GaussMinInds)');

    %%% finding density points
    minds = [Gs{j}.Aux.GaussMaxInds;Gs{j}.Aux.GaussMinInds;Gs{j}.Aux.ConfMaxInds];
    minds = unique(minds);
    Gs{j}.Aux.DensityPnts = Gs{j}.GeodesicFarthestPointSampling(Gs{j}.nV,minds);
end

%% Create cP distance matrix
cPDist_midedge_GaussMax = zeros(10);
rslt = cell(10);
for i = 1:10
    for j = 1:10
        rslt{i,j} = ComputeContinuousProcrustes2(Gs{i},Gs{j}); %problem: yields some wierd results
        cPDist_midedge_GaussMax(i,j) = rslt{i,j}.cPdist;
    end
end

save('cPDist_midedge_GaussMax.mat','cPDist_midedge_GaussMax');
save('Gs_midedge_GaussMax.mat','Gs');