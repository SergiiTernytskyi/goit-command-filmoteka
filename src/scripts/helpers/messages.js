import Notiflix from 'notiflix';
import { Report } from 'notiflix/build/notiflix-report-aio';

export function showWarningMessage() {
  return Notiflix.Notify.warning(`Please enter name of the movie`);
}

export function showReportFailture() {
  Report.failure(
    'No Result &#128584',
    'Search result not successful. Enter the correct movie name and ',
    'Okay &#128527'
  );
}
