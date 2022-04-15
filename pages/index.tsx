import type { NextPage } from 'next'
import Head from 'next/head'
import HomeScreen from './home'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="../static/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="4wMoS5YqfF0DyNHr--nI4Z5iWUdka8KPYiBiCQGv5EA" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and delelop talent"
        />
        <meta name="google-site-verification" content="4wMoS5YqfF0DyNHr--nI4Z5iWUdka8KPYiBiCQGv5EA" />
        <title>Unberry</title>

        {/* OG Section  */}
        <meta property="og:url" content="https://unberry.com/static/og.png" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="546555445835110" />
        <meta property="og:image" content="https://unberry.com/static/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter OG Section  */}
        <meta
          name="twitter:image"
          content="https://unberry.com/static/og.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HomeScreen />
    </div>
  )
}

export default Home
