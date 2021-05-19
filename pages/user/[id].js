import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

export const getServerSideProps = async ({ params }) => {
   
    const response =  await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await response.json()

    return {
        props: {data},
    }
}

const Details = ({data}) => {

    console.log(data)

    return (
        <div className={styles.container}>
             <Head>
                <title>{data.name}</title>
                <meta name="description" content={data.name} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    {data.name}
                </h1>
                <p>
                    {data.email}
                </p>
                <p>
                    {data.website}
                </p>
                <p>
                    {data.phone}
                </p>
            </main>
        </div>
    )
}

export default Details

