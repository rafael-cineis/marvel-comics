import { createSelector } from 'reselect'
import { initialState } from './reducer'

export const selectComicsListPageDomain = state => state.comicsListPage || initialState

export const selectComicsListState = createSelector(
  selectComicsListPageDomain,
  substate => substate.comicsList
)

export const makeSelectComicsListResult = createSelector(
  selectComicsListState,
  comicsList => comicsList.result
)

export const makeSelectComicsListIsLoading = createSelector(
  selectComicsListState,
  comicsList => comicsList.isLoading
)

// Found comic with provided ID from the comic list loaded
export const makeSelectComicDetailsFromList = id => createSelector(
  makeSelectComicsListResult,
  comicsList => comicsList.find(comic => comic.id === parseInt(id, 10)) || {}
)

export const makeSelectComicsListPaginationOptions = createSelector(
  selectComicsListState,
  comicsList => comicsList.paginationOptions
)

export const selectCharactersListState = createSelector(
  selectComicsListPageDomain,
  substate => substate.charactersList
)

export const makeSelectCharactersListCriteria = createSelector(
  selectCharactersListState,
  charactersList => charactersList.criteria
)

export const makeSelectCharactersListResults = createSelector(
  selectCharactersListState,
  charactersList => charactersList.results
)
