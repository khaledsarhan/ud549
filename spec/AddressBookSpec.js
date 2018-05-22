describe('describe', function () {
    let addressBook, thisContact;

    beforeEach(function(){
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    it('should be able to add a contact', function () {
        addressBook.addContact(thisContact);
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', function () {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);
        expect(addressBook.getContact(0)).not.toBeDefined();
    });

});

describe('Sync', function () {
    let addressBook, thisContact;

    beforeEach(function(done){
        addressBook = new AddressBook();
        thisContact = new Contact();

        addressBook.getInitialContacts(function(){
            done();
        });
    });

    it('should grab initial contact', function (done) {
        expect(addressBook.initialComplete).toBe(true);
        done();
    });

});