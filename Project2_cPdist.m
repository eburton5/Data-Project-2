%% Computing the cPdist matrix between teeth subsamples
% first generate the subsamples (in this case fix sample size)
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
load('./samples/PNAS/x17.mat'); % a mesh G will be generated
NumPts = 600;
% preallocations for speed
i = zeros(1,10);
Gs = cell(1,10);
D = cell(1,10);
subV = cell(1,10);
subF = cell(1,10);
rng('shuffle'); % want a different random starting point for every iteration
for j = 1:10 
    i(j) = randi(G.nV); % generate random starting point, will be different every time
%     sample{j} = zeros(1,NumPts); % vector that will contain indices of sub-sample
%     sample{j}(1) = i(j);
%     [D{j},S{j},Q{j}] = G.PerformFastMarching(sample{j}(1)); % Farthest point sampling for subset of random size "NumPts"
%     for n = 2:NumPts
%         progressbar(n,NumPts);
%         m = max(D{j});
%         [m,Ind] = max(D{j});
%         sample{j}(n) = Ind;
%         [D{j},S{j},Q{j}] = G.PerformFastMarching(sample{j}(1:n));
%     end
    subV{j} = G.GeodesicFarthestPointSampling(NumPts,i(j));
    [subV{j},subF{j}] = G.PerformGeodesicDelauneyTriangulation(subV{j},[]); % Create new mesh for subsample
    Gs{j} = Mesh('VF',subV{j},subF{j});
%     G{j}.V = V;
%     G{j}.F = F;
%     G{j}.nF = length(G{j}.F);
%     G{j}.nV = length(G{j}.V);
%     [A,E] = ComputeAdjacencyMatrix(G{j}); %new edge and adjacency matrices
%     V2E = ComputeV2E(G{j}); 
%     F2V = ComputeF2V(G{j});
%%% Scale so area = 1
%     [Area,TriArea] = ComputeSurfaceArea(Gs{j});
%     V = Gs{j}.V;
%     Vnew = V./(sqrt(Area));
%     Gs{j}.V = Vnew;
%%%     Flatten and Uniformize
%     G{j}.nV = size(G{j}.V,2);
%     G{j}.nF = size(G{j}.F,2);
    [Gs{j}.Aux.Area, Gs{j}.Aux.Center] = Gs{j}.Centralize('ScaleArea');
    [~,TriAreas] = Gs{j}.ComputeSurfaceArea;
    Gs{j}.Aux.VertArea = (TriAreas'*Gs{j}.F2V)/3;
    D{j} = Gs{j}.ComputeCPMS().ComputeUniformization(struct('method','LSCM','boundary_conditions','disc'));
%     Gs{j}.ComputeMidEdgeUniformization(options); % experimentation start
%     U{j} = Gs{j}.ComputeCPMS;
%     U{j}.Nf = U{j}.ComputeFaceNormals;
%     U{j}.Nv = U{j}.F2V'*U{j}.Nf';
%     U{j}.Nv = U{j}.Nv'*diag(1./sqrt(sum((U{j}.Nv').^2,1)));
%     U{j}.Aux.LB = U{j}.ComputeCotanLaplacian;
%     U{j} = U{j}.ComputeUniformization(struct('method','LSCM','boundary_conditions','disc'));;
    Gs{j}.Aux.UniformizationV = D{j}.V; %experimentation end
%     Gs{j}.Aux.UniformizationV = U{j}.V;
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

%%% sanity check
%     figure; Gs{j}.draw();
%     hold on
%     scatter3(Gs{j}.V(1,Gs{j}.Aux.ConfMaxInds),Gs{j}.V(2,Gs{j}.Aux.ConfMaxInds),...
%         Gs{j}.V(3,Gs{j}.Aux.ConfMaxInds),20,'g','filled');
    %% similarly, find nearest neighbors of
    %%%% G.Aux.ADMaxInds, G.Aux.GaussMaxInds, G.Aux.GaussMinInds
    Gs{j}.Aux.ADMaxInds = kdtree_nearest_neighbor(TREE, G.V(:,G.Aux.ADMaxInds)');
    Gs{j}.Aux.GaussMaxInds = kdtree_nearest_neighbor(TREE, G.V(:,G.Aux.GaussMaxInds)');
    Gs{j}.Aux.GaussMinInds = kdtree_nearest_neighbor(TREE, G.V(:,G.Aux.GaussMinInds)');

    %%% finding density points
    minds = [Gs{j}.Aux.GaussMaxInds;Gs{j}.Aux.GaussMinInds;Gs{j}.Aux.ConfMaxInds];
    minds = unique(minds);
    Gs{j}.Aux.DensityPnts = Gs{j}.GeodesicFarthestPointSampling(Gs{j}.nV,minds);
    
    %%% sanity check
%     figure; Gs{j}.draw();
%     hold on
%     scatter3(Gs{j}.V(1,Gs{j}.Aux.ADMaxInds),Gs{j}.V(2,Gs{j}.Aux.ADMaxInds),...
%         Gs{j}.V(3,Gs{j}.Aux.ADMaxInds),20,'y','filled');
% 
%     figure; Gs{j}.draw();
%     hold on
%     scatter3(Gs{j}.V(1,Gs{j}.Aux.GaussMaxInds),Gs{j}.V(2,Gs{j}.Aux.GaussMaxInds),...
%         Gs{j}.V(3,Gs{j}.Aux.GaussMaxInds),20,'r','filled');
%     scatter3(Gs{j}.V(1,Gs{j}.Aux.GaussMinInds),Gs{j}.V(2,Gs{j}.Aux.GaussMinInds),...
%         Gs{j}.V(3,Gs{j}.Aux.GaussMinInds),20,'b','filled');
    
%%%     Extract features, including ConfMaxInds, ADMaxInds, GaussMinInds, GaussMaxInds
%     G{j}.ExtractFeatures();
%     View local maximum of conformal factors
%     figure; G{j}.draw();
%     hold on
%     scatter3(G{j}.V(1,G{j}.Aux.ConfMaxInds),G{j}.V(2,G{j}.Aux.ConfMaxInds),G{j}.V(3,G{j}.Aux.ConfMaxInds),20,'g','filled');
% %     finding density points
%     minds = [G{j}.Aux.GaussMaxInds;G{j}.Aux.GaussMinInds;G{j}.Aux.ConfMaxInds];
%     minds = unique(minds);
%     G{j}.Aux.DensityPnts = G{j}.GeodesicFarthestPointSampling(G{j}.nV,minds);
%     U{j} = K{j}.ComputeUniformization(struct('method','LSCM','boundary_conditions','disc'));
%     U{j}.ComputeMidEdgeUniformization(options);
%     [U{j}.Aux.Area,U{j}.Aux.Center] = U{j}.Centralize('ScaleArea');
%     U{j}.Nf = U{j}.ComputeFaceNormals;
%     U{j}.Nv = U{j}.F2V'*U{j}.Nf';
%     U{j}.Nv = U{j}.Nv'*diag(1./sqrt(sum((U{j}.Nv').^2,1)));
%     U{j}.Aux.LB = U{j}.ComputeCotanLaplacian;
%     rslt12 = G{1}.ComputeContinuousProcrustes(G{2},options);
    %% calculate new distance matrix
    % VforDist2 = zeros(3,length(X23.V));
%     X23 = load('./samples/PNAS/x23.mat'); X23 = X23.G;
%     V23 = X23.V;
%     Vnew23 = V23./(sqrt(Area));
%     X23.V = Vnew23;
%     % want to keep only the coordinates cooresponding to those in the subsample
%     for x = 1:length(X23.V)
%         if x ~= sample{j}
%             X23.V(:,x) = Inf;
%         end
%     end
%     % now calculate distance matrix
%     Dist{j} = zeros(length(X23.V));
%     for l1 = 1:length(X23.V)
%         for l2 = 1:length(X23.V)
%             Dist{j}(l1,l2) = sqrt((X23.V(1,l1)-X23.V(1,l2))^2 + (X23.V(2,l1)-X23.V(2,l2))^2 + (X23.V(3,l1)-X23.V(3,l2))^2);
%         end
%     end
%     t{j} = Dist{j}(:);
%     t{j}(isinf(t{j})) = [];
%     t{j}(t{j}==0) = [];
%     figure; hist(t{j});
end
save('x17_600.mat','Gs');

%% Delete isolated vertex
for j=1:10
    ConfMax = Gs{j}.V(:,Gs{j}.Aux.ConfMaxInds);
    GaussMax = Gs{j}.V(:,Gs{j}.Aux.GaussMaxInds);
    GaussMin = Gs{j}.V(:,Gs{j}.Aux.GaussMinInds);
    ADMax = Gs{j}.V(:,Gs{j}.Aux.ADMaxInds);
    
    dVInds = Gs{j}.DeleteIsolatedVertex();
    if ~isempty(dVInds) %% recompute uniformization
        [Gs{j}.Aux.Area,Gs{j}.Aux.Center] = Gs{j}.Centralize('ScaleArea');
        [Gs{j}.BV, Gs{j}.BE] = FindBoundaries(Gs{j});
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
save('x09_1000.mat','Gs');

%% Create cP distance matrix
cPDist = zeros(10);
rslt = cell(10);
for i = 1:10
    for j = 1:10
        try
            rslt{i,j} = ComputeContinuousProcrustes4(Gs{i},Gs{j},options); 
            cPDist(i,j) = rslt{i,j}.cPdist;
        catch
            rslt{i,j} = ComputeContinuousProcrustes4(Gs{j},Gs{i},options); 
            cPDist(i,j) = rslt{i,j}.cPdist;
        end
    end
end

save('x09_600_pinvRslt.mat','cPDist');

%% Compare the subsamples to the original mesh
CPrslt = cell(1,11);
CPDself = zeros(1,11); 
CPrslt{1,1} = ComputeContinuousProcrustes4(G,G);
CPDself(1,1) = CPrslt{1,1}.cPdist;
for i = 1:10
    CPrslt{1,i+1} = ComputeContinuousProcrustes4(G,Gs{i});
    CPDself(1,i+1) = CPrslt{1,i+1}.cPdist;
end
save('x09_600_pinv_CPDself.mat','CPDself');