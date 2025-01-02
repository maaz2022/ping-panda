import Link from "next/link"
import { MaxWidthWrapper } from "./Max-Width-Wrapper"
import { SignInButton, SignOutButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button";

export const NavBar = () => {
    const user = false;
    return (
        <nav className=" sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-16 items-center justify-between">
                    <Link href='/' className="flex z-40 font-semibold ">
                        Ping<span className="text-brand-700">Panda</span>
                    </Link>
                </div>
                <div className="h-full flex items-center space-x-4">
                    {user ? (
                        <SignOutButton>
                            <Button>
                                Sign Out
                        </Button>
                    </SignOutButton>
                    ) : (
                        null
                    )}
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}