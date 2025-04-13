// /app/blog/[slug]/page.js

export async function generateStaticParams() {
  // Define all slugs you want to statically generate
  const slugs = ['my-first-post', 'hello-world']; // Example slugs

  return slugs.map((slug) => ({
    slug,
  }));
}

export default function BlogPage({ params }) {
  return (
    <div>
      <header>Hello! {params.slug}</header>
    </div>
  );
}