import "./styles/pages/index.css";
import {JobsApi} from "./js/modules/JobsApi.js";
import {JobsCard} from "./js/components/JobsCard.js";
import {JobsCardlist} from "./js/components/JobsCardlist.js";
import {ShowMore} from "./js/components/ShowMore.js";

const container = document.querySelector('.vacancies');
const showMoreButton = document.querySelector('.show-more-button')

const newJobsApi = new JobsApi();
const newJobsCard = new JobsCard();
const newJobsCardList = new JobsCardlist(container, newJobsCard);
const newShowMore = new ShowMore(newJobsCardList);

newJobsApi.getJobs()
    .then((data) => { 
        newJobsCardList.addCard(data.slice(0, 5));
        localStorage.setItem('resArr', JSON.stringify(data));
        localStorage.setItem('start', 5);
        localStorage.setItem('end', 10);
    })

document.querySelector('.root').addEventListener('click', (event) => {
    if (event.target.classList.contains('vacancies__button')) {
        const button = event.target.closest('.vacancies__button');
        button.textContent === 'more details' ? button.textContent = 'hide' : button.textContent = 'more details';

        const text = event.target.closest('.vacancies__text');
        const textInner = text.querySelector('.vacancies__inner');
        button.textContent === 'more details' ? textInner.classList.remove('vacancies__inner_opened') : textInner.classList.add('vacancies__inner_opened');
    }
});

showMoreButton.addEventListener('click', () => { newShowMore.showMore() });