
import { useMediaQuery } from 'react-responsive';

const Logo = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  if (isMobile) {
    return null;
  }
  return (
    <div className={`text-1xl font-bold text-blue-500 p-4 bg-gray-100 rounded-lg shadow-md ${isMobile ? 'text-sm' : 'md:text-1xl lg:text-2xl'}`}>
      ✍️ your ❤️ out
    </div>
  );
}
export default Logo;
