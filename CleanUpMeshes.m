%% Preparation
clear vars;
close all;
path(pathdef);
addpath(path,genpath([pwd '/utils/']));

%% set path
% meshesPath = '/media/trgao10/Work/MATLAB/DATA/PNAS/meshes/';
meshesPath = '../DATA/Clement/meshes/new/';

%% read all meshes from meshesPath
meshFiles = dir(meshesPath);
meshFiles(1:2) = [];

%% set option for deleting isolated vertices
options.display = 'on';
options.exclude_boundary = 1;

for j=1:length(meshFiles)
    progressbar(j,length(meshFiles),20);
    G2 = Mesh('off',[meshesPath meshFiles(j).name]);
    [F,Inds] = unique(sort(G2.F',2),'rows','first');
    if ~isempty(setdiff(1:G2.nF,Inds))
        disp([meshFiles(j).name ' contains duplicate faces!']);
        V = G2.V;
        F(setdiff(1:G2.nF,Inds),:) = [];
        clear G2;
        G2 = Mesh('VF',V,F');
    end
    dVInds = G2.DeleteIsolatedVertex(options);
    if ~isempty(dVInds);
        disp([meshFiles(j).name ' contains non-boundary isolated vertex!']);
    end
%     G.Write([meshesPath meshFiles(j).name],'off',[]);
    clear G;
end

