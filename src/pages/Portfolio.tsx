import React from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'plane-war',
      title: '飞机大战',
      description: '一款经典的飞机射击游戏，具有流畅的动画效果和丰富的游戏玩法',
      icon: '✈️'
    },
    {
      id: 'six-chess',
      title: '六子棋',
      description: '传统六子棋游戏的数字化实现，支持人机对战和多人对战',
      icon: '♟️'
    },
    {
      id: 'particle-animation',
      title: '粒子动画',
      description: '基于Canvas的粒子系统，创造出各种动态视觉效果',
      icon: '✨'
    },
    {
      id: 'we-media',
      title: '自媒体',
      description: '个人自媒体平台，展示文章、视频等内容',
      icon: '📱'
    },
    {
      id: 'video-editing',
      title: '剪辑',
      description: '视频剪辑工具，支持多种视频编辑功能',
      icon: '🎬'
    },
    {
      id: 'programming',
      title: '编程',
      description: '各种编程项目和工具，展示编程技能和解决方案',
      icon: '💻'
    }
  ];

  return (
    <div id="portfolio" className="portfolio">
      <h2 className="portfolio-title">我的作品集</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <div className="portfolio-card-image">
              {project.icon}
            </div>
            <div className="portfolio-card-content">
              <h3 className="portfolio-card-title">{project.title}</h3>
              <p className="portfolio-card-description">{project.description}</p>
              <Link to={`/project/${project.id}`} className="portfolio-card-link">
                查看详情
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;