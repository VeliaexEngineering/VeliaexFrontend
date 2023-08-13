import React, { useEffect, useState } from 'react'
import LogoLight from '../assets/images/logo-white.png'
import LogoDark from '../assets/images/logo-black.png'
import Sun from '../assets/images/Sun.svg'
import Moon from '../assets/images/Moon.svg'
import UserIcon from '../assets/images/User-Icon.svg'
import EmailIcon from '../assets/images/Email-Icon.svg'
import SwapIllustration from '../assets/images/Swap.svg'
import GrowthIllustration from '../assets/images/Growth.svg'
import CurrenciesIllustration from '../assets/images/Currencies.svg'
import BackgroundX from '../assets/images/background-x.svg'
import BackgroundXLight from '../assets/images/Background-x-light.svg'
import Input from '../components/form/Input'
import Button from '../components/form/Button'

function Waitlist() {

    const [theme, setTheme] = useState('')
    

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setTheme('dark')
        } 
        else {
            document.documentElement.classList.remove('dark')
            setTheme('light')
        }
    }, [theme])


    const toggleTheme = () => {
        if(localStorage.theme === 'light'){
            setTheme('dark')
            localStorage.theme = 'dark'
        }
        else{
            setTheme('light')
            localStorage.theme = 'light'
        }
    }
    


    return (
        <main className='bg-red-700 dark:bg-black dark:text-white relative'>
            {/* <div className='gradient-layer-2'></div>
            <div className='gradient'></div>
            <div className='gradient-layer-3'></div> */}
            <div className='px-5 md:px-0 border-b border-b-lightGray dark:border-b-gray'>
                <header className='flex items-center justify-between md:mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-4xl '>
                    <div className='w-24 lg:w-32 my-4'>
                        <img src={theme === 'dark' ? LogoLight : LogoDark} className='w-full h-full'/>
                    </div>
                    <div className='cursor-pointer' onClick={toggleTheme}>
                        <img src={theme === 'dark' ? Sun : Moon} className='cursor-pointer'/>
                    </div>
                </header>
            </div>
            <div className='w-96 lg:w-full mt-20 mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-4xl text-center'>
                <p className='waitlist-number-tag dark:bg-gray rounded-md w-fit p-1 text-sm text-center mx-auto'>✨ 100 people on waitlist ✨</p>
                <h1 className='text-center text-3xl md:text-4xl lg:text-6xl xl:text-7xl mt-6 lg:mt-10 font-bold'>The global currencies exchange marketplace</h1>
                <p className='text-muted mt-6 lg:mt-10 w-60 lg:w-full mx-auto lg:text-xl'>Join the future of convenient and reliable FX purchase</p>
            </div>
            <div className=' mx-5 text-center mt-10 xl:mt-16 flex flex-col gap-2 md:max-w-md xl:max-w-xl md:mx-auto'>
                <Input type='text' name='firstName' placeholder='First Name' icon={UserIcon}/>
                <Input type='email' name='email' placeholder='Email Address' icon={EmailIcon}/>
                <Button className='mt-3 md:w-52 md:mx-auto'>Join Waitlist</Button>
            </div>

            <div className='mt-48'>
                {/* ---------------SWAP SECTION--------------------- */}
                <section className={`${theme === 'light' ? 'swap-section-light' : 'swap-section-dark'} flex flex-col md:flex-row-reverse gap-10 justify-between  items-center p-10 lg:p-14 w-96 md:w-full mt-16 mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-4xl`}>
                    <div className='w-[200px] md:w-2/5 xl:w-1/3 '>
                        <img src={SwapIllustration} className='w-full mx-auto'/>
                    </div>
                    <div className='md:w-1/2'>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-cardBlack dark:text-cardWhite'>The Future of Multi-Currency Exchange</h2>
                        <p className='mt-4 dark:text-muted md:text-lg'>Get great rates on currency exchange with over 20 currencies to choose from.</p>
                    </div>
                </section>
                <div className={`flex flex-col lg:flex-row mx-auto lg:gap-10 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl`}>
                    <section className={`${theme === 'light' ? 'swap-section-light' : 'swap-section-dark'} flex flex-col gap-10 justify-between  items-center p-10 w-96 md:w-full mt-10 mx-auto `}>
                        <div className='w-[300px] lg:w-[200px] xl:w-[300px]'>
                            <img src={GrowthIllustration} className='w-full mx-auto'/>
                        </div>
                        <div className='md:text-center lg:text-left'>
                            <h2 className='text-2xl xl:text-3xl font-medium text-cardBlack dark:text-cardWhite'>Convert Currencies with Confidence</h2>
                            <p className='mt-4 dark:text-muted md:text-lg'>We are uncovering new horizons and meeting the local FX demand with supply, join us on this journey!</p>
                        </div>
                    </section>
                    <section className={`${theme === 'light' ? 'swap-section-light' : 'swap-section-dark'} flex flex-col gap-10 justify-between  items-center p-10 w-96 md:w-full mt-10 mx-auto`}>
                        <div className='w-[300px] lg:w-[200px] xl:w-[300px]'>
                            <img src={CurrenciesIllustration} className='w-full mx-auto'/>
                        </div>
                        <div className='md:text-center lg:text-left'>
                            <h2 className='text-2xl xl:text-3xl font-medium text-cardBlack dark:text-cardWhite'>Absolute Control: your funds, your rates!</h2>
                            <p className='mt-4 dark:text-muted md:text-lg'>Sell at your best rate, enjoy seamless currency exchange, purchase & withdraw a variety of currencies anywhere, anytime!</p>
                        </div>
                    </section>
                </div>
                <section className={`${theme === 'light' ? 'bg-sharpBlue' : 'swap-section-dark'} overflow-hidden relative z-50 flex flex-col md:flex-row gap-10 justify-between  items-center p-10 w-96 md:w-full mt-10 mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-4xl`}>
                    <div className='md:w-1/2 lg:w-5/12'>
                        <h2 className='text-2xl xl:text-3xl font-medium text-white dark:text-cardWhite'>Coming Soon on Google Play Store and App Store</h2>
                        <p className='hidden md:block mt-4 text-transparentWhite dark:text-muted md:text-lg'>Enjoy full visibility & access to your funds at all times from the convenience of your smartphone.</p>
                    </div>
                    <Button className='mt-3 w-60 z-50 bg-white text-blue'>Join Waitlist</Button>
                    <img src={theme === 'light' ? BackgroundXLight : BackgroundX} className='absolute right-0 z-10 overflow-hidden' />
                </section>
            </div>
            <footer className='text-sm text-center mt-40 pb-5 text-muted'>
                <p>Veliaex &copy; { new Date().getFullYear() }. All rights reserved</p>
            </footer>
        </main>
    )
}

export default Waitlist