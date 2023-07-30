import { Inter } from "next/font/google";
import FormContainer from "./components/FormContainer";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Qwicopy",
  description: "Ai generated copywriting for your business",
};

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-screen flex flex-col">
      <div className="relative flex flex-grow flex-col">
        {/* <nav></nav> */}
        <main className="flex-1 mx-auto">
          <FormContainer />
        </main>
      </div>
    </div>
  );
}
