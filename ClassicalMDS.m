%%% compute X containing coordinate vectors of corresponding to teeth 
%%% continuous procrustes distance matrix is known
%%preparation
%clear vars;

%% load distance matrix
load('cPDistMatrix.mat');
% square all entries in matrix
Ds = cPDistMatrix.^2;
% determine K, which is equal to XTX = <xi,xj>
K = -0.5*(Ds - repmat(mean(Ds),length(Ds),1) - repmat(mean(Ds,2),1,length(Ds)) + mean(Ds(:))*ones(length(Ds)));
% conduct eigen decomposition
[U,S] = eig(K);
% determine new dimension of data (excluding eigen values = 0)
P = sum(diag(S) > 0);
% determine coordinate matrix X
X = sqrt(S(1:P,1:P)) * U(1:P,1:P);
% plot 2 or 3 dimensions selecting for columns of X
%close all;
figure;
c = linspace(1,10,length(X));
scatter(X(:,1),X(:,2),[],c,'filled');
% hold on; scatter(X(:,1),X(:,3),[],c,'*');
% scatter(X(:,45),X(:,63),[],c,'o');

% plot all possible combinations using for loop