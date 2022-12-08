import React, { ReactNode } from 'react';
import { Card, List, Button } from 'antd';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import css from './service-card.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  iconSrc: ReactNode;
  tools: string[];
  onContactClick: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, iconSrc, tools, onContactClick }) => {
  return (
    <motion.div style={{ height: '100%', width: '100%' }}>
      <Card style={{ width: '100%', borderRadius: 10, maxWidth: '400px', height: '100%' }} bodyStyle={{ height: '100%' }}>
        <div className="flex flex-col h-full">
          <div className="flex justify-center">
            <div className={classNames(css.hexagon, 'flex', 'justify-center', 'items-center')}>
              <span className="text-3xl text-white">{iconSrc}</span>
            </div>
          </div>
          <h3 className="pt-3 text-center text-secondary font-medium text-lg">{title}</h3>
          <p className="text-center mb-7 text-base">{description}</p>
          <h5 className="text-secondary text-center mb-2">Herramientas</h5>
          <List
            dataSource={tools}
            className="h-32 mb-4"
            renderItem={(tool) => (
              <p className="text-center mb-1 text-base" key={tool}>
                {tool}
              </p>
            )}
          />
          <div className="text-center mt-auto">
            <Button type="primary" shape="round" style={{ backgroundColor: '#4EADFE', borderColor: '#4EADFE' }} onClick={onContactClick}>
              Contactame
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
