import type { NextPage } from 'next'
import Head from 'next/head'
import IconHead from '../components/iconHead'
import BotInfo from '../components/botInfo'
import { FaBullhorn, FaInfoCircle } from 'react-icons/fa'
import { BiCopy } from 'react-icons/bi'

const SEO = {
    title: 'Скачать лучший VPN для iphone и android (бесплатно) на русском',
    description:
        'Здесь ты можешь скачать лучший VPN для своего Iphone или Android. Бесплатный тестовый период. Переходи на наш телеграм GET VPN'
}

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>{SEO.title}</title>
                <meta name="description" content={SEO.description} />
                <link rel="icon" href={`/logo.png`} />
                <meta name="application-name" content="YaBooker" />
                <meta name="theme-color" content="#ffffff" />

                <meta property="og:url" content={`https://get-vpn.ru`} key="url" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={SEO.title} key="title" />
                <meta
                    property="og:description"
                    content={SEO.description}
                    key="description"
                />
                <meta property="og:image" content={`/logo.png`} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="get-vpn.ru" />
                <meta property="twitter:url" content={`https://get-vpn.ru`} />
                <meta name="twitter:title" content={SEO.title} />
                <meta name="twitter:description" content={SEO.description} />
                <meta name="twitter:image" content={`/logo.png`} />
                <script type="text/javascript" >
                    (function(m,e,t,r,i,k,a){m[i] = m[i] || function() { (m[i].a = m[i].a || []).push(arguments) };
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                    ym(91928327, "init", {
                        clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
   });
                </script>
                <noscript><div><img src="https://mc.yandex.ru/watch/91928327" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
            </Head>

            <main
                className={
                    'min-h-screen lg:bg-gray-100 flex items-center justify-center w-full'
                }>
                <div
                    className={
                        'flex flex-col lg:bg-white lg:rounded-large w-full lg:w-[500px] w-full lg:h-1/2 p-6'
                    }>
                    <IconHead />
                    <h1 className="text-3xl font-bold p-8 text-center">
                        Доступ к cамому быстрому VPN!
                    </h1>
                    <BotInfo />
                    <div
                        className={
                            'flex items-center justify-between py-2 px-4 rounded-large border-2 border-red-600 font-bold'
                        }>
                        <p>ПРОМОКОД ДЛЯ ТЕСТА</p>
                        <button
                            className={'flex flex-wrap items-center'}
                            onClick={() => {
                                navigator.clipboard.writeText('vpn22')
                            }}>
                            <p className={'text-red-600'}>vpn22</p>
                            <p className={'px-2 text-red-600 font-bold'}>
                                <BiCopy />
                            </p>
                        </button>
                    </div>
                    <div className={'flex items-center justify-center py-1 mt-8'}>
                        <FaInfoCircle />
                        <p className={'ml-2'}>
                            По всем вопросам{' '}
                            <a
                                href={'mailto:get_vpn_sup@proton.me'}
                                className={'text-blue-600'}>
                                get_vpn_sup@proton.me
                            </a>
                        </p>
                    </div>
                    <div className={'flex items-center justify-center py-1'}>
                        <FaBullhorn />
                        <p className={'ml-2'}>
                            Новости проекта{' '}
                            <a href={'https://t.me/vpn_get'} className={'text-blue-600'}>
                                🚀 GET VPN INFO 🚀
                            </a>
                        </p>
                    </div>
                    <a href="https://t.me/wg_vpn_bot">
                        <button
                            className={
                                'w-full py-4 bg-blue-600 rounded-large font-bold text-white mt-8'
                            }>
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
