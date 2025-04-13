import Counter from "./counter";
import Link from "next/link";

export default function Header() {
    return(
        <header className="p-4 border rounded-md border-yellow-300"> 
            <ul className="flex space-x-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/about/projects">Projects</Link></li>
            </ul>
            <Counter></Counter>
        </header>
    )
}
