%% run this script from cPdist-master folder
path(pathdef); %clear all previously loaded paths
path(path, genpath('./utils')); %generate path to utils folder

load('./samples/PNAS/Q02.mat'); %will load specified mesh as variable G

%%% example of a trivial function
f1 = ones(G.nV,1); 
G.ViewFunctionOnMesh(f1, []); %first argument is function (representative of color), treat second argument as place holder for now
%see how value affects color of model
f2 = f1;
f2(1:100) = -1; 
G.ViewFunctionOnMesh(f2, []);

close all
%G.ViewFunctionOnMesh(G.Aux.VertArea',struct('mode','native')); %in this case the red signifies larger area and blue signifies smaller area
%G.ViewFunctionOnMesh(G.Aux.Conf,struct('mode','native'));
%localMaxInds = G.FindLocalMax(G.Aux.Conf,5,1); %5 means want local max larger than 5 closest neighbors, 1 tells to exclude boundary points (0 would include boundary)
%hold on
%scatter3(G.V(1,localMaxInds),G.V(2,localMaxInds),G.V(3,localMaxInds),...
%    20,'k','filled'); %specify scale and color of points

[Umin, Umax, Cmin, Cmax, Cmean, Cgauss, Normal] = G.ComputeCurvature();
G.ViewFunctionOnMesh(Cgauss,[]); %Gaussian curvature is very positive where there is a peak and very negative where there is a saddle
%G.ViewFunctionOnMesh(Cmean,[]);

localMaxInds = G.FindLocalMax(G.Aux.Conf,5,1); %5 means want local max larger than 5 closest neighbors, 1 tells to exclude boundary points (0 would include boundary)
hold on
scatter3(G.V(1,localMaxInds),G.V(2,localMaxInds),G.V(3,localMaxInds),...
    20,'r','filled'); %specify scale and color of points


%G.draw();
%hold on
%quiver3(G.V(1,:),G.V(2,:),G.V(3,:),Normal(1,:),Normal(2,:),Normal(3,:));

%H = Mesh('VF',G.V+0.1*Normal,G.F); %'VF' specifies we're creating a new mesh with different vertices and faces, then new vertex, then new face
%H.draw();
%H.ViewFunctionOnMesh(Cgauss,struct('mode','native'));
%hold on
%[Umin, Umax, Cmin, Cmax, Cmean, Cgauss, Normal] = H.ComputeCurvature();
%quiver3(H.V(1,:),H.V(2,:),H.V(3,:),Normal(1,:),Normal(2,:),Normal(3,:));