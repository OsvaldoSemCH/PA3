import Link from "next/link";
import { Routes } from "@/constants/routes";

export default function Header()
{
    return(
        <div className="flex flex-wrap justify-center items-center gap-4 bg-cblue">
            <Link className="bg-cy3 text-white text-lg p-2 m-2 rounded-lg" href={Routes.Home}>Página Inicial</Link>
            <Link className="bg-cy3 text-white text-lg p-2 m-2 rounded-lg" href={Routes.IMC}>Cálculo IMC</Link>
            <Link className="bg-cy3 text-white text-lg p-2 m-2 rounded-lg" href={Routes.Media}>Média Escolar</Link>
        </div>
    )
}