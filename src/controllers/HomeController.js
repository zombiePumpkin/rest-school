class HomeController {
  // index
  async index(req, res) {
    res.json('OK');
  }
}

export default new HomeController();
