var sortToGroup = function(nameList){

    for (var group = 1; group <= numberOfGroups; group++) {
      output['groupArray' + group] = [];

        for (var ppl = 1; ppl <= numberOfMembers; ppl++){
              var num = Math.floor(Math.random() * names.length);           
              output['groupArray' + group].push(names[num]);
              names.splice(num, 1);   
        }
    //console.log(output['groupArray'+ group]);    
    }
return output;
}


var names = ['Alex','James', 'Robbie', 'Anushka', 'Ross', 'Aysa',
'Joanna Phillips', 'Chang', 'Johanna Schreiner', 'Sheila', 'Emma',
'Karen', 'Sherry', 'Ethan', 'Mark', 'Sophie', 'Fouad', 'Mia',
'Vivien', 'Haofu', 'Wally'];
var output = {};
var numberOfGroups = prompt('How many groups would you like?');


if(names.length % numberOfGroups === 0){
    var numberOfMembers = names.length/numberOfGroups;
    console.log(sortToGroup(names));

} else {
    var numberOfMembers = Math.floor(names.length/numberOfGroups);
    sortToGroup(names);

    //assign remaining people
    for (var i = 1; i <= names.length; i++) {
              var num = Math.floor(Math.random() * names.length);           
              output['groupArray' + i].push(names[num]);
              names.splice(num, 1);  
    }
    console.log(output);
}




