
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Careers = () => {
  const navigate = useNavigate();
  
  // Redirect to contact page
  useEffect(() => {
    navigate('/contact', { replace: true });
  }, [navigate]);
  
  return null; // This component will not render as it redirects
};

export default Careers;
