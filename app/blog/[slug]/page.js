export default function generateStaticParams({ params }) {
  return (
    <div>
      <header>Hello! {params.slug}</header>
    </div>
  )
}
