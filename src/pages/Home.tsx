import React from 'react';
import ParticleBackground from '../components/ParticleBackground';

const Home: React.FC = () => {
  return (
    <div className="home">
      <ParticleBackground />
      <div className="home-content fade-in">
        <h1 className="home-title">
          开发者 <span>作品集</span>
        </h1>
        <p className="home-subtitle">创新技术 · 创意设计 · 专业开发</p>
        <p className="home-description">
          我是一名专注于前端开发的工程师，热爱创造具有视觉冲击力和良好用户体验的网站。
          以下是我的精选项目，展示了我的技术能力和创意理念。
        </p>
        <a href="#portfolio" className="home-cta">
          查看作品集
        </a>
      </div>
    </div>
  );
};

export default Home;