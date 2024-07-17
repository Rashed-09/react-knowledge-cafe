
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {

  return (
    <div className='w-4/5 mx-auto'>
      <Header></Header>
      <div className='flex p-4 mx-4'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
