export class JobsCardlist {

  constructor (container, newCard) {
    this.container = container;
    this.newCard = newCard;
  }
    
  addCard (cardArr) {
    cardArr.forEach((item) => {
        const jobsCard = this.newCard.createCard(item.company, 
                                                 item.company_logo,
                                                 item.type,
                                                 item.url,
                                                 item.location,
                                                 item.title,
                                                 item.description);
        
        this.container.appendChild(jobsCard);
    });
  }

}