import { useRouter } from 'next/router';
import Layout from '../components/layouts/Layout';
import Button from '../components/common/Button';

const Home: React.FC = () => {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push('/about');
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Shopify</h1>
        <p className="text-lg mb-6">Your one-stop solution for all your needs.</p>
        <Button
          buttonLabel="Explore Now"
          buttonSize="large"
          buttonBackgroundColor="green"
          action={handleExploreClick}
        />
      </div>
    </Layout>
  );
};

export default Home;
