import useSWR from "swr";
import { fetcherWithInfo, SWRWithInfo } from "~/config/swr-options";
import { DeatilProps, GetShowsParams, IMovie } from "~/types";

export function useTmdbQuery() {
  function useAll(params: GetShowsParams) {
    const { category, id, page, searchQuery, showSimilarShows, type } = params;

    let url = "";
    if (searchQuery) {
      url = `search/${category}?query=${searchQuery}&page=${page}`;
    } else if (showSimilarShows && id) {
      url = `${category}/${id}/similar`;
    } else {
      url = `${category}/${type}?page=${page}`;
    }

    const { data, error, isLoading, mutate } = useSWR<
      SWRWithInfo<{ results: IMovie[] }>
    >(url, fetcherWithInfo, {
      revalidateOnFocus: false,
      refreshInterval: 60000,  // Intervalo de deduplicação de 60 segundos
    });

 
    return { data, error, isLoading, mutate };
  }

  function useOne(category: string, id: number) {
    const { data, error, isLoading, mutate } = useSWR<SWRWithInfo<DeatilProps>>(
      `${category}/${id}?append_to_response=videos,credits`,
      fetcherWithInfo
    );

    return { data, error, isLoading, mutate };
  }

  return {
    useAll,
    useOne,
  };
}

export const getMovies = {
  ...useTmdbQuery(),
};
