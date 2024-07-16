
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='flex p-4 mx-4'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
