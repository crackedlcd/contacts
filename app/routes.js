var Contact = require('./models/todo');

module.exports = function(app, router) {

  router.route('/api/contacts')

    // GET /api/contacts
    .get(function(req, res){
      Contact.find(function(err, contacts) {
        if(err)
          res.send(err);
        res.json(contacts)
      });
    })

    // POST /api/contacts
    .post(function(req, res) {
      var contact = new Contact();
      contact.firstName = req.body.firstName;
      contact.lastName = req.body.lastName;
      contact.email = req.body.email;
      contact.phone = req.body.phone;

      contact.save(function(err) {
        if (err)
          res.send(err)
        res.json({
          message: 'Contact created!'
        });

      });
    });

  router.route('/api/contacts/:contact_id')
    .get(function(req, res) {
      Contact.findById(req.params.contact_id, function(err, contact) {
        if (err)
          res.send(err);
        res.json(todo);
      });
    });
}