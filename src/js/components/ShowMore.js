export class ShowMore {

  constructor (newJobsCardList) {
    this.newJobsCardList = newJobsCardList;
  }
    
  showMore() {
    const searchResObj = JSON.parse(localStorage.getItem('resArr'));
    const startValue = localStorage.getItem('start');
    const endValue = localStorage.getItem('end');

    if (endValue >= searchResObj.length) {
        document.querySelector('.show-more-button').style.display = 'none';
    }

    const newSearchResObj = searchResObj.slice(startValue, endValue);

    this.newJobsCardList.addCard(newSearchResObj);

    localStorage.setItem('start', JSON.parse(localStorage.getItem('start')) + 3);
    localStorage.setItem('end', JSON.parse(localStorage.getItem('end')) + 3);
  }

}