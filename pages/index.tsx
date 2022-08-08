import type {NextPage} from 'next'
import Head from 'next/head'
import IconHead from '../components/iconHead'
import BotInfo from '../components/botInfo'
import {FaBullhorn, FaInfoCircle} from "react-icons/fa";
import Script from "next/script";


const SEO = {
    title: 'Cамый быстрый VPN!',
    description: 'Получи доступ к cамому быстрому VPN!'
}


const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>{SEO.title}</title>
                <meta name="description" content={SEO.description}/>
                <link rel="icon" href={`/logo.png`}/>
                <meta name="application-name" content="YaBooker"/>
                <meta name="theme-color" content="#ffffff"/>

                <meta property="og:url" content={`https://get-vpn.ru`} key="url"/>
                <meta property="og:type" content='website'/>
                <meta property="og:title" content={SEO.title} key="title"/>
                <meta property="og:description" content={SEO.description} key="description"/>
                <meta property="og:image" content={`/logo.png`}/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="get-vpn.ru"/>
                <meta property="twitter:url" content={`https://get-vpn.ru`}/>
                <meta name="twitter:title" content={SEO.title}/>
                <meta name="twitter:description" content={SEO.description}/>
                <meta name="twitter:image" content={`/logo.png`}/>
                {/*<Script*/}
                {/*    strategy="afterInteractive"*/}
                {/*    src={`https://www.googletagmanager.com/gtag/js?id=GTM-M552FKG`}/>*/}

                <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                        })(window,document,'script','dataLayer','GTM-M552FKG');`,
                        }}
                    />
            </Head>

            <main className={'min-h-screen lg:bg-gray-100 flex items-center justify-center'}>
                <div className={'flex flex-col lg:bg-white lg:rounded-large lg:w-1/4 w-full lg:h-1/2 p-6'}>
                    <IconHead/>
                    <h1 className="text-3xl font-bold p-8 text-center">
                        Доступ к cамому быстрому VPN!
                    </h1>
                    <BotInfo/>
                    <div className={'flex items-center justify-center py-1'}>
                        <FaInfoCircle/>
                        <p className={'ml-2'}>По всем вопросам <a href={'mailto:get_vpn_sup@proton.me'}
                                                                  className={'text-blue-600'}>get_vpn_sup@proton.me</a>
                        </p>
                    </div>
                    <div className={'flex items-center justify-center py-1'}>
                        <FaBullhorn/>
                        <p className={'ml-2'}>Новости проекта <a href={'https://t.me/vpn_get'}
                                                                 className={'text-blue-600'}>🚀 GET VPN INFO 🚀</a>
                        </p>
                    </div>
                    <a href="https://t.me/wg_vpn_bot">
                        <button className={'w-full py-4 bg-blue-600 rounded-large font-bold text-white mt-8'}>
                            Перейти в Телеграмм бот
                        </button>
                    </a>
                </div>
            </main>

            {/*<footer>*/}
            {/*</footer>*/}
        </>
    )
}

export default Home
