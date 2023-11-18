import { useNavigate } from 'react-router-dom';

const useCustomNavigator = (direct_url) => {
  const nav = useNavigate();
  return nav(direct_url);
};

export default useCustomNavigator;
