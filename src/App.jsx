
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const bookmarksHandle = blog =>{
      const newBookmarks = [...bookmarks, blog]
      setBookmarks(newBookmarks)
  }

  const readingTimeHandle = time => {
    const newTime = readingTime + time;
    setReadingTime(newTime)
  }

  return (
    <div className='w-4/5 mx-auto'>
      <Header></Header>
      <div className='flex p-4 mx-4'>
      <Blogs readingTimeHandle={readingTimeHandle} bookmarksHandle={bookmarksHandle}></Blogs>
      <Bookmarks 
      bookmarks={bookmarks}
      readingTime={readingTime}
      ></Bookmarks>
      </div>
    </div>
  )
}

export default App
