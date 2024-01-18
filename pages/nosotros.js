import Link from "next/link"
import Layout from "../components/layouts"

export default function Nosotros(){
    return(
        <Layout title={"Nosotros"} description="Sobre nosotros, GuitarraJAC, Tienda de música">
            <Link href="/">Ir a Inicio</Link>
        </Layout>

    )
}