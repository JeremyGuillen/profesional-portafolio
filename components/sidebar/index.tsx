import React from 'react';
import { Layout, SiderProps, Menu } from 'antd';
import { MenuProps } from 'rc-menu';

const { Sider } = Layout;
const menuItems = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'About',
    key: 'about',
  },
  {
    label: 'Services',
    key: 'services',
  },
  {
    label: 'Projects',
    key: 'projects',
  },
  {
    label: 'Contact',
    key: 'contact',
  },
];

interface Props extends SiderProps {
  onClickElement: (key: string) => void;
  onBreak: (broken: boolean) => void;
}
export const Sidebar: React.FC<Props> = ({ collapsed, onClickElement, onBreak }) => {
  const onMenuClick: MenuProps['onClick'] = (e) => {
    onClickElement(e.key);
  };

  return (
    <Sider
      breakpoint="md"
      onBreakpoint={onBreak}
      collapsedWidth={0}
      reverseArrow={true}
      defaultCollapsed={true}
      collapsed={collapsed}
      width={200}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
      }}
      theme="light"
    >
      <Menu mode="inline" items={menuItems} style={{ borderColor: '#0871E0' }} onClick={onMenuClick} />
    </Sider>
  );
};
