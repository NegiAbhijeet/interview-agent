import { LayoutWrapper } from "@/components/layout-wrapper";

const faqs = [
  {
    question: "What happens after I buy a pack?",
    answer:
      "Once you purchase a pack, you'll instantly receive credits (in minutes) that you can use to schedule interviews. No waiting or approvals needed.",
  },
  {
    question: "Do minutes expire?",
    answer:
      "No, your purchased minutes do not expire. Use them whenever you need — total flexibility, no pressure.",
  },
  {
    question: "Can I get a refund if I don’t use all my minutes?",
    answer:
      "We currently do not offer refunds for unused minutes. However, your minutes never expire and can be used any time.",
  },
  {
    question: "Is there a limit on session length?",
    answer:
      "Each pack includes a maximum session duration. You can’t exceed this per session, but you can always split longer interviews into multiple sessions.",
  },
  {
    question: "Do I need a subscription?",
    answer:
      "Nope! We operate on a pay-as-you-go model. Just buy the pack that suits your needs—no recurring billing or surprise charges.",
  },
  {
    question: "Is support included with my purchase?",
    answer:
      "Absolutely. All customers receive email and chat support. For Enterprise Pack users, we offer priority support with a dedicated contact.",
  },
];

const FaqSection = () => {
  return (
    <LayoutWrapper>
      <section className="w-full">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-4xl text-gray-900/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Got questions? We've got answers about minutes, sessions, refunds, and more.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-black mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-900/80 text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </LayoutWrapper>
  );
};

export default FaqSection;
