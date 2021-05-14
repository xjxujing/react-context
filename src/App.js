import Navbar from '@/components/Navbar'
import BookList from '@/components/BookList'
import ThemeContextProvider from '@/context/ThemeContext';
import ThemeToggle from '@/context/ThemeToggle.js'


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle></ThemeToggle>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
