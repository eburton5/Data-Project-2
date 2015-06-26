function min_path = FindGraphShortestPath(ST,TAXAind1,TAXAind2,TaxaCode,options)
%FINDGRAPHSHORTESTPATH Summary of this function goes here
%   Detailed explanation goes here

if nargin<5
    options = [];
end
labels = getoptions(options,'labels',TaxaCode);

ShowTree = getoptions(options,'ShowTree','off');

[~,min_path,~] = graphshortestpath(ST,TAXAind1,TAXAind2,'directed',false);

disp('Optimal Path: ');
disp(TaxaCode(min_path));
%%code below shows how to graph with colors
if strcmpi(ShowTree,'on')
    h = view(biograph(ST, labels, 'ShowArrows', 'off', 'ShowWeights', 'on'));
    set(h.Nodes(min_path),'Color',[1 0.4 0.4])
    fowEdges = getedgesbynodeid(h,get(h.Nodes(min_path),'ID'));
    revEdges = getedgesbynodeid(h,get(h.Nodes(fliplr(min_path)),'ID'));
    edges = [fowEdges;revEdges];
    set(edges,'LineColor',[1 0 0])
    set(edges,'LineWidth',1.5)
end

end

