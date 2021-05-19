import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.scss'

export default function Home() {

  const [pokemons, setPokemons] = React.useState([]);

  const fetchingData = async () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then(response => response.json())
        .then(data => {
          console.log(data.results)
          setPokemons(data.results)
        })
  }

  React.useEffect(()=>{
    fetchingData()
  },[])


  
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Prueba SSR <a href="">Next.js</a>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>pages/pokemon/[name].js</code>
        </p>

        <div className={styles.grid}>
          {
            pokemons?.map((pokemon, i)=>(
              <a key={i} href={`/pokemon/${pokemon.name}`} className={styles.card}>
                <h2>{pokemon.name}</h2>
              </a>
            ))
          }
        
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
