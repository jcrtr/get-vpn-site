import type {NextPage} from 'next'
import Head from 'next/head'
import IconHead from '../components/iconHead'
import BotInfo from '../components/botInfo'
import {FaBullhorn, FaInfoCircle} from "react-icons/fa";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Cамый быстрый VPN!</title>
                <meta name="description" content="Доступ к cамому быстрому VPN!"/>
                <link rel="icon" href={`${process.env.NEXT_PUBLIC}/logo.png`}/>
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
