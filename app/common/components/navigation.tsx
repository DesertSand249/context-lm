import { Link } from "react-router";
import { Separator } from "./ui/separator";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { Button } from "./ui/button";

const menus = [
    {
        name: "전체",
        to: "/",
    },
    {
        name: "프롬프트",
        to: "/prompts",
    },
    {
        name: "컨텍스트",
        to: "/contexts",
    },
    {
        name: "커뮤니티",
        to: "/community",
    },
]

export default function Navigation ({isLoggedIn}: {isLoggedIn: boolean}) {
    return (
        <nav className="flex px-20 h-16 items-center justify-between fixed top-0 left-0 right-0 z-50 bg-primary/90 text-primary-foreground">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                    <Link to="/" className="font-bold tracking-tighter text-2xl text-primary-foreground">
                        <span>ContextLM</span>
                    </Link>
                    <Separator orientation="vertical" className="h-6 mx-4" />
                    <NavigationMenu>
                        <NavigationMenuList className="gap-3">
                            {menus.map((menu) => (
                                <NavigationMenuItem key={menu.name}>
                                    <NavigationMenuLink className="tracking-tighter text-base text-primary-foreground cursor-pointer">
                                        {menu.name}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                {isLoggedIn ? <div></div> : (
                    <div className="flex items-center gap-4">
                        <Button variant="destructive">로그인</Button>
                        <Button variant="secondary">회원가입</Button>
                    </div>
                )}
            </div>
        </nav>
    );
};