import { HomeNavbar } from "@/components/HomeNavbar";
import { HomeCardIntro } from "@/components/HomeCardIntro";
export default function Home() {
  return (
    <>
      <HomeNavbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">USPACE</h1>
        <p className="mt-4 text-lg">Study Space</p>
        <HomeCardIntro />
      </main>
    </>
  );
}
