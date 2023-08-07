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
                <Image src="/cptowilllogo.png" alt="" width="400" height="400" className="pixelart bottom-24 right-10 absolute"/>

            </section>

            <section className="flex flex-col py-24 px-10 lg:px-0 lg:container lg:mx-auto justify-center border-8 border-black my-10">
                <h2 className="flex text-3xl mb-4 font-bold justify-center">About</h2>
                <p className="flex text-gray-600 w-2/3 justify-center text-center mx-auto">
                    {`Will Luttrell is an experienced product and technology leader with expertise spanning digital marketing, big data, and creative problem solving.
                    As a founder and executive of multiple startups including Integral Ad Science, Amino Payments, and The Brandtech Group, Will has a proven track record of building successful companies from the ground up.
                    He holds 4 patents related to digital advertising and has served on the boards of several companies and nonprofits.
                    Will's core focus areas include adtech, martech, blockchain, payments, and SaaS.
                    He brings a unique blend of technical skills, entrepreneurial drive, and strategic vision. Will advises organizations on product, technology, and growth strategies.
                    He is an insightful leader dedicated to building innovative products that deliver real value.`}
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
