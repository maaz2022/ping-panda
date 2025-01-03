import { Button, buttonVariants } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { MaxWidthWrapper } from "./Max-Width-Wrapper";
import { ArrowRightIcon } from "lucide-react";

export const NavBar = () => {
    const user = false;
    return (
        <nav className=" sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
            <MaxWidthWrapper className="flex h-16 items-center justify-between">
                <div className="flex h-16 items-center justify-between">
                    <Link href='/' className="flex z-40 font-semibold ">
                        Ping<span className="text-brand-700">Panda</span>
                    </Link>
                </div>
                <div className="h-full flex items-center space-x-4">
                    {user ? (
                        <>
                            <SignOutButton>
                            <Button size={"sm"} variant={"ghost"}>
                                Sign Out
                        </Button>
                    </SignOutButton>
                    <Link href="/dashboard">
                        <Button  className={buttonVariants({
                            size: "sm",
                            className: "flex items-center gap-1"
                        })}>
                            Dashboard <ArrowRightIcon className="ml-1.5 size-4"/>
                        </Button>
                    </Link>
                        </>
                    ) : (
                        <>
                        <Link href="/pricing" className={buttonVariants({
                            size: "sm",
                          variant: "ghost"
                        })}>
                            Get PingPanda 
                       
                    </Link>
                    <Link href="/sign-in" className={buttonVariants({
                        size: "sm",
                        variant: "ghost"
                    })}>
                            Sign In 
                    </Link>
                    <div  className="h-8 w-px bg-gray-200"/>
                    <Link href="/sign-up">
                        <Button  className={buttonVariants({
                            size: "sm",
                            className: "flex items-center gap-1"
                        })}>
                            Sign Up <ArrowRightIcon className="ml-1.5 size-4"/>
                        </Button>
                    </Link>
                    </>
                )}
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}