import { RiLoader4Line } from 'react-icons/ri';

const LoadingPage = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <RiLoader4Line className="text-6xl animate-spin text-blue-500" />
        <p className="text-gray-600 mt-4 text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
