%% Run this after Project2.m: purpose to clean up sub-sampled mesh

%% set option for deleting isolated vertices
options.display = 'on';
options.exclude_boundary = 1;


[F,Inds] = unique(sort(G.F',2),'rows','first');
if ~isempty(setdiff(1:G.nF,Inds))
    disp('contains duplicate faces!');
    V = G.V;
    F(setdiff(1:G.nF,Inds),:) = [];
    clear G;
    G = Mesh('VF',V,F');
end
dVInds = G.DeleteIsolatedVertex(options);
if ~isempty(dVInds);
    disp('contains non-boundary isolated vertex!');
end

