import { LayoutWrapper } from "@/components/layout-wrapper";
const FaqSection = () => {
    return (
        <LayoutWrapper>
            <section className="w-full">
                <div className="">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                Frequently Asked Questions
                            </h2>
                            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Got questions? We've got answers about minutes, sessions, refunds, and more.
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">What happens after I buy a pack?</h3>
                            <p className="text-gray-300">
                                Once you purchase a pack, you'll instantly receive credits (in minutes) that you can use to schedule interviews.
                                No waiting or approvals needed.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Do minutes expire?</h3>
                            <p className="text-gray-300">
                                No, your purchased minutes do not expire. Use them whenever you need — total flexibility, no pressure.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Can I get a refund if I don’t use all my minutes?</h3>
                            <p className="text-gray-300">
                                We currently do not offer refunds for unused minutes. However, your minutes never expire and can be used any time.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Is there a limit on session length?</h3>
                            <p className="text-gray-300">
                                Each pack includes a maximum session duration. You can’t exceed this per session, but you can always split longer
                                interviews into multiple sessions.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Do I need a subscription?</h3>
                            <p className="text-gray-300">
                                Nope! We operate on a pay-as-you-go model. Just buy the pack that suits your needs—no recurring billing or surprise charges.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Is support included with my purchase?</h3>
                            <p className="text-gray-300">
                                Absolutely. All customers receive email and chat support. For Enterprise Pack users, we offer priority support with a dedicated contact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutWrapper>
    )
}

export default FaqSection
