%% search a mesh for duplicate faces
%sort faces first by row 1, then by row 2, and finally by row 3
newface = Lem{9}.F';
newface = sortrows(newface,[1,2,3])';


%find indeces of columns that are the same
j = 1;
for i = 1:(length(newface)-1)
    if newface(:,i)==newface(:,i+1)
         indeces{j} = i;
         j = j+1;
    end
end