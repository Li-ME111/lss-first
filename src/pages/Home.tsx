import React, { useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { supabase } from '../lib/supabase';

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      alert('请填写完整信息！');
      return;
    }

    console.log('准备提交的数据:', { name, email, message });

    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          message
        }
      ])
      .select();

    if (error) {
      console.error('提交错误详情:', error);
      alert(`提交失败: ${error.message}\n详情请查看控制台`);
    } else {
      console.log('提交成功，返回数据:', data);
      alert('提交成功！');
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="home">
      <ParticleBackground />

      <div className="home-content fade-in">
        <h1 className="home-title">
          开发者 <span>作品集</span>
        </h1>

        <p className="home-subtitle">
          创新技术 · 创意设计 · 专业开发
        </p>

        <p className="home-description">
          我是一名专注于前端开发的工程师，热爱创造具有视觉冲击力和良好用户体验的网站。
          以下是我的精选项目，展示了我的技术能力和创意理念。
        </p>

        <div className="home-actions">
          <a href="#portfolio" className="home-cta">
            查看作品集
          </a>
          <button 
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })} 
            className="home-cta contact-btn"
          >
            联系我
          </button>
        </div>
      </div>

      {/* 留言板区域 */}
      <div id="contact-section" className="contact-section">
        <h2 className="contact-title">📮 留言板</h2>
        
        <div className="contact-form">
          <div className="form-row">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="您的姓名"
              className="form-input"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="您的邮箱"
              className="form-input"
            />
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="请输入您的留言内容"
            rows={4}
            className="form-textarea"
          />

          <button onClick={handleSubmit} className="submit-btn">
            ✅ 提交留言
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
