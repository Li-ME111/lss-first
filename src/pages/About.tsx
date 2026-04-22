import React from 'react';
import ParticleBackground from '../components/ParticleBackground';

const About: React.FC = () => {
  return (
    <div className="about">
      <ParticleBackground />
      <h2 className="about-title">关于我</h2>
      <div className="about-content">
        <div className="about-text">
          <h3>我的故事</h3>
          <p>
            我是一名前端开发工程师，拥有多年的Web开发经验。我热爱创造具有视觉冲击力和良好用户体验的网站，
            专注于使用现代前端技术构建高质量的Web应用。
          </p>
          <p>
            我擅长使用React、TypeScript、CSS3等技术，并且对用户界面设计和交互体验有深入的研究。
            我相信技术的力量可以改变世界，因此我不断学习新技术，提升自己的技能水平。
          </p>
          <div className="about-skills">
            <h4>我的技能</h4>
            <div className="about-skills-list">
              <span className="about-skill">React</span>
              <span className="about-skill">TypeScript</span>
              <span className="about-skill">JavaScript</span>
              <span className="about-skill">CSS3</span>
              <span className="about-skill">HTML5</span>
              <span className="about-skill">Node.js</span>
              <span className="about-skill">Git</span>
              <span className="about-skill">Webpack</span>
              <span className="about-skill">Vite</span>
              <span className="about-skill">Responsive Design</span>
            </div>
          </div>
        </div>
        <div className="about-text">
          <h3>我的理念</h3>
          <p>
            我相信好的设计应该是美观与功能的完美结合。在开发过程中，我注重细节，追求卓越，
            努力创造出既美观又实用的Web应用。
          </p>
          <p>
            我认为技术是为了解决问题而存在的，因此我总是从用户的角度出发，
            思考如何通过技术手段为用户提供更好的体验。
          </p>
          <h3>联系我</h3>
          <p>
            如果你对我的作品感兴趣，或者有任何合作意向，欢迎随时联系我。
            我期待与你一起创造出更多优秀的作品。
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;