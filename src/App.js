import Navbar from '@/components/Navbar'
import BookList from '@/components/BookList'
import ThemeToggle from '@/components/ThemeToggle.js'
import ThemeContextProvider from '@/context/ThemeContext';
import AuthContextProvider from '@/context/AuthContext';



function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle></ThemeToggle>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
