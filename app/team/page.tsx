import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactCTA } from "@/components/contact-cta"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Daragh Geraghty",
    title: "Co-Founder & Chief Operating Officer",
    bio: [
      "Building a robust and regulated investment structure that seamlessly bridges traditional finance with digital assets requires deep expertise, strategic foresight, and an unwavering commitment to compliance. As Co-Founder and Chief Operating Officer of dParadigm Capital, Daragh Geraghty embodies these qualities, playing a pivotal role in shaping the firm's vision and execution.",
      "Daragh's leadership has been instrumental in bringing the dParadigm Fund to market, ensuring a seamless blend of institutional-grade security, regulatory compliance, and capital efficiency. His extensive network of elite professional service firms, coupled with his ability to navigate complex financial landscapes, has positioned dParadigm Capital as a premier destination for high-net-worth individuals, family offices, and institutional investors seeking exposure to the digital asset space.",
      "Before co-founding dParadigm, Daragh served as COO at DRG Group Ltd, a private investment fund and multi-family office based in London. There, he played a crucial role in overseeing investment strategies, operational management, and governance frameworks for ultra-high-net-worth families and institutions. His extensive experience in fund structuring and alternative investments continues to drive dParadigm's mission to deliver a secure, scalable, and high-performing investment platform in the evolving digital economy.",
    ],
    linkedin: "https://www.linkedin.com/in/daragh-geraghty-b4151629/",
    image: "/images/daragh.jpg",
  },
  {
    name: "Tommie Toomey",
    title: "Board of Director",
    bio: [
      "Tommie serves as a Board Director at dParadigm Capital, bringing a wealth of expertise in financial services compliance, AML, and governance. With a distinguished career spanning global financial institutions and digital asset firms, he has developed a deep understanding of regulatory frameworks, risk management, and investor protection in both traditional finance and the evolving digital economy.",
      "His extensive experience in global compliance, investor onboarding, and risk mitigation makes him a key contributor to dParadigm's commitment to building a secure and institutionally robust investment framework. Tommie's leadership in AML, counter-terrorist financing, and customer due diligence has shaped regulatory strategies at some of the world's leading financial entities, reinforcing his ability to navigate complex compliance landscapes with precision.",
      "As dParadigm expands its presence in digital securities, DeFi, and tokenized assets, Tommie's strategic insights will be invaluable in ensuring regulatory excellence, operational resilience, and investor confidence in an increasingly sophisticated financial ecosystem.",
    ],
    linkedin: "https://www.linkedin.com/in/tommietoomey/",
    image: "/images/tommie.jpg",
  },
  {
    name: "Darragh Cuffe",
    title: "Head of Business Development",
    bio: [
      "Driving strategic growth, forging institutional partnerships, and spearheading capital formation—these are the pillars of Darragh Cuffe's role as Head of Business Development at dParadigm Capital. With a deep expertise in digital assets, hedge fund structures, and blockchain technologies, Darragh plays a critical role in expanding the firm's investor network and positioning dParadigm at the forefront of the evolving crypto investment landscape.",
      "His extensive experience spans exchange operations, over-the-counter (OTC) markets, and capital raising within the digital asset sector. Over the years, Darragh has successfully cultivated relationships with institutional investors, family offices, and high-net-worth individuals, facilitating large-scale capital raises and fostering long-term strategic partnerships.",
      "Darragh's ability to bridge the gap between traditional financial markets and the rapidly evolving decentralized ecosystem makes him a key driving force behind dParadigm's continued growth. His strategic vision ensures that the firm remains agile, well-connected, and ahead of the curve in an increasingly competitive digital asset investment space.",
    ],
    linkedin: "https://www.linkedin.com/in/darragh-cuffe-356b54b2/",
    image: "/images/darragh.jpg",
  },
  {
    name: "Mr Crypto",
    title: "Chief Investment Officer",
    bio: [
      "As Chief Investment Officer at dParadigm Capital, the CIO leads the firm's trading strategies, market-making operations, and execution infrastructure, ensuring dParadigm remains at the forefront of high-frequency and algorithmic trading in digital assets. With over three decades of trading expertise, he has honed his skills in ultra-low latency trading, statistical arbitrage, and liquidity optimization, playing a key role in shaping the firm's approach to navigating both traditional and crypto markets.",
      "With a career spanning global investment banks, hedge funds, and proprietary trading firms, the CIO has developed and implemented advanced quantitative trading strategies across equities, FX, futures, and digital assets. His deep experience in algorithmic execution, risk management, and derivatives trading has been instrumental in optimizing capital efficiency and maximizing returns in volatile markets.",
      "Prior to joining dParadigm, the CIO held leadership positions in top-tier financial institutions and fintech ventures, where he built and scaled high-frequency trading operations, pioneered AI-driven market-making strategies, and led the development of automated trading infrastructures. His ability to bridge traditional financial expertise with cutting-edge digital asset innovation makes him a vital asset to dParadigm's growth and trading success.",
      "At dParadigm, the CIO continues to drive innovation in trading execution, liquidity provision, and quantitative strategy development, ensuring the firm remains agile, data-driven, and strategically positioned to capture opportunities in the ever-evolving landscape of digital asset markets.",
    ],
    linkedin: true,
    image: "/images/silhouette-headshot.png",
  },
  {
    name: "Dr DeFi",
    title: "Global Head of DeFi Trading",
    bio: [
      "As Head of DeFi Trading at dParadigm Capital, he leads the firm's decentralized finance (DeFi) trading strategies, liquidity provisioning, and execution infrastructure, ensuring the firm remains at the cutting edge of algorithmic and quantitative trading in blockchain-based markets. With nearly a decade of expertise in quantitative trading, market-making, and digital asset infrastructure, he plays a key role in driving dParadigm's DeFi initiatives and optimizing its on-chain trading operations.",
      "With a career spanning proprietary trading firms, blockchain infrastructure providers, and institutional trading desks, he has built and managed sophisticated trading portfolios specializing in market-making, delta-neutral strategies, and algorithmic execution. His deep experience in developing advanced proprietary trading systems which allows him to integrate quantitative research with real-time trading algorithms, ensuring seamless execution across decentralized exchanges (DEXs) and liquidity pools.",
      "Prior to joining dParadigm, he held leadership positions in trading technology and quantitative research, where he spearheaded the development of algorithmic trading platforms, managed full trading technology stacks, and optimized infrastructure for blockchain node operations. His expertise in DeFi protocols, smart contract execution, and on-chain liquidity management positions him as a critical asset in dParadigm's expansion into decentralized markets.",
      "At dParadigm, he continues to drive innovation in automated market-making, DeFi yield strategies, and blockchain-based trading infrastructure, ensuring the firm remains a leader in the rapidly evolving landscape of decentralized asset management and trading.",
    ],
    linkedin: false,
    image: "/images/silhouette-headshot.png",
  },
  {
    name: "Chief Financial Officer",
    title: "CFO",
    bio: [
      "As Chief Financial Officer at dParadigm Capital, he oversees the firm's financial strategy, capital allocation, and risk management framework, ensuring sustainable growth and operational excellence. With over two decades of experience in corporate banking, structured finance, and investment management, he brings a deep understanding of financial markets, capital structuring, and regulatory compliance to the firm.",
      "Before joining dParadigm, he held leadership roles at major financial institutions, including director-level positions in corporate banking, climate capital investment, and property finance. His expertise in managing large-scale financial portfolios, optimizing capital efficiency, and structuring complex financial instruments has been instrumental in driving long-term value for institutional and high-net-worth investors.",
      "His background in both traditional banking and alternative investments positions him as a key strategic leader in dParadigm's mission to bridge institutional finance with the digital asset space. With a strong focus on financial governance, risk mitigation, and liquidity management, he ensures that dParadigm remains financially resilient and strategically positioned to capitalize on emerging opportunities in blockchain-based finance.",
    ],
    linkedin: false,
    image: "/images/silhouette-headshot.png",
  },
]

export default function Team() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg-cover-image.jpg"
            alt="Digital background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              Meet the Team
            </h1>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="bg-black/80 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Team</h2>
            <div className="space-y-4 text-lg leading-8 text-gray-300">
              <p>
                At dParadigm Capital, our team is composed of industry-leading professionals with deep expertise in
                trading, quantitative research, digital asset markets, and regulatory compliance. With backgrounds
                spanning top-tier financial institutions, hedge funds, proprietary trading firms, and blockchain
                ventures, our leadership brings a wealth of experience in both traditional finance (TradFi) and
                decentralized finance (DeFi).
              </p>
              <p>
                United by a shared vision of bridging institutional investment standards with the dynamic opportunities
                in digital assets, our team drives dParadigm's success through cutting-edge technology, strategic market
                insights, and a commitment to risk-managed, high-performance trading and investment strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Team Members</h2>

          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative mb-4 h-64 w-64 overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-cover ${member.image.includes("silhouette") ? "" : "grayscale"}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-blue-400">{member.title}</p>
                  {member.linkedin && (
                    <Link
                      href={typeof member.linkedin === "string" ? member.linkedin : "#"}
                      className="mt-2 inline-flex text-gray-400 transition hover:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  )}
                </div>
                <div className="md:col-span-2 space-y-4">
                  {member.bio.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />

      <Footer />
    </div>
  )
}

