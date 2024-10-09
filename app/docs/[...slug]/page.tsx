import { docs } from "#site/content";
import { MDXContent } from "@/components/mdx-components";

import "@/styles/mdx.css";
interface DocsPageProps {
  params: {
    slug: string[];
  };
}

async function getDocsFromParams(params: DocsPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const doc = docs.find((doc) => doc.slugAsParams === slug);

  return doc;
}

export async function generateStaticParams(): Promise<
  DocsPageProps["params"][]
> {
  return docs.map((doc) => ({ slug: doc.slugAsParams.split("/") }));
}

export default async function DocsPage({ params }: DocsPageProps) {
  const doc = await getDocsFromParams(params);
  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      {doc && (
        <>
          <h1 className="mb-2">{doc.title}</h1>
          {doc.description ? (
            <p className="text-xl mt-0 text-muted-foreground">{doc.description}</p>
          ) : null}
        </>
      )}
      <hr className="my-4" />
      {doc && <MDXContent code={doc.body} />}
    </article>
  );
}
