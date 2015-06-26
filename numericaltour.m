%% preparation
clear vars;
path(pathdef); %add new toolboxes to path
addpath(path,genpath([pwd '/toolbox_signal']));
addpath(path,genpath([pwd '/toolbox_general']));
addpath(path,genpath([pwd '/toolbox_graph']));

%% navigating on the grid
n = 40; %size of grid
neigh = [[1;0] [-1;0] [0;1] [0;-1]]; %four displacement vectors to go to the four neighbors
boundary = @(x)mod(x-1,n)+1; %set up periodic boundary conditions
ind2sub1 = @(k)[rem(k-1, n)+1; (k-rem(k-1,n)-1)/n+1]; %k is the grid index
sub2ind1 = @(u)(u(2)-1)*n+u(1);
Neigh = @(k,i)sub2ind1( boundary(ind2sub1(k) + neigh(:,i)) );  %Neigh(k,i) gives the corresponding grid neighboring index

%% Dijkstra Algorithm
% compute the geodesic distance on a graph
% nodes of graph are pixels, and edges of graph define the usual
% 4-connectity relationship
% i~j indicates j is a neighbor of i on graph defined by discrete grid

W = ones(n); 
x0 = [n/2;n/2]; % S = {x0} of initial points
I = sub2ind1(x0); % initialize the stack of available indeces
% initialize the distance to pos infinity, except for the boundary conditions
D = zeros(n)+Inf; 
D(I) = 0;
% initialize the state to 0 (unexplored),except for the boundary point 
S = zeros(n);
S(I) = 1;
% pop from the stack the element i with the smallest current distance Di
[tmp,j] = sort(D(I)); j = j(1);
i = I(j); I(j) = [];
S(i) = -1; % update state (S) of i to be dead
J = [Neigh(i,1); Neigh(i,2); Neigh(i,3); Neigh(i,4)]; % retreive the list of four neighbors
J(S(J)==-1) = []; % remove those that are dead
% add those that are not yet considered (state 0) to the front stack I
J1 = J(S(J)==0);
I = [I; J1];
S(J1) = 1;
i = I(j); I(j) = [];
% update neighbor values for each neighbor j of i, assuming the length of
% the edge between j and k is Wj
for j = J'
    dx = min( D([Neigh(j,1) Neigh(j,2)]) );
    dy = min( D([Neigh(j,3) Neigh(j,4)]) );
    D(j) = min(dx+W(j), dy+W(j));
end
%Display the geodesic distance map using a cosine modulation to make the
%level set appear more clearly
displ = @(D)cos(2*pi*5*D/max(D(:)));
clf;
imageplot(displ(D));
colormap jet(256);
%% Fast Marching
D(j) = min(dx+W(j), dy+W(j)); %replacement of graph update by eikonal update
Delta = 2*W(j) - (dx-dy)^2;
if Delta>=0
    D(j) = (dx+dy+sqrt(Delta))/2;
else
    D(j) = min(dx+W(j), dy+W(j));
end
%Display geodesic distance map using cosine modulation
clf;
imageplot(displ(D));
colormap jet(256);

%% Voronoi Segmentation
n = 256; % size of image
sigma = n/8; % width of bumps
x = n/4; y = n/4;
[Y,X] = meshgrid(1:n,1:n);
M = exp(-((X-x).^2 + (Y-y).^2)/(2*sigma^2));
x = 3*n/4; y = 3*n/4;
M = M + exp(-((X-x).^2 + (Y-y).^2)/(2*sigma^2));
% compute a metric by rescaling M
W = rescale(M,1e-2,1);
% create random starting points
m = 20;
pstart = floor(rand(2,m)*(n-1)) +1;
% Perform the propagation using Fast Marching
[D,Z,Q] = perform_fast_marching(1./W, pstart);
% Display the distance map
clf;
subplot(1,2,1);
hold on;
imageplot(perform_hist_eq(D,'linear')); title('Geodesic distance');
plot(pstart(2,:),pstart(1,:),'r.');
subplot(1,2,2);
hold on;
imageplot(Q);title('Voronoi');
plot(pstart(2,:),pstart(1,:),'r.');
colormap jet(256);

%% Geodesic Delaunay Triangulation
%%% link starting points whose voronoi cells touch


%% Farthest Point Sampling
% Construct a metric that is large in area
W = rescale(M,3*1e-1,1);
% Choose initial point
vertex = [1;1];
% Compute geodesic distance
[D,Z,Q] = perform_fast_marching(1./W, vertex);
% Choose the second point as the farthest point
[tmp,i] = max(D(:));
[x,y] = ind2sub([n n],i);
vertex(:,end+1) = [x;y];
% Display distance and points
clf;
subplot(1,2,1);
hold on;
imageplot(W, 'Metric'); axis ij;
plot(vertex(2,1), vertex(1,1), 'r.');
plot(vertex(2,2), vertex(1,2), 'b.');
subplot(1,2,2);
hold on;
imageplot(perform_hist_eq(D,'linear'),'Distance');
plot(vertex(2,1), vertex(1,1), 'r.');
plot(vertex(2,2), vertex(1,2), 'b.');
colormap jet(256);
% Update the value of the distance map with a partial propagation from the
% last added point
options.constraint_map = D;
[D1,Z,Q] = perform_fast_marching(1./W,vertex(:,end),options);
% display old/new
clf;
imageplot(convert_distance_color(D,M,1), 'Update distance', 1,3,1);
imageplot(convert_distance_color(D1,M,1), 'Update distance', 1,3,2);
imageplot(convert_distance_color(min(D,D1),M,1), 'New distance', 1,3,3);
% update
D = min(D,D1);

%% 3D mesh Farthes Point Sampling
% Load a 3D mesh
clear options;
name = 'bunny';
[vertex,faces] = read_mesh(name);
n = size(vertex,2);
options.name = name;
% Display mesh
clf;
plot_mesh(vertex,faces,options);
% Pick a first point
landmarks = [100];
% Compute geodesic distance to this point
[D,Z,Q] = perform_fast_marching_mesh(vertex, faces, landmarks);
% Display geodesic distance to the point
clf; hold on;
options.face_vertex_color = mod(20*D/max(D),1);
plot_mesh(vertex,faces,options);
colormap jet(256);
h = plot3(vertex(1,landmarks), vertex(2,landmarks), vertex(3,landmarks));
set(h,'Markersize',20);
% Select the farthest point as the next sampling point
[tmp, landmarks(end+1)] = max(D);
% Update distance map using a local propagation
options.constraint_map = D;
[D1,Z,Q] = perform_fast_marching_mesh(vertex, faces, landmarks, options);
D = min(D,D1);
% Display updated distance map
clf; hold on;
option.face_vertex_color = mod(20*D/max(D),1);
plot_mesh(vertex,faces,options);
colormap jet(256);
h = plot3(vertex(1,landmarks), vertex(2,landmarks), vertex(3,landmarks),'r.');
set(h,'Markersize',20);