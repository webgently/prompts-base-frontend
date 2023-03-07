import React, { useState } from 'react'
import YouTubePlayerImg1 from '../../assets/images/youtube1.png'
import YouTubePlayerImg2 from '../../assets/images/youtube2.png'
import Logo1 from '../../assets/images/logo1.png'
import Logo2 from '../../assets/images/logo2.png'
import Logo3 from '../../assets/images/logo3.png'
import Logo4 from '../../assets/images/logo4.png'
import Logo5 from '../../assets/images/logo5.png'
import Logo6 from '../../assets/images/logo6.png'
import Logo7 from '../../assets/images/logo7.png'
import FreePrompt from '../../assets/images/freeprompt.png'
import IconMenu from '../../components/Icons'
import Layout from '../../components/Layout'

const data: any = [
    [
        {
            url: '/assets/images/prompts/prompts1.png',
            icon: 'Midjourney',
            type: 'Midjourney',
            title1: 'Retro Neon',
            title2: 'Signs',
            price: '$3.99',
        },
        {
            url: '/assets/images/prompts/prompts2.png',
            icon: 'Midjourney',
            type: 'Midjourney',
            title1: 'Platform Game Level',
            title2: 'Designs',
            price: '$2.99',
        },
        {
            url: '/assets/images/prompts/prompts3.png',
            icon: 'Midjourney',
            type: 'Midjourney',
            title1: 'Chalk Board Style',
            title2: 'Illustrations',
            price: '$2.99',
        },
        {
            url: '/assets/images/prompts/prompts4.png',
            icon: 'Midjourney',
            type: 'Midjourney',
            title1: 'Pop Retro American',
            title2: 'Comic St...',
            price: '$3.99',
        },
        {
            url: '/assets/images/prompts/prompts5.png',
            icon: 'Midjourney',
            type: 'Midjourney',
            title1: 'Asian Art T-shirt',
            title2: 'Designs',
            price: '$2.99',
        },
        {
            url: '/assets/images/prompts/prompts6.png',
            icon: 'Midjourney',
            type: 'Midjourney',
            title1: 'Food Advertising',
            title2: 'Photography',
            price: '$4.99',
        },
        {
            url: '/assets/images/prompts/prompts7.png',
            icon: 'Midjourney',
            type: 'Midjourney',
            title1: 'Cartoon',
            title2: 'Backgrounds',
            price: '$5.99',
        },
        {
            url: '/assets/images/prompts/prompts8.png',
            icon: 'Midjourney',
            type: 'Midjourney',
            title1: 'Indoor Light',
            title2: 'Paintings',
            price: '$3.99',
        },
    ],
    [
        {
            url: '/assets/images/prompts/prompts1.png',
            icon: 'StableDiff',
            type: 'Stable Diff',
            title1: 'Retro Neon',
            title2: 'Signs',
            price: '$3.99',
        },
        {
            url: '/assets/images/prompts/prompts2.png',
            icon: 'StableDiff',
            type: 'Stable Diff',
            title1: 'Platform Game Level',
            title2: 'Designs',
            price: '$2.99',
        },
        {
            url: '/assets/images/prompts/prompts3.png',
            icon: 'StableDiff',
            type: 'Stable Diff',
            title1: 'Chalk Board Style',
            title2: 'Illustrations',
            price: '$2.99',
        },
        {
            url: '/assets/images/prompts/prompts4.png',
            icon: 'StableDiff',
            type: 'Stable Diff',
            title1: 'Pop Retro American',
            title2: 'Comic St...',
            price: '$3.99',
        },
        {
            url: '/assets/images/prompts/prompts5.png',
            icon: 'StableDiff',
            type: 'Stable Diff',
            title1: 'Asian Art T-shirt',
            title2: 'Designs',
            price: '$2.99',
        },
        {
            url: '/assets/images/prompts/prompts6.png',
            icon: 'StableDiff',
            type: 'Stable Diff',
            title1: 'Food Advertising',
            title2: 'Photography',
            price: '$4.99',
        },
        {
            url: '/assets/images/prompts/prompts7.png',
            icon: 'StableDiff',
            type: 'Stable Diff',
            title1: 'Cartoon',
            title2: 'Backgrounds',
            price: '$5.99',
        },
        {
            url: '/assets/images/prompts/prompts8.png',
            icon: 'StableDiff',
            type: 'Stable Diff',
            title1: 'Indoor Light',
            title2: 'Paintings',
            price: '$3.99',
        },
    ],
    [
        {
            url: '/assets/images/prompts/prompts1.png',
            icon: 'Gpt',
            type: 'GPT-3',
            title1: 'Retro Neon',
            title2: 'Signs',
            price: '$3.99',
        },
        {
            url: '/assets/images/prompts/prompts2.png',
            icon: 'Gpt',
            type: 'GPT-3',
            title1: 'Platform Game Level',
            title2: 'Designs',
            price: '$2.99',
        },
        {
            url: '/assets/images/prompts/prompts3.png',
            icon: 'Gpt',
            type: 'GPT-3',
            title1: 'Chalk Board Style',
            title2: 'Illustrations',
            price: '$2.99',
        },
        {
            url: '/assets/images/prompts/prompts4.png',
            icon: 'Gpt',
            type: 'GPT-3',
            title1: 'Pop Retro American',
            title2: 'Comic St...',
            price: '$3.99',
        },
        {
            url: '/assets/images/prompts/prompts5.png',
            icon: 'Gpt',
            type: 'GPT-3',
            title1: 'Asian Art T-shirt',
            title2: 'Designs',
            price: '$2.99',
        },
        {
            url: '/assets/images/prompts/prompts6.png',
            icon: 'Gpt',
            type: 'GPT-3',
            title1: 'Food Advertising',
            title2: 'Photography',
            price: '$4.99',
        },
        {
            url: '/assets/images/prompts/prompts7.png',
            icon: 'Gpt',
            type: 'GPT-3',
            title1: 'Cartoon',
            title2: 'Backgrounds',
            price: '$5.99',
        },
        {
            url: '/assets/images/prompts/prompts8.png',
            icon: 'Gpt',
            type: 'GPT-3',
            title1: 'Indoor Light',
            title2: 'Paintings',
            price: '$3.99',
        },
    ],
]
const mostData1: any = [
    {
        url: '/assets/images/prompts/prompts15.png',
        icon: 'Gpt',
        rate: '5.0',
        type: 'GPT-3',
        title1: 'Prompt',
        title2: 'Generator Pro',
        price: '$4.99',
    },
    {
        url: '/assets/images/prompts/prompts14.png',
        icon: 'Gpt',
        rate: '4.7',
        type: 'GPT-3',
        title1: 'Detailed Book',
        title2: 'Writing',
        price: '$9.99',
    },
    {
        url: '/assets/images/prompts/prompts4.png',
        icon: 'Gpt',
        rate: '5.0',
        type: 'GPT-3',
        title1: 'Pop Retro American',
        title2: 'Comic Style',
        price: '$1.99',
    },
    {
        url: '/assets/images/prompts/prompts13.png',
        icon: 'Gpt',
        rate: '5.0',
        type: 'GPT-3',
        title1: 'YouTuber Killer',
        title2: 'Generator',
        price: '$2.99',
    },
]
const mostData2: any = [
    {
        url: '/assets/images/prompts/prompts12.png',
        icon: 'Gpt',
        rate: '5.0',
        type: 'GPT-3',
        title1: 'Gpt-3 Prompt',
        title2: 'Generator',
        price: '$2.99',
    },
    {
        url: '/assets/images/prompts/prompts11.png',
        icon: 'Gpt',
        rate: '4.7',
        type: 'GPT-3',
        title1: 'Write Ebooks At The',
        title2: 'Lightspeed',
        price: '$3.99',
    },
    {
        url: '/assets/images/prompts/prompts10.png',
        icon: 'Midjourney',
        rate: '5.0',
        type: 'Midjourney',
        title1: 'High Quality Cartoon',
        title2: 'Cat And Dog Animals',
        price: '$4.99',
    },
    {
        url: '/assets/images/prompts/prompts9.png',
        icon: 'Gpt',
        rate: '5.0',
        type: 'GPT-3',
        title1: 'Course',
        title2: 'Generator',
        price: '$2.99',
    },
]

const HomePage = () => {
    const [categories, setCategories] = useState([
        {
            label: 'Featured Prompts',
            active: true,
        },
        {
            label: 'Trending Prompts',
            active: false,
        },
        {
            label: 'Newest Prompts',
            active: false,
        },
    ])
    const [prompts, setPrompts] = useState(data[0])

    const moveActive = (index: number) => {
        let ele = [...categories]
        ele.map((item: any) => (item.active = false))
        ele[index].active = true
        setCategories(ele)
        setPrompts(data[index])
    }

    return (
        <Layout>
            <section className="jumbotron">
                <div className="jumbotron-left">
                    <div className="flex flex-col items-center">
                        <p className="text-[20px] text-white">
                            Free prompt of the week
                        </p>
                        <div className="prompts-free">
                            <img
                                src={FreePrompt}
                                width="220px"
                                height="220px"
                            />
                            <p className="text-[20px] font-[500]">
                                Kaleidoscope Artistic Tiles
                            </p>
                            <p className="text-[34px] font-[700]">$2.99</p>
                            <button>Buy Now</button>
                            <div className="prompts-time">
                                <div className="time-item">
                                    <p className="text-[18px] font-[700]">22</p>
                                    <p className="text-[10px]">Hours</p>
                                </div>
                                <div className="time-item">
                                    <p className="text-[18px] font-[700]">58</p>
                                    <p className="text-[10px]">Min</p>
                                </div>
                                <div className="time-item">
                                    <p className="text-[18px] font-[700]">16</p>
                                    <p className="text-[10px]">Sec</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jumbotron-title">
                        <div>
                            <h1>
                                DALL·E, GPT-3, Midjourney, Stable Diffusion,{' '}
                                <span>ChatGPT Prompt Marketplace</span>
                            </h1>
                            <p>
                                Find top prompts, produce better results, save
                                on API costs, sell your own prompts.
                            </p>
                        </div>
                        <div className="flex flex-col 2xs:flex-row gap-[10px] md:gap-[20px]">
                            <div className="w-full sm:w-[200px] ">
                                <button className="btn-primary">
                                    Sell A Prompt
                                </button>
                            </div>
                            <div className="w-full sm:w-[220px]">
                                <button className="btn-outline">
                                    Find a Prompts
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jumbotron-right">
                    <div className="flex flex-col gap-[24px]">
                        <div
                            className="prompts-item border-yellow/[0.4]"
                            style={{
                                background: `url('/assets/images/prompts/prompts16.png') center center no-repeat`,
                            }}
                        >
                            <div className="mark-box">
                                <div>
                                    <IconMenu icon="Dall" size={20} />
                                    <p>DALL-E</p>
                                </div>
                            </div>
                            <div className="description">
                                <div className="titles">
                                    <p>Beautiful Photorealistic</p>
                                    <p>Portraits</p>
                                </div>
                            </div>
                            <div className="effect"></div>
                        </div>
                        <div
                            className="prompts-item border-red/[0.4]"
                            style={{
                                background: `url('/assets/images/prompts/prompts15.png') center center no-repeat`,
                            }}
                        >
                            <div className="mark-box">
                                <div>
                                    <IconMenu icon="Dall" size={20} />
                                    <p>DALL-E</p>
                                </div>
                            </div>
                            <div className="description">
                                <div className="titles">
                                    <p>Prompts Generators</p>
                                    <p>Pro</p>
                                </div>
                            </div>
                            <div className="effect"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px] pt-[80px]">
                        <div
                            className="prompts-item border-green/[0.4]"
                            style={{
                                background: `url('/assets/images/prompts/prompts4.png') center center no-repeat`,
                            }}
                        >
                            <div className="mark-box">
                                <div>
                                    <IconMenu icon="Dall" size={20} />
                                    <p>DALL-E</p>
                                </div>
                            </div>
                            <div className="description">
                                <div className="titles">
                                    <p>Beautiful Photorealistic</p>
                                    <p>Portraits</p>
                                </div>
                            </div>
                            <div className="effect"></div>
                        </div>
                        <div
                            className="prompts-item border-blue/[0.4]"
                            style={{
                                background: `url('/assets/images/prompts/prompts17.png') center center no-repeat`,
                            }}
                        >
                            <div className="mark-box">
                                <div>
                                    <IconMenu icon="Dall" size={20} />
                                    <p>DALL-E</p>
                                </div>
                            </div>
                            <div className="description">
                                <div className="titles">
                                    <p>Prompts Generators</p>
                                    <p>Pro</p>
                                </div>
                            </div>
                            <div className="effect"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="prompts-features">
                <h2>Featured In</h2>
                <div className="logo-group">
                    <img src={Logo1} alt="logo1" />
                    <img src={Logo2} alt="logo2" />
                    <img src={Logo3} alt="logo3" />
                </div>
                <div className="logo-group">
                    <img src={Logo4} alt="logo4" />
                    <img src={Logo5} alt="logo5" />
                    <img src={Logo6} alt="logo6" />
                    <img src={Logo7} alt="logo7" />
                </div>
            </section>
            <section className="prompts-categories">
                <div className="categories">
                    {categories.map((item: any, ind: number) => {
                        return (
                            <button
                                key={ind}
                                className={item.active ? 'active' : ''}
                                onClick={() => moveActive(ind)}
                            >
                                {item.label}
                            </button>
                        )
                    })}
                </div>
                <div className="prompts-group">
                    <div className="borderline">
                        <span />
                    </div>
                    {prompts.map((item: any, ind: number) => {
                        return (
                            <div
                                key={ind}
                                className="prompts-item"
                                style={{
                                    background: `url(${item.url}) center center no-repeat`,
                                }}
                            >
                                <div className="mark-box">
                                    <IconMenu icon={item.icon} size={20} />
                                    <p>{item.type}</p>
                                </div>
                                <div className="description">
                                    <div className="titles">
                                        <p>{item.title1}</p>
                                        <p>{item.title2}</p>
                                    </div>
                                    <p>{item.price}</p>
                                </div>
                                <div className="effect"></div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <button className="btn-primary">Browse Marketplace</button>
                </div>
            </section>
            <section className="prompts-about">
                <h2>What is Prompts?</h2>
                <div>
                    <p>
                        Prompts are becoming a powerful new way of programming
                        AI models like DALL·E, Midjourney & GPT-3.
                    </p>
                    <p>
                        However, it's hard to find good quality prompts online.
                    </p>
                    <p>
                        If you're good at prompt engineering, there's also no
                        clear way to make a living from your skills.
                    </p>
                    <p>
                        PromptBase is a marketplace for buying and selling
                        quality prompts that produce the best results, and save
                        you money on API costs.
                    </p>
                </div>
            </section>
            <section className="prompts-most">
                <div className="prompts-group">
                    <div className="prompts-header">
                        <h2>Most Popular Prompts This Week</h2>
                        <div className="prompts-action">
                            <div className="border-[1px] text-white">
                                <IconMenu icon="LeftArrow" />
                            </div>
                            <div className="border-[1px] bg-white text-black">
                                <IconMenu icon="RightArrow" />
                            </div>
                        </div>
                    </div>
                    <div className="prompts-body">
                        {mostData1.map((item: any, ind: number) => {
                            return (
                                <div
                                    key={ind}
                                    className="prompts-item"
                                    style={{
                                        background: `url(${item.url}) center center no-repeat`,
                                    }}
                                >
                                    <div className="mark-box">
                                        <div>
                                            <IconMenu
                                                icon={item.icon}
                                                size={20}
                                            />
                                            <p>{item.type}</p>
                                        </div>
                                        <div>
                                            <IconMenu
                                                icon="Star"
                                                size={20}
                                                className="text-yellow"
                                            />
                                            <p>{item.rate}</p>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <div className="titles">
                                            <p>{item.title1}</p>
                                            <p>{item.title2}</p>
                                        </div>
                                        <p>{item.price}</p>
                                    </div>
                                    <div className="effect"></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="prompts-group">
                    <div className="prompts-header">
                        <h2>Most Popular Prompts This Week</h2>
                        <div className="prompts-action">
                            <div className="border-[1px] text-white">
                                <IconMenu icon="LeftArrow" />
                            </div>
                            <div className="border-[1px] bg-white text-black">
                                <IconMenu icon="RightArrow" />
                            </div>
                        </div>
                    </div>
                    <div className="prompts-body">
                        {mostData2.map((item: any, ind: number) => {
                            return (
                                <div
                                    key={ind}
                                    className="prompts-item"
                                    style={{
                                        background: `url(${item.url}) center center no-repeat`,
                                    }}
                                >
                                    <div className="mark-box">
                                        <div>
                                            <IconMenu
                                                icon={item.icon}
                                                size={20}
                                            />
                                            <p>{item.type}</p>
                                        </div>
                                        <div>
                                            <IconMenu
                                                icon="Star"
                                                size={20}
                                                className="text-yellow"
                                            />
                                            <p>{item.rate}</p>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <div className="titles">
                                            <p>{item.title1}</p>
                                            <p>{item.title2}</p>
                                        </div>
                                        <p>{item.price}</p>
                                    </div>
                                    <div className="effect"></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <button className="btn-primary">Browse Marketplace</button>
                </div>
            </section>
            <section className="prompts-youtube1">
                <img
                    src={YouTubePlayerImg1}
                    className="md:w-[480px] xl:w-[700px]"
                />
                <div className="prompts-description">
                    <div>
                        <h2>Earn from your Prompt Engineering skills</h2>
                        <div>
                            <p>
                                PromptBase is an early marketplace for DALL·E,
                                Midjourney, Stable Diffusion & GPT-3 prompts.
                            </p>
                            <p>
                                Sell your prompts on PromptBase and earn from
                                your prompt crafting skills.
                            </p>
                            <p>
                                Upload your prompt, connect with Stripe, and
                                become a seller in just 2 minutes.
                            </p>
                        </div>
                    </div>
                    <div className="w-[200px]">
                        <button className="btn-primary">Sell A Prompt</button>
                    </div>
                </div>
            </section>
            <section className="prompts-newest">
                <div className="prompts-group">
                    <div className="prompts-header">
                        <h2>Newest Midjourney Prompts</h2>
                        <div className="prompts-action">
                            <div className="border-[1px] text-white">
                                <IconMenu icon="LeftArrow" />
                            </div>
                            <div className="border-[1px] bg-white text-black">
                                <IconMenu icon="RightArrow" />
                            </div>
                        </div>
                    </div>
                    <div className="prompts-body">
                        {mostData1.map((item: any, ind: number) => {
                            return (
                                <div
                                    key={ind}
                                    className="prompts-item"
                                    style={{
                                        background: `url(${item.url}) center center no-repeat`,
                                    }}
                                >
                                    <div className="mark-box !justify-end">
                                        <div>
                                            <IconMenu
                                                icon={item.icon}
                                                size={20}
                                            />
                                            <p>{item.type}</p>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <div className="titles">
                                            <p>{item.title1}</p>
                                            <p>{item.title2}</p>
                                        </div>
                                        <p>{item.price}</p>
                                    </div>
                                    <div className="effect"></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="prompts-group">
                    <div className="prompts-header">
                        <h2>Newest GPT-3 Prompts</h2>
                        <div className="prompts-action">
                            <div className="border-[1px] text-white">
                                <IconMenu icon="LeftArrow" />
                            </div>
                            <div className="border-[1px] bg-white text-black">
                                <IconMenu icon="RightArrow" />
                            </div>
                        </div>
                    </div>
                    <div className="prompts-body">
                        {mostData2.map((item: any, ind: number) => {
                            return (
                                <div
                                    key={ind}
                                    className="prompts-item"
                                    style={{
                                        background: `url(${item.url}) center center no-repeat`,
                                    }}
                                >
                                    <div className="mark-box !justify-end">
                                        <div>
                                            <IconMenu
                                                icon={item.icon}
                                                size={20}
                                            />
                                            <p>{item.type}</p>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <div className="titles">
                                            <p>{item.title1}</p>
                                            <p>{item.title2}</p>
                                        </div>
                                        <p>{item.price}</p>
                                    </div>
                                    <div className="effect"></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <button className="btn-primary">Browse Marketplace</button>
                </div>
            </section>
            <section className="prompts-youtube2">
                <div className="prompts-description">
                    <div>
                        <h2>Earn from your Prompt Engineering skills</h2>
                        <div>
                            <p>
                                PromptBase is an early marketplace for DALL·E,
                                Midjourney, Stable Diffusion & GPT-3 prompts.
                            </p>
                            <p>
                                Sell your prompts on PromptBase and earn from
                                your prompt crafting skills.
                            </p>
                            <p>
                                Upload your prompt, connect with Stripe, and
                                become a seller in just 2 minutes.
                            </p>
                        </div>
                    </div>
                    <div className="w-[200px]">
                        <button className="btn-primary">Sell A Prompt</button>
                    </div>
                </div>
                <img
                    src={YouTubePlayerImg2}
                    className="md:w-[480px] xl:w-[700px]"
                />
            </section>
            <section className="prompts-newest pb-[120px]">
                <div className="prompts-group">
                    <div className="prompts-header">
                        <h2>Newest DALL·E Prompts</h2>
                        <div className="prompts-action">
                            <div className="border-[1px] text-white">
                                <IconMenu icon="LeftArrow" />
                            </div>
                            <div className="border-[1px] bg-white text-black">
                                <IconMenu icon="RightArrow" />
                            </div>
                        </div>
                    </div>
                    <div className="prompts-body">
                        {mostData1.map((item: any, ind: number) => {
                            return (
                                <div
                                    key={ind}
                                    className="prompts-item"
                                    style={{
                                        background: `url(${item.url}) center center no-repeat`,
                                    }}
                                >
                                    <div className="mark-box !justify-end">
                                        <div>
                                            <IconMenu
                                                icon={item.icon}
                                                size={20}
                                            />
                                            <p>{item.type}</p>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <div className="titles">
                                            <p>{item.title1}</p>
                                            <p>{item.title2}</p>
                                        </div>
                                        <p>{item.price}</p>
                                    </div>
                                    <div className="effect"></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="prompts-group">
                    <div className="prompts-header">
                        <h2>Newest Stable Diffusion Prompts</h2>
                        <div className="prompts-action">
                            <div className="border-[1px] text-white">
                                <IconMenu icon="LeftArrow" />
                            </div>
                            <div className="border-[1px] bg-white text-black">
                                <IconMenu icon="RightArrow" />
                            </div>
                        </div>
                    </div>
                    <div className="prompts-body">
                        {mostData2.map((item: any, ind: number) => {
                            return (
                                <div
                                    key={ind}
                                    className="prompts-item"
                                    style={{
                                        background: `url(${item.url}) center center no-repeat`,
                                    }}
                                >
                                    <div className="mark-box !justify-end">
                                        <div>
                                            <IconMenu
                                                icon={item.icon}
                                                size={20}
                                            />
                                            <p>{item.type}</p>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <div className="titles">
                                            <p>{item.title1}</p>
                                            <p>{item.title2}</p>
                                        </div>
                                        <p>{item.price}</p>
                                    </div>
                                    <div className="effect"></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <button className="btn-primary">Browse Marketplace</button>
                </div>
            </section>
        </Layout>
    )
}

export default HomePage
