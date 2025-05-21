import { HomeNavbar } from "@/components/HomeNavbar";
import { HomeCardIntro } from "@/components/HomeCardIntro";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
export default function Home() {
  return (
    <>
      <HomeNavbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">USPACE</h1>
        <p className="mt-4 text-lg">Study Space</p>
        <HomeCardIntro />
      </main>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
          {/*logo*/}
          <p>
            2025 - USPACE
            <br />
            Vietnam Japan University
            <br />
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <FacebookIcon className="w-6 h-6" />
            <YoutubeIcon className="w-6 h-6" />
            <TwitterIcon className="w-6 h-6" />
          </div>
        </nav>
      </footer>
    </>
  );
}
