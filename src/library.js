import './scripts/modalFilms';
import './scripts/team-modal';
import './scripts/switchTheme';

import { paginationHide } from './scripts/helpers/hide-pagination';
import { loadWatchedFilms, setupLIbraryBtns } from './scripts/mylibrary';

loadWatchedFilms();

setupLIbraryBtns();

// paginationHide();
