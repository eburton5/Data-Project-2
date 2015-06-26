%%% the purpose of this script is to test the null hypothesis that the
%%% maximum distance between subsamples of the same tooth is not less than the
%%% minimum distance between subsamples of different teeth (i.e. the sample
%%% means are the same)

%% load in the distance matrices to be analyzed
load('cPDist_midedge.mat')
% load('v09Rslt.mat')
%%% prepare distance matrices for analysis
D1 = min(cPDist_midedge, cPDist_midedge'); %% normalize the distance matrix
D1 = D1-diag(diag(D1)); %% set diagonal values to zero to avoid artifacts
d1 = squareform(D1,'tovector'); %% extract the off-diagonal elements and put them in vector form

load('cPDist_Lemuridae_midedge.mat')
D2 = min(cPDist_Lemuridae_midedge, cPDist_Lemuridae_midedge');
D2 = D2-diag(diag(D2));
d2 = squareform(D2,'tovector');
%%% analyze
figure; hist([d1',d2'])%% visualize the results (data1 represents distances between submeshes from same tooth, data2 represents distances between submeshes from different teeth)
[h,p,ci,stats] = ttest2(d1,d2); %% test the null hypothesis that samples are from populations with same means; ci represents confidence interval; if h = 0 null hypothesis is not rejected, if h = 1 null hypothesis is rejected