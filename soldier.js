const soldier = {
  name: "Halk",
  live: 10,
  gun: {
    name: "TT",
    bullet: 30,
  },
  supplies: 3,

  fire: function () {
    this.supplies -= 1;
    return "бах - бах";
  },
  reloadmm: function () {
    this.supplies -= 1;
    return "Перезарядка...";
    if (this.supplies === 0) {
      return "Не осталось припасов";
    }
  },

  hurt: function () {
    this.live -= 1;
    if (this.live === 0) {
      return "Ты проиграл";
    }
  },
};
