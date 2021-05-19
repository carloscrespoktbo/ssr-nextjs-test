import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

export const getServerSideProps = async ({ params }) => {
   
    const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    const data = await response.json()

    return {
        props: {data},
    }
}

const Details = ({data}) => {

    return (
        <div className={styles.container}>
             <Head>
                <title>{data.name}</title>
                <meta name="description" content="" />
                <link rel="icon" href={data.sprites.front_default} />
                <meta property="og:title" content={data.name} />
                <meta property="og:description" content={data.name} />
                <meta property="og:image" content={data.sprites.front_default} />
            </Head>
            <main className={styles.main}>
                <img src={data.sprites.front_default} alt={''} />
                <h1 className={styles.title}>
                    {data.name}
                </h1>

            </main>
        </div>
    )
}

export default Details

