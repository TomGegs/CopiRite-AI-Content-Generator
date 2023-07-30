import FormContainer from "./components/FormContainer";

export const metadata = {
    title: "Copi.Rite",
    description: "A.I. generated marketing copy for your product or service.",
};

export default function Home() {
    return (
        <div className="min-h-[100dvh] w-screen flex flex-col">
            <div className="relative flex flex-grow flex-col">
                <main className="flex-1 mx-auto">
                    <FormContainer />
                </main>
            </div>
        </div>
    );
}
