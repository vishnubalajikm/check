// Template.cards.events({
//   'click .member': Popup.open('cardMember')
// });

BlazeComponent.extendComponent({
  template() {
    return 'minicard';
  },
  getLabelClass(label) {
  	console.log(label);
  	if(label.length > 0){
  		return label[label.length-1]['color'];
  	}

  	return "";
  },
  getSource(source) {
  	if(source.length == 0){
  		return "envelope";
  	} else {
  		return "twitter";
  	}
  }
}).register('minicard');
