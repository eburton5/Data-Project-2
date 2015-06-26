%% preparation
clear vars;
% close all;
path(pathdef);
addpath(path,genpath([pwd '/utils/']));

options = struct('FeatureType', 'ConfMax', 'NumDensityPnts', 100,...
    'AngleIncrement', 0.05, 'NumFeatureMatch', 4, 'GaussMinMatch', 'on');

% load('Sai_grid.mat');

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
save('x17.mat','Gs');

CPDMat = zeros(10);
CPRsltMat = cell(10);
for j=1:10
    for k=1:10
        CPRsltMat{j,k} = ComputeContinuousProcrustes4(Gs{j},Gs{k},options);
        CPDMat(j,k) = CPRsltMat{j,k}.cPdist;
    end
end
save('x17Rslt.mat','CPDMat');
% options.Texture.Coordinates = CPRsltMat{1,10}.TextureCoords1/2+0.5;
% Sai{1}.Write('../1.obj','obj',options);
% options.Texture.Coordinates = CPRsltMat{1,10}.TextureCoords2/2+0.5;
% Sai{10}.Write('../2.obj','obj',options);

% imagesc(min(CPDMat,CPDMat'));
% axis equal
% axis([0.5,10.5,0.5,10.5])
% colorbar


