import type { RegisteredRouter, RouteIds } from "@tanstack/react-router"
import { getRouteApi, useNavigate } from "@tanstack/react-router"

export function useFilters<T extends RouteIds<RegisteredRouter["routeTree"]>>(
  routeId: T
) {
  const routeApi = getRouteApi<T>(routeId)
  const navigate = useNavigate()
  const filters = routeApi.useSearch()

  const setFilters = (partialFilters: Partial<typeof filters>) =>
    navigate({
      to: ".",
      search: (prev) => cleanEmptyParams({ ...prev, ...partialFilters }),
    })
  const resetFilters = () =>
    navigate({ to: ".", search: { page: 1, limit: 10 } })

  return { filters, setFilters, resetFilters }
}

export const cleanEmptyParams = <T extends Record<string, unknown>>(
  search: T
) => {
  const newSearch = { ...search }
  Object.keys(newSearch).forEach((key) => {
    const value = newSearch[key]
    if (
      value === undefined ||
      value === "" ||
      (typeof value === "number" && isNaN(value))
    )
      delete newSearch[key]
  })

  if (search.pageIndex === 1) delete newSearch.pageIndex
  if (search.pageSize === 10) delete newSearch.pageSize

  return newSearch
}