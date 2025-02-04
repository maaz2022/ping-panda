import { Heading } from "@/components/Heading"
import { MaxWidthWrapper } from "@/components/Max-Width-Wrapper"
import { Check } from "lucide-react"
import { ShinyButton } from "@/components/Shiny-Button"
import { MockDiscordUI } from "@/components/Mock_discord_ui"
import { AnimatedList } from "@/components/ui/animated-list"
import { DiscordMessage } from "@/components/discord-message"
import Image from "next/image"
const Page = () => {
  return (
    <>
    <section className="relative py-24 sm:py-32 bg-brand-25">
      <MaxWidthWrapper className="text-center">
        <div className="relative mx-auto text-center flex flex-col items-center gap-10">
          <div>
              <Heading >
                <span>Real-Time SaaS Insights,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">Deliverd To Your Discord</span>
              </Heading>
          </div>
          <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
            PingPanda is the easiest way to monitor your SaaS. Get instant Notifications for {" "}
            <span className="font-semibold text-gray-700">sales, new users, or any other event</span>{" "}
            sent directly to your Discord
          </p>
          <ul className="text-base/7 space-y-2 text-gray-600 text-left flex flex-col items-start">
              {[
                "Real-Time discord alerts for critical events",
                "Buy once, use forever",
                "Track sales, new users, or any other events"
              ].map((item, index) => (
                  <li key={index} className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-brand-700"/>
                    {item}
                    </li>
              ))}
          </ul>
          <div className="w-full max-w-80">
              <ShinyButton href="/sign-up" className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">Start For Free Today</ShinyButton>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
    <section className="bg-brand-25 relative pb-4">
               <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700" />
               <div className="relative mx-auto">
                  <MaxWidthWrapper className="relative">
                    <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                      <MockDiscordUI>
                        <AnimatedList>
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="PingPanda Avatar"
                    username="PingPanda"
                    timestamp="Today at 12:35PM"
                    badgeText="SignUp"
                    badgeColor="#43b581"
                    title="👤 New user signed up"
                    content={{
                      name: "Muhammad Maaz",
                      email: "muhammadmaaz@email.com",
                    }}
                  />

                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="PingPanda Avatar"
                    username="PingPanda"
                    timestamp="Today at 12:35PM"
                    badgeText="Revenue"
                    badgeColor="#faa61a"
                    title="💰 Payment received"
                    content={{
                      amount: "$49.00",
                      email: "muhammadmaaz@email.com",
                      plan: "PRO",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="PingPanda Avatar"
                    username="PingPanda"
                    timestamp="Today at 5:11AM"
                    badgeText="Milestone"
                    badgeColor="#5865f2"
                    title="🚀 Revenue Milestone Achieved"
                    content={{
                      recurringRevenue: "$5.000 USD",
                      growth: "+8.2%",
                    }}
                  />
                </AnimatedList>
                      </MockDiscordUI>
                    </div>
                  </MaxWidthWrapper>
               </div> 
    </section>
    <section className="bg-brand-25 relative py-24 sm:py-32">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
        <div className="relative mx-auto text-center flex flex-col items-center gap-10">
          <div>
            <h2 className=" text-center text-base/7 font-semibold text-brand-600">
              Inituative Monitoring
            </h2>
            <Heading> 
              Stay Ahead with Real-Time Insights
            </Heading>
          </div>
          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2 ">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                    <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                      <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                        Real-Time Notifications
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Get instant notifications for critical events, such as new users, payments, and more..
                      </p>
                    </div>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <Image
                      className="size-full object-cover object-top"
                      src="/phone-screen.png"
                      alt="PingPanda Dashboard Preview"
                      fill
                    />
                    </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
    <section></section>
    <section></section>
  </>
  )
 }
export default Page