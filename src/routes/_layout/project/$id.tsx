import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/project/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/project/$id"!</div>
}
