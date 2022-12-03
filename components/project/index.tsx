import React from 'react';

interface ProjectImageProps {
  name: string;
  img: string;
  description: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = () => {
  return <div>Project image works</div>;
};
