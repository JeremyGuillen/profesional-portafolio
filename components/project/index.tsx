import { Button } from 'antd';
import React from 'react';
import { Project } from '../../types/types';

interface ProjectImageProps {
  project: Project;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ project: { name, img, description, repository } }) => {
  const openLink = () => {
    window.open(repository, '_blank');
  };

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="relative project-container shadow-lg">
        <img src={img} className="project-image" />
        <div className="project-overlay">
          <h3 className="text-white text-center text-lg">{name}</h3>
          <p className="text-white text-center">{description}</p>
          <div className="mt-auto">
            <Button shape="round" type="primary" onClick={openLink}>
              Míralo en github
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
