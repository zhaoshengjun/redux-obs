import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";
import { LOAD_STORIES, clearStories } from "../actions";

function loadStoriesEpic(actionStream) {
  return actionStream
    .ofType(LOAD_STORIES)
    .switchMap(() => Observable.of(clearStories()).delay(2000));
}

export const rootEpic = combineEpics(loadStoriesEpic);
