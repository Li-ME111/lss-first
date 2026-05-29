import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const Admin = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching contacts:', error);
    } else {
      setContacts(data || []);
    }
    setLoading(false);
  };

  const deleteContact = async (id: string) => {
    const { error } = await supabase.from('contacts').delete().eq('id', id);
    if (error) {
      console.error('Error deleting contact:', error);
    } else {
      fetchContacts();
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '6rem 2rem 2rem', backgroundColor: '#0a0a0f' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '3rem', color: '#ffffff' }}>
          留言后台管理
        </h1>
        
        {loading ? (
          <div style={{ textAlign: 'center', padding: '6rem', color: '#a0a0b0' }}>
            加载中...
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(255,255,255,0.1)' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#ffffff' }}>姓名</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#ffffff' }}>邮箱</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#ffffff' }}>留言内容</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#ffffff' }}>创建时间</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#ffffff' }}>操作</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem', color: '#ffffff' }}>{contact.name}</td>
                  <td style={{ padding: '1rem', color: '#00d4ff' }}>{contact.email}</td>
                  <td style={{ padding: '1rem', color: '#a0a0b0' }}>{contact.message}</td>
                  <td style={{ padding: '1rem', color: '#a0a0b0' }}>{new Date(contact.created_at).toLocaleString('zh-CN')}</td>
                  <td style={{ padding: '1rem' }}>
                    <button 
                      onClick={() => deleteContact(contact.id)}
                      style={{ padding: '0.5rem 1rem', backgroundColor: '#ff4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      删除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Admin;