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

            <section className="flex flex-col py-24 px-10 lg:px-0 lg:container lg:mx-auto border-8 border-black my-10">
                <h2 className="text-3xl mb-4 font-bold text-center">About</h2>
                <p className="text-gray-600 w-2/3 mx-auto">
                    {`Veteran product and technology leader with multiple successful exits and a 30 year track record of building transformative companies. Founder of Integral Ad Science (NASDAQ: IAS) and Amino Payments (acquired by IAS); former executive at The Brandtech Group, where he led technical diligence for acquisitions including Jellyfish, Pencil.ai, and Acorn-i.`}
                </p>
                <p className="text-gray-600 w-2/3 mx-auto mt-10">
                    {`Will is a value-add angel investor in high-growth startups such as Leagueside (acquired by TeamSnap), Pipedream, Ad Fontes, Swym.ai, and Symetri, and has advised early investments in The Trade Desk (NASDAQ: TTD) and Innovid (NYSE: CTV).`}
                </p>
                <p className="text-gray-600 w-2/3 mx-auto mt-10">
                    {`With four patents in deep technical topics (fraud detection, firewall design, payments tracking, media metrics) and deep expertise across digital media, big data, AI, and SaaS, Will blends technical fluency, strategic insight, and operational discipline. His leadership is grounded in shipping real product, scaling teams, and creative solutions to intractable problems.`}
                </p>
                <p className="text-gray-600 w-2/3 mx-auto mt-10">
                    {`Will is currently CEO of Honeycake, where he is leading the company's mission to make document security easy and ubiquitous.`}
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
