import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Many Single Texts — Privacy Policy",
    description:
        "Privacy policy for the Many Single Texts iPhone app. No data collection, no tracking, everything stays on your device.",
};

export default function ManySingleTextsPrivacy() {
    return (
        <main className="font-sans antialiased text-gray-900">
            <section className="bg-white py-16 px-10 lg:container lg:mx-auto border-8 border-black my-10">
                <h1 className="text-4xl font-bold text-center">
                    Many Single Texts — Privacy Policy
                </h1>
                <p className="mt-4 text-gray-600 text-center">
                    Effective July 6, 2026 · Phan Luttrell LLC
                </p>
            </section>

            <section className="flex flex-col py-16 px-10 lg:px-0 lg:container lg:mx-auto border-8 border-black my-10">
                <div className="text-gray-600 w-2/3 mx-auto space-y-6">
                    <div>
                        <h2 className="font-bold text-gray-900 text-xl">The short version</h2>
                        <p>
                            Many Single Texts collects nothing, tracks nothing, and has no
                            servers. Everything the app does happens on your iPhone.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-900 text-xl">Contacts</h2>
                        <p>
                            The app reads your contacts and contact groups on-device to build
                            the recipient lists you ask for. Contact data is never uploaded,
                            transmitted, stored remotely, or shared with anyone. The app has
                            no network backend to send it to.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-900 text-xl">Messages</h2>
                        <p>
                            Texts are composed in Apple&apos;s own Messages sheet and sent by
                            you, from your phone, through your carrier or iMessage. The app
                            cannot send messages on its own and never sees messages you
                            receive.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-900 text-xl">Storage</h2>
                        <p>
                            Your templates and fill-in values are saved in the app&apos;s
                            local storage on your device and are deleted when you delete the
                            app.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-900 text-xl">
                            Analytics &amp; third parties
                        </h2>
                        <p>
                            No analytics, no advertising, no tracking, no third-party SDKs.
                            Purchases are handled entirely by Apple; we never see your
                            payment details.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-900 text-xl">Changes</h2>
                        <p>
                            If a future version of the app changes any of this, this page
                            will be updated before that version ships.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-900 text-xl">Contact</h2>
                        <p>
                            Questions:{" "}
                            <a href="mailto:will@cptowill.com" className="underline">
                                will@cptowill.com
                            </a>
                        </p>
                    </div>
                    <p className="text-sm text-gray-500">
                        <Link href="/manysingletexts" className="underline">
                            ← Back to Many Single Texts support
                        </Link>
                    </p>
                </div>
            </section>
        </main>
    );
}
