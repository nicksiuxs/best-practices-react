import UserProfile from './components/UserProfile';
import useWindowSize from './hooks/useWindowSize';

export default function App() {
  const windowSize = useWindowSize();

  return (
    <>
      <UserProfile />
      <p>Current screen width: {windowSize.width}</p>
      <p>Current screen height: {windowSize.height}</p>
    </>
  )
}
