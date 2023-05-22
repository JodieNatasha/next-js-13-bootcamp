import Link from "next/link";

export default function RestaurantNarBar() {
    return (
        <nav className="flex text-reg border-b pb-2">
        <Link href="/restaurant/wolfox" className="mr-7">Overview</Link>
        <Link href="/restaurant/wolfox/menu" className="mr-7">Menu</Link>
      </nav>
    )
}