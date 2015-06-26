%% Preparation
clear vars;
% close all;
path(pathdef);
addpath(path,genpath([pwd '/utils/']));

%% Set Path
obj_path = [pwd '/obj/'];
% sample_path = [pwd '/samples/Teeth/'];

result_path = '/media/trgao10/Work/MATLAB/ArchivedResults/HDM/';
cPMaps_path = [result_path 'cPdist/cPMapsMatrix.mat'];
cPDist_path = [result_path 'cPdist/cPDistMatrix.mat'];
% cPLAST_path = [pwd '/results/Teeth/cPdist/cPComposedLASTGraph_median.mat'];
TextureCoords1_path = [result_path 'cPdist/TextureCoords1/'];
TextureCoords2_path = [result_path 'cPdist/TextureCoords2/'];

% cPMaps_path = [pwd '/results/Teeth/cPdist/cPMapsMatrix.mat'];
% cPDist_path = [pwd '/results/Teeth/cPdist/cPDistMatrix.mat'];
% cPLAST_path = [pwd '/results/Teeth/cPdist/cPComposedLASTGraph_median.mat'];
% TextureCoords1_path = [pwd '/results/Teeth/cPdist/TextureCoords1/'];
% TextureCoords2_path = [pwd '/results/Teeth/cPdist/TextureCoords2/'];

data_path = '~/Documents/MATLAB/DATA/HDM/';
sample_path = [data_path 'samples/'];
delete_command = 'rm -f ';

%% Set Parameters
% Names = {'um-adcc181','w02'}; % Viterbi Path Search can't fix this without MST
% Names = {'V09','x23'}; % how can these two teeth belong to the same genus??
% Names = {'V09','V13'}; % good
% Names = {'h08','H10'}; % good (because the original cP maps is already good)
% Names = {'a19','P30'}; % good! originally unrecoverable peak now gained back
% Names = {'T06','x17'}; % not too bad
% Names = {'T06','V02'}; % not good--worth exploring
% Names = {'T05','h08'}; % compare this pair with {'T06','h08'} to see how "a little bit extra feature" can already help dramastically
% Names = {'T06','h08'}; % compare with {'T05','h08'}
% Names = {'k01','j01'}; % surprisingly good (cP value indicates it could be much worse)
% Names = {'k15','a15'}; % makes a lot of sense--k15 is of low mesh quality
% Names = {'h08','j14'}; % nightmare
% Names = {'j01','j14'}; % beautiful results from Viterbi
% Names = {'a16','x14'}; % cP reverses orientation; MST fixes it; Viterbi reverses orientation as well
% Names = {'x09','B03'}; % LAST fix a peak
% Names = {'u14','w01'}; % for Clement's data set; cP more close to observer than cPComposedLAST
Names = {'AMNH-M-67102_M1099', 'AMNH-M-71787_M784'};

options.ImprType = 'MST';
options.SmoothMap = 0;
options.FeatureFix = 'off';
options.GaussMinMatch = 'on';
options.Angle = 1.0; % Viterbi with angle costs
options.alpha = 1.8; % LAST/ComposedLAST; scalar>1 or 'auto'
options.ProgressBar = 'on';
options.SamplePath = sample_path;
% options.cPLASTPath = cPLAST_path; % ComposedLAST
options.TextureCoords1Path = TextureCoords1_path;
options.TextureCoords2Path = TextureCoords2_path;
options.ChunkSize = 25; %% HDM
% options.NumLandmark = 16; %% HDM
options.MeshSuffix = '.off'; %% HDM
% options.ChunkSize = 55; %% PNAS
% options.NumLandmark = 16; %% PNAS
% options.MeshSuffix = '_sas.off'; %% PNAS
% options.ChunkSize = 20; %% Clement
% options.NumLandmark = 7; %% Clement
% options.MeshSuffix = '.off'; %% Clement

%%% options for ViewTeethMapS %%%
% options.LandmarksPath = [data_path 'landmarks_teeth.mat'];
options.MeshesPath = [data_path 'meshes/'];

%% Parse Parameters
touch(sample_path);
touch(obj_path);
command_text = [delete_command obj_path '*.obj'];
system(command_text);
disp(command_text);

Gs = cell(2,1);

taxa_code = load([data_path 'hdm_taxa_table.mat']);
% taxa_code = load([data_path 'teeth_taxa_table.mat']);
taxa_code = taxa_code.taxa_code;
TAXAind = cellfun(@(name) find(strcmpi(taxa_code,name)),Names,'UniformOutput',false);

%% Load All cPmaps and cPdists
disp('loading all cPdist...');
load(cPDist_path);
disp('loaded');

disp('loading all cPmaps...');
load(cPMaps_path); % load cell array "cPmapsMatrix"
disp('loaded');

%% Load Flattend Meshes
for j=1:2
    Gs{j} = load([sample_path taxa_code{TAXAind{j}} '.mat']);
    Gs{j} = Gs{j}.G;
end

%% Visualize Landmark Propagation for Original Maps
disp(['Original cP distance: ' num2str(cPDistMatrix(TAXAind{1},TAXAind{2}))]);

% [~,R,~] = MapToDist(Gs{1}.V,Gs{2}.V,cPMapsMatrix{TAXAind{1},TAXAind{2}},Gs{1}.Aux.VertArea);
% tGM = Mesh(Gs{1});
% tGM.V = R*Gs{1}.V;
% 
% ViewTeethMapS(tGM, Gs{2}, {cPMapsMatrix{TAXAind{1},TAXAind{2}},cPMapsMatrix{TAXAind{2},TAXAind{1}}}, options);
% set(gcf,'Name','cP');

%% Improve Maps
options.ShowTree = 'on';
simpNames = cellfun(@(x) strtok(x(end:-1:1),'_'), taxa_code, 'UniformOutput', false);
simpNames = cellfun(@(x) x(end:-1:1), simpNames, 'UniformOutput', false);
options.labels = simpNames;
rslt12 = Gs{1}.ImproveMap(Gs{2},cPDistMatrix,cPMapsMatrix,taxa_code,options);
options.ShowTree = 'off';
rslt21 = Gs{2}.ImproveMap(Gs{1},cPDistMatrix,cPMapsMatrix,taxa_code,options);

%% Visualize Landmark Propagation for Improved Maps
% [~,R,~] = MapToDist(Gs{1}.V,Gs{2}.V,rslt12.ImprMap,Gs{1}.Aux.VertArea);
% sGM = Mesh(Gs{1});
% sGM.V = R*Gs{1}.V;
% 
% ViewTeethMapS(sGM, Gs{2}, {rslt12.ImprMap,rslt21.ImprMap}, options);
% set(gcf,'Name',options.ImprType);

%% Print Maps to Texture Coordinates
obj_surf_1 = [obj_path '1.obj'];
obj_surf_2 = [obj_path '2.obj'];

if rslt12.ImprDist<rslt21.ImprDist
    options.Texture.Coordinates = rslt12.TextureCoords1/2+0.5;
    Gs{1}.Write(obj_surf_1,'obj',options);
    options.Texture.Coordinates = rslt12.TextureCoords2/2+0.5;
    Gs{2}.Write(obj_surf_2,'obj',options);
    
    disp(['Improve cP' options.ImprType ' distance: ' num2str(rslt12.ImprDist)]);
else
    options.Texture.Coordinates = rslt21.TextureCoords2/2+0.5;
    Gs{1}.Write(obj_surf_1,'obj',options);
    options.Texture.Coordinates = rslt21.TextureCoords1/2+0.5;
    Gs{2}.Write(obj_surf_2,'obj',options);
    
    disp(['Improve cP' options.ImprType ' distance: ' num2str(rslt21.ImprDist)]);
end

