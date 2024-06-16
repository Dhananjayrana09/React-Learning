import { useContext, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Blog } from './components/Blog';
import { Pagination } from './components/Pagination';
import { AppContext } from './context/AppContext';

function App() {
  const [count, setCount] = useState(0);

  const {fetchBlogPosts} = useContext(AppContext)

  useEffect(() => {
    fetchBlogPosts()
  }, []);

  return (
    <>
      <Header />
      <Blog />
      <Pagination />
    </>
  );
}

export default App;
