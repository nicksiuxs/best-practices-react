
import './App.css';
import useWindowSize from './hooks/useWindowSize';


export default function App() {
  const windowSize = useWindowSize();

  return (
    <>
      <p>Current screen width: {windowSize.width}</p>
      <p>Current screen height: {windowSize.height}</p>
    </>
  )
}
