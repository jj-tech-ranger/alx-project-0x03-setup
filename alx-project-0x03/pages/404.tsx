import { useRouter } from 'next/router';
import Button from '../components/common/Button';

const Custom404: React.FC = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-600 text-white">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page not found.</p>
      <Button
        buttonLabel="Go Home"
        buttonSize="large"
        buttonBackgroundColor="blue"
        action={handleGoHome}
      />
    </div>
  );
};

export default Custom404;
