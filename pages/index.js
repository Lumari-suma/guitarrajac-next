import Link from "next/link"
import Layout from "../components/layouts"

export default function Home(){
  return(
    <>
    <Layout title={'Inicio'} description={"Blog de música, venta de guitarras, y más"}>
      <h1>Hola Mundo con Next</h1>
      <Link href="/nosotros">Nosotros</Link>
    </Layout>        
    </>    
  )
}
