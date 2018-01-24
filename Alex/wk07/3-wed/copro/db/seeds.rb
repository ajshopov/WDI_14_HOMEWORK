
arr1 = ['mistyrose', 'fairy', 'cake', 'candy']
arr2 = ['pudding', 'muffin', 'floss', 'crush']

user = User.new
user.email = 'dt@ga.co'
user.password = 'pudding'
user.save

10.times do
  Project.create(
    title: "#{arr1.sample} #{arr2.sample}",
    user_id: user.id
  )
end