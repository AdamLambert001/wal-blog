export default function BlogPage({ params }) {
  return (
    <div>
      <header>Hello! {params.slug}</header>
    </div>
  )
}
