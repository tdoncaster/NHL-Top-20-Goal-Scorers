module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.bulkInsert('topscorers', [
      { name: 'Wayne Gretzky', position: 'C', gamesplayed: '1487', goals: '1487' },
      { name: 'Gordie Howe', position: 'RW', gamesplayed: '1767', goals: '801' },
      { name: 'Jaomir Jagr', position: 'RW', gamesplayed: '1733', goals: '766' },
      { name: 'Brett Hull', position: 'RW', gamesplayed: '1269', goals: '741' },
      { name: 'Marcel Dionne', position: 'C', gamesplayed: '1348', goals: '731' },
      { name: 'Phil Esposito', position: 'C', gamesplayed: '1282', goals: '717' },
      { name: 'Mike Gartner', position: 'RW', gamesplayed: '1432', goals: '708' },
      { name: 'Alex Ovechkin', position: 'LW', gamesplayed: '1152', goals: '706' },
      { name: 'Mark Messier', position: 'C', gamesplayed: '1756', goals: '694' },
      { name: 'Steve Yzerman', position: 'C', gamesplayed: '1756', goals: '694' },
      { name: 'Mario Lemieux', position: 'C', gamesplayed: '915', goals: '690' },
      { name: 'Teemu Selanne', position: 'RW', gamesplayed: '1451', goals: '684' },
      { name: 'Luc Robitaille', position: 'LW', gamesplayed: '1431', goals: '668' },
      { name: 'Brendan Shanahan', position: 'C', gamesplayed: '1524', goals: '656' },
      { name: 'Dave Andrechuck', position: 'LW', gamesplayed: '1639', goals: '640' },
      { name: 'Joe Sakic', position: 'C', gamesplayed: '1378', goals: '625' },
      { name: 'Jerome Iginla', position: 'C', gamesplayed: '1554', goals: '625' },
      { name: 'Bobby Hull', position: 'LW', gamesplayed: '1063', goals: '610' },
      { name: 'Dino Ciccarelli', position: 'RW', gamesplayed: '1232', goals: '608' },
      { name: 'Jari Kurri', position: 'RW', gamesplayed: '1251', goals: '601' },

    ])
  },

  down: async queryInterface => queryInterface.bulkDelete('topscorers'),
}
