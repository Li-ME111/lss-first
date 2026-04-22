import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const projectDetails: Record<string, ProjectDetail> = {
    'plane-war': {
      id: 'plane-war',
      title: '飞机大战',
      subtitle: '经典射击游戏',
      description: '一款基于Canvas的飞机射击游戏，玩家控制飞机躲避敌人的攻击并摧毁敌方飞机。游戏具有流畅的动画效果、多种敌人类型和道具系统，提供了丰富的游戏体验。',
      features: [
        '流畅的游戏动画',
        '多种敌人类型',
        '道具系统',
        '分数排行榜',
        '响应式控制'
      ],
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=space%20invaders%20style%20plane%20shooting%20game%20with%20retro%20graphics&image_size=landscape_16_9'
    },
    'six-chess': {
      id: 'six-chess',
      title: '六子棋',
      subtitle: '传统棋类游戏',
      description: '六子棋是一种传统的策略棋类游戏，规则简单但变化丰富。本项目实现了六子棋的数字化版本，支持人机对战和多人对战模式，具有美观的界面和流畅的操作体验。',
      features: [
        '人机对战',
        '多人对战',
        '美观的棋盘设计',
        '游戏规则提示',
        '胜负判定系统'
      ],
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=board%20game%20six%20chess%20with%20black%20and%20white%20pieces%20on%20wooden%20board&image_size=landscape_16_9'
    },
    'particle-animation': {
      id: 'particle-animation',
      title: '粒子动画',
      subtitle: '视觉效果展示',
      description: '基于Canvas的粒子系统，能够创造出各种动态视觉效果。用户可以通过调整参数来改变粒子的数量、大小、颜色和运动轨迹，创造出独特的视觉体验。',
      features: [
        '可调节的粒子参数',
        '多种粒子运动模式',
        '颜色渐变效果',
        '响应式设计',
        '性能优化'
      ],
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20particle%20animation%20with%20colorful%20particles%20floating%20in%20space&image_size=landscape_16_9'
    },
    'we-media': {
      id: 'we-media',
      title: '自媒体',
      subtitle: '内容管理平台',
      description: '个人自媒体平台，用于展示文章、视频等内容。平台支持内容的发布、编辑和管理，具有美观的界面和良好的用户体验。',
      features: [
        '内容管理系统',
        '文章编辑器',
        '视频播放器',
        '响应式设计',
        '分类管理'
      ],
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20blog%20website%20with%20articles%20and%20videos%20display&image_size=landscape_16_9'
    },
    'video-editing': {
      id: 'video-editing',
      title: '剪辑',
      subtitle: '视频编辑工具',
      description: '视频剪辑工具，支持多种视频编辑功能，如裁剪、合并、添加特效等。工具具有直观的界面和流畅的操作体验，适合各种视频编辑需求。',
      features: [
        '视频裁剪',
        '视频合并',
        '特效添加',
        '音频编辑',
        '导出设置'
      ],
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=video%20editing%20software%20interface%20with%20timeline%20and%20preview%20window&image_size=landscape_16_9'
    },
    'programming': {
      id: 'programming',
      title: '编程',
      subtitle: '编程项目集合',
      description: '各种编程项目和工具的集合，展示了我的编程技能和解决方案。包括网站开发、工具脚本、算法实现等多种类型的项目。',
      features: [
        '网站开发',
        '工具脚本',
        '算法实现',
        'API开发',
        '数据库设计'
      ],
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=programming%20code%20on%20multiple%20screens%20with%20terminal%20windows&image_size=landscape_16_9'
    }
  };

  const project = projectDetails[id || ''];

  if (!project) {
    return (
      <div className="project-detail">
        <ParticleBackground />
        <div className="project-detail-header">
          <h1 className="project-detail-title">项目不存在</h1>
          <p className="project-detail-subtitle">请检查项目ID是否正确</p>
          <Link to="/" className="project-detail-cta">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <ParticleBackground />
      <div className="project-detail-header">
        <h1 className="project-detail-title">{project.title}</h1>
        <p className="project-detail-subtitle">{project.subtitle}</p>
      </div>
      <div className="project-detail-content">
        <img
          src={project.image}
          alt={project.title}
          className="project-detail-image"
        />
        <p className="project-detail-description">
          {project.description}
        </p>
        <div className="project-detail-features">
          <h3>主要功能</h3>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <Link to="/" className="project-detail-cta">
          返回首页
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;