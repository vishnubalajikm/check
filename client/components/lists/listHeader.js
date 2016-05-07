BlazeComponent.extendComponent({
  editTitle(evt) {
    evt.preventDefault();
    const newTitle = this.childComponents('inlinedForm')[0].getValue().trim();
    const list = this.currentData();
    if (newTitle) {
      list.rename(newTitle.trim());
    }
  },

  isWatching() {
    const list = this.currentData();
    return list.findWatcher(Meteor.userId());
  },

  events() {
    return [{
        'click .js-open-list-menu': Popup.open('listAction'),
        submit: this.editTitle,
      },
      {
        'click .js-min-list'(evt) {
          $(evt.currentTarget).addClass('hide');
          $(evt.currentTarget).siblings('.js-max-list').removeClass('hide');
          $(evt.currentTarget).parents('.list').addClass('min')
        }
      },
      {
        'click .js-max-list'(evt) {
          $(evt.currentTarget).addClass('hide');
          $(evt.currentTarget).siblings('.js-min-list').removeClass('hide');
          $(evt.currentTarget).parents('.list').removeClass('min')
        }
      }
    ];
  },
}).register('listHeader');

Template.listActionPopup.helpers({
  isWatching() {
    return this.findWatcher(Meteor.userId());
  },
});

Template.listActionPopup.events({
  'click .js-add-card'() {
    const listDom = document.getElementById(`js-list-${this._id}`);
    const listComponent = BlazeComponent.getComponentForElement(listDom);
    listComponent.openForm({ position: 'top' });
    Popup.close();
  },
  'click .js-list-subscribe'() {},
  'click .js-select-cards'() {
    const cardIds = this.allCards().map((card) => card._id);
    MultiSelection.add(cardIds);
    Popup.close();
  },
  'click .js-toggle-watch-list'() {
    const currentList = this;
    const level = currentList.findWatcher(Meteor.userId()) ? null : 'watching';
    Meteor.call('watch', 'list', currentList._id, level, (err, ret) => {
      if (!err && ret) Popup.close();
    });
  },
  'click .js-close-list'(evt) {
    evt.preventDefault();
    this.archive();
    Popup.close();
  },
});
