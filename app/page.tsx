
import { Inter } from '@next/font/google'
import Header from './components/Header';
import NavBar from './components/NavBar';
import RestaurantCard from './components/RestaurantCard';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  <Header />
    <div className="py-3 px-36 mt-10 flex flex-wrap">
    <RestaurantCard />
    </div>
    </>
  )
}
