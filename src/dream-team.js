module.exports = function createDreamTeam(members) {
  try { return members.filter(member => typeof(member) === 'string')
               .map(member => member.toUpperCase().trim().slice(0, 1))
               .sort()
               .join('')
    
  } catch (error) {
    return false;
  } 
};


// console.log(createDreamTeam(['Martha', 1111, '       Melissa', 'Henry', 'a   nn', 'Terry', 'Pamela', true, null, NaN]));
// console.log(createDreamTeam(NaN));
// console.log(createDreamTeam(12.5));