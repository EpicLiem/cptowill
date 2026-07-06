import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Many Single Texts — Support",
    description:
        "Support for Many Single Texts, the iPhone app that texts a group of people one personal message at a time.",
};

export default function ManySingleTexts() {
    return (
        <main className="font-sans antialiased text-gray-900">
            <section className="bg-white py-20 px-10 lg:container lg:mx-auto lg:flex lg:items-center border-8 border-black my-10">
                <div className="lg:w-1/4 flex justify-center">
                    <Image
                        src="/mst-icon.png"
                        alt="Many Single Texts app icon"
                        width={200}
                        height={200}
                        className="rounded-3xl shadow-lg"
                    />
                </div>
                <div className="mt-10 lg:mt-0 lg:w-3/4 lg:pl-10">
                    <h1 className="text-4xl font-bold lg:text-6xl">Many Single Texts</h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Text a group of people — one personal message at a time. An iPhone
                        app by Phan Luttrell LLC.
                    </p>
                </div>
            </section>

            <section className="flex flex-col py-16 px-10 lg:px-0 lg:container lg:mx-auto border-8 border-black my-10">
                <h2 className="text-3xl mb-4 font-bold text-center">What it does</h2>
                <div className="text-gray-600 w-2/3 mx-auto space-y-4">
                    <p>
                        Group threads are chaos. Many Single Texts sends each person their
                        own individual text — pre-filled in Messages, one at a time, with
                        you tapping send on every single one.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            Build recipient lists from your contact groups with add/subtract
                            algebra (include one list, exclude another), or pick individuals
                            directly.
                        </li>
                        <li>
                            Write reusable templates with macros: {"{first}"} and {"{last}"}{" "}
                            fill in each person&apos;s name, and any custom {"{token}"}{" "}
                            becomes a fill-in box before you send.
                        </li>
                        <li>
                            Step through the send queue one text at a time. Skip anyone,
                            tweak any message, and see a recap when you&apos;re done.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="flex flex-col py-16 px-10 lg:px-0 lg:container lg:mx-auto border-8 border-black my-10">
                <h2 className="text-3xl mb-4 font-bold text-center">FAQ</h2>
                <div className="text-gray-600 w-2/3 mx-auto space-y-6">
                    <div>
                        <h3 className="font-bold text-gray-900">
                            Where do the groups come from?
                        </h3>
                        <p>
                            Your contact groups (called &quot;Lists&quot; in the iPhone
                            Contacts app, also manageable at iCloud.com). Create a list, add
                            people to it, and it shows up in the app. No groups? Use Add
                            Individuals to pick people one by one.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">
                            Why does it need full contacts access?
                        </h3>
                        <p>
                            To list your groups and their members so you can build a
                            recipient list. Contact data is read on your device and never
                            leaves it — see the{" "}
                            <Link href="/manysingletexts/privacy" className="underline">
                                privacy policy
                            </Link>
                            .
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">
                            Does it send texts automatically?
                        </h3>
                        <p>
                            No. Every text opens in Apple&apos;s Messages compose sheet and
                            you tap send yourself. The app can&apos;t send anything on its
                            own — that&apos;s an iOS guarantee, and the point of the app.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">
                            How do refunds work?
                        </h3>
                        <p>
                            Purchases go through Apple. Request a refund at{" "}
                            <a
                                href="https://reportaproblem.apple.com"
                                className="underline"
                            >
                                reportaproblem.apple.com
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 px-10 lg:px-0 lg:container lg:mx-auto border-8 border-black my-10">
                <h2 className="text-3xl mb-4 font-bold text-center">Support</h2>
                <p className="text-gray-600 w-2/3 mx-auto text-center">
                    Questions, bugs, or feature ideas? Email{" "}
                    <a href="mailto:will@cptowill.com" className="underline">
                        will@cptowill.com
                    </a>{" "}
                    and include your iOS version and what you were doing when the problem
                    happened.
                </p>
                <p className="text-gray-500 w-2/3 mx-auto text-center mt-6 text-sm">
                    <Link href="/manysingletexts/privacy" className="underline">
                        Privacy Policy
                    </Link>
                    {" · "}
                    <Link href="/" className="underline">
                        cptowill.com
                    </Link>
                </p>
            </section>
        </main>
    );
}
