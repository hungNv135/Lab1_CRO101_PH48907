const players = [
    { name: 'Messi', goals: 30 },
    undefined,
    { name: 'Ronaldo', goals: 28 },
    { name: 'Neymar', goals: 22 },
    { goals: 2 },
    { name: 'Mbappé', goals: 25 },
    { name: 'Pele', goals: null },
  ];
  
  // Hàm kiểm tra cầu thủ có hợp lệ không
  function isValidPlayer(player) {
    return player?.name && typeof player.goals === 'number' && player.goals >= 0;
  }
  
  // Lọc ra danh sách cầu thủ hợp lệ
  const validPlayers = players.filter(isValidPlayer);
  
  // Tìm cầu thủ ghi nhiều bàn thắng nhất
  let topScorer = null;
  if (validPlayers.length > 0) {
    topScorer = validPlayers.reduce((max, player) =>
      player.goals > max.goals ? player : max
    );
  }
  
  // Kết quả
  console.log('Danh sách cầu thủ hợp lệ:', validPlayers);
  console.log('Cầu thủ ghi nhiều bàn thắng nhất:', topScorer);
  