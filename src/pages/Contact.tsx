import React, { useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { supabase } from '../lib/supabase';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      alert('请填写完整信息');
      return;
    }

    setSubmitting(true);
    const { error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          message
        }
      ]);

    setSubmitting(false);

    if (error) {
      console.error(error);
      alert('提交失败：' + error.message);
    } else {
      alert('提交成功！感谢您的留言');
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="contact-page">
      <ParticleBackground />
      <div className="contact-content">
        <h2 className="contact-title">联系我</h2>
        <p className="contact-subtitle">欢迎与我交流，一起学习进步</p>

        <div className="contact-form">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="姓名"
            className="contact-input"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="邮箱"
            className="contact-input"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="留言内容"
            rows={5}
            className="contact-textarea"
          />

          <button onClick={handleSubmit} className="contact-button" disabled={submitting}>
            {submitting ? '提交中...' : '提交留言'}
          </button>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <span>18994784826</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span>1561303412@qq.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💬</span>
            <span>Lxxxx11103</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
