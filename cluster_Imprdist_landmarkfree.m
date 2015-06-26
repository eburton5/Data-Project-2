%%% preparation
clearvars;
close all;
path(pathdef);
addpath(path,genpath([pwd '/utils/']));

%%% pick ImprType and FeatureFix
ImprType = 'MST'; % if 'Viterbi', should also specify "ViterbiAngle"!
FeatureFix = 'off'; %% remain 'off', since 'on' can be run with cluster_FeatureFix.m

%%% setup paths
base_path = [pwd '/'];
data_path = '../DATA/HDM/';
rslts_path = [base_path 'rslts/'];
cluster_path = [base_path 'cluster/'];
samples_path = [base_path 'samples/HDM/'];
meshes_path = [data_path 'meshes/'];
result_path = '/gtmp/trgao10/ArchivedResults/HDM/';
% landmarks_path = [data_path 'landmarks_clement.mat'];
TaxaCode_path = [data_path 'hdm_taxa_table.mat'];
cPMaps_path = [result_path 'cPdist/cPMapsMatrix.mat'];
cPDist_path = [result_path 'cPdist/cPDistMatrix.mat'];
TextureCoords1_path = [result_path 'cPdist/TextureCoords1/'];
TextureCoords2_path = [result_path 'cPdist/TextureCoords2/'];
% TextureCoords1_path = [pwd '/results/HDM/cPDist/TextureCoords1/'];
% TextureCoords2_path = [pwd '/results/HDM/cPDist/TextureCoords2/'];
cPLASTPath = [pwd '/results/Clement/cPDist/cPComposedLASTGraph_alpha1.mat'];

scripts_path = [cluster_path 'scripts/'];
errors_path = [cluster_path 'errors/'];
outputs_path = [cluster_path 'outputs/'];

%%% build folders if they don't exist
touch(scripts_path);
touch(errors_path);
touch(outputs_path);
touch(rslts_path);

%%% clean up paths
command_text = ['!rm -f ' scripts_path '*']; eval(command_text); disp(command_text);
command_text = ['!rm -f ' errors_path '*']; eval(command_text); disp(command_text);
command_text = ['!rm -f ' outputs_path '*']; eval(command_text); disp(command_text);
command_text = ['!rm -f ' rslts_path '*']; eval(command_text); disp(command_text);

%%% load taxa codes
taxa_code = load(TaxaCode_path);
taxa_code = taxa_code.taxa_code;
GroupSize = length(taxa_code);
% chunk_size = 55; %% PNAS
% NumLandmarks = 16; %% PNAS
% chunk_size = 20; %% Clement
% NumLandmark = 7; %% Clement
chunk_size = 25; %% HDM

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
disp('++++++++++++++++++++++++++++++++++++++++++++++++++');
disp(['Submitting jobs for comparing sample files in' samples_path '...' ]);

cnt = 0;
job_id = 0;
for k1=1:GroupSize
    for k2=1:GroupSize
        if mod(cnt,chunk_size)==0
            if job_id>0 %%% not the first time
                %%% close the script file (except the last one, see below)
                fprintf(fid, '%s ', 'exit; "\n');
                fclose(fid);
                
                %%% qsub
                jobname = ['TCjob_' num2str(job_id)];
                serr = [errors_path 'e_job_' num2str(job_id)];
                sout = [outputs_path 'o_job_' num2str(job_id)];
                tosub = ['!qsub -N ' jobname ' -o ' sout ' -e ' serr ' ' ...
                         script_name ];
                eval(tosub);
            end
            
            job_id = job_id+1;
            script_name = [scripts_path 'script_' num2str(job_id)];
            
            %%% open the next (first?) script file
            fid = fopen(script_name,'w');
            fprintf(fid, '#!/bin/bash\n');
            fprintf(fid, '#$ -S /bin/bash\n');
            script_text = ['matlab -nodesktop -nodisplay -nojvm -nosplash -r '...
                '" cd ' base_path '; ' ...
                'path(genpath(''' base_path 'utils/''), path); ' ...
                'load(''' cPDist_path ''');' ...
                'load(''' cPMaps_path ''');' ...
                'options.TextureCoords1Path = ''' TextureCoords1_path ''';' ...
                'options.TextureCoords2Path = ''' TextureCoords2_path ''';' ...
                'taxa_code = load(''' TaxaCode_path ''');' ...
                'options.TaxaCode = taxa_code.taxa_code;' ...
                'options.ChunkSize = ' num2str(chunk_size) ';' ...
                'options.cPLASTPath = ''' cPLASTPath ''';'];
            fprintf(fid, '%s ',script_text);
            
            %%% create new matrix
            if ~exist([rslts_path 'rslt_mat_' num2str(job_id) '.mat'],'file')
                Imprrslt = cell(GroupSize,GroupSize);
                save([rslts_path 'rslt_mat_' num2str(job_id)], 'Imprrslt');
            end
        end
        filename1 = [samples_path taxa_code{k1} '.mat'];
        filename2 = [samples_path taxa_code{k2} '.mat'];
        
        script_text = [' Imprdist_landmarkfree_ongrid(''' ...
            filename1 ''', ''' ...
            filename2  ''', ''' ...
            [rslts_path 'rslt_mat_' num2str(job_id)] ''', ' ...
            num2str(k1) ', ' ...
            num2str(k2) ', ''' ...
            ImprType ''', ''' ...
            FeatureFix ''', ' ...
            'cPDistMatrix, cPMapsMatrix, options);'];
        fprintf(fid, '%s ',script_text);
        
        cnt = cnt+1;
    end
    
end

% if mod(cnt,chunk_size)~=0
%%% close the last script file
fprintf(fid, '%s ', 'exit; "\n');
fclose(fid);
%%% qsub last script file
jobname = ['TCjob_' num2str(job_id)];
serr = [errors_path 'e_job_' num2str(job_id)];
sout = [outputs_path 'o_job_' num2str(job_id)];
tosub = ['!qsub -N ' jobname ' -o ' sout ' -e ' serr ' ' script_name ];
eval(tosub);
% end

