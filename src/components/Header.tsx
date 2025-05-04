import logotipo from "@/../public/images/logotipo.png";
import Image from "next/image";

export default function Header() {
    return (
        <header className="h-[100px]">
            <div className="w-[1280px] mx-auto h-full flex items-center justify-between">
                <Image src={logotipo} alt="Logotipo" width={200} height={100} />

                <nav>
                    <ul className="flex gap-8">
                        <li className="text-gray-400 hover:text-gray-500 transition-colors duration-300">
                            <a href="#">Início</a>
                        </li>
                        <li className="text-gray-400 hover:text-gray-500 transition-colors duration-300">
                            <a href="#">Como funciona?</a>
                        </li>
                        <li className="text-gray-400 hover:text-gray-500 transition-colors duration-300">
                            <a href="#">Preço</a>
                        </li>
                        <li className="text-gray-400 hover:text-gray-500 transition-colors duration-300">
                            <a href="#">F.A.Q</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}