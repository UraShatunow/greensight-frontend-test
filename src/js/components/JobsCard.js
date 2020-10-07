export class JobsCard {

    createCard (company, companyLogo, type, url, location, title, description) {
      const card = document.createElement('div');
      card.classList.add('vacancies__item');
      if (companyLogo === null) { companyLogo = 'https://www.upsbs.org.ua/images/uploads/015e96e6a653950ded808f5704c0727f.jpg' };
      card.innerHTML = `
        <div class="vacancies__info">
          <img src="${companyLogo}" alt="Company logo">
          <p><span>Form: </span>${type}</p>
          <p><span>Company: </span>${company}</p>
          <p><span>Web: </span><a class="class=vacancies__info_link" href="${url}" target="_blank">${url}</a></p>
          <p><span>Address:  </span>${location}</p>
        </div>
        <div class="vacancies__text">
          <div class="vacancies__inner">
            <h3 class="vacancies__heading">${title}</h3>
            <div class="vacancies__inner-text">${description}</div>
          </div>
          <button class="vacancies__button">more details</button>
        </div> `

      return card;
    }

}