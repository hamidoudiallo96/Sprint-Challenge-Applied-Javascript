class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    // this.tabElement;
    this.tabElement = tabElement;
    
    // Get the `data-tab` value from this.tabElement and store it here
    // this.tabData = 
    this.tabData = this.tabElement.dataset.tab;
    console.log(this.tabData);
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    // this.cards = document.querySelectorAll('.card[data-tab = "${this.tabData}"]');
    
   
    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === "all"){
      // If `all` is true, select all cards regardless of their data attribute values
      // this.cards = ;'
      this.cards = document.querySelectorAll('.card');
      console.log(this.cards);
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      // this.cards = ;
      this.cards = document.querySelectorAll(`.card[data-tab ="${this.tabData}"]`);
      console.log(this.cards);
    }


     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    // this.cards = Array.from(this.cards).map();
    this.cards = Array.from(this.cards).map(card => new TabCard(card));

    // Add a click event that invokes this.selectTab
    // this.tabElement.addEventListener();

    this.tabElement.addEventListener('click', () => this.selectTab());
    
  }

  selectTab(){

    // Select all elements with the .tab class on them
    // const tabs = document.querySelectorAll();
    const tabs = document.querySelectorAll('.tab');
    
    // Iterate through the NodeList removing the .active-tab class from each element
    // tabs.forEach()
    tabs.forEach(item => item.classList.remove('active-tab'));

    // this.tabElement.classList.add('active-tab');
    // Select all of the elements with the .card class on them
    // const cards = ;
    const cards = document.querySelectorAll('.card');

    // Iterate through the NodeList setting the display style each one to 'none'
    // cards.forEach()
    cards.forEach(card => card.style.display = "none");
    
    // Add a class of ".active-tab" to this.tabElement
    // this.tabElement;

    this.tabElement.classList.add('active-tab');
    
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
     this.cards.forEach(card => card.selectCard());

  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    // this.cardElement;
    this.cardElement = cardElement;
  
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    // this.cardElement;
    this.cardElement.style.display = "flex";
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
const tabs = document.querySelectorAll(".tab").forEach(tab => new TabLink(tab));