import Layout from "@/components/layouts/Layout";
import Button from "@/components/common/Button";
import { useRouter } from "next/router";

interface PageRouteProps {
  pageRoute: string;
}

export default function Home() {
  const router = useRouter();
  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <Layout>
      <section className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Splash App</h1>
        <p className="text-gray-600 mb-8">
          This is your modern Next.js project setup 🚀  
          Use the buttons below to explore our mini apps.
        </p>

        <div className="flex gap-6 justify-center">
          <Button
            action={() => routeToNextPage({ pageRoute: "/generate-text-ai" })}
            buttonLabel="Generate Text"
            buttonBackgroundColor="blue"
          />
          <Button
            action={() => routeToNextPage({ pageRoute: "/text-to-image" })}
            buttonLabel="Text to Image"
            buttonBackgroundColor="green"
          />
          <Button
            action={() => routeToNextPage({ pageRoute: "/counter-app" })}
            buttonLabel="Counter App"
            buttonBackgroundColor="orange"
          />
        </div>
      </section>
    </Layout>
  );
}
