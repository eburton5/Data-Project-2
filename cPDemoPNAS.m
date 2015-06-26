%% preparation
clear vars;
% close all;
path(pathdef);
addpath(path,genpath([pwd '/utils/'])); %to see every function

%% set parameters
Names = {'x23','v09'};

options.FeatureType = 'ConfMax';
options.NumDensityPnts = 100;
options.AngleIncrement = 0.05;
options.NumFeatureMatch = 4;
options.GaussMinMatch = 'on';
% options.FeatureMatchType = 'Laplacian';
% options.ConfMaxLocalWidth = 5;
% options.GaussMaxLocalWidth = 5;
% options.GaussMinLocalWidth = 5;
% options.ADMaxLocalWidth = 5;
% options.ExcludeBoundary = 1;
% options.Display = 'on';

obj_path = [pwd '/obj/'];
sample_path = [pwd '/samples/PNAS/'];
data_path = './';
meshes_path = [data_path 'PNAS/meshes/'];
delete_command = 'rm -f ';

%% parse parameters
touch(sample_path); %touch checks if file exists, creates file if dne
touch(obj_path);
delete([obj_path '*.obj']);
% command_text = [delete_command obj_path '*.obj'];
% system(command_text);
% disp(command_text);

Gs = cell(2,1);

taxa_code = load([data_path 'teeth_taxa_table.mat']);
taxa_code = taxa_code.taxa_code;
TAXAind = cellfun(@(name) find(strcmpi(taxa_code,name)),Names); %extract indices that correspond to names used in code

%% load mesh and uniformize
for j=1:2
    if ~exist([sample_path taxa_code{TAXAind(j)} '.mat'],'file')
        Gs{j} = Mesh('off',[meshes_path taxa_code{TAXAind(j)} '_sas.off']);
        Gs{j}.Aux.name = taxa_code{TAXAind(j)};
        [Gs{j}.Aux.Area,Gs{j}.Aux.Center] = Gs{j}.Centralize('ScaleArea');
        Gs{j}.ComputeMidEdgeUniformization(options); % replace with ComputeCPMS and ComputeUniformization
        Gs{j}.Nf = Gs{j}.ComputeFaceNormals;
        Gs{j}.Nv = Gs{j}.F2V'*Gs{j}.Nf';
        Gs{j}.Nv = Gs{j}.Nv'*diag(1./sqrt(sum((Gs{j}.Nv').^2,1)));
        Gs{j}.Aux.LB = Gs{j}.ComputeCotanLaplacian;
        G = Mesh(Gs{j});
        save([sample_path taxa_code{TAXAind(j)} '.mat'], 'G');
    else
        Gs{j} = load([sample_path taxa_code{TAXAind(j)} '.mat']);
        Gs{j} = Gs{j}.G;
    end
end

%% compute continuous Procrustes distance
tic;rslt12 = Gs{1}.ComputeContinuousProcrustes(Gs{2},options);toc; %could do ComputeContinuousProcrustes(Gs{1},Gs{2},options)
tic;rslt21 = Gs{2}.ComputeContinuousProcrustes(Gs{1},options);toc; %theoretically should be same as above calculation b/c just a distance calculation

options.NumLandmark = 16;

lk2 = Gs{2}.V(:,GetLandmarks(Gs{2}.Aux.name,[data_path 'landmarks_teeth.mat'],[meshes_path Gs{2}.Aux.name '_sas.off'],options)); %Gs{2}.V gives (x,y,z) coordinates of verticies
lk1 = Gs{2}.V(:,rslt12.cPmap(GetLandmarks(Gs{1}.Aux.name,[data_path 'landmarks_teeth.mat'],[meshes_path Gs{1}.Aux.name '_sas.off'],options))); %GetLandmarks gives a list of indices
rslt12.lkMSE = mean(sqrt(sum((lk2-lk1).^2))); %difference between observer and mapped landmarks %result of distance computation with 1 coming before 2

lk1 = Gs{1}.V(:,GetLandmarks(Gs{1}.Aux.name,[data_path 'landmarks_teeth.mat'],[meshes_path Gs{1}.Aux.name '_sas.off'],options));
lk2 = Gs{1}.V(:,rslt21.cPmap(GetLandmarks(Gs{2}.Aux.name,[data_path 'landmarks_teeth.mat'],[meshes_path Gs{2}.Aux.name '_sas.off'],options)));
rslt21.lkMSE = mean(sqrt(sum((lk1-lk2).^2))); %difference between observer and mapped landmarks %result of distance computation with 2 coming before 1

disp(['rslt12.cPdist = ' num2str(rslt12.cPdist)]);
disp(['rslt21.cPdist = ' num2str(rslt21.cPdist)]);
disp(['rslt12.lkMSE = ' num2str(rslt12.lkMSE)]);
disp(['rslt21.lkMSE = ' num2str(rslt21.lkMSE)]);

%% print maps to texture coordinates %% texture coordinates are parametrization of tooth onto 2D plane (discs) 
obj_surf_1 = [obj_path '1.obj'];
obj_surf_2 = [obj_path '2.obj'];
if rslt12.cPdist<rslt21.cPdist
    options.Texture.Coordinates = rslt12.TextureCoords1/2+0.5;
    Gs{1}.Write(obj_surf_1,'obj',options);
    options.Texture.Coordinates = rslt12.TextureCoords2/2+0.5;
    Gs{2}.Write(obj_surf_2,'obj',options);
else
    options.Texture.Coordinates = rslt21.TextureCoords2/2+0.5;
    Gs{1}.Write(obj_surf_1,'obj',options);
    options.Texture.Coordinates = rslt21.TextureCoords1/2+0.5;
    Gs{2}.Write(obj_surf_2,'obj',options);
end

%% visualize landmarks
[~,R,~] = MapToDist(Gs{1}.V,Gs{2}.V,rslt12.cPmap,Gs{1}.Aux.VertArea);
sGM = Mesh(Gs{1});
sGM.V = R*Gs{1}.V;

options.type = 'full';
options.Landmarks = 'on';
options.LandmarksPath = [data_path 'landmarks_teeth.mat'];
options.MeshesPath = [data_path 'PNAS/meshes/'];
options.MeshSuffix = '_sas.off';
ViewTeethMapS(sGM, Gs{2}, {rslt12.cPmap,rslt21.cPmap}, options);

