import Image from 'next/image'
// A website for a consultant with the company name "cptowill"
/*
Will is a Product and Technology leader with deep experience in digital marketing, big data, and creative solutions to intractable problems. Author or co-author of four patents in digital advertising.
 */

export default function Home() {

    return (
        <main className="font-sans antialiased text-gray-900">

            <section className="bg-white py-32 px-10 lg:container lg:mx-auto lg:flex lg:items-center border-8 border-black my-10">
                <div className="lg:w-1/2">
                    <Image
                        src="/will.jpg"
                        width={500}
                        height={500}
                        className="rounded-full shadow-lg"
                        alt=""
                    />
                </div>

                <div className="mt-10 lg:mt-0 lg:w-1/2">
                    <h1 className="text-4xl font-bold lg:text-6xl">Will Luttrell</h1>
                    <p className="mt-4 text-xl text-gray-600">Product & Technology Leader</p>
                </div>
                <Image src="/cptowilllogo.png" alt="" width="400" height="400" className="pixelart logo"/>

            </section>

            <section className="flex flex-col py-24 px-10 lg:px-0 lg:container lg:mx-auto justify-center border-8 border-black my-10">
                <h2 className="flex text-3xl mb-4 font-bold justify-center">About</h2>
                <p className="flex text-gray-600 w-2/3 justify-center text-center mx-auto">
                    {`Will Luttrell is a seasoned product and technology leader with a long track record of innovation and strategic vision in digital marketing, big data, and advanced technologies. He has been a founder or executive at pioneering firms such as Integral Ad Science (NASDAQ: IAS), Amino Payments (acquired by IAS in 2021), and The Brandtech Group, where he has spearheaded industry-shaping initiatives and led product and technology diligence on acquisitions like Jellyfish, Acorn-i, and Pencil.ai. Will is also a value-add angel investor in impactful startups, including Leagueside (acquired by Teamsnap), Pipedream, Ad Fontes, Symetri, and Swym. He has advised on venture investments in several companies, including early stage successful guidance on The Trade Desk (NASDAQ: TTD) and Innovid (NYSE: CTV), and serves on various profit and nonprofit boards.`}
                </p>
                <p className="flex text-gray-600 w-2/3 justify-center text-center mt-8">
                    {`The author of four patents in digital media, Will's technological expertise is marked by both ingenuity and scale. His proficiency spans adtech, martech, blockchain, payments, and SaaS, and he excels at blending technical mastery with entrepreneurial energy to drive growth and innovation. Will advises organizations on product, technology, and growth strategies, with a focus on creating impactful products that deliver real value. His leadership and insights make him a trusted partner in navigating today’s complex digital landscape.`}
                </p>
            </section>


            <section className="bg-white py-24 px-10 lg:px-0 lg:container lg:mx-auto my-10">

                <div className="flex justify-center">
                    <a href="/robot" className="mx-6 transition hover:opacity-75">
                        <Image
                            src="/cptowilllogo.png"
                            width={48}
                            height={48}
                            alt=""
                            className="pixelart"
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/will-luttrell/" className="mx-6 transition hover:opacity-75">
                        <Image
                            src="/linkedin.png"
                            width={48}
                            height={48}
                            alt=""
                        />
                    </a>

                    <a href="https://twitter.com/will_luttrell" className="mx-6 transition hover:opacity-75">
                        <Image
                            src="/twitter.png"
                            width={48}
                            height={48}
                            alt=""
                        />
                    </a>

                </div>

            </section>

        </main>
    )

}
