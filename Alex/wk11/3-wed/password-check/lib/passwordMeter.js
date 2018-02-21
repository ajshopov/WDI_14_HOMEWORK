export default function getStrenght(password) {
  var count = 0

  if (password.match(/[A-Z]/)){
    count++
  }
  if (password.match(/[a-z]/)){
    count++
  }
  if (password.length >= 8) {
    count++
  }
  if (password.match(/\d/)){
    count++
  }
  if (password.match(/\W/)){
    count++
  }
  var feedback = ['enter_pw','weak', 'better', 'even_better', 'more_better', 'best']
  return feedback[count];
}