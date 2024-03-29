import Link from "next/link";
import NavBar from "../../../components/NavBar";
import Header from "../components/Header";
import Menu from "../components/Menu";
import RestaurantNarBar from "../components/RestaurantNavBar";

export default function RestaurantMenu() {
    return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
    <RestaurantNarBar />
    <Menu />
      </div>
    </>
    )
}