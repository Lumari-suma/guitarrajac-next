import Image from "next/future/image";
import Layout from "../components/layouts";
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre nosotros, GuitarraJAC, Tienda de música">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
            <div>
                <p>
                Vestibulum tortor dolor, bibendum ut fringilla lobortis, rhoncus at sem. Integer maximus semper blandit. Integer fringilla enim scelerisque arcu facilisis condimentum. Nulla blandit ligula in lorem lacinia, ac dictum dui porttitor. Pellentesque nunc tellus, semper eu vulputate ac, porta nec nunc.
                </p>
                <p>
                Integer faucibus accumsan justo, ut suscipit risus bibendum pretium. Etiam vestibulum fringilla sem quis venenatis. Aenean viverra lacinia aliquam. Sed tempus porta libero, id interdum ipsum commodo in. Nam ut felis dapibus, suscipit ex vel, tristique ante. Nullam molestie, quam ac suscipit ullamcorper, lorem eros accumsan nulla, et ullamcorper nisl ex non metus.
                </p>
            </div>
        </div>
      </main>
    </Layout>
  );
}
