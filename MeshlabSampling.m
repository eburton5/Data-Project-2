%% convert .off files from meshlab to .mat files to be used for downsampling and further analysis
%% Preparation
%clear all; 
% close all;
path(pathdef);
addpath(path,genpath([pwd '/utils/']));
addpath(path,genpath([pwd '../MeshLabFiles/Hapalemur/']));

%%  Set Parameters
options.FeatureType = 'ConfMax';
options.NumDensityPnts = 100;
options.AngleIncrement = 0.05;
options.NumFeatureMatch = 4;
options.GaussMinMatch = 'on';

% load .off file
G = Mesh('off','../MeshLabFiles/Hapalemur/v12.off'); 

% Convert to .mat file
[G.Aux.Area,G.Aux.Center] = G.Centralize('ScaleArea');
G.ComputeMidEdgeUniformization(options); % beginning of midedge uniformization addition
G.Nf = G.ComputeFaceNormals;
G.Nv = G.F2V'*G.Nf';
G.Nv = G.Nv'*diag(1./sqrt(sum((G.Nv').^2,1)));
G.Aux.LB = G.ComputeCotanLaplacian; 
save('V12.mat','G');

%%subsample
NumPts = 400;

% preallocations for speed
i = zeros(1,10);
Gs = cell(1,10);
D = cell(1,10);
subV = cell(1,10);
subF = cell(1,10);
rng('shuffle'); % want a different random starting point for every iteration
for j = 1:10 
    i(j) = randi(G.nV); % generate random starting point, will be different every time
    % get subsampled mesh
    subV{j} = G.GeodesicFarthestPointSampling(NumPts,i(j));
    [subV{j},subF{j}] = G.PerformGeodesicDelauneyTriangulation(subV{j},[]); % Create new mesh for subsample
    Gs{j} = Mesh('VF',subV{j},subF{j});
    % compute uniformization for subsampled mesh
    [Gs{j}.Aux.Area, Gs{j}.Aux.Center] = Gs{j}.Centralize('ScaleArea');
    [~,TriAreas] = Gs{j}.ComputeSurfaceArea;
    Gs{j}.Aux.VertArea = (TriAreas'*Gs{j}.F2V)/3;
    D{j} = Gs{j}.ComputeCPMS().ComputeUniformization(struct('method','LSCM','boundary_conditions','disc'));
%     Sai{j}.ComputeMidEdgeUniformization(options); 
%     Sai{j}.Nf = Sai{j}.ComputeFaceNormals;
%     Sai{j}.Nv = Sai{j}.F2V'*Sai{j}.Nf';
%     Sai{j}.Nv = Sai{j}.Nv'*diag(1./sqrt(sum((Sai{j}.Nv').^2,1)));
%     Sai{j}.Aux.LB = Sai{j}.ComputeCotanLaplacian;
    Gs{j}.Aux.UniformizationV = D{j}.V; 
%%%     Estimate conformal factor using area distortion
    [~,AG] = Gs{j}.ComputeSurfaceArea;
    [~,DG] = D{j}.ComputeSurfaceArea;
    Gs{j}.Aux.Conf = (AG./DG)'*D{j}.F2V/3;
%%%     set the G.Aux.Conf to 0 on the boundary
    [Gs{j}.BV,Gs{j}.BE] = FindBoundaries(Gs{j});
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
save('v12.mat','Gs');

%% delete isolated vertices
for j=1:10
    ConfMax = Gs{j}.V(:,Gs{j}.Aux.ConfMaxInds);
    GaussMax = Gs{j}.V(:,Gs{j}.Aux.GaussMaxInds);
    GaussMin = Gs{j}.V(:,Gs{j}.Aux.GaussMinInds);
    ADMax = Gs{j}.V(:,Gs{j}.Aux.ADMaxInds);
    
    dVInds = Gs{j}.DeleteIsolatedVertex();
    if ~isempty(dVInds) %% recompute uniformization
        [Gs{j}.Aux.Area,Gs{j}.Aux.Center] = Gs{j}.Centralize('ScaleArea');
        [Gs{j}.BV, Gs{j}.BE] = Gs{j}.FindBoundaries();
        ConfMax = (ConfMax-repmat(Gs{j}.Aux.Center,1,size(ConfMax,2)))/sqrt(Gs{j}.Aux.Area);
        GaussMax = (GaussMax-repmat(Gs{j}.Aux.Center,1,size(GaussMax,2)))/sqrt(Gs{j}.Aux.Area);
        GaussMin = (GaussMin-repmat(Gs{j}.Aux.Center,1,size(GaussMin,2)))/sqrt(Gs{j}.Aux.Area);
        ADMax = (ADMax-repmat(Gs{j}.Aux.Center,1,size(ADMax,2)))/sqrt(Gs{j}.Aux.Area);
        
        Gs{j}.ComputeMidEdgeUniformization(options);
        Gs{j}.Nf = Gs{j}.ComputeFaceNormals;
        Gs{j}.Nv = Gs{j}.F2V'*Gs{j}.Nf';
        Gs{j}.Nv = Gs{j}.Nv'*diag(1./sqrt(sum((Gs{j}.Nv').^2,1)));
        Gs{j}.Aux.LB = Gs{j}.ComputeCotanLaplacian;
        
        TREE = kdtree_build(Gs{j}.V');
        Gs{j}.Aux.ConfMaxInds = kdtree_nearest_neighbor(TREE, ConfMax');
        Gs{j}.Aux.GaussMaxInds = kdtree_nearest_neighbor(TREE, GaussMax');
        Gs{j}.Aux.GaussMinInds = kdtree_nearest_neighbor(TREE, GaussMin');
        Gs{j}.Aux.ADMaxInds = kdtree_nearest_neighbor(TREE, ADMax');
    end
end

save('v12.mat','Gs');

%% Create cP distance matrix
cPDist = zeros(10);
rslt = cell(10);
for i = 1:10
    for j = 1:10
        rslt{i,j} = ComputeContinuousProcrustes4(Gs{i},Gs{j},options); 
        cPDist(i,j) = rslt{i,j}.cPdist;
    end
end

save('v12Rslt.mat','cPDist');

%% Compare the subsamples to the original mesh
CPrslt = cell(1,11);
CPDself = zeros(1,11); 
CPrslt{1,1} = ComputeContinuousProcrustes4(G,G);
CPDself(1,1) = CPrslt{1,1}.cPdist;
for i = 1:10
    CPrslt{1,i+1} = ComputeContinuousProcrustes4(G,Gs{i});
    CPDself(1,i+1) = CPrslt{1,i+1}.cPdist;
end
save('v12_CPDself.mat','CPDself');
