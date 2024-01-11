const contactController = {
  getContactForm: (req, res) => res.sendFile('contacts.html', { root: './app/views' }),
}